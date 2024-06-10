// api/controllers/HomepageController.js

module.exports = {
  // Function to show the overview page
  overview: async function(req, res) {
    sails.log.debug('Chamando overview');
    if (!req.session.userId) {
      sails.log.debug('Usuário não logado, redirecionando para /login');
      return res.redirect('/login');
    }
    try {
      // Fetch the user based on session userId
      const user = await User.findOne({ id: req.session.userId });
      if (!user) {
        sails.log.debug('Usuário não encontrado, redirecionando para /login');
        return res.redirect('/login');
      }

      sails.log.debug(`Usuário encontrado: ${user.name}`);

      const teamMembership = await Student_team.findOne({ id_user: user.id });
      let averageHappiness = null;

      if (teamMembership) {
        sails.log.debug('Membro de equipe encontrado');
        const teamMembers = await Student_team.find({ id_team: teamMembership.id_team }).populate('id_user');
        const totalHappiness = teamMembers.reduce((total, member) => total + member.id_user.happiness, 0);
        averageHappiness = totalHappiness / teamMembers.length;
        sails.log.debug(`Felicidade média calculada: ${averageHappiness}`);
      } else {
        sails.log.debug('Nenhuma equipe encontrada');
      }

      const tasks = await Task.find(); // Buscar todas as tarefas
      sails.log.debug(`Número de tarefas encontradas: ${tasks.length}`);
      return res.view('pages/homepage', { user, averageHappiness, tasks });
    } catch (error) {
      sails.log.error('Erro na ação overview:', error);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  },

  // Function to create a new task
  createTask: async function (req, res) {
    sails.log.debug('Chamando createTask');
    try {
      const { name, description } = req.body;
      // Create a new task and associate it with the logged-in user
      const task = await Task.create({ name, description, completed: false, id_user: req.session.userId }).fetch();
      sails.log.debug(`Tarefa criada: ${task.name}`);
      return res.json(task);
    } catch (error) {
      sails.log.error('Erro na ação createTask:', error);
      return res.status(500).json({ error: 'Failed to create task' });
    }
  },

  fetchTasks: async function (req, res) {
    sails.log.debug('Chamando fetchTasks');
    try {
      // Fetch all tasks from the database
      const tasks = await Task.find();
      sails.log.debug(`Número de tarefas encontradas: ${tasks.length}`);
      return res.json(tasks);
    } catch (error) {
      sails.log.error('Erro na ação fetchTasks:', error);
      return res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  },

  deleteTask: async function (req, res) {
    sails.log.debug('Chamando deleteTask');
    try {
      const { id } = req.params;
      await Task.destroy({ id });
      sails.log.debug(`Tarefa deletada: ${id}`);
      return res.ok();
    } catch (error) {
      sails.log.error('Erro na ação deleteTask:', error);
      return res.status(500).json({ error: 'Failed to delete task' });
    }
  },

  updateTask: async function (req, res) {
    sails.log.debug('Chamando updateTask');
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const task = await Task.updateOne({ id }).set({ name, description });
      if (!task) {
        sails.log.debug(`Tarefa não encontrada: ${id}`);
        return res.status(404).json({ error: 'Task not found' });
      }
      sails.log.debug(`Tarefa atualizada: ${task.name}`);
      return res.json(task);
    } catch (error) {
      sails.log.error('Erro na ação updateTask:', error);
      return res.status(500).json({ error: 'Failed to update task' });
    }
  },
};

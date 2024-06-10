// api/controllers/HomepageController.js

module.exports = {
  // Function to show the overview page
  overview: async function(req, res) {
    // Check if the user is logged in
    if (!req.session.userId) {
      return res.redirect('/login'); 
    }
    try {
      // Fetch the user based on session userId
      const user = await User.findOne({ id: req.session.userId });
      if (!user) {
        return res.redirect('/login'); // Redirect to login if user not found
      }

      // Fetch the team membership of the user
      const teamMembership = await Student_team.findOne({ id_user: user.id });
      let averageHappiness = null;

      if (teamMembership) {
        // Fetch all team members and calculate the average happiness
        const teamMembers = await Student_team.find({ id_team: teamMembership.id_team }).populate('id_user');
        const totalHappiness = teamMembers.reduce((total, member) => total + member.id_user.happiness, 0);
        averageHappiness = totalHappiness / teamMembers.length;
      }
      const tasks = await Task.find();
      return res.view('pages/homepage', { user, averageHappiness, tasks });
    } catch (error) {
      sails.log.error(error);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  },

  // Function to create a new task
  createTask: async function (req, res) {
    try {
      const { name, description } = req.body;
      // Create a new task and associate it with the logged-in user
      const task = await Task.create({ name, description, completed: false, id_user: req.session.userId }).fetch();
      return res.json(task);
    } catch (error) {
      sails.log.error(error);
      return res.status(500).json({ error: 'Failed to create task' });
    }
  },

  // Function to fetch all tasks
  fetchTasks: async function (req, res) {
    try {
      // Fetch all tasks from the database
      const tasks = await Task.find();
      return res.json(tasks);
    } catch (error) {
      sails.log.error(error);
      return res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  },

  // Function to delete a task
  deleteTask: async function (req, res) {
    try {
      const { id } = req.params;
      await Task.destroy({ id });
      return res.ok();
    } catch (error) {
      sails.log.error(error);
      return res.status(500).json({ error: 'Failed to delete task' });
    }
  },

  // Function to update a task
  updateTask: async function (req, res) {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const task = await Task.updateOne({ id }).set({ name, description });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      return res.json(task);
    } catch (error) {
      sails.log.error(error);
      return res.status(500).json({ error: 'Failed to update task' });
    }
  },
};

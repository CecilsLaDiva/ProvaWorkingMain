module.exports.bootstrap = async function() {
  const bcrypt = require('bcrypt');

  try {
    // Create a group if not exists
    let group = await Team.findOne({ universe: 1 }); // Ajuste a condição conforme necessário
    if (!group) {
      group = await Team.create({
        color: 'blue',
        universe: 1,
        happiness: 0 // Inicialmente zero, será atualizado depois
      }).fetch();
    }

    const users = [
      {
        firstname: 'Marlos',
        lastname: 'Guedes',
        email: 'marloscguedes@gmail.com',
        password: '123',
        type: 1,
        happiness: 4,
      },
      {
        firstname: 'Andre',
        lastname: 'Dleizer',
        email: 'andredleizer@gmail.com',
        password: '123',
        type: 1,
        happiness: 2,
      },
    ];

    const saltRounds = 10;

    for (const user of users) {
      const existingUser = await User.findOne({
        email: user.email,
      });
      let newUser;
      if (!existingUser) {
        newUser = await User.create({
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          password: await bcrypt.hash(user.password, saltRounds),
          type: user.type,
          happiness: user.happiness,
        }).fetch();
        
        // Add the new user to the group
        await Student_team.create({
          id_user: newUser.id,
          id_team: group.id
        });
      }
    }

    sails.log.info('Bootstrap completed');
  } catch (error) {
    sails.log.error('Error Bootstrap', error);
  }
};

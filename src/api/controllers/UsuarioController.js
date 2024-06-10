const bcrypt = require('bcrypt');

module.exports = {
  showUserForm: function (req, res) {
    return res.view('pages/signup', { layout: false }); // Rendering the signup form without layout
  },

  create: async function (req, res) {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

      let formattedUserData = {

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword, // Using the hashed password here
        university: req.body.university,
        nationality: req.body.nationality,
        age: req.body.age
      };

      const newUser = await User.create(formattedUserData).fetch(); // Creating a new user with formatted data
      req.session.userId = newUser.id; // Setting the userId in the session
      req.session.user = {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        university: newUser.university,
        country: newUser.country,
        age: newUser.age,
        photo: newUser.photo
      };
      res.redirect('/login'); // Responding with the newly created user data

    } catch (err) {
      console.error('Error creating user:', err); // Logging any error that occurs during user creation
      res.status(500).json({ error: 'Error creating user' }); // Responding with an error message if user creation fails
    }
  },

  showProfile: function (req, res) {
    if (!req.session.userId) {
      return res.redirect('/login'); // Redirect to login if user is not authenticated
    }

    const user = req.session.user;
    return res.view('pages/profile', { 
      layout: false, 
      user: user 
    }); // Rendering the profile view with user data
  },

  upload: async function (req, res) {
    try {
      const url = await sails.helpers.upload(req, 'profile_photo');
      const userId = req.session.userId;
      if (!userId) {
        return res.status(401).json({ error: 'User not authenticated' });
      }

      const updatedUser = await User.updateOne({ id: userId }).set({ photo: url });
      req.session.user.photo = url;

      return res.json({
        success: true,
        message: 'File uploaded successfully!',
        url: url
      });
    } catch (err) {
      return res.serverError({ error: 'An unexpected error occurred' });
    }
  }
};

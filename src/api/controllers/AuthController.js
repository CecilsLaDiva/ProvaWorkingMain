// AuthController.js

const bcrypt = require('bcrypt'); // Import the bcrypt library for password hashing

module.exports = {
  login: async function (req, res) { // Asynchronous function to handle login process
    try {
      const { email, password } = req.body; // Extract email and password from request body

      if (!email || !password) { // Check if email and password are provided
        return res.status(400).json({ error: 'Email and password are required' }); // Return an error if not provided
      }

      const user = await User.findOne({ email }); // Find a user with the provided email in the database

      if (!user) { // Check if the user is found
        return res.status(404).json({ error: 'User not found' }); // Return an error if user is not found
      }

      const passwordMatch = await bcrypt.compare(password, user.password); // Compare the provided password with the stored password in the database using bcrypt

      if (!passwordMatch) { // Check if passwords match
        return res.status(403).json({ error: 'Invalid password' }); // Return an error if passwords do not match
      }

      // If credentials are correct, set the session and redirect to homepage
      req.session.userId = user.id;
      return res.redirect('/homepage');

    } catch (error) {
      //console.error('Error during login:', error); // Log any unexpected error during the login process
      return res.status(500).json({ error: 'An unexpected error occurred' }); // Return a 500 error in case of unexpected error
    }
  },
};

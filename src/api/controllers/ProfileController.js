module.exports = {
  showProfile: async function (req, res) {
    if (!req.session.userId) {
      return res.redirect('/login'); 
    }
    try {
      const user = await User.findOne({ id: req.session.userId });
      if (!user) {
        return res.redirect('/login'); 
      }

      // Render the profile page with the user data
      return res.view('pages/profile', { user });
    } catch (error) {
      sails.log.error(error);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  },

  // Function to update the user's happiness score
  updateHappiness: async function (req, res) {
    if (!req.session.userId) {
      return res.redirect('/login'); 
    }
    try {
      const { happiness } = req.body; // Extract the happiness value from the request body
      // Update the user's happiness score in the database
      const user = await User.updateOne({ id: req.session.userId }).set({ happiness });

      if (!user) {
        return res.status(404).json({ error: 'User not found' }); 
      }

      // Update the average happiness for the user's team, if they belong to one
      const teamMembership = await Student_team.findOne({ id_user: user.id });
      if (teamMembership) {
        // Fetch all team members and calculate the total happiness
        const teamMembers = await Student_team.find({ id_team: teamMembership.id_team }).populate('id_user');
        const totalHappiness = teamMembers.reduce((total, member) => total + member.id_user.happiness, 0);
        const averageHappiness = totalHappiness / teamMembers.length;

        // Update the team's average happiness in the Team model
        await Team.updateOne({ id: teamMembership.id_team }).set({ happiness: averageHappiness });
      }

      // Redirect to the profile page after updating happiness
      return res.redirect('/profile');
    } catch (error) {
      sails.log.error(error);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};

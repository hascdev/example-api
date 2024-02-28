import ProfileModel from '../models/profile.model.js';

class UserController {

    getProfile = async (req, res) => {

        try {

            const id = req.params.id;
    
            // Get profile from database
            const profile = await ProfileModel.findByUserId(id);
            console.log("profile", profile);

            if (!profile) {
                return res.status(404).json({ error: "Profile not found" });
            }
    
            // Send the profile back to the client
            res.json({ profile });
    
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new UserController();
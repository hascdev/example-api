import jwtService from '../services/jwt.service.js';
import UserModel from '../models/user.model.js';

class AuthController {

    /*
    async register(req, res) {
        try {
            const { username, password, email, name } = req.body;

            const foundUser = await UserModel.findOne({ $or: [{ username }, { email }] });
            if (foundUser) {
                return res.status(400).json({ message: 'username or email is existed' });
            }
            await UserModel.create({
                username,
                password,
                email,
                name,
            });
            return res.status(201).json({ message: 'User is created ' });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    */

    login = async (req, res) => {

        try {

            const { username, password } = req.body;
    
            // Get user from database
            const user = await UserModel.findByUsername(username);
            console.log("user", user);

            // Check user and password
            if (!user || !(password === user.password)) { // await bcrypt.compare(password, user.password);
                return res.status(401).json({ error: 'Authentication failed' });
            }            
    
            // Create and sign the token
            const token = jwtService.sign({ iss: "example.com", ref: user.id, role: "anon" }, user.hash);
    
            // Send the token back to the client
            res.json({ token });
    
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new AuthController();
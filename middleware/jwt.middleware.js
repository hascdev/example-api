import jwtService from '../services/jwt.service.js';
import UserModel from '../models/user.model.js';

class JwtMiddleware {

    get() {

        return async (req, res, next) => {

            const token = req.header('auth_token');

            if (!token) return res.status(401).json({ error: 'Token not found in request' });
            
            try {

                const decoded = jwtService.decode(token);

                const ref = decoded.ref;

                const user = await UserModel.findById(ref);

                if (!user) {
                    throw new Error('User not found');
                }

                jwtService.verify(token, user.hash);
                
                next();

            } catch (error) {
                res.status(401).json({ error: 'Invalid token' });
            }

        };
    }
}

export default new JwtMiddleware();
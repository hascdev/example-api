import jwtService from '../services/jwt.service.js';
import UserModel from '../models/user.model.js';

class JwtMiddleware {

    get(roles = []) {

        return async (req, res, next) => {

            const token = req.header('auth_token');

            if (!token) return res.status(401).json({ message: 'Token not found in request' });
            
            try {

                const decoded = jwtService.decode(token);

                if (!decoded.ref) throw new Error("User ref missing");

                const ref = decoded.ref;

                // Get user by ref id.
                const user = await UserModel.findById(ref);

                // Check user found
                if (!user) throw new Error('User not found');

                // Check role authorized
                if (roles.indexOf(user.role) === -1) throw new Error("Role not authorized");
                
                // Verify token
                jwtService.verify(token, user.hash);
                
                next();

            } catch (error) {
                console.error("JwtMiddleware", error);
                res.status(401).json({ message: 'Invalid token' });
            }

        };
    }
}

export default new JwtMiddleware();
import { Router } from 'express';
import JwtMiddleware from '../middleware/jwt.middleware.js';
import UserController from "../controllers/user.controller.js";
import Roles from '../constant/roles.js';

class UserRouter {

    constructor() {
        this.router = Router();
        this.router.use(JwtMiddleware.get(Roles.All));
        this.setup();
    }

    getRouter = () => {
        return this.router;
    }

    setup = () => {

        this.router.get('/:id/profile', async (req, res) => {
            
            await UserController.getProfile(req, res);

        });

        this.router.post('/:id/revoke', async (req, res) => {
            
            await UserController.revoke(req, res);
            
        });
    }
}

export default new UserRouter();
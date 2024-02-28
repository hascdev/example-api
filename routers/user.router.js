import { Router } from 'express';
import JwtMiddleware from '../middleware/jwt.middleware.js';
import UserController from "../controllers/user.controller.js";

class UserRouter {

    constructor() {
        this.router = Router();
        this.router.use(JwtMiddleware.get());
        this.setup();
    }

    getRouter = () => {
        return this.router;
    }

    setup = () => {

        this.router.get('/:id/profile', async (req, res) => {
            
            await UserController.getProfile(req, res);

        });

        this.router.post('/logout', async (req, res) => {
            
        });
    }
}

export default new UserRouter();
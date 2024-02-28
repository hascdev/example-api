import { Router } from 'express';
import AuthController from "../controllers/auth.controller.js";

class AuthRouter {

    constructor() {
        this.router = Router();
        this.setup();
    }

    getRouter = () => {
        return this.router;
    }

    setup = () => {

        this.router.post('/login', async (req, res) => {
            
            await AuthController.login(req, res);
            
        });
    }
}

export default new AuthRouter();
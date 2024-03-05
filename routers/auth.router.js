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
        
        /**
         * @openapi
         * '/api/v1/auth/login':
         *  post:
         *     tags:
         *     - Auth Controller
         *     summary: Login as a user
         *     requestBody:
         *      required: true
         *      content:
         *        application/json:
         *           schema:
         *            type: object
         *            required:
         *              - username
         *              - password
         *            properties:
         *              username:
         *                type: string
         *                default: johndoe
         *              password:
         *                type: string
         *                default: johnDoe20!@
         *     responses:
         *      200:
         *        description: Successful response
         *      401:
         *        description: Authentication failed
         *      500:
         *        description: Server Error
         */
        this.router.post('/login', async (req, res) => {

            await AuthController.login(req, res);

        });
    }
}

export default new AuthRouter();
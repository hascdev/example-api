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

        /**
         * @openapi
         * '/api/v1/users/{id}/profile':
         *  get:
         *     tags:
         *     - User Controller
         *     summary: Get a profile by user id
         *     security: 
         *      - ApiKeyHeader: []
         *     parameters:
         *      - id: user_id
         *        in: path
         *        description: The id of the user
         *        required: true
         *     responses:
         *      200:
         *        description: Fetched Successfully
         *      404:
         *        description: Profile Not Found
         *      500:
         *        description: Server Error
         */
        this.router.get('/:id/profile', async (req, res) => {
            
            await UserController.getProfile(req, res);

        });

        /**
         * @openapi
         * '/api/v1/users/{id}/revoke':
         *  post:
         *     tags:
         *     - User Controller
         *     summary: Revoke user token
         *     security: 
         *      - ApiKeyHeader: []
         *     parameters:
         *      - id: user_id
         *        in: path
         *        description: The id of the user
         *        required: true
         *     responses:
         *      200:
         *        description: Successful response
         *      500:
         *        description: Server Error
         */
        this.router.post('/:id/revoke', async (req, res) => {
            
            await UserController.revoke(req, res);
            
        });
    }
}

export default new UserRouter();
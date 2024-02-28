import express from 'express';
import AuthRouter from './routers/auth.router.js';
import UserRouter from './routers/user.router.js';

class App {

    constructor() {
        this.app = express();
        this.setupGlobalMiddleware();
        this.setupRouters();
    }

    start(port) {

        return this.app.listen(port, () => {        
            console.log(`Server running on ${port}`);
        });
    }

    setupGlobalMiddleware() {
        this.app.use(express.json());
    }

    setupRouters() {
        this.app.get('/', (_, res) => {
            res.json({ message: 'Welcome to our service!' });
        });

        this.app.use('/api/v1/auth', AuthRouter.getRouter());
        this.app.use('/api/v1/users', UserRouter.getRouter());
    }
}

export default new App();
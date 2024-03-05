import express from 'express';
import AuthRouter from './routers/auth.router.js';
import UserRouter from './routers/user.router.js';
import swaggerSpec from './swagger.js';
import swaggerUi from 'swagger-ui-express';

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
        
        // Less hackers know about our stack
        this.app.disable('x-powered-by');

        // Swagger Page
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    }

    setupRouters() {
        
        this.app.get('/', (_, res) => {
            res.json({ message: 'Welcome to our service!' });
        });

        // Documentation in JSON format
        this.app.get('/docs.json', (_, res) => {
            res.setHeader('Content-Type', 'application/json')
            res.send(swaggerSpec)
        })

        this.app.use('/api/v1/auth', AuthRouter.getRouter());
        this.app.use('/api/v1/users', UserRouter.getRouter());
    }
}

export default new App();
import express from 'express';
import AuthRouter from './routers/auth.router.js';
import UserRouter from './routers/user.router.js';

const app = express(); 

app.use(express.json());
        
// Less hackers know about our stack
app.disable('x-powered-by');
  
app.get('/', (_, res) => {
    res.json({ message: 'Welcome to our service!' });
});

app.use('/api/v1/auth', AuthRouter.getRouter());
app.use('/api/v1/users', UserRouter.getRouter());
  
// export the app for vercel serverless functions 
module.exports = app;
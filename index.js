import express from 'express';

const app = express(); 

app.use(express.json());
        
// Less hackers know about our stack
app.disable('x-powered-by');
  
app.get('/', (_, res) => {
    res.json({ message: 'Welcome to our service!' });
});
  
// export the app for vercel serverless functions 
export default app;
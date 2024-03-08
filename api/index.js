import "dotenv/config.js";
import App from '../app.js';

export default App.start(process.env.SERVER_PORT);
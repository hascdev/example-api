import "dotenv/config.js";
import App from './app.js';

module.exports = App.start(process.env.SERVER_PORT);
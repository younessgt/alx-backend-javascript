import express from 'express';
import launchRoutes from './routes/index';

const app = express();
const path = process.argv[2];
launchRoutes(app, path);
app.listen(1245);
export default app;

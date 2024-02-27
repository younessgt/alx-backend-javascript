import express from 'express';
import studentRoute from './routes/index';

const app = express();
app.use('/', studentRoute);
app.listen(1245);
export default app;

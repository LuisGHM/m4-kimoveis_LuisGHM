import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { routes } from './routes/index.route';
import { handlesErrors } from './middlewares/handleErrors.middleware';

const app = express();
app.use(express.json());

app.use("/", routes);

app.use(handlesErrors);

export default app;

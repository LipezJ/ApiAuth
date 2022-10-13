import express from "express";
import usersRoutes from './routes/task';

const app = express();

app.use(usersRoutes)

export default app;
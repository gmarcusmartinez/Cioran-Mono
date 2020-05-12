import express from 'express';
import 'colors';
import 'express-async-errors';
import cookieSession from 'cookie-session';

import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';

import { authRouter } from './routes/auth';
import { projectRouter } from './routes/projects';
import { sprintRouter } from './routes/sprints';

const app = express();

app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
app.use('/api/auth', authRouter);
app.use('/api/projects', projectRouter);
app.use('/api/sprints', sprintRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);
export { app };

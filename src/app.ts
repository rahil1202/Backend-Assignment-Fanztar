import express from 'express';
import orderRoutes from './routes/api/orderRoutes';
import { ApplicationError } from './utils/error';

const app = express();
app.use(express.json());

app.use('/api', orderRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof ApplicationError) {
    return res.status(err.status).json({ error: err.message });
  }
  return res.status(500).json({ error: 'Internal Server Error' });
});

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

export default server;

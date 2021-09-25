import express, { json } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { PORT } from './src/utils/config.js';
import authRoutes from './src/routes/auth.js';
import userRoutes from './src/routes/user.js';

const app = express();

app.use(cors());
app.use(json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/', authRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router)

const PORT = 3001;
app.get('/', (_req, res) => {
  res.status(200).send('rodando');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
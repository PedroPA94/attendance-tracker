import express from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express();

app.use(express.json());

const PORT = 3001;
app.get('/', (_req, res) => {
  res.status(200).send('rodando');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
import express from 'express';
import { config } from 'dotenv';

config();

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

app.get('/data', (req, res) => {
  res.json({
    data: [{ id: 1 }],
  });
});

app.listen(process.env.PORT, () => {
  console.log('App running on port 3000');
});

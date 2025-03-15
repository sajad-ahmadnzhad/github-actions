import express from 'express';
import { config } from 'dotenv';
import swaggerUi from 'swagger-ui-express';

config();

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(require('../swagger.json')));

app.get('/data', (req, res) => {
  res.json({
    data: [{ id: 1 }],
  });
});

app.post('/save', (req, res) => {
  res.json({ message: /saved success/ });
});

app.get('/message', (req, res) => {
  res.json({ message: 'Message saved successfully.' });
});

console.log(process.env.PORT, process.env.BASE_URL, process.env.API_KEY);

app.listen(process.env.PORT, () => {
  console.log(`App running on port `);
});

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

app.get('/message', (req, res) => {
  res.json({ message: 'Message saved successfully.' });
});

app.listen(process.env.PORT, () => {
  console.log('App running on port 3000');
});

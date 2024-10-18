import express from 'express';
import diagnosesRouter from './routes/routes';
import patientsRouter from './routes/routes';

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/', diagnosesRouter);
app.use('/api/', patientsRouter);
app.use('/api/:id', patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
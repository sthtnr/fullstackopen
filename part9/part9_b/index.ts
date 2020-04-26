import express from 'express';
import { calculateBmi, parseQuerys } from './bmiCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('hello full stack!');
});

app.get('/bmi', async (req, res) => {
  try {
    const { height, weight } = parseQuerys(req.query);
    const bmi = calculateBmi(height, weight);
    res.json({ height, weight, bmi });
  } catch (err) {
    console.log(err);
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`);
});

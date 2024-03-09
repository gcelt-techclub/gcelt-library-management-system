import express from 'express';

import { PORT } from './config.js';

const app = express();

// Test Route
app.get('/', (req, res) => {
  res.send('Working!!');
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);

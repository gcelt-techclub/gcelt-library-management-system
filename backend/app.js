import express from 'express';

const app = express();

// Test Route
app.get('/', (req, res) => {
  res.send('Working!!');
});

app.listen(8080, () =>
  console.log('Server listening at http://localhost:8080')
);

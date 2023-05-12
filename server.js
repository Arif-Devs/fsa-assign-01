const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(4000, () => {
  console.log('server run successfully');
});

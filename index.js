const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Algoritmos Matematicos')
  
});

app.listen(3000, () => {
  console.log('server started');
});

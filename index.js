const express = require('express');
const app = express();
const routes = require('express').Router();

app.get('/', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Teste de soma</h1>
              <form>
              <input type="text">
              <button type="submit">Enviar</button>
              </form>
            </body>
        </html> 
      `);
});

app.listen(3000, () => {
  console.log('server started');
});

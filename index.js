const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Algoritmos Matematicos</h1>
                <h2>As 4 principais operações<h2>
              <form>
                <button type="submit"><a href='https://Trabalho-2-Nuvem.lucasveiga19.repl.co/soma'> 
                Soma
                </a></button>

                <button type="submit"><a href='https://Trabalho-2-Nuvem.lucasveiga19.repl.co/subtracao'> 
                Subtração
                </a></button>

                <button type="submit"><a href='https://Trabalho-2-Nuvem.lucasveiga19.repl.co/multiplicacao'> 
                Multiplicação
                </a></button>

                <button type="submit"><a href='https://Trabalho-2-Nuvem.lucasveiga19.repl.co/divisao'> 
                Divisão
                </a></button>
              </form>

                <h2>Outras operações<h2>

              <form>
                <button type="submit"><a href='https://Trabalho-2-Nuvem.lucasveiga19.repl.co/exponencial'> 
                Exponencial
                </a></button>

                <button type="submit"><a href='https://Trabalho-2-Nuvem.lucasveiga19.repl.co/fibonnaci'> 
                Fibonnaci
                </a></button>

                <button type="submit"><a href='https://Trabalho-2-Nuvem.lucasveiga19.repl.co/media'> 
                Média
                </a></button>

                <button type="submit"><a href='https://Trabalho-2-Nuvem.lucasveiga19.repl.co/raiz'> 
                Raiz Quadrada
                </a></button>
              </form>
            </body>
        </html> 
      `);
});

                  //soma
app.get('/soma', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Somando Valores</h1>
                <h2>Digite dois numeros para somar<h2>
              <form action="soma" method="post">
                
                <input type="number" name="a" value="10" />
                <p>+</p>
                <input type="number" name="b" value="20" />
                <input type="submit" value="Submit"/>
              </form>
            </body>
        </html> 
      `);
});

app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

function soma(a, b) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  return aInt + bInt;
}

app.listen(3000, () => {
  console.log('server started');
});

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
                <p>
                <input type="number" name="a" value="10" />
                +
                <input type="number" name="b" value="20" />
                <input type="submit" value="Submit"/>
                </p>
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

      //subtracao
app.get('/subtracao', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Subtraindo Valores</h1>
                <h2>Digite dois numeros para subtrair<h2>
              <form action="subtracao" method="post">
                <p>
                <input type="number" name="a" value="10" />
                -
                <input type="number" name="b" value="20" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

app.post('/subtracao', function (req, res) {
  var body = req.body;
  var resultado = subtracao(body.a, body.b);
  
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

function subtracao(a, b) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  return aInt - bInt;
}

      //multiplicacao
app.get('/multiplicacao', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Multiplicação Valores</h1>
                <h2>Digite dois numeros para multiplicar<h2>
              <form action="multiplicacao" method="post">
                <p>
                <input type="number" name="a" value="10" />
                *
                <input type="number" name="b" value="20" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

app.post('/multiplicacao', function (req, res) {
  var body = req.body;
  var resultado = multiplicacao(body.a, body.b);
  
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

function multiplicacao(a, b) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  return aInt * bInt;
}

      //divisao
app.get('/divisao', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Divisão Valores</h1>
                <h2>Digite dois numeros para dividir<h2>
              <form action="divisao" method="post">
                <p>
                <input type="number" name="a" value="10" />
                /
                <input type="number" name="b" value="20" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

app.post('/divisao', function (req, res) {
  var body = req.body;
  var resultado = divisao(body.a, body.b);
  
  res.send(`O resultado da divisao de ${body.a} e ${body.b} é ${resultado}`);
});

function divisao(a, b) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  return aInt / bInt;
}

      //exponencial
app.get('/exponencial', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Exponencial Valores</h1>
                <h2>Digite dois numeros para o exponencial<h2>
              <form action="exponencial" method="post">
                <p>
                <input type="number" name="a" value="10" />
                **
                <input type="number" name="b" value="20" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

app.post('/exponencial', function (req, res) {
  var body = req.body;
  var resultado = exponencial(body.a, body.b);
  
  res.send(`O resultado da Exponencial de ${body.a} e ${body.b} é ${resultado}`);
});

function exponencial(a, b) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  return aInt ** bInt;
}

      //fibonnaci
app.get('/fibonnaci', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Fibonnaci Valor</h1>
                <h2>Digite até que número quer ver a sequência de Fibonnaci<h2>
              <form action="fibonnaci" method="post">
                <p>
                <input type="number" name="a" value="10" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

app.post('/fibonnaci', function (req, res) {
  var body = req.body;
  var resultado = fibonnaci(body.a);
  
  res.send(`O resultado do fibonnaci de ${body.a} é ${resultado}`);
});

function fibonnaci(a){
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i < a; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}

      //media
app.get('/media', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Valores Média</h1>
                <h2>Digite três numeros para ver sua média<h2>
              <form action="media" method="post">
                <p>
                <input type="number" name="a" value="10" />
                <input type="number" name="b" value="20" />
                <input type="number" name="c" value="30" /> 
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

app.post('/media', function (req, res) {
  var body = req.body;
  var resultado = media(body.a, body.b, body.c);
  
  res.send(`O resultado da media de ${body.a} e ${body.b} e ${body.c} é ${resultado}`);
});

function media(a, b, c) {
  var aInt = parseInt(a);
  var bInt = parseInt(b);
  var cInt = parseInt(c);
  return (aInt + bInt + cInt)/3;
}

      //raiz
app.get('/raiz', (req, res) => {
  res.send(`
           <!DOCTYPE html>
           <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Raiz Valores</h1>
                <h2>Digite um valor para saber sua raiz quadrada<h2>
              <form action="raiz" method="post">
                <p>
                √
                <input type="number" name="a" value="49" />
                <input type="submit" value="Submit"/>
                </p>
              </form>
            </body>
        </html> 
      `);
});

app.post('/raiz', function (req, res) {
  var body = req.body;
  var resultado = raiz(body.a);
  
  res.send(`O resultado da raiz quadrada de ${body.a} é ${resultado}`);
});

function raiz(a) {
  return Math.sqrt(a);
}

app.listen(3000, () => {
  console.log('server started');
});

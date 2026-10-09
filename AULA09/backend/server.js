// NOSSA API DE CACHORROS
//
// AGORA AS FOTOS NÃO SÃO MAIS BAIXADAS AUTOMATICAMNETE
// Elas devem existr manualmente na pasta 
// data/fotos
//========================

// rotas
// GET /api/cachorros/aleatórios
// GET/api/cachorros/:raça

// importar o framework express
const express = require('express');
// importa o cors para permitir requisições de outros dominios
const cors = require('cors');
// importa o módulo de arquivivos do node
const fs = require('fs');
// importa utilidades para trabalhar com caminhos de arquivos
const path = require("path")
// importa o arquivo JSON que contém as raças e fotos
const cachorrros = require("./data/dogs.json");
// cria a aplicação express
const app = express();
// definir a porta onde o servidor  irá rodar
const PORT = 3000
// HABILITAR O USO DO CORS NA APLICAÇÃO
app.use(corse());

 //=============================
 // SERVIDOR ARQUIVOS ESTÁTICOS
 //=============================

 // Mós falamos para o express 
 // Tudo o que estiver n apasta data/fotos pode ser acessado pla url
 // exemplo
 // http://localhost:3000/fotos/husky/1.jpg

 app.use(
    "/fotos",
    express.static(
        path.join(__dirname,  "data/fotos")
    )

 )

  //=============================
 // SERVIDOR ARQUIVOS ESTÁTICOS
 //=============================


// função que recebe um array e retorna um item aleatório dele
 function sortear(array) {
    // gera um numero aleatório entre 0 e o tamanho do array
    // array.length - cont aquantos intens existem na lista
    // math.random() - Sorteia um número decimal entre 0 e 1
    // math.random() - array.length - Multiplica o número sorteado pela quantidade de itens
    // math.floor() - tira a parte decimal, arredondando para baixo
    const i = Math.floor(Math.random() * array.length)
    // const i - guarda a posição na variavel i
    // retorna  o item soteado
    return array [1];

}
// NOSSA API DE CACHORROS
//
// As fotos devem existir manualmente na pasta data/fotos
//========================

// ROTAS
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

const express = require("express");
const cors = require("cors");
const path = require("path");
const cachorros = require("./backend/data/dogs.json");

const app = express();
const PORT = 3000;

// habilita o CORS
app.use(cors());

//=============================
// SERVIDOR DE ARQUIVOS ESTÁTICOS
//=============================
// Exemplo: http://localhost:3000/fotos/husky/1.jpg
app.use("/fotos", express.static(path.join(__dirname, "data/fotos")));

// recebe um array e retorna um item aleatório
function sortear(array) {
  const i = Math.floor(Math.random() * array.length);
  return array[i];
}

//=================================
// ROTAS DA API
//=================================

// ROTA 1 - Cachorro aleatório
app.get("/api/cachorros/aleatorio", (req, res) => {
  const todasAsFotos = Object.values(cachorros).flat();
  const item = sortear(todasAsFotos);

  res.json({
    status: "success",
    message: `http://localhost:${PORT}/fotos/${item}`,
  });
});

// ROTA 2 - Cachorro por raça
// Exemplo: http://localhost:3000/api/cachorros/husky
app.get("/api/cachorros/:raca", (req, res) => {
  const raca = req.params.raca.toLowerCase();

  if (!cachorros[raca]) {
    return res.status(404).json({
      status: "error",
      message: `Raça "${raca}" não encontrada`,
    });
  }

  const item = sortear(cachorros[raca]);

  res.json({
    status: "success",
    message: `http://localhost:${PORT}/fotos/${item}`,
  });
});

// inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Coloque as fotos manualmente em data/fotos");
});
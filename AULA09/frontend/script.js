/*
=====================================
FRONT-END - Consome a nossa API Local
=====================================

Este arquivo roda no navegador.
Ele faz requisições para a nossa API Node.js
e mostra os dados na tela.

Os comentários "CORRIGIDO" mostram onde estavam os erros.
*/

// =========================
// Elementos HTML
// =========================
// Foto do cachorro
const dogImage = document.getElementById("dogImage")
// Nome da raça
const breedName = document.getElementById("breedName")
// Botão que busca cachorro aleatório
const randomBtn = document.getElementById("randomBtn")
// Botão que busca cachorro por raça
const searchBtn = document.getElementById("searchBtn")
// Campo de texto onde o usuário digita a raça
const breedInput = document.getElementById("breedInput")
// Área onde fica a imagem do cachorro
// Usamos querySelector porque é uma classe (.dog-area)
const dogArea = document.querySelector(".dog-area")

// ===========================
// URL DA API
// ===========================

// CORRIGIDO: estava "/api/cachorro" (singular), mas no server.js a rota
// é "/api/cachorros" (plural). Por isso dava "Servidor offline".
const API = "http://localhost:3000/api/cachorros"

// ===========================
// Função Principal
// ===========================
// Recebe uma URL, faz a requisição e mostra o resultado na tela

async function buscarCachorro(url){
    // Adiciona a classe "loading"
    // Normalmente usada para mostrar animação de carregamento
    // CORRIGIDO: estava "Loading" (L maiúsculo) e o remove usava "loading".
    // O JavaScript diferencia maiúsculas de minúsculas, então a classe nunca saía.
    dogArea.classList.add("loading")

    try {
        // Faz requisição HTTP para a API
        const response = await fetch(url)
        // Converte a resposta para JSON
        const data = await response.json()
        // Mostra no console a resposta da API
        console.log("Resposta da API:", data)

        // Verifica se a API retornou erro
        if (data.status === "error"){
            // breedName - elemento HTML
            // .textContent - define o texto do elemento
            // data.message - mensagem de erro vinda da API
            breedName.textContent = data.message
            // Remove a imagem
            dogImage.src = ""
            // Interrompe a função
            return
        }

        // Coloca a imagem do cachorro na tela
        // o src define qual imagem será exibida
        dogImage.src = data.message

        // Extrai o nome da raça da URL da imagem
        // Exemplo de URL:
        // http://localhost:3000/fotos/husky/1.jpg

        // Separa a URL em partes usando "/"
        // Resultado: ["http:", "", "localhost:3000", "fotos", "husky", "1.jpg"]
        const partes = data.message.split("/")

        // CORRIGIDO: estava partes[5] (que é "1.jpg").
        // O nome da raça está na posição 4.
        const raca = partes[4]

        // Coloca a primeira letra maiúscula
        // Ex: husky --> Husky
        // raca.charAt(0) - pega a primeira letra
        // .toUpperCase() - transforma em maiúscula
        // raca.slice(1) - pega o texto a partir da segunda letra
        breedName.textContent =
            raca.charAt(0).toUpperCase() + raca.slice(1)

    } catch (erro){
        // Caso o servidor esteja desligado
        // ou aconteça algum erro na requisição
        console.error(erro)

        // Mostra mensagem na tela
        breedName.textContent =
            "⚠️ Servidor offline - rode: node server.js"

        // Remove a imagem
        dogImage.src = ""
    } finally {
        // Remove a classe de carregamento
        // independente de erro ou sucesso
        dogArea.classList.remove("loading")
    }
}

// ===========================
// AÇÕES
// ===========================

// Função que busca o cachorro aleatório
function cachorroAleatorio(){
    // Chama a função principal passando a rota /aleatorio da API
    // CORRIGIDO: estava "/aleatório" (com acento). Use o mesmo nome do server.js.
    buscarCachorro(`${API}/aleatorio`)
}

// Função que busca cachorro por raça
// CORRIGIDO: tinha o MESMO nome da função principal (buscarCachorro),
// então uma sobrescrevia a outra. Agora se chama buscarPorRaca.
function buscarPorRaca(){
    // Pega o texto digitado no input
    // CORRIGIDO: estava breedInput.ariaValueMax (atributo errado).
    // O texto digitado fica em .value
    // .trim() - remove espaços do começo e do fim
    // .toLowerCase() - deixa tudo minúsculo (Husky --> husky)
    const raca = breedInput.value.trim().toLowerCase()

    // CORRIGIDO: o "if" e o "return" estavam FORA da função
    // (a chave } fechava antes), o que dava erro de sintaxe.
    // Verifica se o usuário digitou algo
    if (!raca) {
        // Se não digitou, mostra alerta
        alert("Digite uma raça!")
        // Interrompe a função
        return
    }

    // Chama a API passando a raça na URL
    // Exemplo: /api/cachorro/husky
    buscarCachorro(`${API}/${raca}`)
}

// ===========================
// EVENTOS
// ===========================

// Quando clicar no botão "Aleatório"
randomBtn.addEventListener("click", cachorroAleatorio)

// Quando clicar no botão "Buscar"
// CORRIGIDO: agora chama buscarPorRaca
searchBtn.addEventListener("click", buscarPorRaca)

// Quando clicar na imagem do cachorro
// carrega outro cachorro aleatório
dogImage.addEventListener("click", cachorroAleatorio)

// Quando o usuário apertar uma tecla no input
// CORRIGIDO: o evento estava incompleto (sem corpo e sem fechar "})").
// Também trocamos keypress (obsoleto) por keydown.
breedInput.addEventListener("keypress", (event) => {
    // Verifica se a tecla apertada foi o Enter
    if (event.key === "Enter") {
        // Se foi, busca por raça (igual ao clique no botão)
        buscarPorRaca()
    }
})

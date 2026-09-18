// Inicio Back-End-- JAVASCRIPT 
// Aula 02 - Node.js
// Aula 03 - Express

// Variaveis 

//ANTIGO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, pode ser redeclarado e mudar o valor
var nome = "gabriell";
var idade = 30;
var idade = 31; // não gera erro, mas não é uma boa prática
var cidade = "São Paulo";
//NOVO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, não pode ser redeclarado e nem mudar o value
const nome = "gabriell";
const idade = 30;
const cidade = "São Paulo";

// mais moderno, pode mudar de valor, mas não pode ser redeclarado
let nome = "gabriell";
let idade = 30;
let cidade = "São Paulo";
nome = "gabriell"; // pode mudar o valor
//let nome = "Nikolas"; // não pode ser redeclarado ❌ ERROR 

// const é fixo, não pode mudar de valor, nem ser redeclarado
const pi = 3.14; // não pode mudar o valor ❌ ERROR
// pi = 40; // não pode mudar o valor ❌ ERROR

// Exemplo de uso de variáveis
// Palavras comecando com letra maiúscula são reservadas para classes, então não é uma boa prática usar para variáveis
// camelCase é a convenção de nomenclatura para variáveis em JavaScript

// let nomeCompleto; let idadeUsuario; function calcularIdade(anoNascimento) { let idade = 2024 - anoNascimento; return idade; } let idadeUsuario = calcularIdade(1990); console.log("Idade do usuário:", idadeUsuario); // let nomeCompleto = "Nikolas Silva"; console.log("Nome completo:", nomeCompleto); // 

//__________________
// PASCAL CASE é a convenção de nomenclatura para classes em JavaScript
// - Todas as palavras começam com letra maiúscula 

//class UsuarioSistema {
//constructor(nome, idade) {
//this.nome = nome;
//this.idade = idade;
// }
// };

// SNAKE CASE é a convenção de nomenclatura para constantes em JavaScript
// - Palvras separadas por um underscore _

// let nome_completo = "gabriell BREGIÃO"   ; // não é uma boa prática usar snake case para variáveis, mas é permitido

//TEMPLATE STRING
console.log(`sua idade é: ${idade} anos`); // template string 
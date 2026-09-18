"# Backend

## O que é backend?
Backend é a parte do sistema que trabalha escondida.
Ela recebe dados, processa e manda uma resposta.

Exemplo:
- o usuário entra no site
- envia um formulário
- o backend recebe
- salva ou verifica os dados
- responde ao usuário

## Diferença entre frontend e backend
- Frontend: é o que a pessoa vê na tela
- Backend: é o que faz o sistema funcionar por trás

## O que um backend faz
- recebe pedidos
- valida dados
- salva no banco
- busca informações
- responde com resultado

## Tecnologias comuns
- JavaScript
- Node.js
- Express
- banco de dados
- `.env`

## Como rodar
```bash
npm install
npm start
```

## Arquivo `.env`
Esse arquivo guarda informações importantes, como:

```bash
PORT=3000
DB_HOST=localhost
DB_NAME=app
DB_USER=root
DB_PASSWORD=sua_senha
```

## Estrutura simples
```bash
src/
  routes/
  controllers/
  services/
app.js
package.json
.env
README.md
```

## Resumo simples
Backend é a parte que faz a aplicação funcionar. Ele recebe, processa e responde.

Se você está começando, pense assim:
- Frontend = aparência
- Backend = lógica e funcionamento
" 

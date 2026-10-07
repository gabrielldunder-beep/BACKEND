// JSON significa JAVASCRIPT object notation e é u formato de representação e troca de dados

FICHA física:
Nome:joão
idade:25
Cidade:SP

É UMA FERRAMENTA PARA ORGANIZAR QUE TODO MUNDO ENTENDE (QUALQUER LINGUAGEMM)


//{
    "CACHORRO": {
        "nome": "Rex",
        "idade": 5,
        "raca": "Labrador",
        "VACINADO": true,
        "PESO": 25.5,
        "brinquedos": ["bola", "corda", "osso"],
        "dono": {
            "nome": "João",
            "idade": 30,
            "telefone": "123456789"
        }
    }
}

<!-- ======================= -->
EXPLICAÇÃO
<!-- ====================== -->
// STRING (texto) - sem aspas
"idade": 5, // número inteiro
"peso": 25.5, // número decimal

// BOOLEAN (verdadeiro ou falso)
"vacinado": true, // verdadeiro

// ARRAY (lista de valores)
"brinquedos": ["bola", "corda", "osso"], // lista de valores

// OBJECT (objeto) - conjunto de pares chave-valor
"dono": {
    "nome": "João",
    "idade": 30,
    "telefone": "123456789"
}

// NULL (nulo) - valor vazio
"dataNascimento": null // valor nulo

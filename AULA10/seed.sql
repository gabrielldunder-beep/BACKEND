-- database: banco.db
CREATE TABLE IF NOT EXISTS usuarios (
    id,
    nome,
    email
);



INSERT  INTO usuarios (id, nome, email)
VALUES (1, 'Jarvis', 'Jarvis@mebrain.com.br');

SELECT * FROM usuarios,

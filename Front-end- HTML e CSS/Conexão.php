<?php

$usuario = `root`; // Nome de usuário do banco de dados
$senha = ``; // Senha do banco de dados
$database = `login`; // Nome do banco de dados a ser conectado
$host = `localhost`; // Endereço do servidor de banco de dados

$mysqli = new mysqli($host,$usuario,$senha,$database); // Cria uma nova instância do objeto mysqli para estabelecer a conexão com o banco de dados

if($mysqli->error) {
    die("Falha ao conectar ao banco de dados "); // Se ocorrer um erro ao conectar, encerra o script e exibe uma mensagem de falha na conexão
}
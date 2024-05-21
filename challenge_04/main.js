

// Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let nome = prompt('Digite uma string:')


if (Number(nome)) {
    alert("Não é uma string!")
}
else {
    alert("É uma string")
}


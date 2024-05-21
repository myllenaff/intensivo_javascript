
//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let firstNumber = prompt('Digite um número:')

firstNumber = Number(firstNumber)

const resto = firstNumber % 2


if (resto === 0) {
    alert("O número é par")
}
else {
    alert("O número não é par")
}




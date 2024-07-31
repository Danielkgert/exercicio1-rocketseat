/*
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:
- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:
*/ 

alert("Vamos calcular!")

let number1 = prompt("O primeiro número")
let number2 = prompt("O segundo número")

number1 = Number(number1)
number2 = Number(number2)

const sum = number1 + number2
const sub = number1 - number2
const multi = number1 * number2
const div = number1 / number2
const restDiv = number1 % number2

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

//preferi usar operador condicional ternário nas duas para praticar com ele

//Para dizer se a soma é impar ou par
let lest = sum % 2
const equation = lest != 0 ? "ímpar" : "par"
alert(`${sum} é ${equation}`)

//Para dizer se é diferente ou igual
const teste = number1 != number2 ? "diferentes" : "iguais"
alert(`Os números inseridos são ${teste}`)



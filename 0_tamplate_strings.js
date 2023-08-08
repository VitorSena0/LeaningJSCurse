let nome = 'João';
let idade = 30;

console.log(`Olá, meu nome é ${nome} e tenho
${idade} anos. 
Minha idade daqui a 10 anos será ${idade + 10}.

`);

// Mais exemplos de como utilizar o tamplate strings

// Concatenar strings e valores de objetos:

let pessoa = { nome: 'João', idade: 30 };
console.log(`1- Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos.`);

//Interpolar resultados de funções:

let nome2 = 'João';
let idade2 = 30;

function anosDaqui10Anos() {
  return idade2 + 10;
}

console.log(`2- Minha idade daqui a 10 anos será ${anosDaqui10Anos()}.`);

//Interpolar resultados de expressões condicionais:

let nome3 = 'João';
let idade3 = 30;

console.log(`3- ${nome3} ${idade3 >= 18 ? 'é' : 'não é'} maior de idade.`);

//Interpolar resultados de expressões matemáticas:

let n1 = 10;
let n2 = 20;

console.log(`4- A soma de ${n1} e ${n2} é igual a ${n1 + n2}.`);

//Interpolar strings multilinhas:

let nome4 = 'João';
let idade4 = 30;

console.log(`5- Olá, meu nome é ${nome4} e tenho ${idade4} anos.
Minha idade daqui a 10 anos será ${idade4 + 10}.`);



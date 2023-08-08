let varA = 'A';
let varB = 'B';
let varC = 'C';

let troca = null
troca = varC

varC = varA
varA = varB
varB = troca

console.log(varA, varB, varC)
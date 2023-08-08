let i = 0;
const nome = 'Leonardo   '
const sobrenome = 'Lima'

while(i <= 10){
    
    console.log(i, nome[i], sobrenome[i]);
    i++;
}

console.log('continua\n\n')

function random(min, max){
    const randomico = Math.floor(Math.random() * (max - min) + min)
    return randomico
}
const min = 1;
const max = 5000;
let rand = random(min,max);
i = 0
while(rand !== 10){
    rand= random(min,max)
    console.log(i, rand)
    i++
}
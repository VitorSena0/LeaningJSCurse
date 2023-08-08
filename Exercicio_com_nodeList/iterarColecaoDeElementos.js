const colecaoDeParagrafos = document.querySelector('.paragrafos');

const paragrafos = colecaoDeParagrafos.querySelectorAll('p')

console.log(paragrafos);

const estilosDoBody = getComputedStyle(document.body);
const backgroundColor = estilosDoBody.backgroundColor;

console.log(backgroundColor)

for(let i of paragrafos){
    i.style.backgroundColor = backgroundColor;
    i.style.color = '#fff';

}




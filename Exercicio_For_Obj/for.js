const elementos = [
    {tag: 'p', texto:'Frase 1'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'footer', texto:'Frase 3'},
    {tag: 'section', texto:'Frase 4'},

]

let section = document.querySelector('.section')

let divisor = document.createElement('div')

for(let i = 0; i < elementos.length; i++){
    let {tag: tags, texto: textos} = elementos[i];
    let tagHTMl = document.createElement(tags);
    let textoNode = document.createTextNode(textos)    
    tagHTMl.appendChild(textoNode)
    divisor.appendChild(tagHTMl);
    //  let document.createElement
  }
  section.appendChild(divisor);
  

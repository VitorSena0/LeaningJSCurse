const lista1 = ['Ana','Bia','Marcela','Carlos','Maria'];
const lista2 = ['Bia','João', 'Marcela','Carlos','Camila', 'Bia', 'Bia'];

/////////////////////////////////////////////////////////////////////////
const encontraUltimo = (lista) => lista[lista.indexOf(lista[lista.length - 1])]  
const encontraPnultimo = (lista) => lista[lista.indexOf(lista[lista.length - 2])]  

//console.log(encontraUltimo(['Ana','Bia','Marcela','Carlos','Maria']))
//console.log(encontraPnultimo(['Ana','Bia','Marcela','Carlos','Maria']))

///////////////////////////////////////////////////////////////////
const tamanhoLista = (lista) => {
  const [x, ...xs] = lista;
  if(x == undefined) return 0;
  return 1 + tamanhoLista(xs);
}
//console.log(tamanhoLista(lista1))
///////////////////////////////////////////////////////////////////
const contaHaElem_Aux = (elem) => (lista) => {
  const [x, ...xs] = lista;
  if(x == undefined) return 0;
  if(x == elem) return 1 + contaHaElem_Aux(elem)(xs);
  return contaHaElem_Aux(elem)(xs);
}

const contaRecorrencia = (lista1) => (lista2) => {
  const [x, ...xs] = lista1;
  if(x == undefined) return 0;
  return contaHaElem_Aux(x)(lista2) + contaRecorrencia(xs)(lista2) 
}
//console.log(contaRecorrencia(lista1)(lista2))

//////////////////////////////////////////////////////////////////

const numerosAleatorios = [
    990, 509, 401, 768,  11, 515, 749, 238, 672, 214, 154, 510,
    575,  11, 190, 444, 212, 333, 116, 245, 434, 362, 564, 722,
    872, 494, 638, 131,  96, 323, 492, 605, 960, 696, 728, 410,
     53, 306, 691, 401, 406, 658, 194, 926, 533, 613, 146, 955,
    843, 461, 777, 168, 632, 222,  22, 426, 619, 791, 690, 768,
    582, 780, 901, 869, 541, 565, 764, 425, 692, 567, 311, 327,
     92, 518, 424, 124,  64, 822, 507, 438, 221,  53, 674, 482,
     64, 976, 838, 222, 481,  76, 274, 132, 120, 510, 186,  83,
    355, 976,  71, 522
  ]

const condicionais = (elem) => elem%2 == 0 && elem%5 == 0 && elem<1000
const somaValoresMult = (lista) => lista.filter(condicionais).reduce( (acc,x) => acc + x, 0);
//console.log(condicionais)

///////////////////////////////////////////////////////////////
const dezNaturais = [1,2,3,4,5,6,7,8,9,10] 
const diferencaEntreQuadrados = (dezPrimeirosNaturais) => {
  return (dezPrimeirosNaturais.reduce((acc, num)=> acc + num,0) ** 2) - dezPrimeirosNaturais.map((num)=> num**2).reduce((acc, num)=> acc + num,0)
} 
console.log(diferencaEntreQuadrados(dezNaturais));

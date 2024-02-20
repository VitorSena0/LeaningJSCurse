const fs = require('fs').promises; // Utilizando a versão promissificada do módulo fs

const lerArquivoJson = async (caminhoArquivo) => {
  try {
    const data = await fs.readFile(caminhoArquivo, 'utf8');
    const objetoJson = JSON.parse(data);
    return objetoJson;
  } catch (err) {
    throw err; // Pode tratar ou propagar o erro conforme necessário
  }
};

// Exemplo de uso com async/await
const caminhoArquivo = './athletes.json';

(async () => {
  try {
    const resultado = await lerArquivoJson(caminhoArquivo);
    //console.log('Dados lidos:', resultado);

    // Agora você pode manipular 'resultado' em outras funções ou parte do código
    outraFuncaoQueManipulaJson(resultado);
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
  }
})();





// Funções que manipulam o objeto JSON
const esporte = "hockey";
const pais = "BRA";
const atleta = "Michael Phelps"
const somaOuro = (acc,atleta)=>acc + atleta.gold ;
const dataJogosRio = "2016-08-05";


const atletasBrasil = (listaDeAtletas) => listaDeAtletas.filter((atleta)=> atleta.nationality == 'BRA').map((atleta)=> {return {nome: atleta.name}});
const atletasDeterminadoSport = (listaDeAtletas) => (esporte) => listaDeAtletas.filter((atleta)=> atleta.sport == esporte).map((atleta)=>{return{nome: atleta.name}});
const medalhasOuroPais = (listaDeAtletas)=> (pais) => (somaOuro) => listaDeAtletas.filter((atleta)=> atleta.nationality == pais).reduce(somaOuro,0);
const medalhasOuroAtleta = (lsitaDeAtletas) => (atleta) => (somaOuro) => lsitaDeAtletas.filter((atletaObj)=>atletaObj.name == atleta).reduce(somaOuro,0);
// Eu posso passar a função anônima diretamente ou tenho que passar como argumento para seguir a pureza, dúvida em questão das funções medalhas de outro pais e atleta???





// Função auxiliar para calcular a idade de uma pessoa com base no ano do evento das olimpiadas
const calculaIdadeAux = (ano) => (dataNasc) => (milissegundosNoAno) => {
  const dataMilissegundosNas = new Date(dataNasc);
  const dataMilissegundosAno = new Date(ano);
  const diferenca = dataMilissegundosAno.getTime() - dataMilissegundosNas.getTime()
  return diferenca/milissegundosNoAno
}
// Calcula a idade e faz uma lista de registros de todas as idades formatadas e calculadas
const calculaIdadeAtletas = (listaDeAtletas) => (dataJogosRio) => (f_milissegundos) =>  {

  const milissegundosPorAno = 1000 * 60 * 60 * 24 * 365.25; // considerando os anos bissextos
  return  listaDeAtletas.map((atleta)=>{return {idade: f_milissegundos(dataJogosRio)(atleta.date_of_birth)(milissegundosPorAno).toFixed(2)}});
}
// Calcula a média de todas as idades
const calculaMediaIdades =(calculaIdadeAtletas) => (listaDeAtletas) => (dataJogosRio) => (calculaIdadeAux) => {
  const tamanhoJsonObject = listaDeAtletas.length
  const idades =calculaIdadeAtletas(listaDeAtletas)(dataJogosRio)(calculaIdadeAux)
  const media = idades.reduce((acc, atleta) => acc + parseFloat(atleta.idade), 0) / tamanhoJsonObject;
  return media.toFixed(2)
}


///////////////////////////////////////
const outraFuncaoQueManipulaJson = (jsonObject) => {
  // Faça o que quiser com o objeto JSON aqui
  
  //console.log(atletasBrasil(jsonObject))
  //console.log(atletasDeterminadoSport(jsonObject)(esporte))
  //console.log(medalhasOuroPais(jsonObject)(pais)(somaOuro))
  //console.log(medalhasOuroAtleta(jsonObject)(atleta)(somaOuro))
  console.log(calculaMediaIdades(calculaIdadeAtletas)(jsonObject)(dataJogosRio)(calculaIdadeAux))

};









///////////////////////////////////////////////////////////////////////////////////////////////////////










const { json } = require('stream/consumers');

const fs = require('fs').promises; // Utilizando a versão promissificada do módulo fs

const lerArquivoJson = async (caminhoArquivo) => {
  try {
    const data = await fs.readFile(caminhoArquivo, 'utf8');
    const objetoJson = JSON.parse(data);
    return objetoJson;
  } catch (err) {
    throw err; // Pode tratar ou propagar o erro conforme necessário
  }
};

// Exemplo de uso com async/await
const caminhoArquivo = './athletes.json';

(async () => {
  try {
    const resultado = await lerArquivoJson(caminhoArquivo);
    //console.log('Dados lidos:', resultado);

    // Agora você pode manipular 'resultado' em outras funções ou parte do código
    outraFuncaoQueManipulaJson(resultado);
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
  }
})();





// Funções que manipulam o objeto JSON
const esporte = "hockey";
const pais = "BRA";
const atleta = "Michael Phelps"
const somaOuro = (acc,atleta)=>acc + atleta.gold ;
const dataJogosRio = "2016-08-05";


const atletasBrasil = (listaDeAtletas) => listaDeAtletas.filter((atleta)=> atleta.nationality == 'BRA').map((atleta)=> {return {nome: atleta.name}});
const atletasDeterminadoSport = (listaDeAtletas) => (esporte) => listaDeAtletas.filter((atleta)=> atleta.sport == esporte).map((atleta)=>{return{nome: atleta.name}});
const medalhasOuroPais = (listaDeAtletas)=> (pais) => (somaOuro) => listaDeAtletas.filter((atleta)=> atleta.nationality == pais).reduce(somaOuro,0);
const medalhasOuroAtleta = (lsitaDeAtletas) => (atleta) => (somaOuro) => lsitaDeAtletas.filter((atletaObj)=>atletaObj.name == atleta).reduce(somaOuro,0);
// Eu posso passar a função anônima diretamente ou tenho que passar como argumento para seguir a pureza, dúvida em questão das funções medalhas de outro pais e atleta???




////////////////////////////////////////////////////////////////////////////////////////////////
// Função auxiliar para calcular a idade de uma pessoa com base no ano do evento das olimpiadas
const calculaIdadeAux = (ano) => (dataNasc) => (milissegundosNoAno) => {
  const dataMilissegundosNas = new Date(dataNasc);
  const dataMilissegundosAno = new Date(ano);
  const diferenca = dataMilissegundosAno.getTime() - dataMilissegundosNas.getTime()
  return diferenca/milissegundosNoAno
}
// Calcula a idade e faz uma lista de registros de todas as idades formatadas e calculadas
const calculaIdadeAtletas = (listaDeAtletas) => (dataJogosRio) => (f_milissegundos) =>  {

  const milissegundosPorAno = 1000 * 60 * 60 * 24 * 365.25; // considerando os anos bissextos
  return  listaDeAtletas.map((atleta)=>{return {idade: f_milissegundos(dataJogosRio)(atleta.date_of_birth)(milissegundosPorAno).toFixed(2)}});
}
// Calcula a média de todas as idades
const calculaMediaIdades =(calculaIdadeAtletas) => (listaDeAtletas) => (dataJogosRio) => (calculaIdadeAux) => {
  const tamanhoJsonObject = listaDeAtletas.length
  const idades =calculaIdadeAtletas(listaDeAtletas)(dataJogosRio)(calculaIdadeAux)
  const media = idades.reduce((acc, atleta) => acc + parseFloat(atleta.idade), 0) / tamanhoJsonObject;
  return media.toFixed(2)
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Listar dados com o uso da imutabilidade

 const ordenaAlfabetica = (listaDeAtletas) => {
  return [...listaDeAtletas].filter((atleta)=>atleta.nationality == "BRA").sort((a,b)=>a.name - b.name)//.map((atleta)=> atleta.name)
 } 

/*
 const somaMedalhas = (atletaSport) => atletaSport.reduce((sportContaMedal, medalhaSport)=> sportContaMedal + (medalhaSport.gold + medalhaSport.silver + medalhaSport.bronze),0) 
 const listaEsportes = (atletaSports) => {
  const listaSports = atletaSports.filter((atleta, index)=> atletaSports.map((atleta)=> atleta.sport).indexOf(atleta.sport) == index)
 }
 //var novaArr = arr.filter((este, i) => arr.indexOf(este) === i);
 const esportesGanhouMedalhaBR = (listaDeAtletas) => ordenaAlfabetica(listaDeAtletas).map((atleta)=> {return {atleta.sport, somaMedalhas(atle)}})

primeiro eu filtro o atleta brasileiro que tem pelo menos uma melhadalha, qualquer uma, e depois eu filtro com o indexof as repetições dos esportes na lista


*/

const atletaMedalhasBr = (listaDeatletas) => {
  ordenaAlfabetica(listaDeatletas).map((atletas)=> {return {}})
}


///////////////////////////////////////
const outraFuncaoQueManipulaJson = (jsonObject) => {
  // Faça o que quiser com o objeto JSON aqui
  
  //console.log(atletasBrasil(jsonObject))
  //console.log(atletasDeterminadoSport(jsonObject)(esporte))
  //console.log(medalhasOuroPais(jsonObject)(pais)(somaOuro))
  //console.log(medalhasOuroAtleta(jsonObject)(atleta)(somaOuro))
  //console.log(calculaMediaIdades(calculaIdadeAtletas)(jsonObject)(dataJogosRio)(calculaIdadeAux))
  Object.freeze(jsonObject)
  //console.log(ordenaAlfabetica(jsonObject))
  //console.log(esportesGanhouMedalhaBR(jsonObject))
  //console.log(listaEsportes(jsonObject))



};




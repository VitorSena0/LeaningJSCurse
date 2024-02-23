const { privateEncrypt } = require('crypto');
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
const dataJogosRio = "2016-08-05";
const somaOuro = (acc,atleta)=>acc + atleta.gold ;


const atletasBrasil = (listaDeAtletas) => listaDeAtletas
  .filter((atleta)=> atleta.nationality == 'BRA')
  .map((atleta)=> {return {nome: atleta.name}});


const atletasDeterminadoSport = (listaDeAtletas) => (esporte) => listaDeAtletas
  .filter((atleta)=> atleta.sport == esporte)
  .map((atleta)=>{return{nome: atleta.name}});


const medalhasOuroPais = (listaDeAtletas)=> (pais) => (somaOuro) => listaDeAtletas
  .filter((atleta)=> atleta.nationality == pais)
  .reduce(somaOuro,0);


const medalhasOuroAtleta = (lsitaDeAtletas) => (atleta) => (somaOuro) => lsitaDeAtletas
  .filter((atletaObj)=>atletaObj.name == atleta)
  .reduce(somaOuro,0);


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

/////////////////// Listar dados com o uso da imutabilidade////////////////////////

// 1º questão - listar brasileiros em ordem alfabética
 const ordenaAlfabetica = (listaDeAtletas) => {return [...listaDeAtletas]
  .filter((atleta)=>atleta.nationality == "BRA")
  .sort((a,b)=>a.name - b.name)//.map((atleta)=> atleta.name)
 } 

/*
primeiro eu filtro o atleta brasileiro que tem pelo menos uma melhadalha, qualquer uma, e depois eu filtro com o indexof as repetições dos esportes na lista
*/
// 2º questão - listar esportes que o Brasil ganhou medalha
const somaMedalhasSport = (listaDeAtletas) => (esporte) => {
  const medalha = listaDeAtletas
    .filter((atleta)=> atleta.sport == esporte)
    .reduce((acc, atleta)=> acc + atleta.gold + atleta.silver + atleta.bronze,0)
  const esporteMedalhas = {esporte: esporte, medalhas: medalha}
  return esporteMedalhas
}
const esportesBrasil = (listaDeAtletas) => {
  const listaBr = listaDeAtletas.filter((atleta)=> atleta.nationality == 'BRA');
  return listaBr.reduce((acc, atleta)=>{

    indice = acc
      .map((elem) => elem.esporte)
      .indexOf(atleta.sport);

    if(indice == -1){
     acc = [...acc, (somaMedalhasSport(listaBr)(atleta.sport))]
    }
    return acc
  },[])
  .filter((elem)=>elem.medalhas > 0);

}


// 3º questão - Listar esportes que o Brasil não ganhou medalha
const esportesNaoGanhouMedalha = (listaDeAtletas) => {
  return esportesBrasil(listaDeAtletas).filter((elem)=>elem.medalhas == 0)
}


// 4º questão - Quais paises ganharam medalhas em determinado esporte

const medalhaEsportePais = (listaDeAtletas) =>(pais) => (esporte) => {
  const atletas = listaDeAtletas.filter((atleta)=> atleta.nationality == pais && atleta.sport == esporte )
  const medalhas = atletas.reduce((acc, atleta)=> acc + atleta.gold + atleta.silver + atleta.bronze,0);  
  const result = {pais: pais, esporte: esporte, medalhas: medalhas}
  return result
}

const paisesGanharamMedalhas = (listaDeAtletas) => (esporte) =>{
  const paisesMedalhaEsporte = listaDeAtletas.reduce((acc, atleta) => {
    indice = acc
      .map((elem) => elem.pais)
      .indexOf(atleta.nationality);

    if (indice == -1) {
      acc = [...acc,(medalhaEsportePais(listaDeAtletas)(atleta.nationality)(esporte))];
    }
    return acc; // Retorna o accumulator atualizado
  }, []); // Inicializa o accumulator como um array vazio

  return paisesMedalhaEsporte.filter((elem)=>elem.medalhas > 0)
}


// 5º questão - listar os 10 países com mais medalhas
// Função que calcula o número total de medalhas para um país específico
const medalhasPorPais = (listaDeAtletas, pais) => {
  // Filtra os atletas do país específico e depois faz um somatório da soma das medalhas de cada atleta
  const medalhas = listaDeAtletas
    .filter((atleta) => atleta.nationality === pais)
    .reduce((acc, atleta) => acc + atleta.gold + atleta.silver + atleta.bronze, 0);
    // Calcula o número total de medalhas para o país

  // Retorna um objeto com o nome do país e o número total de medalhas
  return { pais, medalhas };
};

// Função principal que gera o ranking dos 10 países com mais medalhas
const ranking_N_Paises = (listaDeAtletas) => (NpaisesRanqueados = listaDeAtletas.length) => {
  // Cria um array para armazenar informações sobre medalhas por país
  const paisesMedalhas = listaDeAtletas.reduce((acc, atleta) => {
    // Verifica se o país já está no array 
    const index = acc
      .map((elem)=>elem.pais)
      .indexOf(atleta.nationality);
    
    // Atualiza as medalhas se o país já estiver no array, senão, adiciona um novo objeto
    if (index == -1) {
     acc = [...acc,(medalhasPorPais(listaDeAtletas, atleta.nationality))];
    }

    // Retorna o array atualizado
    return acc;
  }, []);

  // Ordena o array de países por número de medalhas em ordem decrescente
  const ranking = paisesMedalhas
    .sort((a, b) => b.medalhas - a.medalhas)
    .slice(0, NpaisesRanqueados);
    // Seleciona os top 10 países

  // Retorna o ranking final
  return ranking;
};



// 6º questão - listar brasileiros com o somatório das medalhas conquistadas
const atletaMedalhasBr = (listaDeatletas) => {
 return ordenaAlfabetica(listaDeatletas).map((atletas)=> {return {atleta: atletas.name, total_medalhas: atletas.gold + atletas.silver + atletas.bronze}})
}


// 7º questão - Ranking atletas brasileiros -> medalha e nome
  const rankingAtletasBr = (listaDeAtletas) => {
    return atletaMedalhasBr(ordenaAlfabetica(listaDeAtletas))
      .sort((a, b) => b.total_medalhas - a.total_medalhas); // já ordena em ordem alfabética e depois ordena pelo total de medalhas sem interferir na ordem alfabética
  };



const outraFuncaoQueManipulaJson = (jsonObject) => {
  // Faça o que quiser com o objeto JSON aqui
  
  //console.log(atletasBrasil(jsonObject))
  //console.log(atletasDeterminadoSport(jsonObject)(esporte))
  //console.log(medalhasOuroPais(jsonObject)(pais)(somaOuro))
  //console.log(medalhasOuroAtleta(jsonObject)(atleta)(somaOuro))
  //console.log(calculaMediaIdades(calculaIdadeAtletas)(jsonObject)(dataJogosRio)(calculaIdadeAux))

  Object.freeze(jsonObject) // Congela o objeto para não ser modificado

  // Executando as funções
  const q1 = ordenaAlfabetica(jsonObject)
  const q2 = esportesBrasil(jsonObject)
  const q3 = esportesNaoGanhouMedalha(jsonObject)
  const q4 = paisesGanharamMedalhas(jsonObject)('football')
  const q5 = ranking_N_Paises(jsonObject)()
  const q6 = atletaMedalhasBr(jsonObject)
  const q7 = rankingAtletasBr(jsonObject)


// função que pega o resultado de uma função e escreve em um arquivo json
  const mostraResultado = (() => {
    const linhas = q2.map(objetos => JSON.stringify(objetos) + '\n')
    const dados = linhas.join('')
     fs.writeFile('resultado.json', dados, (err) => {
      if (err) throw err;
    });
  })()


};




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
const caminhoArquivo = 'athletes.json';

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

// Função que manipula o objeto JSON
const outraFuncaoQueManipulaJson = (jsonObject) => {
  // Faça o que quiser com o objeto JSON aqui
  console.log('Manipulando o objeto JSON:', jsonObject);
};
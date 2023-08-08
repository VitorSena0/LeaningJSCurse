// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) { // O parâmetro 'e' ou 'event' ou 'evento' faz parte de um evento que ao ser acionado este evento faz com que dê para fazer algo com este evento;
  e.preventDefault(); // Este parâmetro com o 'preventDefault()' faz com que o formulário não seja mandado/enviado com isso podendo ser tratado os valores inseridos no input; 
  const inputPeso = e.target.querySelector('#peso');//Você pode pensar na propriedade target como um indicador que aponta para o objeto específico que disparou o evento.
  // Por exemplo, se você tiver uma lista de itens e adicionar um evento click a cada item da lista, a propriedade target permitirá que você saiba qual item da lista foi clicado.
  const inputAltura = e.target.querySelector('#altura'); // Ao ser clicado ou o evento for acionado irá pegar as informações inseridas no input a partir do seu id com o querySelector();

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);//A condicional com o (!peso) avalia se o valor de peso é verdadeiro ou falso. Se o valor de peso for null, undefined, 0 ou uma string vazia, o resultado da expressão será true e, portanto, o código dentro do bloco if será executado.
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);// idem
    return;
  }

  const imc = getImc(peso, altura); // atribui a variável que chama a função que calcula o imc a partir do peso e da altura inserida nos inputs
  const nivelImc = getNivelImc(imc); // atribui a variável que chama a função que verifica o nível de saúde a depender de seu imc que é fornecido pela constante 'imc' que foi atribuída em seu valor a função imc.

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
// retorna o nível de a partir de seu imc
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];

  // A condicional irá retornar o primeiro valor que atender as condições;
  // Ao invés de fazer a condicional com else if, foi feito um return para que quando atendida os requisitos ele retorne o valor
  // A condição foi feita de maneira decrescente pois assim dá para verificar o imc de maneira mais sucinta;
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}// Esta função retorna o imc que será calculado com duas casas decimais;

function criaP() {
  const p = document.createElement('p');
  return p;
}// Cria um elemento html que é um parágrafo e é atribuída a uma variável que retorna tal elemento.

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
// Esta função recebe dois parâmetros a mensagem e se ela é válida ou não;
// Faz com que altere o nome da classe a partir de propriedades pré-definidas no script CSS;
// Insere a mensagem o documento html;
// Cria um filho na div resultado que é um parágrafo.

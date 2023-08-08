const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(event){
    event.preventDefault(); // Previne o envio do formulário;

    const inputPeso = document.querySelector('.peso');
    const inputAltura = document.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = alteraVirgula(inputAltura.value)

    if (!peso) {    
    mostraResultado('Peso inválido', false);
    return;
    }
    if(!altura){
    mostraResultado('Altura inválida', false);
    return;
    }

    const imc = calculaImc(peso,altura);
    const nivel = getNivelImc(imc)[0];
    const cor = getNivelImc(imc)[1];

    const msg = `Seu IMC é ${imc} (${nivel}).`;

    mostraResultado(msg,true,cor);
});

let getNivelImc = function(imc){

    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    const cor = ['rgb(255,165,0)','green','yellow','rgb(255,165,0)',
    'rgb(224,123,40)','rgb(242,79,40)']

    if(imc >= 39.9) {return [nivel[5], cor[5]] };
    if(imc >= 34.9) {return [nivel[4], cor[4]] };
    if(imc >= 29.9) {return [nivel[3], cor[3]] };
    if(imc >= 24.9) {return [nivel[2], cor[2]] };
    if(imc >= 18.5) {return [nivel[1], cor[1]] };
    if(imc <  18.5) {return [nivel[0], cor[0]] };
}

let alteraVirgula = function(altura){
    if(altura.indexOf(',') !== -1 || altura.indexOf('.') !== -1){
        altura =  altura.replace(',', '.')
      }
    
      const altura2 = parseFloat(altura)
      if (!altura2) {
        return false;
      }
      return altura2;
    }



let calculaImc = function(peso,altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

let criaParagrafo = function(){
    const p = document.createElement('p');
    return p;
}

let mostraResultado = function(mensagem, isValid, cores){
    const resultado = document.querySelector('.resultado');
    resultado.style.backgroundColor = cores
    

    // limpa paragrafo
    resultado.innerHTML = '';
    
    const paragrafo = criaParagrafo();

    if(!isValid){
        resultado.style.backgroundColor = 'red'
    }

    paragrafo.innerHTML = mensagem;

    resultado.appendChild(paragrafo);
}


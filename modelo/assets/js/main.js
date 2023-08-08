function GetInputsValues(){

    const form = document.querySelector('.formulario');

    function Pegarvalores(event){
        event.preventDefault();
        const peso = document.querySelector('.peso').value;
        const altura = document.querySelector('.altura').value;


        let CalculaIMC = null

        if(altura.indexOf(',') !== -1 || altura.indexOf('.') !== -1){
            altura.replace(',', '.');
            CalculaIMC = parseFloat(peso) / parseFloat(altura ** 2)
        }else{
            CalculaIMC = parseFloat(peso) / parseFloat((altura/100).toFixed(2) ** 2)
        }

        console.log(CalculaIMC)

        alterarDiv = document.querySelector('.resultado')
        CalculaIMC = CalculaIMC.toFixed(2)



        let Situacao = null
        if(isNaN(CalculaIMC)){
            Situacao = `Insira um valor válido`;
            alterarDiv.style.backgroundColor = 'red' ;
            alterarDiv.style.textAlign = 'center';
        }else if(CalculaIMC < 18.5){
            Situacao = `Seu IMC é ${CalculaIMC} (Abaixo do peso)`;
            alterarDiv.style.backgroundColor = 'rgb(255,165,0)' ;
        }else if(CalculaIMC >= 18.5 && CalculaIMC < 24.9){
            Situacao = `Seu IMC é ${CalculaIMC} (Peso normal)`;
            alterarDiv.style.backgroundColor = 'green' ;
        }else if(CalculaIMC >= 25 && CalculaIMC < 29.9){
            Situacao = `Seu IMC é ${CalculaIMC} (Sobrepeso)`;
            alterarDiv.style.backgroundColor = 'yellow' ;
        }else if(CalculaIMC >= 30 && CalculaIMC < 34.9){
            Situacao = `Seu IMC é ${CalculaIMC} (Obesidade grau 1)`;
            alterarDiv.style.backgroundColor = 'rgb(255,165,0)' ;
        }else if(CalculaIMC >= 35 && CalculaIMC < 39.9){
            Situacao = `Seu IMC é ${CalculaIMC} (Obesidade grau 2)`;
            alterarDiv.style.backgroundColor = 'rgb(224,123,40)' ;
        }else{
            Situacao = `Seu IMC é ${CalculaIMC} (Obesidade grau 3)`;
            alterarDiv.style.backgroundColor = 'rgb(242,79,40)' ;
        }

        const resultado = document.querySelector('.resultado')
        resultado.innerHTML = `${Situacao}`
    }
    
   //
    
    form.addEventListener('submit', Pegarvalores);

}
GetInputsValues();



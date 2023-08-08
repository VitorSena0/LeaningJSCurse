//IIFE -> Imediately invoked function expression;

(function(idade,peso,altura){
    const nome = 'Vitor';

    function CriaNome(sobrenome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(CriaNome('Sena'))
    }

    falaNome();
    console.log(idade,peso,altura)

})(19, 55.5, 168)
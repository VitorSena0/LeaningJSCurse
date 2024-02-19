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


// Código fora da IIFE
let nome = "João";

const f = () => {
    // Código dentro da IIFE
    nome = "Maria";
    console.log(nome); // Saída: Maria
};
f();
console.log(nome); // Saída: João

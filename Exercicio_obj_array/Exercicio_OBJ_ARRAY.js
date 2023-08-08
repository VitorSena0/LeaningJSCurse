
/*          /////////  Uma versão menos abstraída /////////

function enviar(nome,sobrenome,peso,altura) {
      return {
       nome : nome,
       sobrenome : sobrenome,
       peso : peso,
       altura : altura
   }

}      
 ////////////////////////////////
    
 
let GrupoPessoas = []

function PegaFormulario(){

   let nome = document.getElementById('nome').value;
   let sobrenome = document.getElementById('sobrenome').value;
   let peso = parseFloat(document.getElementById('peso').value)
   let altura = parseFloat(document.getElementById('altura').value)
 
   let pessoas = {nome,sobrenome,peso,altura}    
 
   GrupoPessoas.push(pessoas)
   console.log(GrupoPessoas);
}
*/

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []


    function recebeEventoFormulario(evento) {
        evento.preventDefault();
        const nome = document.querySelector('#nome').value;
        const sobrenome = document.querySelector('#sobrenome').value;
        const peso = document.querySelector('#peso').value;
        const altura = document.querySelector('#altura').value;

        console.log(nome, sobrenome, peso, altura);

        let Obj = { nome, sobrenome, peso, altura }
        
        pessoas.push(Obj);

        /*Poderia ser escrito também como 

            pessoas.push({
                nome : nome.value,
                sobrenome : sobrenome.value,
                peso: peso.value.value,
                altura : altura.value
            });

        */
        console.log(pessoas);    

        resultado.innerHTML += (`<p>${Obj.nome} ${Obj.sobrenome} ${Obj.peso} ${Obj.altura} </p>`);

    }




    form.addEventListener('submit', recebeEventoFormulario)
}
meuEscopo();


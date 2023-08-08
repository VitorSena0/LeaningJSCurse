// Construtora -> molde (classe);

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    // this.nomeCompleto = () => {
    //     return nome.concat(" " ,sobrenome)} 
}
                        
Pessoa.prototype.nomeCompleto = function(){// Não funciona com arrow function;
    
    /*Dessa forma, ao invocar o método nomeCompleto a partir de uma instância da função construtora Pessoa, 
    como em pessoa.nomeCompleto(), o valor de this dentro da arrow function é window (ou global no Node.js)
     e não à função Pessoa, que não possui as propriedades nome e sobrenome definidas.
     Por isso, o resultado é uma string vazia.*/
    return this.nome.concat(" " ,this.sobrenome);
}
            // Instânciando um novo objeto 
const pessoa = new Pessoa('vitor', 'leonardo'); // <- Pessoa = função construtora 
const pessoa2 = new Pessoa('Manoel', 'Rodrigues');

console.dir(pessoa.nomeCompleto())
console.dir(pessoa2.nomeCompleto())
const pessoa1 = {
    nome : 'Luiz',
    sobrenome : 'Oliveira',
    idade : 25
}

console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa1.idade)


//////// Com função /////////
// Esta função se chama factory, Pois ela cria objetos
function criaPessoa (nome, sobrenome, idade){
    // Dentro do retun se cria um objeto
    return {
        nome : nome,
        sobrenome : sobrenome,
        idade : idade
    }
}
/* Outra forma mais abstraída de escrever

function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade}

}*/

const Pessoa_1 = criaPessoa('Luiz','Santana','30');

console.log(Pessoa_1)
console.log(Pessoa_1.idade)
console.log(Pessoa_1.nome)
console.log(Pessoa_1.sobrenome,'\n',)

const Pessoa_2 = criaPessoa('Vitor','Leonardo','19')
const Pessoa_3 = criaPessoa('Igor','Oliveira','14')
const Pessoa_4 = criaPessoa('Marcos','Nogueira','40')
const Pessoa_5 = criaPessoa('Paulo','neitzke','50')
const Pessoa_6 = criaPessoa('Rodrigo','Leonardo','36')

console.log('\n',Pessoa_2,'\n',Pessoa_3,'\n',Pessoa_4,'\n',Pessoa_5,'\n',Pessoa_6,'\n','\n',)

////////// A utilização de métodos dentro de objetos //////////


const pessoa0 = {
    nome : 'Luiz',
    sobrenome : 'Oliveira',
    idade : 25,

    // Criação do método que é uma função que não precisa explicitar a escrita 'function'
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi..., sua idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++
        console.log(`A sua nova idade incrementada é: ${this.idade}`)
    }
}
pessoa0.fala();
pessoa0.incrementaIdade();
pessoa0.fala();
pessoa0.incrementaIdade();
pessoa0.fala();
pessoa0.incrementaIdade();
pessoa0.fala();
pessoa0.incrementaIdade();
pessoa0.fala();
pessoa0.incrementaIdade();




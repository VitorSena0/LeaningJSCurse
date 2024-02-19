class Pessoa {
    constructor(nome, sobrenome, idade, peso, altura){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    
    }
    fala(assunto){
        return `${this.nome} está falando ${assunto}`;
    }
    aumentaPeso(kg){
        this.peso += kg;
    }
}

const pessoa1 = new Pessoa('Vitor', 'Leonardo', 19, 58.5, 1.68);

console.log(pessoa1.fala('Bom dia!'));
console.log(pessoa1.peso);
pessoa1.aumentaPeso(2);
console.log(pessoa1.peso);
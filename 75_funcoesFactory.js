function criaPessoa(nome, sobrenome,peso,altura) {
    return {
        nome, sobrenome, 
        
        // Gatter , não é uma função, a função vira um atributo
        get nomeCompleto1() {
            return `${this.nome} ${this.sobrenome}` 
        },

        // Setter
        set primeiroNovoNome(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala: function(assunto){
            return `${nome} pesa ${peso} e está falando ${assunto}`
        },

        peso,
        altura,
        // Gatter
        get imc() {
            const indice = this.peso / (this.altura ** 2); 
            return indice.toFixed(2);
        }

    }
}

const pessoa1 = criaPessoa('vitor', 'leonardo', 56,1.68);
const pessoa2 = criaPessoa('Maria', 'Miranda', 68, 1.60);

console.log(pessoa1.nomeCompleto1)
pessoa1.primeiroNovoNome = 'Serjão Berranteiro Matador de Onça'
console.log(pessoa1.nome,pessoa1.sobrenome,pessoa1.peso)
console.log(pessoa1.imc);
console.log(pessoa1.fala('Bom dia!\n'));

console.log(pessoa2.nomeCompleto1)
pessoa2.primeiroNovoNome = 'Vinicius Pereira Cardoso';
console.log(pessoa2.nome,pessoa2.sobrenome,pessoa2.peso)
console.log(pessoa2.fala('Bom dia!'));
console.log(pessoa2.imc);


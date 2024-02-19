const _velocidade = Symbol('velocidade'); // O symbol é um identificador único, que não pode ser alterado, e é usado para criar atributos privados em classes

class Carro {
    constructor(nome, limiteVelocidade){
        this.limiteVelocidade = limiteVelocidade;
        this.nome = nome;
        this[_velocidade] = 0; // atributo privado
    }

    get getVelocidade(){
        return this[_velocidade];
    }

    set setVelocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= this.limiteVelocidade || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar(){
        if(this[_velocidade] >= this.limiteVelocidade) return;
        this[_velocidade]++;
    }
    desacelerar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Ferrari', 300);
for(let i = 0; i < 365; i++){
    c1.acelerar();
}
for(let i = 0; i < 135; i++){
    c1.desacelerar();
}

c1[_velocidade] = 400; // setter
console.log(c1[_velocidade]); // getter
console.log(c1[_velocidade]);
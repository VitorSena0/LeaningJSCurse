class DispositivoEletronico{
    constructor(marca){
        this.marca = marca
        this.ligado = false;
    }

    power(){
        this.ligado == true? this.ligado = false : this.ligado = true;
    }
}

// const d1 = new DispositivoEletronico('Samsung');
// d1.ligar();
// d1.ligar();
// console.log(d1.ligado);
// d1.desligar();
// d1.desligar();
// console.log(d1.ligado);

class Smartphone extends DispositivoEletronico{
    constructor(marca, cor, modelo){ // método construtor
        super(marca); // chama o construtor da classe pai
        this.cor = cor;
        this.modelo = modelo;
        this.bateria = 100;
        // this.ligado  foi definido na classe pai quando o método power foi chamado
    }

    get falaMarca(){
        return 'Marca: ' + this.marca;
    }

    get falaCor(){
        return 'Cor: ' + this.cor;
    }

    get falaModelo(){
        return 'Modelo: ' + this.modelo;
    }


    descarrega(){
        if(!this.ligado){
            console.log(this.marca + ' está desligado');
            return `ligado: ${this.ligado}`;
        }

        if(this.bateria === 15){
            console.log(this.marca + ' está com bateria baixa, carregue-o o quanto antes');
        }

        if(this.bateria <= 0){
            console.log(this.marca + ' está descarregado');
            this.ligado = false;
            return this.bateria;
        }

        this.bateria--;
        return this.bateria;
    }

    carregar(){
        if(this.bateria === 100){
            console.log(this.marca + ' já está carregado');
            return this.bateria;
        }
       return this.bateria++;
    }

}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1.ligado);
console.log(s1.falaMarca);
console.log(s1.falaCor);
console.log(s1.falaModelo);
//s1.power()
console.log(s1.ligado);
//s1.power()
console.log(s1.ligado);
//s1.power()
console.log(s1.ligado);
for(let i = 0; i <= 100; i++){
    console.log(s1.descarrega())
}
for(let i = 0; i <= 40; i++){
    console.log(s1.carregar())
}

console.log(s1.ligado);
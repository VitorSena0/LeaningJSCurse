//const _cpf = Symbol('cpf');
class CPF{
    #cpfLimpo; // Atributo privado
                // O # é usado para criar atributos privados em classes porém ainda está em fase experimental
    constructor(cpf){
        // Object.defineProperty(this, 'cpfLimpo', {
        //     value: cpf.replace(/\D+/g, ''), // Regex para limpar os pontos e a barra horizontal
        //     writable: false, // Não pode ser alterado ou escrever nela
        //     enumerable: false, // Não pode ser listado pois é um atributo privado, ou seja não é exibida no console.log
        //     configurable: false // Não pode ser configurado Não pode ser apagado
        // });
        this.#cpfLimpo = cpf === undefined? '': String(cpf).replace(/\D+/g, ''); // Regex para limpar os pontos e a barra horizontal
    };
    static calculoCPF(cpf,tamanho){ // Quando um método não contém o this ele pode ser um método estático
        const num = cpf.map((e)=> {
            tamanho--
            return parseInt(e)*tamanho
        }).reduce((acc, e) => acc + e,0); // O reduce soma todos os elementos do array
        const result = 11 - (num % 11)
        return result > 9? 0 : result
    }

   // get cpfLimpo(){return this.#cpfLimpo}; // Getter para ter acesso ao cpfLimpo, deixando o atributo privado e não podendo ser alterado ou apagado
    // Deixar desabilitado para não ser acessado
    
    validaCPF(){
        let cpfLimpoArray = Array.from(this.#cpfLimpo); // Pega o cpfLimpo e transforma em uma lista
        if(cpfLimpoArray.length !== 11) return false // Se o tamanho do cpf não for 11, retorna falso

        const ultimosDigit = cpfLimpoArray.splice(-2,2);// Retira e armazena os útimos dois dígitos do array

        const digito1 = CPF.calculoCPF(cpfLimpoArray, 11); // Calcula o primeiro digito
        cpfLimpoArray.push(digito1);
        const digito2 = CPF.calculoCPF(cpfLimpoArray , 12); // Calcula o segundo digito

        return [digito1, digito2].map((e)=>String(e)).toString() === ultimosDigit.toString() // É preciso converter de array para string para que a comparação seja satisfeita
    };
};

const cpf1 = new CPF("094.900.445-63");
console.log(cpf1.validaCPF())
console.log(cpf1.cpfLimpo) // Não pode ser acessado pois é um atributo privado
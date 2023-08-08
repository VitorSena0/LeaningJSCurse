function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
}

const produto = new Produto('camiseta', 20, 3);
produto.estoque = 100;
console.log(produto)
/*Jeito comum de se criar um objeto com função construtora*/


console.log("\n--------Exemplo 1----------\n")

function Produto2(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        value: estoque,
        writable: true,
        enumerable: true,
        configurable: true
    })
    // Object.defineProperty(objeto||this,nomePropriedade,descritor)
    // Descritor - é um objeto que descreve a propriedade que será definida, contendo as seguintes propriedades:
    /*
    value: o valor da propriedade
    writable: se a propriedade pode ser modificada (true ou false)
    enumerable: se a propriedade aparece nas iterações (true ou false)
    configurable:  indica se a propriedade pode ser deletada ou ter suas configurações modificadas. (true ou false)
    get: uma função que retorna o valor da propriedade (não pode ser definida juntamente com value e writable)
    set: uma função que define o valor da propriedade (não pode ser definida juntamente com value e writable)
    */
}

const produto2 = new Produto2('camiseta', 30, 200)
console.log(produto2)
console.log(Object.keys(produto2))

console.log("\n--------Exemplo 2----------\n")



function Produto3(nome, preco, estoque) {

    // Agora com o defineProperties: Serve para mais de uma chave.
    Object.defineProperties(this, {
        nome: {
            value: nome,
            writable: false,
            enumerable: true,
            configurable: false,
        },

        preco: {
            value: preco,
            writable: false,
            enumerable: true,
            configurable: false,
        },

        estoque: {
            value: estoque,
            writable: true,
            enumerable: true, // Com isso não irá aparecer no console
            configurable: true,
        },
    })
}
const produto3 = new Produto3('Calça', 300, 16);

console.log(produto3);

console.log("\n--------Exemplo 3 getters e setters----------\n");


function Produto4(nome, valor, estoque) {
    this.nome = nome;
    this.valor = valor;
    Object.defineProperties(this, {
        valor: {
            enumerable: true,
            configurable: true,
            get: () => valor,
            set:(preco)=> {
                if(typeof preco !== 'number'){
                    return;
                }
                valor = preco;

                },
        }
    })

    Object.defineProperties(this, {
        estoque: {
            enumerable: true,
            configurable: true,
            get: () => estoque,
            set: (valor) => {
                if(typeof valor !== 'number'){ // Irá verificar se o valor novo setado é do tipo number ou outro tiopo;
                    return;
                }
                estoque = valor // Atribui o novo valor à variável estoque;
            },
        }
    })
}

const produto4 = new Produto4('carro', 50000, 5);
if(produto)
produto4.estoque = 50;
produto4.valor = 25000;

console.log(produto4)
console.log(produto4.estoque)
console.log(produto4.valor);


const criaPessoa = (nome)=>{
    return {
        get nome(){
            return nome
        },
        set nome(valor){
            valor = valor.replace(' Leonardo', '');
            nome = valor
        },
    };
}

const pessoa = criaPessoa('Elon musk');
console.log(pessoa.nome);
pessoa.nome = 'Vitor Leonardo Sena De Lima';

console.log(pessoa.nome);




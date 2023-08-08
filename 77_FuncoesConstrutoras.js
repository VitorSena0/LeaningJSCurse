/*Podemos pensar em funções construtoras como fábricas que produzem objetos de um determinado tipo. Elas funcionam como moldes que geram diversos objetos com as mesmas propriedades e métodos, mas que podem ter valores diferentes em seus atributos. É como se a fábrica produzisse diversas cadeiras com as mesmas características, mas de cores diferentes.

Já as funções fábricas podem ser comparadas a artesãos que produzem objetos únicos e personalizados, sob demanda. Eles criam objetos a partir de uma lógica ou conjunto de instruções específicas, como um pintor que cria uma obra de arte a partir de sua visão e técnica.

Resumidamente, funções construtoras criam objetos em massa, com as mesmas características, enquanto funções fábricas criam objetos personalizados, de acordo com a necessidade.*/

// Nas funções contrutoras sempre se inicia o nome da função com letra maiúscula;

function Pessoa(nome,sobrenome){
    // Atributos privados
    const ID = 1234;

    const metodoInterno = () => {

    }
    // Atributos e métodos públicos pois podem ser acessadas fora da função contrutora por conta do uso do this.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = ()=>{
        console.log(`${nome}, é uma pessoa`);
    };
}
// Para criar um objeto em funções construtoras sempre se utiliza o new
const p1 = new Pessoa('Vitor', 'Leonardo');
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1.nome,p2.sobrenome)

p1.metodo()
p2.metodo()
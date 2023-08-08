function* funcaoGeradora(){

    function Pessoa (nome,sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;

        this.falar = () => {
            console.log("bom dia");
        }
    };

    const p1 = new Pessoa('vitor','leonardo');

    yield p1.nome; 
    yield p1.sobrenome; 
    yield p1.falar(); 
}

const meuGerador = funcaoGeradora()

console.log(meuGerador.next().value)
console.log(meuGerador.next().value)
meuGerador.next().value


        console.log('\n-----------------\n');

function* funcaoGeradora2() {
    // Código qualquer;
    yield 'Valor 1'; // Valor retornado
    // Código qualquer
    yield 'Valor 2'; // Valor retornado
    // Código qualquer
    yield 'Valor 3'; // Valor retornado
}

const gerador = funcaoGeradora2();

console.log(gerador.next().value)
console.log(gerador.next().value)
console.log(gerador.next().value)

// console.log(gerador) // Object [Generator] {}
// console.log(gerador.next()) // { value: 'Valor 1', done: false }

/* Utilizando a sintaxe de desestruturação do objeto, é possível armazenar
 o valor retornado pelo yield na variável value e o estado da função geradora em done.*/

        console.log('\n--------------------\n')

// Utilizando iteração
 function* funcaoGeradora3() {
    // Código qualquer;
    yield 'Valor 1'; // Valor retornado
    // Código qualquer
    yield 'Valor 2'; // Valor retornado
    // Código qualquer
    yield 'Valor 3'; // Valor retornado
}

const gerador2 = funcaoGeradora3();
for (let valor of gerador2){
    console.log(valor);
};


        console.log('\n--------------------\n')


// A função pode ser atualizada toda vez que é chamada;
function* funcaoGeradora4(){
    let i = 0;
    while(true){
        yield i
        i++
    }
}

const gerador3 = funcaoGeradora4();

console.log(gerador3.next().value)
console.log(gerador3.next().value)
console.log(gerador3.next().value)
console.log(gerador3.next().value)
console.log(gerador3.next().value)
console.log(gerador3.next().value)
console.log(gerador3.next().value)
console.log(gerador3.next().value)
console.log(gerador3.next().value)
console.log(gerador3.next().value)
console.log(gerador3.next().value)
console.log(gerador3.next().value)
console.log(gerador3.next().value)
console.log(gerador3.next().value)



        console.log("\n---------------\n")

// Delegação de valores com funções geradoras.
function* funcaoGeradora5(){
    yield 0;
    yield 1;
    yield 2;
}

function* funcaoGeradoraDelegada(){
    yield* funcaoGeradora5();

    yield 3;
    yield 4;
    yield 5;
}

const delegacao = funcaoGeradoraDelegada();
for(let valores of delegacao){
    // Primeiro será gerado os valores delegado ao primeiro yield, depois que for finalizado os yields será dada a continuidade para os yields da função que faz a delegação.
    console.log(valores)
}

// console.log(delegacao.next().value)
// console.log(delegacao.next().value)
// console.log(delegacao.next().value)
// console.log(delegacao.next().value)
// console.log(delegacao.next().value)
// console.log(delegacao.next().value)

    console.log('\n-------------------\n');

// Função geradora retornando função
function* funcaoGeradora6(){
    yield () => {
        console.log('yield retornando uma função');
    };
    
    //...
    
    yield () => {
        console.log('Segunda função retornada com yield');
    };
}

const geradora4 = funcaoGeradora6();
const funcao1 = geradora4.next().value;
const funcao2 = geradora4.next().value;
funcao1();
funcao2();
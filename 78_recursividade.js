let lista = [10,20,30,40,50,60];

function somaLista(lista) {
    if (lista.length === 0) {
      return 0;
    } else {
      let soma = lista[0] + somaLista(lista.slice(1));
      return soma;
    }
  }

  let resultado = somaLista(lista);

  console.log(resultado)
  
  /*

Uma lista lista com os valores [10, 20, 30, 40, 50, 60]. Quando você chama a função recursiva somaLista(lista), o seguinte processo ocorre:

A função somaLista(lista) é chamada pela primeira vez, com a lista [10, 20, 30, 40, 50, 60] como argumento.
A função verifica que a lista não está vazia (caso contrário, retornaria 0). Portanto, ela executa a linha return lista[0] + somaLista(lista.slice(1)).
A expressão lista[0] retorna o valor 10 (o primeiro elemento da lista).
A expressão lista.slice(1) retorna uma nova lista com todos os elementos da lista original a partir do segundo elemento (ou seja, [20, 30, 40, 50, 60]).
A função somaLista(lista.slice(1)) é chamada recursivamente, com a nova lista [20, 30, 40, 50, 60] como argumento.
A função somaLista([20, 30, 40, 50, 60]) é chamada. Ela segue os mesmos passos da primeira chamada, mas agora com a lista [20, 30, 40, 50, 60].
A expressão lista[0] nesta chamada retorna o valor 20 (o primeiro elemento da nova lista).
A expressão lista.slice(1) retorna uma nova lista com todos os elementos da nova lista original a partir do segundo elemento (ou seja, [30, 40, 50, 60]).
A função somaLista([30, 40, 50, 60]) é chamada recursivamente, com a nova lista [30, 40, 50, 60] como argumento.
Este processo continua recursivamente, chamando a função somaLista com listas cada vez menores, até que a lista esteja vazia (e, portanto, a recursão acaba).
A última chamada recursiva retorna 0, que é adicionado à soma de chamadas anteriores. Cada chamada anterior retorna a soma do seu primeiro elemento com o retorno da chamada recursiva subsequente.
A soma final é o resultado da função somaLista(lista).
---Na linha let soma = lista[0] + somaLista(lista.slice(1)), a expressão lista[0] + somaLista(lista.slice(1)) calcula a soma do primeiro elemento da lista
---com o resultado da chamada recursiva somaLista(lista.slice(1)), que é a soma dos elementos restantes da lista. O resultado desta soma é atribuído à variável soma.
No caso da lista [10, 20, 30, 40, 50,60], a soma final seria 10 + 20 + 30 + 40 + 50 + 60 = 210.*/




console.log('\n-------------------------\n')

function recursiva(max){
    console.log(max)
    if(max >= 10) return;
    max++;
    recursiva(max)
}

recursiva(0);


console.log('\n-------------------------\n')

function verificaNumeroPrimo(num) {
let divisores = [];
     for(let i =  0; i <= num; i++){
        if(num % i === 0){
            divisores.push(i)
        }
    }

    // if(num > 100) return;
  
    // if(num % 2 !=== 0) {
    //    console.log(`${num} é par`);
    // } else {
    //    console.log(`${num} é ímpar`);
    // }
  
    // num++;
  
    //verificaNumero(num);
 }
  
 verificaNumeroPrimo(10);
const nome = ['Vitor', 'Manoel', 'Ricardo', 'Santana', 'Arnaldo'];

// splice sintaxe: splice(indice inicial, quantidade Deletada, element add, element add, ...);



console.log(`Removido: ${nome.splice(0,1)}`); // imita o shift()
console.log(nome); // imita o shift

console.log('\n-----------------\n');

console.log(`Removido: ${nome.splice(-1,1)}`); // imita o pop()
console.log(nome);

console.log('\n-----------------\n');

console.log(`Adicionado: ${nome.splice(nome.length,0, 'Shwarza')}`); // imita o push() // não vale apena
console.log(nome);

console.log('\n-----------------\n');

console.log(`Adicionado: ${nome.splice(0,0, 'Matarazzo')}`); // imita o unshift();
console.log(nome);

console.log('\n-----------------\n');

console.log(`Meio removido ${nome.splice(1,3)}`);
console.log(nome);

console.log('\n-----------------\n');

console.log(`Meio adicionado: ${nome.splice(1,0, 'Pedro', 'Tesla', 'Xandão')}`);
console.log(nome)

console.log('\n-----------------\n');

console.log(`Apagar Resto: ${nome.splice(-2, Number.MAX_VALUE)}`) // Irá apagar os elementos a partir do indice -2;
console.log(nome)
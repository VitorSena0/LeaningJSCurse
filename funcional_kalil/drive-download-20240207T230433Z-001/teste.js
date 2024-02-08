// Função para gerar números aleatórios de 1 a 1000
function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 1000) + 1;
}

let cont = 0;// Exemplo de uso
const listaNumerosAleatorios = []
while(cont < 100){
const numeroAleatorio = gerarNumeroAleatorio();
listaNumerosAleatorios.push(numeroAleatorio);
cont++
}


console.log(listaNumerosAleatorios);

let nome = 'vitor leonardo sena de lima'
console.log(
`Seu nome é: ${nome}.
Seu nome tem: ${nome.length} letras.
O primeiro índice da letra a do seu nome é: ${nome.indexOf("a")}
O ultimo índice da letra do meu nome: ${nome.lastIndexOf(nome[nome.length - 1])}
As ultimas 3 letras do meu nome são: ${nome.slice(-3,nome.length)}
As palavras do seu nome são: ${nome.split(' ')}
Meu nome com letras minúsculas: ${nome.toLocaleLowerCase()}
Meu nome com letras maiúsculas: ${nome.toLocaleUpperCase()} `
)
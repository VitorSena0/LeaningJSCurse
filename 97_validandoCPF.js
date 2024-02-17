// Colocar uma função auxiliar para uma melhor organização e desempenho
const validaCPF = (cpf) => {
    const cpfLimpo = cpf.replace(/\D+/g, '') // Regex para limpar os pontos e a barra horizontal
    let cpfArray = Array.from(cpfLimpo) // Pega o cpfLimpo e transforma em uma lista

        if(cpfArray.length == 11){
            soma = 0 
            lastDigit = cpfArray.splice(-2,2) // Retira e armazena os útimos dois dígitos do array
            cpfArray.reverse() // O cpf é invertido

             cpfArray.map(function(elemento,index){
                    soma += elemento * (index+2) // Cada elemento é multiplicado por index + 2 sendo o index começando por index = 0
            })

            resultado = 11 - (soma % 11)
            const firstDigit = resultado > 9? 0: resultado
            
            cpfArray.unshift(String(firstDigit)) // Adiciona o primeiro digito no inicio da string cpfArray 

            soma = 0
            cpfArray.map(function(elemento,index){ // Mapea cada elemento multiplica por  index + 2 e soma cada um
                    soma += elemento * (index + 2)
            })

            resultado2 = 11 - (soma % 11)
            const secondDigit = resultado2 > 9? 0 : resultado2

            cpfArray.unshift(String(secondDigit)) // Adiciona o elemento no início da string
            saida = cpfArray.reverse().join("") // Transforma a lista de lista de números em uma lista de string numérica

            if(saida === cpfLimpo){
                return true
            }else{
                return false
            }

        }
}
console.log(validaCPF("027.634.175-92"))
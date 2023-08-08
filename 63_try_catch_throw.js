// try{
//     console.log(naoExisto)
// }catch(error){
//     console.log('variavel não existe')
//     console.log(error)
// }


let soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números')
    }

    return x + y

}

try{
    console.log(soma(1,2));
    console.log(soma('1', 2))
}catch(error){
  //  console.log(error)
  console.log('coloca um alert para exibir o erro\n\n')
}

// try{
//     console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro')
//     console.log('fechei o arquivo')
// } catch(err){
//     console.log('tratar o erro')
// }finally{
//     console.log('script aqui sempre será executado')
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)){ // o instaceof verifica se o parâmetro 'data' é uma instância de Date()
        throw new TypeError('Esperando instância de Date.') // O throw lança o erro ocorrido
    }

    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-br',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
       // hour12: true | isto tranforma as horas em 9:59:39 PM (neste formato)
    })
}
try{
    const hora = retornaHora(11);
    console.log(hora)

}catch(error){
    // trata o error;
    console.log(error)
}finally{
    console.log('Tenha um bom dia!')
}
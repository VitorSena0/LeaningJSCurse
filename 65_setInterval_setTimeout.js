
const mostraHora = () => {
    let hora = new Date();

    const segundos = hora.getSeconds();

    if(segundos === 30){
        paraHora();
    }

    return hora.toLocaleTimeString('pt-br',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}
const intervalo = setInterval( ()=>{
    console.log(mostraHora())

},1000)


function paraHora(){
        clearInterval(intervalo)
    }

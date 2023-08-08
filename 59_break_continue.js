const numeros = [1,2,3,4,5,6,7,8,9];

for (let impares of numeros){
    if(impares % 2 === 0){
        continue
    }

    if(impares === 7){
        break
    }

    console.log(impares)
}
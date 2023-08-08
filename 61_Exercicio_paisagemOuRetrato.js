
function isLandscape(large,height){
    return large > height;
}

console.log(isLandscape(20,10))


// Usando o arrow function
const isLandscape2 = (large,height) => large > height ? true : false

console.log(isLandscape2(30,40))
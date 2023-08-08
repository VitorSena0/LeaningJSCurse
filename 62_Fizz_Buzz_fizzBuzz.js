let aleatoryNumber = function(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

const verifyNumber = (number) => {
    if(number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'
    if(number % 5 === 0) return 'Buzz'
    if(number % 3 === 0) return 'Fizz'
    if(isNaN(number)) return number
    return number
    };

console.log(verifyNumber(aleatoryNumber(1,100)))
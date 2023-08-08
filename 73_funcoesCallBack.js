
const valorAleatorio = (min = 0, max = 2000) => {
   return Math.floor(Math.random() * (max - min) + min);
} 

function f1(callBack){
    setTimeout(function(){
        console.log('função1\n')

        if(callBack) callBack();
        
    },valorAleatorio());
}

function f2(callBack) {
    setTimeout(function(){
        console.log('função2\n');

        if(callBack) callBack();

    },valorAleatorio());
}

function f3(callBack) {
    setTimeout(function(){
        console.log('função3\n');

        if(callBack) callBack();

    },valorAleatorio());
}

f1(f1CallBack)

function f1CallBack() {
    f2(f2CallBack)
}

function f2CallBack() {
    f3(f3CallBack)
}

function f3CallBack() {
    console.log('Olá mundo');
}

// f1(function (){
//     f2(function (){
//         f3(function() {
//             console.log('olá mundo\n');
//         })
//     })
// })

// f1();
// f2();
// f3();
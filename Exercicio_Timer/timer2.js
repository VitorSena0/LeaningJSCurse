const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const zerar = document.getElementById('zerar');
let timer = document.getElementsByClassName('timer')[0];


let horas = 0;
let minutos = 0;
let segundos = 0;

const atualizacao = 1000
let emExecucao = false; // Esta será uma variável de controle serve para previnir que um novo setInterval é criado, então vários cronômetros acabam sendo executados em paralelo.
let cronometro; // Para ficar no escopo global;
iniciar.addEventListener('click', function () {
    
    if (!emExecucao) {
        timer.className = 'timer'
        cronometro = setInterval(function () {
            segundos++
            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }

            if (minutos === 60) {
                horas++;
                minutos = 0;
            }

            let mostraSegundos = (segundos < 10) ? `0${segundos}` : segundos;
            let mostraMinutos = (minutos < 10) ? `0${minutos}` : minutos;
            let mostraHoras = (horas < 10) ? `0${horas}` : horas;

            timer.innerHTML = `${mostraHoras}:${mostraMinutos}:${mostraSegundos}`;

        }, atualizacao);

        emExecucao = true;

    }

    pausar.addEventListener('click', function () {
        timer.className = 'pausado'
        clearInterval(cronometro);
        emExecucao = false;
    })

    zerar.addEventListener('click', function () {
        timer.className = 'pausado'
        horas = 0;
        minutos = 0;
        segundos = 0;
        timer.innerHTML = `0${horas}:0${minutos}:0${segundos}`;
        clearInterval(cronometro);
        emExecucao = false;
    })
})


// Sobre a variável de controle ///////

/*
    A variável 'emExecucao' se inicia com o valor falso, assim que o botão é clicado,
    o evento é acionado então entra em seguida a condicional, que verifica se tal variável
    é falsa, pois se for, ele será convertida para verdadeira por causa do operador '!'.

    ao terminar a executão contida na condicional, o valor da variável 'emExecução' será convertido
    para true/verdadeiro, pois dessa forma, caso o usuário queira clicar novamente e repetidamente no
    botão de iniciar isso impedirá que a contagem do interval seja executada novamente e que implicasse
    em modificar exponencialmete o intervalo de tempo de execução.

    o valor da variável 'emExecucao' ficará novamente com falor de false/falso se o usuário clicar no botão 
    de pausar ou zerar e consequentemente ativar o evento que alterará o valor de tal variável,
    permitindo assim que possa ser clicado novamente o botão iniciar somente uma vez a cada 'click'.
*/
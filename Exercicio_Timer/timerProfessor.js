function relogio() {



    let criaHoraSegundos = function (segundos) {
         data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC' // Serve para não considerar o timezone do computador, assim fazendo com que o horário fique zerado;
        });

    }

    const timer = document.querySelector('.timer'); 

    let segundos = 0;
    let emExecucao = false;
    let cronometro;
    
    let iniciarCronometro = function () {
        segundos = adicionaSegundo();
        cronometro = setInterval(function () {
            segundos++;
            console.log(segundos);
            timer.innerHTML = criaHoraSegundos(segundos);
            salvarSegundos()
        }, 1000);
    }

    const classe = localStorage.getItem('classe')
          timer.className = classe;


    let salvarSegundos = function () {
        const segundo = JSON.stringify(segundos);
        localStorage.setItem('segundo', segundo);
        localStorage.setItem('classe', timer.className)
    }

    let adicionaSegundo = function (){
        const segundo = localStorage.getItem('segundo');
        const converteSegundo = JSON.parse(segundo);
        
        data2 = new Date(converteSegundo * 1000)
        timer.innerText = data2.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC' // Serve para não considerar o timezone do computador, assim fazendo com que o horário fique zerado;
        });
        // const converteClasse = JSON.parse(classe);
        return converteSegundo
    }
    adicionaSegundo();

    


    document.addEventListener('click', function (evento) {
        const elemento = evento.target;
        if (!emExecucao) {
            if (elemento.classList.contains('iniciar')) { // Retorna true ou false a depender se contém ou não
                timer.className = 'timer';
                clearInterval(cronometro);
                iniciarCronometro();
                salvarSegundos()
            }
            emExecucao = true
        }
        if (elemento.classList.contains('zerar')) { 
            clearInterval(cronometro);
            timer.innerHTML = '00:00:00';
            timer.className ='timer';
            segundos = 0;
            emExecucao = false;
            salvarSegundos()

        }
        if (elemento.classList.contains('pausar')) {
            clearInterval(cronometro);
            timer.className = 'pausado';
            emExecucao = false;
            salvarSegundos()

        }
    });


}
relogio();
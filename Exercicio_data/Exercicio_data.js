setInterval(function () {
    let date = new Date();

    const getDate1 = function (date) {

        const weekDay = trasformaSemana(date.getDay() + 1);
        const day = date.getDate();
        const month = trasformaMes(date.getMonth());
        const year = date.getFullYear();
        const minute = addZeroleft(date.getMinutes());
        const hour = addZeroleft(date.getHours());
        const second = addZeroleft(date.getSeconds());


        return `${weekDay}, ${day} de ${month} de ${year} às ${hour}:${minute}:${second}`

    }

    function addZeroleft(date2) {
        return date2 < 10 ? `0${date2}` : date2;
    }

    function trasformaSemana(weekDay) {
        const diaDaSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
        for(let i = 1; i < 8; i++){
            if(i === weekDay) return diaDaSemana[i - 1];
        }
        // Ineficiente //
        // if (weekDay === 1) { return 'Domingo' }
        // if (weekDay === 2) { return 'Segunda' }
        // if (weekDay === 3) { return 'Terça' }
        // if (weekDay === 4) { return 'Quarta' }
        // if (weekDay === 5) { return 'Quinta' }
        // if (weekDay === 6) { return 'Sexta' }
        // if (weekDay === 7) { return 'Sábado' }
    }
    function trasformaMes(mes) {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        
        return meses[mes]
    }


    let horario = document.getElementById('data')
    horario.innerHTML = getDate1(date);


    // Versão muito mais abstraída;
    const conteudo = document.querySelector('#data2');
    const data = new Date();
    conteudo.innerHTML = `${data.toLocaleDateString('pt-BR', { dateStyle: "full" })} ${data.toLocaleTimeString('pt-BR')}`;
}, 1000)

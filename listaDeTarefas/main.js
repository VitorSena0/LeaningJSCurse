const inputTarefa = document.querySelector('.input-tarefa');
const botaoTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas');


const criaLista = function () {
    const listas = document.createElement('li');
    return listas;
}


const criaTarefa = function (textoInserido) {
    const listaCriada = criaLista();
    listaCriada.innerText = textoInserido;
    tarefas.appendChild(listaCriada);
    CriaBotaoApagar(listaCriada)
    salvarTarefa();

}

const limpaImput = function () {
    inputTarefa.value = '';
    inputTarefa.focus();
}

const CriaBotaoApagar = function (lista) {
    lista.innerText += ' ' ;
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar Tarefa');
    lista.appendChild(botaoApagar)
}

const verificaTarefaRepete = function () {
    const listaTarefas = localStorage.getItem('tarefas');
    const arrayListaTarefa = JSON.parse(listaTarefas);

    if(listaTarefas){
        return arrayListaTarefa.indexOf(inputTarefa.value) !== -1;
    }

}

const DeletarTudoLista = function(){
    const pegaTodaLista = tarefas.querySelectorAll('li');
    const tarefasJSON = localStorage.getItem('tarefas');
    const listaDeTarefasJSOM = JSON.parse(tarefasJSON);

    for(let deletar in listaDeTarefasJSOM){
        pegaTodaLista[deletar].remove(); // remove todas as listas e seus conteúdos de maneira iterada

    }
}
///////////// Salvar o conteúdo das tarefas ////////////

const salvarTarefa = function () {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let lista of liTarefas) {
        let tarefaTexto = lista.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

const adicionaTarefaSalvas = function () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)

    if(listaDeTarefas){
        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa)
        }
    }
}
adicionaTarefaSalvas();


///////////////// Eventos ///////////////////
inputTarefa.addEventListener('keypress', function (eventoDaTecla) {
    // Com isto dá para ver os atrubutos do evento de pressionar a tecla. 
    if (eventoDaTecla.keyCode === 13) { // O keyCode é um atributo do objeto keyBoardEvet, por isso dá para acessar ele por .nomeDoAtributo;
        if (!inputTarefa.value) return;

        if (!verificaTarefaRepete()) {
            criaTarefa(inputTarefa.value);
            limpaImput();
        }else{
            alert('Esta tarefa já está registrada');
        }
    }
})

botaoTarefa.addEventListener('click', function (evento) {
    if (!inputTarefa.value) return; // retornará nada se o input estiver vazio;

    if(!verificaTarefaRepete()){
        criaTarefa(inputTarefa.value);
        limpaImput();
    }else{
        alert('Esta tarefa já está registrada')
    }
})

document.addEventListener('click', function (botaoClicado) {
    elemento = botaoClicado.target;
    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        salvarTarefa();
    }
    if(elemento.classList.contains('remove-all')){
        DeletarTudoLista();
        salvarTarefa();
    }
})

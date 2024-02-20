class ValidaFormulario{
    constructor(){
        this.form = document.querySelector(".cadastraUsuario");
        this.eventos();
    }

    eventos(){
        this.form.addEventListener('submit', (e)=>{
            this.handleDefault(e);
        });
    };

    handleDefault(e){
        e.preventDefault();
        const camposValidos = this.checarCampos();
    }

    checarCampos(){
        const valido = true;
        this.form.querySelectorAll('.validar').forEach((campo)=>{
            // Se estivesse utlizando o label utilizaria o seguinte comando: campo.previousElementSibling.innerText
            const label = campo.getAttribute('placeholder');
            const text = campo.
            if(!campo.value){
                if(){

                }
                ValidaFormulario.geraErro(campo, `Campo ${label} não pode estar em branco`);
            }
        })
    }

    static geraErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');

        campo.insertAdjacentElement('afterend', div)
    }



}

const cadastro = new ValidaFormulario();






<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Formulário</title>
</head>
<body>
    <section class="container">
        <h1>Formulário de cadastro</h1>
        <ul>
            <li>Nenhum campo pode estar vazio</li>
            <li>Usuário só poderá conter letras e/ou números</li>
            <li>Usuário deverá ter entre 3 e 12 caracteres</li>
            <li>A senha precisa ter entre 6 e 12 caracteres</li>
        </ul>

        <form action="/" method="POST" class="cadastraUsuario">

            <input type="text" placeholder="Nome" class="nome validar" >
            <input type="text" placeholder="Sobrenome" class="sobrenome validar" >
            <input type="text" placeholder="CPF" class="cpf validar" >
            <input type="text" placeholder="Usuário" class="usuario validar" >
            <input type="password" placeholder="Senha" name="" class="senha validar" >
            <input type="password" placeholder="Repetir senha" name=""  class="repetirSenha validar" >
            <button type="submit" class="btnEnviar">Enviar</button>
        </form>
    </section>    
    <script src="main.js"></script>
</body>
</html>


:root {
    --primary-color: rgb(17, 86,102);
    --primary-color-darker: rgb(9,48,56);
}

* {
    box-sizing: border-box ;
    outline: 0;
}

body{
    margin: 0;
    padding: 0;
    background: var(--primary-color);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.3em;
    line-height: 1.5em;
}

.container{
    max-width: 640px;
    margin: 50px auto;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
}

form input, form label, form button{
    display: block;
    width: 100%;
    margin-bottom: 10px;
}

form input {
    font-size: 24px;
    height: 50px;
    padding: 0 20px;
    border-radius: 9px;
}

form input:focus {
    outline: 1px solid var(--primary-color);
}

form button {
    border: none;
    background: var(--primary-color);
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    height: 50px;
    cursor: pointer;
    margin-top: 30px;
}

form button:hover{
    background: var(--primary-color-darker);
}

.error-text {
    font-size: 12px;
    color: red;
}

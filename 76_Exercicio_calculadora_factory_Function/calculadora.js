// function criaCalculadora() {

//     return {
//         display: document.querySelector('.display'),


//         // Métodos //

//         //OBS: Sempre que eu quiser referenciar uma chave/método de um objeto dentro de outra chave/método de um objeto tenho que por o this antes de chamar a outra função
//         inicia() {
//             this.pegaEventoClick();
//             this.pressionaEnter();
//         },

//         limpaDisplay() {
//             this.display.value = '';
//         },

//         deleteCaractere() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         pressionaEnter(){
//             this.display.addEventListener('keyup', (event) =>{
//                 if(event.keyCode === 13){
//                     this.calcula();
//                 }
//             })
//         },

//         calcula() {
//             let conta = this.display.value;

//             try {
//                 conta = eval(conta);
//                 // Se for inserido na função eval() uma instrução javascript inválida e função retornará um erro no console. E não executará a conta.
//                 // Para tratar o erro gerado pelo eval() usamos o try e catch para tratá-lo;
//                 if (!conta) { 
//                     alert('Conta Inválida');// Caso esteja vazio ele retorna este alert
//                     return;
//                 }
//                 this.display.value = String(conta) // transforma o type number para string

//             } catch(e) {
//                 alert('conta inválida');
//                 return;
//             }
//         },


//         //OBS-2: Se vc utilizar o arrow function terá o this sempre travado em quem criou o elemento, assim não sendo necessário a utilização do bind()
//         // Eventos //
//         pegaEventoClick: function () {
//             document.addEventListener('click', (e) => {
//                 const elemento = e.target;

//                 if (elemento.classList.contains('btn-num')) {
//                     this.botaoEnviaNumParaDisplay(elemento.innerText);
//                 }
//                 if (elemento.classList.contains('btn-clear')) {
//                     this.limpaDisplay();
//                 }
//                 if (elemento.classList.contains('btn-delete')) {
//                     this.deleteCaractere();
//                 }
//                 if (elemento.classList.contains('btn-equal')) {
//                     this.calcula();
//                 }

//                 this.display.focus();
//             })//.bind(this)                  Faz com que o this seja referenciado ao objeto calculadora e não ao objeto document.
//                                             // é utilizado quando não é uma arrow function
//         },

//         botaoEnviaNumParaDisplay(valor) {
//             this.display.value += valor;
//         }

//     }
// }

// const calculadora = criaCalculadora();

// calculadora.inicia();


/// Conversão para função construtora //

function Calculator() {
    
    this.display = document.querySelector('.display');
    
    
    // Events //
    
    // O start é um atributo do objeto Calculator, pois utiliza o this, que pode ser reutilizado na criação de um objeto;
    this.Start = () => { captureClic(); pressEnter()};

    // OBS:  Os métodos com const não são globais, elas estão privadas dentro da função construtora.
    
        const captureClic = () => {
        document.addEventListener('click', (e) => {
            const digit = e.target;
            
            if (digit.classList.contains('btn-clear')) ClearDisplay();
            if (digit.classList.contains('btn-delete')) DeleteIntemDisplay();
            if (digit.classList.contains('btn-equal')) result();
            if (digit.classList.contains('btn-num')) InnerDigit(digit.innerText);

            
            this.display.focus() // Resolve o bug do enter
            
        });
    }
  
    
    
    // METHODS //
        const result = () => {
            let conta = this.display.value;
    
            try {
                conta = eval(conta)
                if (!conta) {
                    alert('Insira valores antes de efetuar a conta');
                    return;
                }
    
                this.display.value = String(conta)
            } catch (e) {
                alert('Digitos inválidos');
                return;
            }
        };


    const pressEnter = () => {
        this.display.addEventListener('keyup', function (e) {
            if (e.keyCode === 13) {
                result();
            }

        }) // O bind faz com que o this seja referenciado ao objeto calculadora e não a display(), poderia resolver isso usando o arrow function também
    }

    const ClearDisplay = () => this.display.value = '';
    const DeleteIntemDisplay = () => this.display.value = this.display.value.slice(0, -1);
    const InnerDigit = (digit) => this.display.value += digit;




}

const calculadora = new Calculator();
calculadora.Start();



function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo= saldo;
}

Conta.prototype.sacar = function (valor) {
    if(this.saldo < valor){
        this.verSaldo();
        console.log(`Saldo insuficiente para saque, R$${this.saldo.toFixed(2)} depositado`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Seu saldo na conta ${this.agencia}/${this.conta}, é de R$${this.saldo.toFixed(2)}`)    
};

//const conta1 = new Conta(11,22, 50);

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)//herda os métodos definidos no protótipo da função Conta.
CC.prototype.constructor = CC // Após a linha anterior (CC.prototype = Object.create(Conta.prototype)), essa propriedade constructor teria apontado para a função Conta. Portanto, esta linha corrige isso, atribuindo explicitamente a CC como o construtor do protótipo.

CC.prototype.sacar = function(valor){ // Com Essa nova funcionalidade o saldo pode ficar negativo até um certo limte
    if(valor > this.saldo + this.limite) {
        console.log(`Limite de saque atingido R$-${this.limite}, R$${this.saldo.toFixed(2)} depositado`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

//const cc1 = new CC(11,22,54, 400);









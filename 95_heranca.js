function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.acrescimo = function(percentual){
    this.preco += this.preco * (percentual/100);
}; 
Produto.prototype.desconto = function(percentual){
    this.preco -= this.preco * (percentual/100);
};

const p1 = new Produto('Camiseta', 50);

console.log(p1);

function Roupa(nome, preco, cor, tamanho){
    Produto.call(this.nome, this.preco);
    this.cor = cor;
    this.tamanho = tamanho;
}
Roupa.prototype = Object.create(Produto.prototype);
Roupa.prototype.constructor = Roupa;

const r1 = new Roupa('Calça', 300, 'Preta', 'G');

for (let elem in r1){
    console.log(r1[elem]);
}
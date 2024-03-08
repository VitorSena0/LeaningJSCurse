const livro = Object.freeze({ titulo: undefined, autor: undefined, ano: undefined, genero: undefined });

const catalogo = Object.freeze([{titulo: 'livro0', autor: 'autor0', ano: 2021, genero: 'Romance' }]); // armazena os livros; inicia com um livro

const adicionarLivro =  (livro) => (catalogo) => (titulo, autor, ano, genero) => {
    const novoLivro = {...livro, titulo, autor, ano, genero}; // cria um novo livro com os valores passados
    const novoCatalogo =  [...catalogo, novoLivro]; // adiciona o novo livro ao catalogo
    return novoCatalogo
};

const listarLivros = (catalogo) => {
  return catalogo.map((livro)=> console.log(livro)) 
}

const buscarPorGenero = (catalogo) => (genero) => {
 return catalogo.filter((livros)=> livros.genero == genero)
}

const removerLivro = (catalogo) => (titulo) => {
 return catalogo.filter((livros)=> livros.titulo != titulo)

}

const OdenaLivrosPorAno = (catalogo) => {
  return [...catalogo].sort((a, b) => a.ano - b.ano)
}

// Função auxiliar para contar a quantidade de livros por genero
const contaGenerosAux = (catalogo) => (genero) => {
  const [x,...xs] = catalogo;
  if (x === undefined) return 0;
  if (x.genero === genero) return 1 + contaGenerosAux(xs)(genero);
  return contaGenerosAux(xs)(genero);
} 
const contaGeneros = (catalogo) => {
  const generosContados = catalogo.reduce((acc, livro)=>{
    // verifica se o genero do livro já foi contado
    const indice = acc
      .map((elem) => elem.genero)
      .indexOf(livro.genero);
    // se o genero ainda não foi contado, adiciona o genero ao array
    if(indice == -1){
     acc = [...acc, {genero: livro.genero, quantidade: contaGenerosAux(catalogo)(livro.genero)}]
    }
    return acc // atualiza o array de livros com os generos contabilizados
  },[])

  return generosContados
}


const editarLivro = (catalogo) => (BuscaPortitulo) => (livro) => (autor) => (ano) => (genero) => {
  const livroEditado = catalogo.map((livros)=>{
    if(livros.titulo === BuscaPortitulo){
      // retorna o livro com os novos valores e verifica se o atributo precisa ser alterado
      return {...livros, titulo: livro == undefined? livros.titulo:livro, 
                         autor: autor == undefined? livros.autor:autor,
                         ano: ano == undefined? livros.ano:ano, 
                         genero: genero == undefined? livros.genero: genero}
    }
    return livros // retorna o livro sem alterações
  })
  return livroEditado
}

// Gerenciamento do catálogo de livros, onde é possível adicionar, listar, buscar, remover, ordenar os livros
const gerenciaCatalogo = ((catalogo) => (livro) => {
  const adiciona_livros = adicionarLivro(livro);

  const catalogo1 = adiciona_livros(catalogo)('livro1', 'Autor1', 2022, 'Ficção');
  const catalogo2 = adiciona_livros(catalogo1)('livro2', 'Autor2', 2023, 'Aventura');
  const catalogo3 = adiciona_livros(catalogo2)('livro3', 'Autor3', 2012, 'Aventura');
  const catalogo4 = adiciona_livros(catalogo3)('livro4', 'Autor4', 2015, 'ficção');
  const catalogo5 = adiciona_livros(catalogo4)('livro5', 'Autor5', 2018, 'Aventura');
  const catalogo6 = adiciona_livros(catalogo5)('livro6', 'Autor6', 2000, 'Comédia');
  const catalogo7 = removerLivro(catalogo6)('livro3')
  const catalogo8 = OdenaLivrosPorAno(catalogo7)

  // Imprime os livros adicionados
  listarLivros(catalogo8)

  // Faz a busca pelo genero e retorna uma lista de livros 
  console.log(buscarPorGenero(catalogo8)('Aventura'))

  // Conta a quantidade de livros por genero, retornando um array com os generos e a quantidade de livros
  console.log(contaGeneros(catalogo8))

  // Edita um livro, passando o titulo do livro a ser editado e os novos valores para o livro
  // Os argumentos se tornam opcionais, caso não queira editar um campo, basta deixar vazio
  console.log(editarLivro(catalogo8)('livro1')()()(1977)('Aventura'))


  return catalogo8
})(catalogo)(livro);


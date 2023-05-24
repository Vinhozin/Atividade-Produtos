 // divListaProduto.insertAdjacentHTML('afterbegin', '');
 class Produto {
    constructor (nome, dataCadastro, descricao, preco){
    this.nome = nome;
    this.dataCadastro = dataCadastro;
    this.descricao = descricao;
    this.preco = preco;
  }
  mostrarProdutos (){
    return this.nome + this.dataCadastro + this.descricao + this.preco ;
  }
  }
  
  const produto = new Produto("Lojinha do Muichiro Tokito", "02-09-1945", "Action Figure Muichiro Tokito", "R$ 375");
  console.log(produto.mostrarProdutos())
  
  class ProdutosDestaque extends Produto{
    constructor (nome, dataCadastro, descricao,  preco, imagemDestaque){
      super(nome, dataCadastro, descricao, preco, imagemDestaque)
      this.imagemDestaque = imagemDestaque;
    }
    mostrarProdutosDestaque (){
        return `
        <h1 class = "tokitocorinthiano">${this.nome}</h1>
        <h4> ${this.dataCadastro}</h4>
        <img src="${this.imagemDestaque}" style="height: 350px"/>
        <p> ${this.descricao}</p>
        <p> ${this.preco}</p>
        ` 
       // return this.nome + this.dataCadastro + this.descricao + this.preco + this.imagemDestaque;
     }
  }   
  const produtosDestaque = new ProdutosDestaque("Lojinha do Muichiro Tokito", "02-09-1945", "Action Figure Muichiro Tokito", "R$ 375", "https://www.hooverhousehobbies.com/uploads/1/3/9/0/139050813/s765526538635869294_p5964_i1_w1080.png");
  //console.log(produtosDestaque.mostrarProdutosDestaque())
  
  
  const produtos = document.getElementById("produto-destaque")
  produtos.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());
  
  
  class ProdutosdaLista extends Produto{
    constructor (nome, dataCadastro, descricao,  preco, imagemDestaque, nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4){
      super(nome, dataCadastro, descricao, preco, imagemDestaque, nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4)
      this.imagemDestaque = imagemDestaque;
      this.nome2 = nome2;
      this.descricao2 = descricao2;
      this.preco2 = preco2;
      this.nome3 = nome3;
      this.descricao3 = descricao3;
      this.preco3 = preco3;
      this.nome4 = nome4;
      this.descricao4 = descricao4;
      this.preco4 = preco4;
    }
  mostrarListaProdutos() {
    return `
      
      <div class="listinha">
    <div class="grid-container">
      <div class="coluna">
      <h4>${this.nome2}</h4>
      <p>${this.descricao2}</p>
      <p>${this.preco2}</p>
      </div>
      <div class="coluna">
      <h4>${this.nome3}</h4>
      <p>${this.descricao3}</p>
      <p>${this.preco3}</p>
      </div>
      <div class="coluna">
      <h4>${this.nome4}</h4>
      <p>${this.descricao4}</p>
      <p>${this.preco4}</p>
      </div>
    </div>
  </div>
    `;
  }
  }
  
  const produtosLIsta = new ProdutosdaLista("Nichirin Hashira da Névoa", "14-03-2019", "Haori Muichiro Tokito Larga", "R$ 149,99", "https://www.hooverhousehobbies.com/uploads/1/3/9/0/139050813/s765526538635869294_p5964_i1_w1080.png", "Nichirin Hashira da Névoa", "Espada do Hashira da Névoa Muichiro Tokito", "R$ 576", "Ração para Corvo", "Ração para os Corvos do Esquadrão de Caçadores de Demonios", "R$ 75", "Clyde - Treino de Respiração", "Melhore sua capacidade respiratória", "R$ 220");
  
  const listaProdutos = document.getElementById("lista-produtos")
  listaProdutos.insertAdjacentHTML('afterbegin', produtosLIsta.mostrarListaProdutos());
  //const listaProdutos = document.getElementById("lista-produtos")
  //divListaProduto.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());
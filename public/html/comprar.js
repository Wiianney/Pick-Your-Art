// Função para adicionar item ao carrinho e redirecionar para o carrinho
function adicionarAoCarrinho(nome, preco, imagem) {
  // Criando um objeto de obra de arte
  const obraDeArte = {
      nome: nome,
      preco: preco,
      imagem: imagem
  };

  // Recuperando o carrinho atual do localStorage (se existir)
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Adicionando o novo item ao carrinho
  carrinho.push(obraDeArte);

  // Salvando o carrinho atualizado no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Alerta de confirmação
  alert(`${nome} foi adicionado ao carrinho.`);

  // Redireciona para a página do carrinho
  window.location.href = 'testecopy.html';
}
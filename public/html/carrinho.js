// Recuperando o carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let total = 0;

// Função para exibir os itens do carrinho
function atualizarCarrinho() {
    const listaItens = document.getElementById('itensCarrinho');
    const totalCarrinho = document.getElementById('totalCarrinho');
    
    // Limpa a lista atual
    listaItens.innerHTML = '';
    total = 0;

    // Adiciona cada item do carrinho à lista
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" style="max-width: 50px; margin-right: 10px;">
            ${item.nome} - R$ ${item.preco.toFixed(2)}
        `;
        listaItens.appendChild(li);
        total += item.preco;
    });

    // Atualiza o total
    totalCarrinho.textContent = total.toFixed(2);
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("O carrinho está vazio!");
    } else {
        alert(`Compra finalizada com sucesso! Total: R$ ${total.toFixed(2)}`);
        // Limpa o carrinho
        localStorage.removeItem('carrinho');
        atualizarCarrinho();
    }
}

// Função para copiar o total para a área de transferência
function copiarParaAreaDeTransferencia() {
    navigator.clipboard.writeText(total.toFixed(2)).then(() => {
        alert('Total copiado para a área de transferência: R$ ' + total.toFixed(2));
    }).catch(err => {
        alert('Erro ao copiar para a área de transferência: ' + err);
    });
}

// Atualiza a visualização do carrinho
atualizarCarrinho();
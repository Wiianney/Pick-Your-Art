/*/const loginForm = document.getElementById('loginForm');

// Adiciona um evento de submit para capturar os dados
loginForm.addEventListener('submit', function (event) {
    // Impede o envio do formulário (para fins de demonstração)
    event.preventDefault();

    // Captura os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Exibe os dados no console (você pode usar esses dados como preferir)
    console.log('Nome de usuário:', username);
    console.log('Senha:', password);

    // Aqui, você pode enviar os dados para um servidor ou realizar outra ação
    // Exemplo: enviar os dados via fetch para um servidor
    /*
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => console.log('Login bem-sucedido:', data))
    .catch(error => console.error('Erro ao realizar login:', error));
    */
const loginForm = document.getElementById('loginform');
const errorMessage = document.getElementById('errorMessage');

// Adiciona um evento de submit para capturar os dados
loginForm.addEventListener('submit', function (event) {
    // Impede o envio do formulário (para fins de demonstração)
    event.preventDefault();

    // Captura os valores dos campos de entrada
    const username = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    // Validação simples: o nome de usuário deve ser "usuario" e a senha "senha123"
    if (username === "davi@gmail.com" && password === "senha123") {
        // Redireciona para a página home.html
        window.location.href = "home.html";
    } else {
        // Exibe a mensagem de erro
        errorMessage.style.display = "Seu login é inválido ";
    }

    const loginForm = document.getElementById('cadastrocliente');
    const errorMessage = document.getElementById('errorMessage');
});     
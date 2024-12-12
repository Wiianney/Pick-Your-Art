 // Captura o evento de envio do formulário de login
 document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Pega os dados inseridos no formulário
    const emailLogin = document.getElementById("emailLogin").value;
    const senhaLogin = document.getElementById("senhaLogin").value;

    // Recupera os dados do usuário armazenados no localStorage
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    // Verifica se os dados do usuário existem e se o e-mail e senha batem
    if (usuarioSalvo && usuarioSalvo.email === emailLogin && usuarioSalvo.senha === senhaLogin) {
        alert("Login bem-sucedido!");
        // Redireciona para uma página protegida (por exemplo, página principal)
        window.location.href = "home.html";
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
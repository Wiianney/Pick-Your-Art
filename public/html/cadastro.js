document.getElementById("cadastroform").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Pega os dados dos campos do formulário
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const endereco = document.getElementById("endereco").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;
    const confirmeSenha = document.getElementById("confirme-sua-senha").value;

    // Valida se as senhas coincidem
    if (senha !== confirmeSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    // Cria um objeto para armazenar os dados
    const usuario = {
        nome: nome,
        cpf: cpf,
        endereco: endereco,
        email: email,
        telefone: telefone,
        senha: senha
    };

    // Armazena os dados no localStorage (em formato JSON)
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Alerta de sucesso
    alert("Cadastro realizado com sucesso!");
    // Redireciona para a página de login
    window.location.href = "http://localhost:3000/html/Login.html";
});
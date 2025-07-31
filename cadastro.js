function cadastrarUsuario(event) {
  event.preventDefault();

  const email = document.getElementById("emailCadastro").value;
  const senha = document.getElementById("senhaCadastro").value;
  const confirmar = document.getElementById("confirmarSenha").value;

  if (senha !== confirmar) {
    alert("As senhas não coincidem.");
    return;
  }

  // Verifica se já existe um usuário com esse email
  if (localStorage.getItem(email)) {
    alert("Esse email já está cadastrado.");
    return;
  }

  // Cria objeto com os dados
  const dados = {
    email: email,
    senha: senha
  };

  // Salva no localStorage com o email como chave
  localStorage.setItem(email, JSON.stringify(dados));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html"; // redireciona pro login
}

function fazerLogin(event) {
  event.preventDefault();

  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  const dadosSalvos = localStorage.getItem(email);

  if (!dadosSalvos) {
    alert("Usuário não encontrado.");
    return;
  }

  const usuario = JSON.parse(dadosSalvos);

  if (usuario.senha !== senha) {
    alert("Senha incorreta.");
    return;
  }

  // Login bem-sucedido: salva o login atual
  localStorage.setItem("usuarioLogado", email);

  alert("Login realizado com sucesso!");
  window.location.href = "principal.html"; // Redireciona para a principal
}

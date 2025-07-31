document.addEventListener("DOMContentLoaded", function () {
  const userInfo = document.getElementById("user-info");
  const userActions = document.getElementById("user-actions");
  const sidebar = document.getElementById("sidebar");
  const sidebarUser = document.getElementById("sidebar-user-name");

  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (usuarioLogado) {
    const dados = JSON.parse(usuarioLogado);
    userInfo.textContent = dados.email;
    sidebarUser.textContent = dados.email;

    userInfo.onclick = () => {
      sidebar.classList.toggle("hidden");
    };
  } else {
    userActions.classList.remove("hidden");
  }
});

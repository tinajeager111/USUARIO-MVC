const usuario = localStorage.getItem("usuario");
if (usuario == null) {
  window.location.href = "/";
}

function notification(message) {
  notificacion.classList.add("show-notification");
  notificacion.textContent = message;
  setTimeout(() => {
    notificacion.classList.remove("show-notification");
  }, 3000);
}

const cerrarsesion = document.querySelector("#cerrar-btn");

cerrarsesion.addEventListener("click", () => {
  localStorage.removeItem("usuario");
  window.location.href = "/";
});

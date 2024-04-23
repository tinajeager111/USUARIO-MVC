const formlog = document.querySelector("#form-login"),
  formregister = document.querySelector("#form-create"),
  Inputlog = document.querySelector("#login-input"),
  Inputregister = document.querySelector("#create-input"),
  notificacion = document.querySelector(".notification");

function notification(message) {
  notificacion.classList.add("show-notification");
  notificacion.textContent = message;
  setTimeout(() => {
    notificacion.classList.remove("show-notification");
  }, 3000);
}

formlog.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!Inputlog.value) {
    return notification("No puede dejar el campo vacío");
  }

  const consulta = await fetch("http://localhost:3000/usuarios", {
    method: "GET",
  }).then((response) => response.json());

  let existe = false;

  consulta.forEach((usuario) => {
    if (usuario.nombre === Inputlog.value) {
      existe = true;
    }
  });

  if (!existe) {
    return notification("El usuario que ha ingresado no existe");
  }

  localStorage.setItem("usuario", JSON.stringify({ nombre: Inputlog.value }));
  window.location.href = "/tareas";
});

formregister.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!Inputregister.value) {
    return notification("No puede dejar el campo vacío");
  }

  const consulta = await fetch("http://localhost:3000/usuarios", {
    method: "GET",
  }).then((response) => response.json());

  let existe = false;

  consulta.forEach((usuario) => {
    if (usuario.nombre === Inputregister.value) {
      existe = true;
    }
  });

  if (existe) {
    notification(`El usuario ${Inputregister.value} ya existe`);
    return;
  }

  await fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: Inputregister.value }),
  });
});

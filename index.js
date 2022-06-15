const nombre = "Leandro";
const apellido = "Pereyra";

const nombreApellido = {
  nombre,
  apellido,
};

sessionStorage.setItem("MisDatos", JSON.stringify(nombreApellido));
localStorage.setItem("MisDatos", JSON.stringify(nombreApellido));

const hoy = new Date();
document.cookie = `MiCookie=${JSON.stringify(
  nombreApellido
)};expires=${new Date(hoy.getTime() + 120000)}`;

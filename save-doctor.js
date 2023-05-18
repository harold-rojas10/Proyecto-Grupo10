const formularioDoc = document.getElementById("formularioDoctores")
formularioDoc.addEventListener('submit', (event) => {
  event.preventDefault();
  const datoDoc = {
    nombreDoc: document.getElementById('nombre').value,
    apellidoDoc: document.getElementById('apellido').value,
    cedulaDoc: document.getElementById('cedula').value,
    consultorio: document.getElementById('consultorio').value,
    correo: document.getElementById('correo').value,
    especialidad: document.getElementById('especialidad').value
  }
  //console.log(datoDoc)
  guardarCookies(datoDoc)
  const confirmacion = confirm("¿Desea ver los datos?")
  if (confirmacion == true) {
    window.location.href = "tabla-doctores.html"
  } else {
    formularioDoc.reset()
  }
})

function guardarCookies(paci) {
  //las cookies antiguas
  let datos = obtenerCookie("doctores");
  if (datos === "") {
    datos = "[]";
  }
  //objeto
  const docObjetos = JSON.parse(datos);
  //añadir nuevas
  docObjetos.push(paci);
  const jsonDatos = JSON.stringify(docObjetos)
  cambiarCookie("doctores", jsonDatos)

}
function obtenerCookie(nombre) {
  const cookies = document.cookie.split("; ")
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === nombre) {
      return decodeURIComponent(cookie[1]);
    }
  }
  return "";
}

function cambiarCookie(nombre, valor) {
  document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}
let tablaDoctor = document.getElementById("tabla-doctores")
let cuerpoTabla = tablaDoctor.querySelector("tbody")

const jsonDatos = JSON.parse(obtenerCookie("doctores"))
//const medicosCookie = JSON.parse(obtenerCookie('medico') || "[]");

for (let i = 0; i < jsonDatos.length; i++) {
  let registro = jsonDatos[i]
  agregarFila(registro)
}

function agregarFila(doctor) {
  let fila = cuerpoTabla.insertRow();
  let celdaNombreDoctor = fila.insertCell();
  let celdaApellidoDoctor = fila.insertCell();
  let celdaCedulaDocotor = fila.insertCell();
  let celdaConsultorio = fila.insertCell();
  let celdaEmail = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();

  celdaNombreDoctor.textContent = doctor.nombreDoc;
  celdaApellidoDoctor.textContent = doctor.apellidoDoc;
  celdaCedulaDocotor.textContent = doctor.cedulaDoc;
  celdaConsultorio.textContent = doctor.consultorio;
  celdaEmail.textContent = doctor.correo;
  celdaEspecialidad.textContent = doctor.especialidad;


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
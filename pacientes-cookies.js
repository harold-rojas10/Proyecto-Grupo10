let tablaPaciente = document.getElementById("tabla-pacientes")
let cuerpoTabla = tablaPaciente.querySelector("tbody")

const jsonDatos = JSON.parse(obtenerCookie("pacientes"))
//const medicosCookie = JSON.parse(obtenerCookie('medico') || "[]");

for (let i = 0; i < jsonDatos.length; i++) {
  let registro = jsonDatos[i]
  agregarFila(registro)
}

function agregarFila(paciente) {
  let fila = cuerpoTabla.insertRow();
  let celdaNombrePaciente = fila.insertCell();
  let celdaApellidoPaciente = fila.insertCell();
  let celdaCedulaPaciente = fila.insertCell();
  let celdaEdad = fila.insertCell();
  let celdaTelefono = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();

  celdaNombrePaciente.textContent = paciente.nombrePaci;
  celdaApellidoPaciente.textContent = paciente.apellidoPaci;
  celdaCedulaPaciente.textContent = paciente.cedulaPaci;
  celdaEdad.textContent = paciente.edadPaci;
  celdaTelefono.textContent = paciente.telefonoPaci;
  celdaEspecialidad.textContent = paciente.especialidad;


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
const formularioPaci = document.getElementById("formularioPacientes")
formularioPaci.addEventListener('submit', (event) => {
    event.preventDefault();
    const datoPaci = {
        nombrePaci: document.getElementById('nombre').value,
        apellidoPaci: document.getElementById('apellido').value,
        cedulaPaci: document.getElementById('cedula').value,
        edadPaci: document.getElementById('edad').value,
        telefonoPaci: document.getElementById('telefono').value,
        especialidad: document.getElementById('especialidad').value
    }
    console.log(datoPaci)
    guardarCookies(datoPaci)
    //const confirmacion = confirm("¿Desea ver los datos?")
    //if(confirmacion == true){
    //    window.location.href = "mascotas.html"
    //  }else{
        formularioPaci.reset()
    //  }
})

function guardarCookies(paci) {
    //las cookies antiguas
    let datos = obtenerCookie("pacientes");
    if (datos === "") {
        datos = "[]";
    }
    //objeto
    const paciObjetos = JSON.parse(datos);
    //añadir nuevas
    paciObjetos.push(paci);
    const jsonDatos = JSON.stringify(paciObjetos)
    cambiarCookie("pacientes", jsonDatos)

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
const pantallaInicio = document.getElementById("pantallaInicio");
const pantallaFormulario = document.getElementById("pantallaFormulario");
const pantallaResultado = document.getElementById("pantallaResultado");

const btnRegistrar = document.getElementById("btnRegistrar");
const btnAdministrador = document.getElementById("btnAdministrador");
const volverInicio = document.getElementById("volverInicio");
const volverMenu = document.getElementById("volverMenu");

const formAsistencia = document.getElementById("formAsistencia");

const resultadoNombre = document.getElementById("resultadoNombre");
const resultadoHora = document.getElementById("resultadoHora");
const resultadoEstado = document.getElementById("resultadoEstado");

const mensajeError = document.getElementById("mensajeError");

const bloqueJustificacion = document.getElementById("bloqueJustificacion");
const btnJustificar = document.getElementById("btnJustificar");
const mensajeJustificacion = document.getElementById("mensajeJustificacion");
const btnFalla = document.getElementById("btnFalla");

const listaHistorial = document.getElementById("listaHistorial");

// LOCAL STORAGE

let registros =
    JSON.parse(localStorage.getItem("registros")) || [];

let justificaciones =
    JSON.parse(localStorage.getItem("justificaciones")) || [];

// CARGAR HISTORIAL

registros.forEach(registro => {

    const item = document.createElement("li");

    item.textContent =
        `${registro.nombre} → ${registro.estado}`;

    listaHistorial.appendChild(item);

});

function cambiarPantalla(pantalla){

    pantallaInicio.classList.remove("activa");
    pantallaFormulario.classList.remove("activa");
    pantallaResultado.classList.remove("activa");

    pantalla.classList.add("activa");
}

btnRegistrar.addEventListener("click", () => {

    cambiarPantalla(pantallaFormulario);

});

btnAdministrador.addEventListener("click", () => {

    window.location.href = "admin.html";

});

volverInicio.addEventListener("click", () => {

    cambiarPantalla(pantallaInicio);

});

volverMenu.addEventListener("click", () => {

    formAsistencia.reset();

    mensajeError.textContent = "";
    mensajeJustificacion.textContent = "";

    mensajeError.className = "mensaje";
    mensajeJustificacion.className = "mensaje";

    bloqueJustificacion.classList.add("oculto");

    cambiarPantalla(pantallaInicio);

});

formAsistencia.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const hora = document.getElementById("hora").value;

    mensajeError.textContent = "";
    mensajeError.className = "mensaje";

    // EVENTO FINALIZADO

    if(hora >= "18:00"){

        window.location.href = "evento-finalizado.html";
        return;
    }

    // VALIDACION PARTICIPANTE

    if(nombre.toLowerCase() !== "juan perez"){

        mensajeError.textContent =
            "Participante no habilitado.";

        mensajeError.classList.add("error");

        return;
    }

   // VALIDACION DUPLICIDAD

    const yaRegistrado = registros.some(registro =>
        registro.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if(yaRegistrado){

        mensajeError.textContent =
            "Registro duplicado detectado.";

        mensajeError.classList.add("error");

        return;
    }

    // VALIDACION EVENTO ACTIVO

    const eventoActivo = true;

    if(!eventoActivo){

        mensajeError.textContent =
            "El evento no se encuentra activo.";

        mensajeError.classList.add("error");

        return;
    }
    
    resultadoNombre.textContent = nombre;
    resultadoHora.textContent = hora;

    let estadoFinal = "";

    // DETERMINACION DE ATRASO

if(hora <= "08:10"){

    estadoFinal = "Presente";

    resultadoEstado.textContent = estadoFinal;

    resultadoEstado.className = "exito";

    bloqueJustificacion.classList.add("oculto");

}else{

    estadoFinal = "Atrasado";

    resultadoEstado.textContent = estadoFinal;

    resultadoEstado.className = "error";

    bloqueJustificacion.classList.remove("oculto");
}

    // AGREGAR AL HISTORIAL VISUAL

    const itemHistorial = document.createElement("li");

    itemHistorial.textContent =
        `${nombre} → ${estadoFinal}`;

    listaHistorial.appendChild(itemHistorial);

    // GUARDAR REGISTRO

    const nuevoRegistro = {

        nombre: nombre,
        hora: hora,
        estado: estadoFinal

    };

    registros.push(nuevoRegistro);

    localStorage.setItem(
        "registros",
        JSON.stringify(registros)
    );

    cambiarPantalla(pantallaResultado);

});

btnJustificar.addEventListener("click", () => {

    const motivo =
        document.getElementById("textoJustificacion").value;

    const nuevaJustificacion = {

        nombre: resultadoNombre.textContent,

        motivo: motivo,

        resultado: "Rechazada"

    };

    justificaciones.push(nuevaJustificacion);

    localStorage.setItem(
        "justificaciones",
        JSON.stringify(justificaciones)
    );

    mensajeJustificacion.textContent =
        "Justificación rechazada por ingreso fuera de plazo.";

    mensajeJustificacion.classList.add("error");

});

btnFalla.addEventListener("click", () => {

    mensajeError.textContent =
        "Error de conexión. Se requiere validación manual.";

    mensajeError.className = "mensaje error";

});
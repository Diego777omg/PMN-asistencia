const pantallaInicio = document.getElementById("pantallaInicio");
const pantallaFormulario = document.getElementById("pantallaFormulario");
const pantallaResultado = document.getElementById("pantallaResultado");

const btnRegistrar = document.getElementById("btnRegistrar");
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

let registroExistente = false;

function cambiarPantalla(pantalla){

    pantallaInicio.classList.remove("activa");
    pantallaFormulario.classList.remove("activa");
    pantallaResultado.classList.remove("activa");

    pantalla.classList.add("activa");
}

btnRegistrar.addEventListener("click", () => {

    cambiarPantalla(pantallaFormulario);

});

volverInicio.addEventListener("click", () => {

    cambiarPantalla(pantallaInicio);

});

volverMenu.addEventListener("click", () => {

    formAsistencia.reset();

    mensajeError.textContent = "";

    mensajeJustificacion.textContent = "";

    bloqueJustificacion.classList.add("oculto");

    cambiarPantalla(pantallaInicio);

});

formAsistencia.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const hora = document.getElementById("hora").value;

    mensajeError.textContent = "";
    mensajeError.className = "mensaje";

    // VALIDACION PARTICIPANTE

    if(nombre.toLowerCase() !== "juan perez"){

        mensajeError.textContent =
            "Participante no habilitado.";

        mensajeError.classList.add("error");

        return;
    }

    // VALIDACION DUPLICIDAD

    if(registroExistente){

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

    registroExistente = true;

    resultadoNombre.textContent = nombre;
    resultadoHora.textContent = hora;

    // DETERMINACION DE ATRASO

    if(hora <= "08:10"){

        resultadoEstado.textContent = "Presente";

        bloqueJustificacion.classList.add("oculto");

    }else{

        resultadoEstado.textContent = "Atrasado";

        bloqueJustificacion.classList.remove("oculto");
    }

    cambiarPantalla(pantallaResultado);

});

btnJustificar.addEventListener("click", () => {

    mensajeJustificacion.textContent =
        "Justificación rechazada por ingreso fuera de plazo.";

    mensajeJustificacion.classList.add("error");

});
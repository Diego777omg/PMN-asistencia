function mostrarPantalla(idPantalla) {

    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(pantalla => {
        pantalla.classList.remove("activa");
    });

    document.getElementById(idPantalla).classList.add("activa");
}

function registrarAsistencia() {

    const nombre = document.getElementById("nombre").value;
    const hora = document.getElementById("hora").value;

    const tolerancia = "08:10";

    let estado = "";

    if (hora <= tolerancia) {
        estado = "PRESENTE";
    } else {
        estado = "ATRASADO";
    }

    document.getElementById("mensajeResultado").innerText =
        `Asistencia registrada para ${nombre}`;

    document.getElementById("estadoResultado").innerText =
        `Estado: ${estado}`;

    document.getElementById("horaResultado").innerText =
        `Hora registrada: ${hora}`;

    mostrarPantalla("resultado");
}
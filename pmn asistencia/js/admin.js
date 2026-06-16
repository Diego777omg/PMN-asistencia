const btnVolver = document.getElementById("btnVolver");

btnVolver.addEventListener("click", () => {

    window.location.href = "index.html";

});

// CARGAR DATOS REALES DESDE LOCAL STORAGE

const registros =
    JSON.parse(localStorage.getItem("registros")) || [];

const justificaciones =
    JSON.parse(localStorage.getItem("justificaciones")) || [];

// TABLA DE REGISTROS

const cuerpoRegistros =
    document.querySelector("#tablaRegistros tbody");

const filtroEstado =
    document.getElementById("filtroEstado");

function cargarRegistros(estadoSeleccionado = "Todos") {

    cuerpoRegistros.innerHTML = "";

    let registrosFiltrados = registros;

    if (estadoSeleccionado !== "Todos") {

        registrosFiltrados = registros.filter(
            registro =>
                registro.estado === estadoSeleccionado
        );

    }

    registrosFiltrados.forEach(registro => {

        const fila = document.createElement("tr");

        const claseEstado =
            registro.estado === "Presente"
                ? "exito"
                : "error";

        fila.innerHTML = `
            <td>${registro.nombre}</td>
            <td>${registro.hora}</td>
            <td class="${claseEstado}">
                ${registro.estado}
            </td>
        `;

        cuerpoRegistros.appendChild(fila);

    });

}

cargarRegistros();

filtroEstado.addEventListener("change", () => {

    cargarRegistros(
        filtroEstado.value
    );

});

// TABLA DE JUSTIFICACIONES

const cuerpoJustificaciones =
    document.querySelector("#tablaJustificaciones tbody");

justificaciones.forEach(justificacion => {

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${justificacion.nombre}</td>
        <td>${justificacion.motivo}</td>
        <td>${justificacion.resultado}</td>
    `;

    cuerpoJustificaciones.appendChild(fila);

});

// ESTADÍSTICAS

document.getElementById("totalRegistros").textContent =
    registros.length;

document.getElementById("totalPresentes").textContent =
    registros.filter(
        r => r.estado === "Presente"
    ).length;

document.getElementById("totalAtrasados").textContent =
    registros.filter(
        r => r.estado === "Atrasado"
    ).length;

document.getElementById("totalJustificaciones").textContent =
    justificaciones.length;

// LIMPIAR DATOS

const btnLimpiar =
    document.getElementById("btnLimpiar");

btnLimpiar.addEventListener("click", () => {

    const confirmar = confirm(
        "¿Desea eliminar todos los registros almacenados?"
    );

    if (!confirmar) {
        return;
    }

    localStorage.removeItem("registros");
    localStorage.removeItem("justificaciones");

    location.reload();

});
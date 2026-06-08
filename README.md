# PMV-Asistencia

## Descripción

Este proyecto corresponde a la fase PMV (Prototipo Mínimo Viable) del sistema de gestión de asistencia para eventos temporales.

El objetivo del prototipo es representar una versión funcional del sistema, incorporando persistencia de datos y herramientas básicas de administración que permitan simular un escenario más cercano a una aplicación real.

El PMV permite:

* Registrar asistencia
* Validar participantes
* Detectar atrasos
* Visualizar estados
* Ingresar justificaciones
* Simular excepciones del sistema
* Almacenar registros de asistencia
* Almacenar justificaciones
* Visualizar información administrativa
* Consultar estadísticas básicas

Aunque utiliza datos ficticios y lógica simplificada, el sistema representa el comportamiento principal definido previamente en el modelo del proceso.

---

## Recorrido principal implementado

El recorrido principal desarrollado corresponde al flujo de registro de asistencia:

1. Ingreso al sistema
2. Visualización del evento activo
3. Registro de asistencia
4. Validación del participante
5. Validación de duplicidad
6. Determinación de estado:

   * Presente
   * Atrasado
7. Visualización del resultado
8. Ingreso de justificación
9. Almacenamiento de información
10. Consulta desde el panel administrador

---

## Excepciones implementadas

El PMV considera excepciones importantes del modelo:

* Participante no habilitado
* Registro duplicado
* Evento finalizado
* Justificación fuera de plazo
* Falla técnica simulada

Estas excepciones modifican directamente el flujo y muestran mensajes visibles al usuario.

---

## Tecnologías utilizadas

* HTML
* CSS
* JavaScript
* LocalStorage

No se utilizaron bases de datos ni backend. La persistencia se implementó mediante almacenamiento local del navegador.

---

## Estructura del proyecto

```text
PMV-Asistencia/
│
├── index.html
├── admin.html
├── evento-finalizado.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   └── admin.js
│
└── README.md
```

---

## Uso de la aplicación

Para probar el recorrido principal del sistema se recomienda utilizar los siguientes datos:

### Participante habilitado

```text
Juan Perez
```

### Horarios de prueba

* Antes o igual a 08:10 → estado: Presente
* Después de 08:10 → estado: Atrasado

### Excepciones simuladas

* Ingresar un nombre distinto a Juan Perez genera:

  * Participante no habilitado

* Intentar registrar nuevamente al mismo participante genera:

  * Registro duplicado

* Cuando el participante queda atrasado:

  * Se habilita el ingreso de justificación
  * La justificación es rechazada automáticamente para simular ingreso fuera de plazo

* Si la hora ingresada es igual o superior a 18:00:

  * El sistema redirige a la pantalla de evento finalizado

---

## Funcionalidades implementadas

### Navegación entre pantallas

El sistema permite avanzar y retroceder entre las distintas vistas del flujo principal.

### Validación de asistencia

Se valida:

* Participante habilitado
* Estado del evento
* Duplicidad de registro

### Determinación automática de estados

El sistema determina automáticamente:

* Presente
* Atrasado

según la hora ingresada y la tolerancia definida.

### Justificaciones

Cuando un participante queda atrasado, el sistema habilita una sección para ingresar justificación.

La justificación es almacenada junto con el resultado de rechazo simulado y posteriormente visualizada en el panel administrador.

### Persistencia de datos

Los registros de asistencia y las justificaciones se almacenan mediante LocalStorage.

Esto permite conservar la información incluso después de recargar la página.

### Historial de registros

El sistema muestra un historial de registros realizados durante el uso de la aplicación.

### Panel Administrador

El sistema incorpora una vista administrativa que permite:

* Consultar registros de asistencia
* Consultar justificaciones
* Revisar estados registrados

### Estadísticas

El panel administrador muestra indicadores básicos:

* Total de registros
* Total de presentes
* Total de atrasados
* Total de justificaciones

### Evento finalizado

Si se intenta registrar asistencia después de las 18:00, el sistema redirige a una pantalla indicando que el evento ha finalizado.

### Falla técnica simulada

El sistema permite simular una falla técnica mostrando un mensaje de validación manual.

---

## Objetivo del PMV

Este prototipo busca representar una versión funcional del sistema definida en etapas anteriores.

El foco principal fue:

* Navegación clara
* Persistencia de información
* Coherencia del flujo
* Simulación de decisiones reales
* Representación de estados y excepciones
* Visualización administrativa
* Experiencia básica de usuario

No se buscó desarrollar una aplicación completa ni definitiva.

---

## Estado actual del proyecto

El PMV se encuentra funcional para el recorrido principal definido y permite registrar asistencias, almacenar información localmente, gestionar justificaciones y visualizar datos desde un panel administrativo básico.

La implementación actual constituye una base funcional para futuras extensiones e integraciones con bases de datos o servicios backend.

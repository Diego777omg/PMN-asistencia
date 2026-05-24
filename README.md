# PMN-asistencia
Descripción

Este proyecto corresponde a la fase PMN (Prototipo Mínimo Navegable) del sistema de gestión de asistencia para eventos temporales.

El objetivo del prototipo es permitir recorrer un flujo principal del sistema mediante navegación entre pantallas, simulando el funcionamiento real de la aplicación.

El PMN permite:

registrar asistencia
validar participantes
detectar atrasos
visualizar estados
ingresar justificaciones
simular excepciones del sistema

Aunque utiliza datos ficticios y lógica simplificada, el sistema representa el comportamiento principal definido previamente en el MPN.

Recorrido principal implementado

El recorrido principal desarrollado corresponde al flujo de registro de asistencia:

ingreso al sistema
visualización del evento activo
registro de asistencia
validación del participante
determinación de estado:
presente
atrasado
visualización del resultado
ingreso de justificación
rechazo automático por fuera de plazo
Excepciones implementadas

El PMN considera excepciones importantes del modelo:

participante no habilitado
registro duplicado
evento finalizado
justificación fuera de plazo

Estas excepciones modifican directamente el flujo y muestran mensajes visibles al usuario.

Tecnologías utilizadas
HTML
CSS
JavaScript

No se utilizaron bases de datos ni backend, ya que el objetivo corresponde únicamente a un prototipo navegable.

Estructura del proyecto
PMN-Asistencia/
│
├── index.html
├── evento-finalizado.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
└── README.md
Funcionalidades implementadas
Navegación entre pantallas

El sistema permite avanzar y retroceder entre distintas vistas del flujo.

Validación de asistencia

Se valida:

participante habilitado
estado del evento
duplicidad de registro
Determinación automática de estados

El sistema determina automáticamente:

presente
atrasado

según la hora ingresada y la tolerancia definida.

Justificación

Cuando un participante queda atrasado, el sistema habilita una sección para ingresar justificación.

La justificación es rechazada automáticamente para simular el comportamiento definido en el modelo.

Evento finalizado

Si se intenta registrar asistencia después de las 18:00, el sistema redirige a una pantalla indicando que el evento ha finalizado.

Objetivo del PMN

Este prototipo busca representar visualmente y de forma navegable una parte importante del modelo definido en la fase MPN.

El foco principal fue:

navegación clara
coherencia del flujo
simulación de decisiones reales
representación de estados y excepciones
experiencia básica de usuario

No se buscó desarrollar una aplicación completa ni definitiva.

Estado actual del proyecto

El PMN se encuentra funcional para el recorrido principal definido y permite visualizar cómo funcionaría el sistema en una implementación futura más completa.
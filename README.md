# PMN-Asistencia

## Descripción

Este proyecto corresponde a la fase PMN (Prototipo Mínimo Navegable) del sistema de gestión de asistencia para eventos temporales.

El objetivo del prototipo es permitir recorrer un flujo principal del sistema mediante navegación entre pantallas, simulando el funcionamiento real de la aplicación.

El PMN permite:

- Registrar asistencia
- Validar participantes
- Detectar atrasos
- Visualizar estados
- Ingresar justificaciones
- Simular excepciones del sistema

Aunque utiliza datos ficticios y lógica simplificada, el sistema representa el comportamiento principal definido previamente en el MPN.


## Recorrido principal implementado

El recorrido principal desarrollado corresponde al flujo de registro de asistencia:

1. Ingreso al sistema
2. Visualización del evento activo
3. Registro de asistencia
4. Validación del participante
5. Determinación de estado:
   - Presente
   - Atrasado
6. Visualización del resultado
7. Ingreso de justificación
8. Rechazo automático por fuera de plazo

## Excepciones implementadas

El PMN considera excepciones importantes del modelo:

- Participante no habilitado
- Registro duplicado
- Evento finalizado
- Justificación fuera de plazo

Estas excepciones modifican directamente el flujo y muestran mensajes visibles al usuario.


## Tecnologías utilizadas

- HTML
- CSS
- JavaScript

No se utilizaron bases de datos ni backend, ya que el objetivo corresponde únicamente a un prototipo navegable.


## Estructura del proyecto


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

## Uso de la aplicación

Para probar el recorrido principal del sistema se recomienda utilizar los siguientes datos:

### Participante habilitado

```text
Juan Perez
```

### Horarios de prueba

- Antes o igual a `08:10` → estado: Presente
- Después de `08:10` → estado: Atrasado

### Excepciones simuladas

- Ingresar un nombre distinto a `Juan Perez` genera:
  - Participante no habilitado

- Intentar registrar nuevamente al mismo participante genera:
  - Registro duplicado

- Cuando el participante queda atrasado:
  - Se habilita el ingreso de justificación
  - La justificación es rechazada automáticamente para simular ingreso fuera de plazo

- Si el evento se encuentra finalizado:
  - El sistema redirige a la pantalla de evento finalizado

## Funcionalidades implementadas

### Navegación entre pantallas

El sistema permite avanzar y retroceder entre distintas vistas del flujo.

### Validación de asistencia

Se valida:

- Participante habilitado
- Estado del evento
- Duplicidad de registro

### Determinación automática de estados

El sistema determina automáticamente:

- Presente
- Atrasado

según la hora ingresada y la tolerancia definida.

### Justificación

Cuando un participante queda atrasado, el sistema habilita una sección para ingresar justificación.

La justificación es rechazada automáticamente para simular el comportamiento definido en el modelo.

### Evento finalizado

Si se intenta registrar asistencia después de las 18:00, el sistema redirige a una pantalla indicando que el evento ha finalizado.


## Objetivo del PMN

Este prototipo busca representar visualmente y de forma navegable una parte importante del modelo definido en la fase MPN.

El foco principal fue:

- Navegación clara
- Coherencia del flujo
- Simulación de decisiones reales
- Representación de estados y excepciones
- Experiencia básica de usuario

No se buscó desarrollar una aplicación completa ni definitiva.


## Estado actual del proyecto

El PMN se encuentra funcional para el recorrido principal definido y permite visualizar cómo funcionaría el sistema en una implementación futura más completa.

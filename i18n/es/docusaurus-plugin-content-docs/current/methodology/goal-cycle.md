---
id: goal-cycle
title: El Ciclo de Objetivos
sidebar_position: 4
description: El Ciclo de Objetivos de GOAL — modelo de terminación, regla de estabilidad de objetivos, flexibilidad de alcance y protocolo de ciclo de emergencia.
---

# El Ciclo de Objetivos

El Ciclo de Objetivos es la unidad principal de cadencia de trabajo en GOAL. Es un período con límite de tiempo de entrega enfocada orientado a completar resultados definidos (objetivos).

---

## Comparación con el Sprint de Scrum

| Dimensión | Sprint de Scrum | Ciclo de Objetivos GOAL |
|-----------|----------------|------------------------|
| Qué está fijo | Tiempo Y alcance | Estimación de tiempo Y objetivos |
| Qué es flexible | Nada | Tareas (el camino hacia el objetivo) |
| Qué desencadena el fin | Calendario | Objetivos completados |
| Qué ocurre si los objetivos terminan antes | El sprint continúa hasta el calendario | El ciclo cierra anticipadamente |
| Qué ocurre si los objetivos necesitan más tiempo | El sprint falla o se reduce el alcance | El ciclo se extiende con documentación |

---

## Modelo de Terminación

### Cierre Normal — Objetivos completados a tiempo

El ciclo cierra cuando todos los objetivos primarios se completan y se validan contra la Definition of Done. El Goal Review y la Retrospectiva se ejecutan, y el siguiente ciclo comienza con una nueva Smart Planning Session.

### Cierre Anticipado — Objetivos completados antes de lo previsto

Si todos los objetivos primarios se completan antes de la fecha de fin estimada, el ciclo cierra de inmediato. El equipo no llena el tiempo restante con trabajo arbitrario. Se convoca una nueva Smart Planning Session.

El cierre anticipado es un indicador de éxito, no una señal de que los objetivos eran demasiado fáciles.

### Cierre Extendido — Los objetivos requieren más tiempo

Si los objetivos primarios no se completan en la fecha de fin estimada, el ciclo se extiende formalmente:

```
Registro de Extensión (campos obligatorios):
  Fecha de fin original:        [fecha]
  Extensión aprobada por:       Flow Master + Product Strategist
  Días adicionales:             [número]
  Motivo de extensión:          [categoría obligatoria]
  Cycle Accuracy Index:         actualizado

Categorías de motivo de extensión:
  A — Bloqueante externo (tercero, otro equipo, infraestructura)
  B — Subestimación del alcance
  C — Complejidad técnica inesperada
  D — Interrupciones no planificadas absorbidas en el ciclo
  E — Reducción de la capacidad del equipo (enfermedad, baja)
```

Un ciclo solo puede extenderse una vez. Si los objetivos aún no se completan después de la extensión, el ciclo cierra con un registro de finalización parcial.

---

## Regla de Estabilidad de Objetivos

Una vez que un Ciclo de Objetivos está activo, los objetivos primarios están bloqueados y no pueden ser cambiados, reemplazados o expandidos por ninguna parte.

**Por qué existe esta regla:** Los cambios de objetivo a mitad del ciclo son la causa principal documentada de los fracasos de sprint en equipos de Scrum. Crean confusión sobre qué significa el éxito, destruyen la coherencia de la planificación y desmotivan a los equipos que sienten que su trabajo está siendo constantemente deshecho.

**Qué puede cambiar:** Los objetivos secundarios pueden ser depriorizados si la capacidad es limitada, pero no pueden ser elevados a primarios o añadidos como primarios durante el ciclo.

**Las únicas excepciones:**
- El Protocolo de Ciclo de Emergencia (que cierra el ciclo actual)
- El ciclo completa y la próxima Smart Planning establece nuevos objetivos

---

## Regla de Flexibilidad de Alcance

Dentro de un Ciclo de Objetivos, las tareas utilizadas para alcanzar los objetivos son completamente flexibles — pueden ser añadidas, eliminadas, modificadas o reemplazadas en cualquier momento.

Esta flexibilidad está explícitamente acotada: los cambios solo están permitidos cuando sirven a los objetivos primarios actuales y no introducen nuevo alcance más allá de ellos.

| Permitido | No permitido |
|-----------|--------------|
| Añadir una tarea que sirve a un objetivo primario | Añadir una tarea que sirve a un objetivo no planificado |
| Eliminar una tarea cuando se descubre una mejor alternativa | Eliminar una tarea para hacer espacio para trabajo no relacionado |
| Modificar el alcance de una tarea si el descubrimiento técnico lo requiere | Expandir el alcance de una tarea más allá de lo que sirve al objetivo |
| Dividir una tarea grande en tareas más pequeñas | Cambiar un objetivo primario |

---

## Protocolo de Ciclo de Emergencia

El Protocolo de Ciclo de Emergencia es el proceso formal para cerrar un Ciclo de Objetivos antes de que sus objetivos primarios se completen.

Tres casos específicos desencadenan este protocolo:
1. El negocio ha cambiado tan fundamentalmente que los objetivos actuales ya no son relevantes
2. Los incidentes P1 acumulados han consumido más del 50% de la capacidad del ciclo y los objetivos primarios no pueden completarse
3. Un bloqueante externo resuelve todos los objetivos del ciclo (por ejemplo, una dependencia de terceros es cancelada oficialmente)

**Proceso:**
1. El Product Strategist y el Flow Master llegan a un acuerdo mutuo
2. Se produce un registro de finalización parcial
3. Se convoca una Smart Planning Session de emergencia dentro de las 24 horas

---

## Estructura Típica del Ciclo

```
Día 1:    Smart Planning Session
           │
Días 1–N: Entrega continua
           Daily Flow Syncs
           Backlog Grooming (a mitad del ciclo)
           │
Día N:    Goal Review
           │
Día N+1:  Retrospectiva Basada en Datos
           │
Día N+2:  Próxima Smart Planning Session
```

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

---
id: rules-summary
title: Resumen de Reglas
sidebar_position: 3
description: Resumen completo de todas las reglas obligatorias y recomendadas del framework ágil GOAL.
---

# Resumen de Reglas de GOAL

## Las 8 Reglas Obligatorias (No Negociables)

Estas reglas definen el cumplimiento de GOAL. Un equipo que no sigue estas reglas no está practicando GOAL — está practicando algo más con vocabulario de GOAL.

---

### Regla 1: Los Límites de WIP se Aplican en Todo Momento

Sin excepciones sin aprobación del Flow Master y documentación del motivo.

**Qué significa esto:**
- El Flow Master calcula el límite de WIP usando Tamaño del Equipo × Focus Factor al inicio de cada ciclo
- Ningún miembro del equipo inicia una nueva tarea si superaría el límite de WIP
- El Flow Master tiene autoridad para bloquear nuevos inicios de tareas
- Las anulaciones temporales requieren documentación escrita del motivo

**Señal de violación:** El Focus Ratio supera 1,0 en el Flow Metrics Dashboard.

---

### Regla 2: Todas las Tareas Deben ser Entregables en 3 Días

Los ítems grandes se dividen antes de entrar en la columna Ready.

**Qué significa esto:**
- Small (S) = entregable en 1 día
- Medium (M) = entregable en 2–3 días
- Large (L) = debe dividirse en tareas S/M antes de entrar en Ready

**Ninguna tarea Large entra en In Progress.** Una tarea Large en el Flow Board es un artefacto de planificación; debe descomponerse antes de comenzar el trabajo.

**Señal de violación:** Una tarjeta etiquetada L se encuentra en In Progress, Code Review o Validation.

---

### Regla 3: Las Tareas Bloqueadas se Registran Inmediatamente en el Block Register

Retener un bloqueante de forma privada es una violación del proceso.

**Qué significa esto:**
- Cuando una tarea no puede avanzar debido a un factor externo, se mueve a la columna Blocked inmediatamente
- Se completa una entrada en el Block Register dentro de la hora de bloqueo
- La entrada debe incluir: nombre de la tarea, fecha de bloqueo, tipo de bloqueante, descripción, responsable de resolución, plan de resolución y fecha esperada de resolución
- Una entrada del Block Register incompleta es en sí misma una violación del proceso

**Señal de violación:** Una tarea ha estado en la columna Blocked durante más de 1 hora sin una entrada completa del Block Register.

---

### Regla 4: El Daily Flow Sync se Celebra Cada Día Laboral

Son 10–12 minutos. No es opcional. No es reemplazable por un mensaje de Slack.

**Qué significa esto:**
- El Daily Flow Sync ocurre cada día laboral del ciclo, independientemente de otros factores
- Dura exactamente 10–12 minutos — ni más, ni menos
- Lo dirige el Flow Master, revisando el tablero de derecha a izquierda
- No puede ser reemplazado por una actualización asíncrona, un mensaje de Slack, o una "charla rápida"

**Señal de violación:** Un día pasa sin un Daily Flow Sync, o el sync excede consistentemente los 12 minutos.

---

### Regla 5: Todo el Trabajo Sigue la Definition of Done

Sin "suficientemente hecho". Sin excepciones "solo esta vez".

**Qué significa esto:**
- Cada tarea debe satisfacer los criterios de DoD de Nivel 1 (Línea Base) y Nivel 2 (Extendida) antes de moverse a Done
- Una tarea con cualquier casilla de DoD sin marcar no está hecha
- El Flow Master monitorea el cumplimiento de la DoD
- La DoD no es negociable bajo presión de plazos — ese es exactamente el momento en que importa más

**Señal de violación:** Una tarea está en la columna Done con ítems de DoD sin marcar, o una tarea está marcada como Done sin revisión de código.

---

### Regla 6: Las Retrospectivas Usan Datos de Métricas de Flujo

Las opiniones deben estar ancladas a datos observables. Si las métricas no lo muestran, no es un hallazgo del proceso.

**Qué significa esto:**
- El Flow Metrics Dashboard se prepara antes de la retrospectiva, no durante ella
- Cada tema de discusión debe estar conectado a al menos una métrica de flujo
- Las opiniones son bienvenidas pero deben estar ancladas: "Siento que fuimos lentos" debe conectarse a "El Cycle Time fue 4,2 días vs 2,8 días el ciclo pasado"
- Las mejoras sin fundamento basado en métricas no son hallazgos accionables

**Señal de violación:** Una retrospectiva produce "elementos de acción" que no están conectados a ninguna métrica medible.

---

### Regla 7: Los Objetivos del Ciclo No Cambian Durante un Ciclo Activo

Las nuevas prioridades siguen el Protocolo de Gestión de Interrupciones.

**Qué significa esto:**
- Los objetivos primarios están bloqueados cuando se publica el Goal Cycle Plan
- El Product Strategist no puede añadir, eliminar ni modificar objetivos primarios durante un ciclo activo
- Si una nueva prioridad de negocio es más importante que los objetivos actuales, se aplica el Protocolo de Ciclo de Emergencia
- "El objetivo cambió un poco" no es una justificación aceptable — se requieren registros formales de cambio

**Señal de violación:** Los objetivos primarios al final del ciclo difieren de lo documentado en el Goal Cycle Plan sin un registro formal de cambio.

---

### Regla 8: El Carril Expedite Tiene un Máximo de 1 Tarea Activa

Sin excepciones. Sin "pero esta es realmente urgente".

**Qué significa esto:**
- Solo una tarea puede estar en el carril Expedite en cualquier momento
- Esta regla existe porque una segunda tarea Expedite desordena la primera, derrotando el propósito del carril
- La aprobación conjunta (Flow Master + Product Strategist) se requiere para cada entrada al Expedite
- Si dos solicitudes urgentes llegan simultáneamente, deben ser priorizadas — una entra en Expedite, la otra espera o va al backlog

**Señal de violación:** Más de una tarjeta en el carril Expedite simultáneamente.

---

## Reglas Recomendadas (Prácticas Predeterminadas Fuertes)

Estas no son obligatorias de la misma manera que las 8 reglas anteriores, pero son prácticas predeterminadas fuertemente recomendadas.

### Asignación de Deuda Técnica: 10–20% de Capacidad del Ciclo

El estándar es 15%. Ajustar hasta el 20% si la deuda está ralentizando activamente la entrega. Ajustar hasta el 10% solo si no existen ítems de deuda. La asignación está protegida durante un ciclo.

### Salud del Backlog: 2 Ciclos de Ítems Listos

El backlog debe contener siempre al menos dos Ciclos de Objetivos de ítems listos para ejecutar con criterios de aceptación completos.

### Duración del Ciclo: 1–3 Semanas Máximo

Los ciclos GOAL están diseñados para 1–3 semanas. Los "ciclos" más largos pierden los beneficios de la cadencia y se convierten en mini-proyectos.

### Máximo 1–3 Mejoras de Retrospectiva por Ciclo

Las listas largas de mejoras nunca se implementan. Limitar a 3 obliga al equipo a priorizar. Cada mejora debe tener un único propietario nombrado y una métrica de éxito.

### Todo el Trabajo en el Flow Board

Todo el trabajo — incluyendo tareas de soporte, depuración, herramientas internas y reuniones que consumen tiempo significativo — va en el Flow Board. No existe un umbral mínimo de tamaño.

### Tamaño de PR: Revisable en Menos de 30 Minutos

Los pull requests deben representar cambios coherentes y acotados. Un PR que tarda más de 30 minutos en revisarse es una violación del principio de entrega continua.

---

## Tabla de Referencia de Aplicación de Reglas

| Regla | Quién la aplica | Señal de violación |
|-------|----------------|---------------------|
| Límites de WIP | Flow Master | Focus Ratio > 1,0 |
| Límite de 3 días para tareas | Flow Master + Equipo | Tarjeta tamaño L en In Progress |
| Block Register | Flow Master | Tarjeta Bloqueada sin entrada en el Registro |
| Daily Flow Sync | Flow Master | Sync omitido o excede 12 min |
| Definition of Done | Flow Master + Equipo | Tarjeta en Done con ítems de DoD sin marcar |
| Retrospectivas Basadas en Datos | Flow Master | Mejoras no vinculadas a métricas |
| Estabilidad de Objetivos | Flow Master + PS | Objetivos del Goal Cycle Plan cambiados sin registro |
| Límite del Carril Expedite | Flow Master | Más de 1 tarjeta en el carril Expedite |

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

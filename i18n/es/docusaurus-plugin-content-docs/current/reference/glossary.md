---
id: glossary
title: Glosario de GOAL
sidebar_position: 1
description: Referencia completa de términos para la Metodología GOAL Agile — definiciones, contexto y referencias cruzadas para cada concepto clave.
---

# Glosario de GOAL

## Referencia Completa de Términos de GOAL

Este glosario define los términos específicos de GOAL en profundidad, explica los conceptos adyacentes de agilidad y flujo que los practicantes necesitan, y documenta los términos que GOAL deliberadamente elimina o reemplaza del vocabulario de Scrum y Kanban.

---

## A

### Criterios de Aceptación

Condiciones específicas y verificables que un ítem del backlog debe satisfacer para cumplir con la intención del Product Strategist. A diferencia de la Definition of Done (que se aplica a cada tarea universalmente), los Criterios de Aceptación son únicos para cada ítem individual del backlog. Se escriben típicamente en formato Dado/Cuando/Entonces.

**Términos relacionados:** Definition of Done, Backlog Grooming Session, Estado Ready, Formato Dado/Cuando/Entonces

---

### Ciclo de Objetivos Adaptativo

La unidad principal de time-boxing de GOAL, análoga al sprint de Scrum pero con diferencias comportamentales fundamentales. A diferencia de un sprint (que termina en una fecha de calendario fija), un Ciclo de Objetivos termina cuando sus objetivos primarios han sido completados y validados.

**Reemplaza a:** Sprint (Scrum)

---

### Indicador de Envejecimiento

Una señal visual aplicada a una tarjeta de tarea en el Flow Board cuando la tarea ha permanecido en la misma columna más tiempo del esperado según su tamaño. Umbrales: tareas Small después de 1 día, Medium después de 2 días. El doble del tiempo esperado activa un indicador rojo.

---

### Anti-Patrón

Una forma reconocible en que la metodología se aplica incorrectamente. Los anti-patrones parecen adaptaciones legítimas pero consistentemente producen resultados negativos. GOAL cataloga 7 anti-patrones de equipo individual y 6 multi-equipo.

---

## B

### Backlog

Una lista priorizada de todos los ítems de trabajo que aún no son parte de un Ciclo de Objetivos activo. GOAL distingue entre un backlog saludable (priorizado, items ready con Criterios de Aceptación y estimaciones de tamaño) y uno no saludable.

---

### Backlog Curator

No es un rol separado sino una función formal dentro de las responsabilidades del Product Strategist. Responsabilidades: asegurar al menos dos ciclos de ítems ready, asegurar Criterios de Aceptación, eliminar ítems obsoletos, dirigir el Backlog Grooming semanal.

---

### Backlog Grooming Session

Evento recurrente de GOAL — semanal, independiente del timing del ciclo — para mantener la salud del backlog. Duración: 30–45 minutos. Participantes: Product Strategist (requerido), Flow Master (requerido), 1–2 miembros del Delivery Team.

---

### Estados de los Ítems del Backlog

Ciclo de vida de un ítem del backlog: **Discovery → Refinement → Ready → Cycle → Done → Archive**.

---

### Tasa de Bloqueo (Block Rate)

`(Tareas que se bloquearon ÷ Total de tareas completadas) × 100`. Objetivo para equipos establecidos: por debajo del 20%. Por encima del 30% indica un problema sistémico del proceso.

---

### Block Register

Registro persistente de cada tarea que entró en estado Bloqueado. Campos requeridos: nombre e ID de la tarea, fecha de bloqueo, descripción del bloqueante, tipo, responsable de resolución, plan, fecha esperada, fecha real y tiempo total bloqueado. Analizado en cada Retrospectiva Basada en Datos.

---

### Estado Bloqueado

Una tarea está Bloqueada cuando la persona responsable no puede avanzar debido a un factor externo. Mover una tarea a Bloqueado es obligatorio, no opcional. Retener un bloqueante privadamente es una violación del proceso.

---

## C

### Entrega Continua

Práctica en la que el código se mantiene en estado entregable en todo momento. GOAL aplica cuatro reglas: sin fusiones grandes (PRs revisables en menos de 30 min), sin ramas de larga duración (≤ 3 días), integración frecuente, y desarrollo trunk-based como modelo preferido.

---

### Cycle Accuracy Index (CAI)

`Duración Real del Ciclo ÷ Duración Estimada del Ciclo`. 1,0 = precisión perfecta; < 1,0 = completó antes; > 1,0 = tomó más tiempo. Reemplaza a la velocidad como señal principal de planificación.

**Reemplaza a:** Velocidad (Scrum) como señal principal de estimación de planificación

---

### Cycle Time (Tiempo de Ciclo)

Tiempo transcurrido desde que comienza el trabajo activo (entra en In Progress) hasta que se completa (entra en Done). Mide solo el tiempo de procesamiento activo. Esperado en GOAL: 1–3 días para tareas S/M.

---

## D

### Daily Flow Sync

Reemplazo de GOAL para el Daily Standup de Scrum. Reunión diaria de 10–12 minutos enfocada en la salud del flujo. Tres preguntas: ¿Qué se movió? ¿Qué está bloqueado? ¿Qué ralentiza el flujo? No reemplazable por actualización asíncrona.

**Reemplaza a:** Daily Standup / Daily Scrum (Scrum)

---

### Retrospectiva Basada en Datos

Evento de mejora del ciclo de GOAL que utiliza métricas de flujo como input principal. Agenda: revisar métricas, analizar Block Register, identificar 1–3 mejoras con propietarios, revisar mejoras del ciclo anterior.

**Reemplaza a:** Retrospectiva (Scrum)

---

### Definition of Done (DoD)

Checklist definido por el equipo que cada tarea debe satisfacer completamente antes de moverse a Done. Dos niveles: **Nivel 1 (Línea Base)** obligatorio para todos los equipos; **Nivel 2 (Extendida)** definido por el equipo.

---

### Delivery Rate (Tasa de Entrega)

Número de tareas movidas a Done por día laboral. Mide estabilidad del throughput. Una tasa consistente (aunque moderada) es más valiosa que una alta pero volátil.

---

## E

### Cierre Anticipado

Ocurre cuando todos los objetivos primarios se completan antes de la fecha de fin estimada. El ciclo cierra inmediatamente — el equipo no llena el tiempo restante con trabajo arbitrario.

---

### Protocolo de Ciclo de Emergencia

Proceso formal para cerrar un Ciclo de Objetivos antes de completar sus objetivos primarios. Requiere acuerdo mutuo entre Product Strategist y Flow Master. Tres casos desencadenantes.

---

### Carril Expedite

Carril de prioridad especial en el Flow Board para tareas aprobadas a través del Protocolo de Gestión de Interrupciones. Reglas: máximo una tarea activa en cualquier momento, aprobación conjunta FM + PS requerida.

---

## F

### Feature Flags

Técnica que permite fusionar funcionalidad incompleta a la rama principal mientras se mantiene oculta para los usuarios. Mecanismo para cumplir con la regla de ramas de corta duración de GOAL.

---

### Flow Board

Artefacto central de gestión visual de GOAL. Seis columnas estándar: Backlog, Ready, In Progress, Code Review, Validation, Done. Dos carriles especiales: Bloqueado y Expedite. Carril de Deuda Técnica adicional.

---

### Flow Efficiency (Eficiencia del Flujo)

`(Cycle Time ÷ Flow Time) × 100`. Benchmarks: < 15% = la mayor parte esperando; 15–30% = típico para equipos nuevos; 30–50% = saludable; 50%+ = alto rendimiento.

---

### Flow Master

Rol de GOAL responsable de la salud del proceso de entrega. Foco principal en el flujo de trabajo — el tablero, las métricas, los bloqueantes y los límites de WIP. Diferente del Scrum Master que se centra en las dinámicas del equipo.

**Reemplaza a:** Scrum Master (Scrum)

---

### Flow Time (Tiempo de Flujo)

Tiempo total transcurrido desde que una tarea entra en la columna Ready hasta Done. Incluye todo el tiempo de espera, tiempo bloqueado y tiempo activo. Relación: `Flow Time = Cycle Time + Wait Time`.

---

### Focus Factor

Coeficiente en la fórmula de límite de WIP de GOAL, de 0,6 a 0,8. Representa la capacidad estimada del equipo para centrarse en el trabajo activo. Estándar: 0,7.

---

### Focus Ratio

`Tareas Activas ÷ Límite de WIP`. Saludable: 0,7–1,0. Por encima de 1,0 requiere intervención inmediata del Flow Master.

---

## G

### Ciclo de Objetivos (Goal Cycle)

Unidad principal de cadencia de trabajo de GOAL. Tres reglas: Regla de Estabilidad de Objetivos (los objetivos no pueden cambiar), Regla de Flexibilidad de Alcance (las tareas son libres), y Modelo de Terminación Adaptativo (termina cuando se cumplen los objetivos).

---

### Goal Cycle Plan

Artefacto creado al inicio de cada Ciclo de Objetivos. No es una lista de tareas — es un documento de resultados. Contiene objetivos primarios, secundarios, ítems de riesgo, asignación de deuda técnica y estimación de duración.

---

### Regla de Estabilidad de Objetivos

Una vez que un Ciclo de Objetivos está activo, los objetivos primarios están bloqueados y no pueden ser cambiados por ninguna parte. La única excepción es el Protocolo de Ciclo de Emergencia.

---

## M

### Manifiesto GOAL

Cinco valores fundacionales: **Objetivos sobre Backlogs** · **Flujo sobre Velocidad** · **Datos sobre Estimaciones** · **Entrega sobre Actividad** · **Adaptación sobre Bloqueo de Compromisos**.

---

## P

### Interrupción P1

El sistema en producción está fallando activamente para usuarios reales. Entrada inmediata al carril Expedite. Máximo 24 horas antes de escalar al incident commander.

---

### Interrupción P2

Solicitud urgente de negocio sin fallo en producción pero con impacto documentado dentro de 1–5 días. Test: ¿el coste de esperar > el coste de interrumpir?

---

### Interrupción P3

Solicitud normal disfrazada con lenguaje de urgencia sin impacto documentado. Va al backlog con prioridad normal.

---

### Product Strategist

Rol de GOAL responsable de la dirección de valor del equipo. Define qué debe lograr el equipo (objetivos), no cómo. Evolución del Product Owner con responsabilidad adicional para medir y reportar el valor entregado.

**Reemplaza a:** Product Owner (Scrum)

---

## R

### Sizing S/M/L

Sistema de sizing de GOAL que reemplaza los story points: **Small** = 1 día; **Medium** = 2–3 días; **Large** = debe dividirse antes de entrar en In Progress.

**Reemplaza a:** Story Points (Scrum)

---

### Regla de Flexibilidad de Alcance

Dentro de un Ciclo de Objetivos, las tareas son completamente flexibles pero acotadas: los cambios solo están permitidos cuando sirven a los objetivos primarios actuales y no introducen nuevo alcance.

---

### Smart Planning Session

Evento de GOAL al inicio de cada Ciclo de Objetivos. Duración: 30–60 minutos. Produce un Goal Cycle Plan con resultados definidos, duración estimada y límite de WIP confirmado.

**Reemplaza a:** Sprint Planning (Scrum)

---

## V

### Velocidad

Eliminada de GOAL. Tres problemas estructurales: inflación con el tiempo, se convierte en objetivo (Ley de Goodhart), no comparable entre equipos. Reemplazada por CAI y tendencia de Delivery Rate.

**Reemplazada por:** Cycle Accuracy Index + tendencia de Delivery Rate (GOAL)

---

### Framework de Valor de 3 Capas

Modelo de GOAL para definir y medir el valor entregado. **Capa 1 — Valor de Negocio** (KPIs). **Capa 2 — Valor de Usuario** (mejoras de experiencia). **Capa 3 — Valor Técnico** (capacidad de entrega futura). Los objetivos se etiquetan en la Smart Planning y se evidencian en la Goal Review.

---

### Límites de WIP

Máximo de tareas en estados activos (In Progress + Code Review + Validation) simultáneamente. Fórmula: `Tamaño del Equipo × Focus Factor`. Aplicados por el Flow Master en todo momento.

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

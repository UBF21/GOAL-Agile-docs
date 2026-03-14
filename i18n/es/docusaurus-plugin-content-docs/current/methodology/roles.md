---
id: roles
title: Roles en GOAL
sidebar_position: 3
description: Los tres roles principales de GOAL — Flow Master, Product Strategist y Delivery Team — con responsabilidades, autoridad y métricas de éxito.
---

# Roles en GOAL

GOAL define tres roles principales. Las responsabilidades son distintas de los roles de Scrum, incluso donde los nombres parecen similares.

---

## Flow Master

### En qué consiste este rol

El Flow Master es el guardián del proceso de entrega. Su responsabilidad principal es garantizar que el trabajo se mueva a través del sistema sin acumular desperdicio, retrasos ni bloqueantes ocultos. Esto es diferente de un Scrum Master, cuyo enfoque está en las dinámicas del equipo y la facilitación de ceremonias. El Flow Master se centra en el sistema, no en las personas.

### Responsabilidades principales

- Definir y aplicar los límites de WIP utilizando los datos actuales del equipo
- Monitorear el Flow Board diariamente e identificar tareas estancadas
- Escalar las tareas bloqueadas que superen el umbral de 48 horas
- Dirigir el Daily Flow Sync
- Proteger al equipo de cambios de alcance e interrupciones no planificadas durante un ciclo activo
- Aprobar las entradas al carril Expedite (conjuntamente con el Product Strategist)
- Facilitar las Retrospectivas Basadas en Datos usando métricas de flujo
- Monitorear y reportar el Cycle Accuracy Index

### Autoridad

- El Flow Master tiene autoridad para aplicar los límites de WIP, incluyendo el bloqueo de nuevos inicios de tareas cuando la capacidad está llena
- El Flow Master no tiene autoridad sobre el contenido de los objetivos ni las prioridades del negocio
- El Flow Master puede señalar y escalar pero no puede cerrar unilateralmente un Ciclo de Objetivos

### Métrica de éxito

Estabilidad del flujo — tiempos de ciclo consistentes y una tasa de bloqueo baja a lo largo de sucesivos Ciclos de Objetivos.

### Flow Master vs Scrum Master

| Dimensión | Scrum Master | Flow Master |
|-----------|-------------|------------|
| Enfoque principal | Dinámicas del equipo y facilitación de ceremonias | Salud del sistema de flujo de trabajo |
| Métricas | Velocidad, progreso del burndown | Eficiencia del flujo, tasa de bloqueo, Focus Ratio |
| Autoridad | Facilitador/coach sin autoridad formal | Autoridad para hacer cumplir límites de WIP |
| Gestión de interrupciones | Sin protocolo formal | Propietario del protocolo P1/P2/P3 |
| Retrospectivas | Facilita retrospectivas basadas en opiniones | Facilita retrospectivas basadas en datos de flujo |

---

## Product Strategist

### En qué consiste este rol

El Product Strategist es responsable de la dirección de valor del equipo. Define qué debe lograr el equipo (objetivos), no cómo lograrlo (tareas). Este rol es una evolución del concepto de Product Owner, con responsabilidad adicional para medir y reportar el valor entregado.

### Responsabilidades principales

- Definir los objetivos primarios y secundarios para cada Ciclo de Objetivos
- Mantener y priorizar el backlog del producto
- Dirigir la Backlog Grooming Session semanalmente
- Definir el impacto empresarial de cada objetivo utilizando el Framework de Valor de 3 Capas
- Evaluar y responder a las solicitudes de interrupción (trabajo urgente, demandas de stakeholders)
- Medir y reportar el valor entregado al final de cada ciclo
- Gestionar el roadmap del producto y la alineación estratégica

### Autoridad

- El Product Strategist define los objetivos pero **no puede cambiarlos durante un Ciclo de Objetivos activo** sin seguir el protocolo de Ciclo de Emergencia
- El Product Strategist puede autorizar entradas al carril Expedite conjuntamente con el Flow Master
- El Product Strategist decide si una solicitud urgente entra en el ciclo actual o espera al siguiente

### Lo que el Product Strategist NO hace

- Definir cómo se implementan las tareas (las decisiones técnicas pertenecen al Delivery Team)
- Asignar tareas a desarrolladores específicos
- Monitorear el output individual de los desarrolladores

### Métrica de éxito

Valor entregado por ciclo — medido usando el Framework de Valor de 3 Capas.

---

## Delivery Team

### En qué consiste este rol

El Delivery Team es el grupo autoorganizado de ingenieros responsable de ejecutar el trabajo. GOAL no prescribe la estructura del equipo — puede incluir backend, frontend, QA, DevOps o cualquier combinación según el producto.

### Responsabilidades principales

- Entregar valor de forma continua, no en grandes lotes al final del ciclo
- Mantener los estándares de calidad definidos en la Definition of Done del equipo
- Señalar los bloqueantes de inmediato cuando ocurren (nunca retener bloqueantes de forma privada)
- Participar en el Backlog Grooming para proporcionar input de sizing técnico y viabilidad
- Gestionar la deuda técnica de forma proactiva dentro de la capacidad asignada

### Expectativas de autoorganización

El Delivery Team decide internamente:
- Quién toma qué tarea
- Cómo implementar técnicamente un objetivo
- Cuándo dividir una tarea que es demasiado grande
- Cuándo plantear una preocupación técnica que afecta al objetivo

### Métrica de éxito

Estabilidad del throughput — tasa de entrega consistente ciclo tras ciclo.

---

## Backlog Curator (Función del Product Strategist)

El Backlog Curator no es un rol separado en GOAL. Es una función formal dentro de las responsabilidades del Product Strategist que existe para garantizar que el backlog nunca se convierta en un cuello de botella para la planificación.

### Responsabilidades principales de esta función

- Asegurar que el backlog siempre contenga al menos dos Ciclos de Objetivos de ítems listos para ejecutar
- Asegurar que cada ítem del backlog tenga criterios de aceptación definidos antes de entrar en Smart Planning
- Eliminar o archivar ítems obsoletos del backlog
- Dirigir la Backlog Grooming Session semanal

### Definición de listo para ejecutar

Un ítem del backlog está listo para ejecutar cuando tiene:
- Una descripción clara del resultado esperado
- Criterios de aceptación (en formato Dado/Cuando/Entonces)
- Una estimación de tamaño (S, M o L)
- Sin dependencias no resueltas que bloqueen su inicio

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

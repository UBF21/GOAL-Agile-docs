---
id: multi-team-roles
title: Roles Multi-Equipo
sidebar_position: 2
description: Los roles de programa de GOAL — Program Flow Master y Program Strategist con responsabilidades, autoridad y métricas de éxito.
---

# Roles Multi-Equipo

GOAL introduce dos roles a nivel de programa para coordinar entre equipos. Estos roles coordinan entre equipos — no reemplazan ningún rol de equipo individual.

---

## Program Flow Master

### En qué consiste este rol

El Program Flow Master es responsable de la salud del trabajo que fluye a través de los límites del equipo. No gestiona el flujo interno de los equipos individuales — cada equipo retiene su propio Flow Master para eso. El dominio del Program Flow Master es el espacio entre equipos.

### Responsabilidades principales

- Mantener y revisar el Dependency Register diariamente
- Facilitar el Program Sync (Tier 2 y Tier 3)
- Facilitar el Cross-Team Dependency Review (Tier 3)
- Escalar bloqueantes entre equipos que no se resuelven dentro de las 24 horas
- Rastrear y reportar métricas de nivel de programa
- Coordinar la alineación del ciclo entre equipos
- Identificar anti-patrones recurrentes entre equipos para el Program Retrospective
- Coordinar el carril Expedite entre equipos cuando un ítem Expedite en un equipo crea una dependencia en otro

### Autoridad

- Tiene autoridad para escalar bloqueantes a Product Strategists y liderazgo del programa
- NO tiene autoridad para cambiar objetivos de equipo, reasignar miembros del equipo, ni anular límites de WIP de equipos individuales
- Puede declarar un Estado de Bloqueante Entre Equipos — una señal formal que detiene la creación de nuevas dependencias entre equipos hasta que se resuelvan las existentes

### Quién ocupa este rol

- **Tier 2 (2–3 equipos):** Típicamente el Flow Master más experimentado entre los equipos participantes, además de sus responsabilidades de equipo
- **Tier 3 (4–8 equipos):** Rol dedicado a tiempo completo

### Métrica de éxito

Cross-Team Block Rate por debajo del 15%, y tiempo promedio de resolución de dependencias entre equipos por debajo de 2 días laborables.

---

## Program Strategist

### En qué consiste este rol

El Program Strategist es responsable de la alineación estratégica de objetivos entre equipos. Define resultados a nivel de programa (Objetivos de Programa) que los equipos individuales luego traducen en objetivos a nivel de equipo para sus propios ciclos.

### Responsabilidades principales

- Definir Objetivos de Programa — resultados de alto nivel que abarcan múltiples equipos y múltiples ciclos
- Asegurar que el Goal Cycle Plan de cada equipo contribuya a al menos un Objetivo de Programa
- Priorizar dependencias entre equipos cuando surgen conflictos (¿qué necesidad del equipo tiene prioridad?)
- Coordinar ítems del backlog compartidos — trabajo que no puede ser propiedad de un único equipo
- Ejecutar el Program Retrospective
- Reportar la entrega de valor a nivel de programa a los stakeholders organizacionales
- Mantener el Cross-Team Cycle Plan

### Autoridad

- Puede anular las decisiones de prioridad de los Product Strategists individuales cuando surge un conflicto de dependencia entre equipos, pero debe documentar el fundamento
- NO puede cambiar los objetivos de equipos individuales a mitad del ciclo — los cambios siguen la misma Regla de Estabilidad de Objetivos que se aplica a nivel de equipo
- Define los Objetivos de Programa pero no los descompone en tareas — eso sigue siendo responsabilidad del Product Strategist de cada equipo

### Relación con los Product Strategists

El Program Strategist establece la dirección. Los Product Strategists traducen esa dirección en objetivos ejecutables a nivel de equipo. Un Program Strategist que empieza a escribir criterios de aceptación o listas de tareas para equipos individuales está violando el límite del rol.

### Métrica de éxito

Porcentaje de Objetivos de Programa completados a tiempo, y reducción de extensiones de ciclo impulsadas por dependencias entre equipos a lo largo de sucesivos ciclos de programa.

---

## Tabla de Interacción de Roles

| Cuando... | El rol responsable es... |
|-----------|------------------------|
| Un equipo no puede avanzar debido a otra tarea del equipo | Program Flow Master escala |
| Un conflicto de prioridad entre equipos no puede resolverse | Program Strategist decide |
| Un bloqueante entre equipos supera las 24 horas | Program Flow Master escala formalmente |
| Los objetivos del programa necesitan cambiar | Program Strategist → Protocolo de Ciclo de Emergencia |
| El cycle plan de un equipo no contribuye a los objetivos del programa | Program Strategist lo señala antes de que comience el ciclo |

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

---
id: overview
title: Descripción General de la Metodología
sidebar_position: 1
description: Resumen ejecutivo de GOAL — estructura del framework, planteamiento del problema y hoja de ruta de implementación.
---

# Descripción General de la Metodología GOAL

## Resumen Ejecutivo

GOAL (Goal-Oriented Adaptive Lifecycle) es un framework ágil adaptativo diseñado para equipos modernos de desarrollo de software. Fue creado para resolver los problemas operativos concretos que Scrum y Kanban dejan sin resolver en entornos de TI del mundo real.

La distinción central de GOAL es su modelo de compromiso: los equipos se comprometen con **resultados** (objetivos), no con listas de tareas específicas. Las tareas — el camino hacia los objetivos — son completamente flexibles dentro de un ciclo.

---

## Planteamiento del Problema

### Por qué Scrum se queda corto

| Problema de Scrum | Impacto |
|-------------------|---------|
| Compromisos rígidos de sprint | Cuando las prioridades cambian, los equipos deben elegir entre romper el sprint o ignorar la nueva prioridad |
| Sin mecanismo formal para trabajo urgente | Manejo inconsistente de solicitudes urgentes; resentimiento entre desarrolladores y stakeholders |
| Story points son estimaciones abstractas | Inflación con el tiempo; variación entre miembros del equipo; falsa precisión |
| Sin métricas de flujo | No hay visibilidad de cuellos de botella ni de tiempo de espera |

### Por qué Kanban se queda corto

| Problema de Kanban | Impacto |
|--------------------|---------|
| Sin objetivos de entrega | Los equipos mueven tareas continuamente sin comprometerse con resultados estratégicos |
| Estructura de responsabilidad débil | Sin ciclos definidos, no hay punto de control natural para la alineación estratégica |
| Sin cadencia de mejora estructurada | La mejora del proceso ocurre informalmente o no ocurre |
| Sin mecanismo de alineación estratégica | Los tableros muestran en qué se trabaja pero no por qué |

### La respuesta de GOAL

GOAL toma las ventajas estructurales de Scrum (ciclos, responsabilidad, cadencia de mejora) y las combina con la inteligencia de flujo de Kanban (entrega continua, métricas de flujo, flujo de trabajo visual), añadiendo conceptos originales que ningún framework proporciona.

---

## Estructura del Framework

```
Framework GOAL
│
├── Roles
│   ├── Flow Master
│   ├── Product Strategist
│   ├── Delivery Team
│   └── Backlog Curator (función del Product Strategist)
│
├── Artefactos
│   ├── Goal Cycle Plan
│   ├── Flow Board
│   ├── Flow Metrics Dashboard
│   ├── Block Register
│   ├── Definition of Done
│   └── Cycle Accuracy Index
│
├── Eventos
│   ├── Smart Planning Session
│   ├── Daily Flow Sync
│   ├── Backlog Grooming Session
│   ├── Goal Review
│   └── Retrospectiva Basada en Datos
│
├── Métricas
│   ├── Flow Time
│   ├── Cycle Time
│   ├── Flow Efficiency
│   ├── Block Rate
│   ├── Delivery Rate
│   ├── Focus Ratio
│   └── Cycle Accuracy Index
│
└── Protocolos
    ├── Protocolo de Gestión de Interrupciones
    ├── Protocolo de Tareas Bloqueadas
    └── Protocolo de Cumplimiento de WIP
```

---

## Hoja de Ruta de Implementación

| Fase | Duración | Lo que implementar |
|------|----------|--------------------|
| Fase 1 — Foundation | Semanas 1–3 | Flow Board, límites de WIP, Daily Flow Sync, Definition of Done, primera Smart Planning Session |
| Fase 2 — Métricas y Objetivos | Semanas 4–8 | Flow Metrics Dashboard, eliminación de story points, estructura formal de Ciclos de Objetivos, Block Register, primera Retrospectiva Basada en Datos |
| Fase 3 — Protocolos | Semanas 9–14 | Protocolo de Gestión de Interrupciones, Protocolo de Tareas Bloqueadas con rutas de escalación, Framework de Valor de 3 Capas, Cycle Accuracy Index |
| Fase 4 — Optimización | Semanas 15+ | Predicción de flujo, indicadores de riesgo de entrega, análisis avanzado de métricas, integración opcional de métricas DORA |

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

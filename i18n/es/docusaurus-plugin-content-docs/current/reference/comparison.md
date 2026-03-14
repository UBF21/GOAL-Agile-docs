---
id: comparison
title: GOAL vs Scrum vs Kanban
sidebar_position: 4
description: Una matriz de comparación completa de GOAL, Scrum y Kanban en todas las dimensiones clave — estructura, métricas, planificación, eventos y filosofía.
---

# GOAL vs Scrum vs Kanban

GOAL no es un reemplazo de Scrum o Kanban construido desde cero — es una síntesis que aborda las debilidades documentadas de ambos frameworks mientras retiene sus fortalezas.

---

## El Problema que Cada Framework Resuelve

**Scrum** aborda el problema de la entrega de proyectos impredecible creando un ciclo de iteración estructurado con roles, ceremonias y artefactos definidos. Fue diseñado para reemplazar la entrega en cascada con ciclos de feedback más cortos.

**Kanban** aborda el problema de la gestión del trabajo en entornos de flujo continuo. Hace visible el trabajo, limita el work-in-progress y permite a los equipos medir y mejorar su flujo sin imponer una estructura de proceso específica.

**GOAL** aborda un problema diferente: *tanto Scrum como Kanban dejan brechas críticas en cómo los equipos de software se comprometen con los resultados y miden el valor entregado.* GOAL combina la orientación a resultados de Scrum con el enfoque de flujo de Kanban mientras añade medición explícita del valor.

---

## Matriz de Comparación Completa

| Dimensión | Scrum | Kanban | GOAL |
|-----------|-------|--------|------|
| **Estructura del ciclo** | Sprint fijo (1–4 semanas) | Sin ciclos | Ciclo de Objetivos Adaptativo (1–3 semanas) |
| **Terminación del ciclo** | Fecha de calendario | N/A | Objetivos completados |
| **Flexibilidad de alcance** | Fijo durante el sprint | Totalmente flexible | Tareas flexibles, objetivos fijos |
| **Frecuencia de planificación** | Por sprint | Continua | Por ciclo |
| **Ceremonia diaria** | Daily Standup | Opcional | Daily Flow Sync (enfocado en flujo) |
| **Unidad de estimación** | Story points / horas | No requerida | Sizing S/M/L |
| **Métrica de rendimiento principal** | Velocidad | Throughput | Eficiencia del Flujo + Cycle Accuracy Index |
| **Manejo de interrupciones** | Ruptura de sprint / excepción | En cualquier momento, informal | Protocolo clasificado P1/P2/P3 |
| **Deuda técnica** | Generalmente ignorada | Visible si se rastrea | Trabajo de primera clase (10–20% asignado) |
| **Medición de valor** | No definida | No definida | Framework de Valor de 3 Capas |
| **Manejo de tareas bloqueadas** | Discutido en el standup | Ad hoc | Protocolo formal con línea de tiempo de escalación |
| **Refinamiento del backlog** | Ceremonia separada (inconsistente) | Ad hoc | Evento semanal formal |
| **Límites de WIP** | No definidos | Definidos (estáticos) | Dinámicos (basados en fórmula) |
| **Input de retrospectiva** | Opiniones del equipo | No estándar | Datos de métricas de flujo (obligatorio) |
| **Rol: líder del equipo** | Scrum Master (foco en proceso) | Sin rol definido | Flow Master (foco en flujo + métricas) |
| **Rol: dirección del producto** | Product Owner | Sin rol definido | Product Strategist (+ medición de valor) |

---

## Diferenciadores Clave Explicados

### 1. Alcance Fijo vs Objetivos Fijos

**Scrum:** El alcance del sprint se define en la Sprint Planning y se bloquea. Los equipos se comprometen a completar una lista específica de ítems del backlog.

**GOAL:** Los objetivos del ciclo se definen en la Smart Planning y se bloquean. Las tareas que sirven a esos objetivos son completamente flexibles. Los equipos se comprometen con resultados, no con listas de tareas.

**Por qué importa:** Los sprints de alcance fijo crean incentivos perversos. Los equipos optimizan para completar ítems del sprint en lugar de alcanzar resultados. Un sprint puede ser "exitoso" (todos los ítems completados) mientras entrega poco valor de negocio.

---

### 2. Límites de WIP Estáticos vs Dinámicos

**Kanban:** Los límites de WIP se definen por columna y permanecen fijos a menos que el equipo los cambie deliberadamente.

**GOAL:** Los límites de WIP se calculan por ciclo usando la fórmula `Tamaño del Equipo × Focus Factor`. Se ajustan automáticamente cuando el tamaño del equipo cambia.

**Por qué importa:** Los límites de WIP estáticos se vuelven arbitrarios con el tiempo. Un equipo que crece de 4 a 7 personas sin ajustar los límites de WIP estará artificialmente restringido.

---

### 3. Velocidad vs Eficiencia del Flujo + CAI

**Scrum:** La velocidad se usa para pronosticar la entrega futura. Los puntos se inflan con el tiempo, no son comparables entre equipos, y la velocidad misma se convierte en objetivo.

**GOAL:** Dos señales de planificación reemplazan la velocidad: (1) **Flow Efficiency** mide cuánto del ciclo se dedica realmente a entregar vs esperar; (2) **Cycle Accuracy Index** mide si las estimaciones de duración del ciclo están mejorando.

---

### 4. Medición de Valor No Definida vs Estructurada

**Scrum y Kanban:** Ningún framework define qué significa "valor" ni cómo medirlo.

**GOAL:** El Framework de Valor de 3 Capas define tres tipos de valor que pueden evidenciarse: Valor de Negocio (impacto en KPI), Valor de Usuario (mejora de experiencia), y Valor Técnico (mejora de capacidad de entrega). Los objetivos se etiquetan en la Smart Planning y se evidencian en la Goal Review.

---

## Traducción de Vocabulario

| Término Scrum | Término Kanban | Término GOAL |
|--------------|----------------|-------------|
| Sprint | Iteración / Ciclo | Ciclo de Objetivos |
| Objetivo del Sprint | — | Objetivo Primario |
| Sprint Planning | — | Smart Planning Session |
| Daily Scrum / Standup | — | Daily Flow Sync |
| Sprint Review | — | Goal Review |
| Sprint Retrospective | — | Retrospectiva Basada en Datos |
| Backlog Refinement | — | Backlog Grooming Session |
| Scrum Master | — | Flow Master |
| Product Owner | — | Product Strategist |
| Story Points | — | Sizing S/M/L |
| Velocidad | Throughput | Cycle Accuracy Index + Delivery Rate |
| Sprint Burndown | Flujo Acumulativo | Flow Metrics Dashboard |
| — | Lead Time | Flow Time |
| — | Cycle Time | Cycle Time |

---

## Lo que GOAL Toma de Cada Framework

**De Scrum:**
- Iteraciones de trabajo con tiempo acotado con inicio y fin definidos
- Roles nombrados con responsabilidades distintas
- Ceremonia de planificación al inicio de cada iteración
- Retrospectiva para la mejora del proceso
- El concepto de un backlog de producto
- Autogestión del equipo dentro de un proceso estructurado

**De Kanban:**
- Tablero de flujo visual como herramienta principal
- Límites de WIP como palanca principal de salud del proceso
- Métricas de flujo (cycle time, flow efficiency, throughput)
- Ingesta de trabajo pull-based en lugar de alcance de sprint comprometido
- Visualización explícita del trabajo bloqueado

**Contribuciones originales de GOAL:**
- Regla de Estabilidad de Objetivos + Regla de Flexibilidad de Alcance
- Modelo de Terminación Adaptativo (cierra cuando se cumplen los objetivos)
- Fórmula dinámica de límite de WIP (Tamaño del Equipo × Focus Factor)
- Protocolo formal de Gestión de Interrupciones (clasificación P1/P2/P3)
- Protocolo formal de Tareas Bloqueadas con línea de tiempo de escalación
- Framework de Valor de 3 Capas
- Deuda técnica como trabajo de primera clase obligatorio con asignación porcentual
- Retrospectiva Basada en Datos como regla (no solo nombre de práctica)
- Backlog Grooming como evento semanal formal
- Modelo de escalado multi-equipo (Tier 2/Tier 3 con Dependency Register y Program Board)

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

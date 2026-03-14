---
id: tooling-integration
title: Integración de Herramientas
sidebar_position: 4
description: Cómo implementar GOAL en herramientas populares de gestión de proyectos — Jira, Linear, Trello, Notion, GitHub Projects y Google Sheets.
---

# Integración de Herramientas

GOAL puede implementarse en cualquier herramienta de gestión visual de trabajo. Esta guía cubre las principales herramientas y cómo configurarlas para soportar los requisitos de GOAL.

---

## Mapa de Requisitos de GOAL

| Requisito de GOAL | Característica de la Herramienta Necesaria |
|-------------------|------------------------------------------|
| Columnas del Flow Board | Tablero kanban con columnas configurables |
| Límites de WIP | Límites de WIP por columna O campo personalizado de contador |
| Tamaño de tarea (S/M/L) | Etiquetas o campo personalizado |
| Campo "fecha de entrada a columna" | Campo de fecha personalizado O historial de automatización |
| Block Register | Base de datos separada o hoja de cálculo vinculada |
| Flow Metrics Dashboard | Analíticas integradas O exportación a hoja de cálculo |
| Cycle Accuracy Index | Seguimiento manual en hoja de cálculo o campo de fecha personalizado |
| Goal Cycle Plan | Documento vinculado o campo de descripción del sprint |

---

## Jira

**Configuración recomendada para equipos que usan Jira:**

**Tipo de tablero:** Tablero Kanban (no Scrum)

**Configuración de columnas:**
- Backlog → Ready → In Progress → Code Review → Validation → Done
- Añadir un estado Bloqueado (puede ser una columna o un campo de estado)

**Límites de WIP en Jira:**
- Configurar en Configuración del Tablero → Límites de Columna
- Aplicar a las columnas In Progress, Code Review y Validation

**Campos personalizados a crear:**
- Tamaño de Tarea (lista desplegable: S, M, L)
- Objetivo Servido (texto o enlace a épica)
- Tipo de Bloqueante (lista desplegable: Técnico, Externo, Decisión de Negocio, Dependencia, Infraestructura)
- Fecha de Entrada a Columna (campo de fecha, actualizado por automatización)

**Reglas de automatización útiles:**
- Cuando una incidencia se mueve a una columna → Establecer campo "Fecha de entrada a columna" como fecha de hoy
- Cuando Focus Ratio supera 1.0 → Enviar notificación al Flow Master

---

## Linear

**Configuración recomendada:**

**Estructura de ciclo:** Usar los Ciclos de Linear para mapear los Ciclos de Objetivos de GOAL. Los ciclos pueden cerrarse anticipadamente — Linear soporta esto nativamente.

**Configuración del flujo de trabajo:**
- Todo → Backlog → Ready → In Progress → Code Review → Validation → Done

**Etiquetas:**
- Tamaño: `S`, `M`, `L`
- Estado especial: `Bloqueado`, `Expedite`, `Deuda Técnica`
- Objetivo: etiquetas de objetivo específicas

**Limitaciones de WIP en Linear:**
- Linear no soporta límites de WIP nativamente
- Solución alternativa: usar un campo de estado de prioridad personalizado y monitorear el conteo manualmente en las vistas de filtro

---

## Trello

**Configuración recomendada:**

**Estructura del tablero:**
- Columnas: Backlog | Ready | In Progress | Code Review | Validation | Done
- Carriles adicionales (implementados como tableros separados o listas): Bloqueado | Expedite | Deuda Técnica

**Power-Ups útiles:**
- Card Aging (envejecimiento de tarjetas) — muestra visualmente el envejecimiento de tarjetas
- Custom Fields — para tamaño (S/M/L) y propietario del objetivo

**Reglas de Butler para WIP:**
- Crear reglas de automatización: "Cuando se mueve una tarjeta a In Progress Y el número de tarjetas en In Progress + Code Review + Validation ≥ [límite de WIP] → Enviar notificación al Flow Master"

---

## Google Sheets

Para equipos que prefieren una solución de bajo costo, un tablero GOAL completo puede implementarse en Google Sheets.

**Estructura de hojas sugerida:**

| Hoja | Propósito |
|------|-----------|
| Flow Board | Vista de kanban en tabla (columnas = estados del tablero) |
| Block Register | Log de todos los bloqueantes con todos los campos requeridos |
| Flow Metrics | Cálculos de métricas por ciclo con gráficos de tendencias |
| Goal Cycle Plans | Historial de todos los Goal Cycle Plans con datos del CAI |
| Backlog | Backlog priorizado con campos de criterios de aceptación |

---

## Recomendaciones por Tamaño/Presupuesto del Equipo

| Situación del Equipo | Herramienta Recomendada |
|---------------------|------------------------|
| Startup, ≤ 5 personas, bajo presupuesto | Linear (gratuito para pequeños equipos) o Trello |
| Equipo tech, 5–15 personas | Linear o GitHub Projects |
| Empresa con Jira ya instalado | Jira (Tablero Kanban, no Scrum) |
| Equipo no-tech o sin herramienta | Notion o Google Sheets |
| Multi-equipo que necesita Program Board | Miro o FigJam (para Program Board visual) + herramienta de equipo |

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

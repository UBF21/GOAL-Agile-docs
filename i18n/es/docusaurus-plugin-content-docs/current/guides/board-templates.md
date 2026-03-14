---
id: board-templates
title: Plantillas del Tablero
sidebar_position: 2
description: Plantillas del Flow Board de GOAL — diseño del tablero de equipo individual, plantilla de tarjeta de tarea, tarjeta Expedite, tarjeta de Deuda Técnica, indicadores de envejecimiento y Block Register.
---

# Plantillas del Flow Board

---

## Plantilla 1 — Flow Board de Equipo Individual

```
┌─────────┬─────────┬─────────────┬─────────────┬────────────┬──────────┐
│ BACKLOG │  READY  │ IN PROGRESS │ CODE REVIEW │ VALIDATION │   DONE   │
│         │         │  WIP: ___   │  WIP: ___   │  WIP: ___  │          │
│         │         │             │             │            │          │
│         │         │             │             │            │          │
│         │         │             │             │            │          │
│         │         │             │             │            │          │
└─────────┴─────────┴─────────────┴─────────────┴────────────┴──────────┘

Carriles especiales:
┌─────────────────────────────────────────────────────────────────────────┐
│ BLOQUEADO                                                               │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────┐
│ EXPEDITE (máx. 1)                                                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────┐
│ DEUDA TÉCNICA (15% de capacidad)                                        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Plantilla 2 — Tarjeta de Tarea Estándar

```
┌─────────────────────────────────────────┐
│ [S/M/L]  ID: TASK-XXX                  │
│                                         │
│ NOMBRE DE LA TAREA                      │
│ [Descripción clara orientada al result] │
│                                         │
│ Propietario: _______________            │
│ Objetivo: _______________               │
│                                         │
│ Entrada a columna: [fecha]              │
│ Indicador de envejecimiento: ⚪ / 🟡 / 🔴│
└─────────────────────────────────────────┘
```

---

## Plantilla 3 — Tarjeta Expedite

```
┌─────────────────────────────────────────┐
│ 🚨 EXPEDITE          ID: EXP-XXX        │
│                                         │
│ NOMBRE DEL INCIDENTE/SOLICITUD          │
│                                         │
│ Tipo:   [ ] P1 — Incidente Producción   │
│         [ ] P2 — Solicitud Urgente      │
│                                         │
│ Propietario: _______________            │
│ Aprobado por FM: ____________           │
│ Aprobado por PS: ____________           │
│ Fecha de aprobación: __________         │
│ Business case: ________________         │
│                                         │
│ Tiempo en Expedite: __ días             │
│ LÍMITE: 3 días sin resolución           │
└─────────────────────────────────────────┘
```

---

## Plantilla 4 — Tarjeta de Deuda Técnica

```
┌─────────────────────────────────────────┐
│ 🔧 DEUDA TÉCNICA     ID: DEBT-XXX       │
│ Tamaño: [S/M/L]                         │
│                                         │
│ NOMBRE DE LA MEJORA TÉCNICA             │
│                                         │
│ Problema actual:                        │
│ [Descripción del problema]              │
│                                         │
│ Mejora propuesta:                       │
│ [Descripción de la mejora]              │
│                                         │
│ Propietario: _______________            │
│ Entrada a columna: [fecha]              │
└─────────────────────────────────────────┘
```

---

## Plantilla 5 — Indicadores de Envejecimiento

```
Umbrales de envejecimiento por tamaño de tarea:

  Tarea Small (S):
    Esperado: 1 día por columna
    🟡 Amarillo: en la misma columna > 1 día
    🔴 Rojo:     en la misma columna > 2 días

  Tarea Medium (M):
    Esperado: 2–3 días por columna
    🟡 Amarillo: en la misma columna > 2 días
    🔴 Rojo:     en la misma columna > 4 días

Acción requerida:
  🟡 Amarillo → Discutir en el próximo Daily Flow Sync
  🔴 Rojo     → Acción inmediata requerida — el Flow Master investiga
```

---

## Plantilla 6 — Block Register

```
┌──────┬─────────┬──────────────┬────────────────┬───────────┬──────────────┬──────────────┬────────────────┬────────────────┬────────────┐
│  ID  │ Tarea   │ Fecha Bloq.  │ Descripción    │   Tipo    │ Responsable  │ Plan         │ Resolución     │ Fecha Resol.   │ Tiempo     │
│      │         │              │ del Bloqueante │ Bloqueante│ Resolución   │ Resolución   │ Esperada       │ Real           │ Bloqueado  │
├──────┼─────────┼──────────────┼────────────────┼───────────┼──────────────┼──────────────┼────────────────┼────────────────┼────────────┤
│BLK-1 │TASK-042 │  [fecha]     │ [descripción]  │ Técnico   │ [nombre]     │ [plan]       │ [fecha]        │ [fecha]        │ 2 días     │
│BLK-2 │TASK-055 │  [fecha]     │ [descripción]  │ Externo   │ [nombre]     │ [plan]       │ [fecha]        │ [fecha]        │ 1 día      │
└──────┴─────────┴──────────────┴────────────────┴───────────┴──────────────┴──────────────┴────────────────┴────────────────┴────────────┘
```

Tipos de bloqueantes: Técnico · Externo · Decisión de Negocio · Dependencia · Infraestructura

---

## Plantilla 7 — Flow Metrics Dashboard

```
┌────────────────────────────────────────────────────────┐
│           FLOW METRICS DASHBOARD — Ciclo XX            │
├──────────────────────────────┬─────────────────────────┤
│ MÉTRICA                      │ VALOR ACTUAL            │
├──────────────────────────────┼─────────────────────────┤
│ WIP Actual                   │ ___ / ___ (límite)      │
│ Focus Ratio                  │ ___.___                 │
├──────────────────────────────┼─────────────────────────┤
│ Cycle Time Promedio (últ. 10)│ ___ días                │
│ Flow Time Promedio (últ. 10) │ ___ días                │
│ Flow Efficiency              │ ___% (objetivo: 30–50%) │
├──────────────────────────────┼─────────────────────────┤
│ Block Rate del Ciclo         │ ___% (objetivo: < 20%)  │
│ Delivery Rate                │ ___ tareas/día          │
├──────────────────────────────┼─────────────────────────┤
│ Cycle Accuracy Index         │ ___.___                 │
│ Duración Real del Ciclo      │ ___ días                │
│ Duración Estimada del Ciclo  │ ___ días                │
├──────────────────────────────┼─────────────────────────┤
│ TAREAS CON ENVEJECIMIENTO    │                         │
│ 🟡 Amarillo                  │ ___                     │
│ 🔴 Rojo                      │ ___                     │
└──────────────────────────────┴─────────────────────────┘
```

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

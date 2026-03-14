---
id: metrics-system
title: Sistema de Métricas
sidebar_position: 1
description: El sistema de métricas de GOAL — las siete métricas de flujo, fórmulas, benchmarks y cómo se usan en los eventos.
---

# Sistema de Métricas de Flujo

GOAL reemplaza los story points y la velocidad con métricas de flujo basadas en la observación. En lugar de preguntar "¿cuánto tiempo tomará esto?" (estimación), GOAL pregunta "¿cuánto tiempo suele tomar este tipo de trabajo?" (observación histórica).

---

## Por qué se Eliminaron los Story Points

Cuatro problemas estructurales con los story points:
1. **Inflación con el tiempo** — los equipos inconscientemente renegocian lo que significan los números
2. **No comparables entre equipos** — los puntos de un equipo no significan nada para otro
3. **La ilusión de precisión** del planning poker — horas de estimación para conjeturas
4. **La velocidad se convierte en objetivo** — lo que la corrompe como medición (Ley de Goodhart)

---

## Las Siete Métricas

### 1. Flow Time (Tiempo de Flujo)

Tiempo total transcurrido desde que una tarea entra en la columna Ready hasta que entra en Done. Incluye todo el tiempo de espera, tiempo bloqueado y tiempo activo.

**Uso:** Métrica orientada al cliente — si un stakeholder pregunta "¿cuánto tiempo hasta que esa función esté disponible?", la respuesta se mapea al Flow Time.

---

### 2. Cycle Time (Tiempo de Ciclo)

Tiempo transcurrido desde que comienza el trabajo activo en una tarea (entra en In Progress) hasta que se completa (entra en Done). Mide solo el tiempo de procesamiento activo.

**Esperado en GOAL:** 1–3 días para tareas S/M correctamente dimensionadas.

**Relación:** Flow Time = Cycle Time + Wait Time

---

### 3. Wait Time (Tiempo de Espera)

El tiempo que una tarea pasa en el sistema sin trabajo activo. Calculado como: Flow Time − Cycle Time.

Se acumula mientras las tareas esperan en la cola de Ready, esperan un revisor de código, esperan capacidad de QA, o esperan una decisión de negocio.

**El tiempo de espera es la mayor palanca de mejora** en los sistemas de flujo.

---

### 4. Flow Efficiency (Eficiencia del Flujo)

```
Flow Efficiency = (Cycle Time ÷ Flow Time) × 100
```

Mide qué porcentaje del tiempo total de flujo se dedicó al trabajo activo frente a la espera.

**Ejemplo:** Una tarea con Flow Time de 5 días y Cycle Time de 1,5 días tiene una Flow Efficiency del 30%.

**Benchmarks:**

| Rango | Interpretación |
|-------|----------------|
| < 15% | La mayor parte del tiempo se pasa esperando |
| 15–30% | Típico para equipos nuevos en gestión de flujo |
| 30–50% | Saludable para equipos establecidos |
| 50%+ | Flujo de alto rendimiento |

---

### 5. Block Rate (Tasa de Bloqueo)

```
Block Rate = (Tareas que se bloquearon ÷ Total de tareas completadas) × 100
```

**Benchmarks:**

| Rango | Interpretación |
|-------|----------------|
| < 10% | Excelente — flujo de trabajo muy limpio |
| 10–20% | Saludable para la mayoría de equipos |
| 20–30% | Investigar patrones recurrentes |
| > 30% | Problema sistémico — requiere investigación profunda |

---

### 6. Delivery Rate (Tasa de Entrega)

Número de tareas movidas a Done por día laboral durante un Ciclo de Objetivos. Mide la estabilidad del throughput más que la velocidad absoluta.

**Importante:** Seguido como tendencia, no usado como objetivo diario. Una tasa de entrega consistente (aunque moderada) es más valiosa para la planificación que una alta pero volátil.

---

### 7. Focus Ratio

```
Focus Ratio = Tareas Activas (In Progress + Code Review + Validation) ÷ Límite de WIP
```

| Focus Ratio | Interpretación | Acción |
|-------------|----------------|--------|
| < 0,7 | Posible capacidad inactiva | Verificar si el backlog está listo o si el trabajo es invisible |
| 0,7–1,0 | Saludable | Sin acción necesaria |
| > 1,0 | Límite de WIP excedido | Intervención inmediata del Flow Master |

---

### 8. Cycle Accuracy Index (CAI)

```
CAI = Duración Real del Ciclo ÷ Duración Estimada del Ciclo
```

| Resultado | Interpretación |
|-----------|----------------|
| 1,0 | Precisión perfecta |
| < 1,0 | El ciclo se completó antes de lo estimado |
| > 1,0 | El ciclo tomó más tiempo de lo estimado |

El CAI reemplaza a la velocidad como señal principal de planificación.

---

## Cómo se Usan las Métricas en los Eventos

| Métrica | Dónde se usa | Propósito |
|---------|-------------|-----------|
| Focus Ratio | Daily Flow Sync | Diagnóstico en tiempo real del WIP |
| Indicadores de envejecimiento | Daily Flow Sync | Identificar tareas estancadas temprano |
| Todos | Retrospectiva Basada en Datos | Identificar mejoras sistémicas del proceso |
| CAI | Smart Planning Session | Informar la estimación de duración del ciclo |
| Flow Efficiency, Block Rate | Retrospectiva | Tendencias de mejora del proceso |

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

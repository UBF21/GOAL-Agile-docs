---
id: program-metrics
title: Métricas de Programa
sidebar_position: 5
description: Las cinco métricas de programa de GOAL — Cross-Team Block Rate, Tiempo de Resolución de Dependencias, Tasa de Dependencias, Tasa de Completación de Objetivos de Programa e Índice de Precisión de Ciclos de Programa.
---

# Métricas de Programa

Las métricas de programa complementan las métricas del equipo individual sin reemplazarlas. Miden la salud de la coordinación entre equipos, no el rendimiento de equipos individuales.

---

## Las Cinco Métricas de Programa

### 1. Cross-Team Block Rate (Tasa de Bloqueo Entre Equipos)

```
Formula: (Dependencias que alcanzaron estado Bloqueada ÷
          Total de dependencias en el ciclo) × 100

Objetivo: < 15%
Zona de alerta: > 25%
```

Una Cross-Team Block Rate alta indica que las dependencias entre equipos no se están resolviendo de forma proactiva. Se analiza por tipo de dependencia para identificar qué categorías producen más bloqueos.

---

### 2. Tiempo Promedio de Resolución de Dependencias

```
Formula: Promedio de (Fecha de resolución - Fecha de creación) para todas las
         dependencias resueltas en el ciclo

Objetivo: < 2 días laborables
Zona de alerta: > 3 días laborables
```

Mide la velocidad de respuesta del programa a las dependencias. Exceder el objetivo indica que los equipos proveedores están tardando demasiado en cumplir con los compromisos entre equipos.

---

### 3. Tasa de Dependencias

```
Formula: (Nuevas dependencias abiertas en el ciclo ÷
          Total de tareas completadas en todos los equipos) × 100

Objetivo: < 10%
Zona de alerta: > 20% — revisión arquitectónica recomendada
```

Mide el acoplamiento arquitectónico entre equipos. Una Tasa de Dependencias en aumento a lo largo de los ciclos señala que la arquitectura del producto está creando más overhead de coordinación con el tiempo.

---

### 4. Program Goal Completion Rate (Tasa de Completación de Objetivos de Programa)

```
Formula: (Objetivos de Programa completados a tiempo ÷
          Total de Objetivos de Programa planificados) × 100

Objetivo: > 80%
Zona de alerta: < 60% de forma consistente
```

Mide si el programa está alcanzando los resultados que importan — no solo si los equipos individuales están entregando. Una tasa alta del equipo individual combinada con una tasa baja de objetivos de programa indica un problema de alineación.

---

### 5. Program Cycle Accuracy Index (Índice de Precisión de Ciclos de Programa)

```
Formula: Igual que el CAI del equipo individual, aplicado a la duración de los ciclos de programa

CAI = Duración Real del Ciclo de Programa ÷ Duración Estimada del Ciclo de Programa

Objetivo: Mejorar a lo largo de los ciclos hacia 0,9–1,1
```

Mide si las estimaciones de duración del ciclo a nivel de programa son precisas. Los ciclos de programa que se extienden consistentemente son una señal de que los objetivos del programa están sobredimensionados o que las dependencias entre equipos no están siendo gestionadas de forma efectiva.

---

## Cuadro de Mando de Métricas de Programa

| Métrica | Objetivo | Zona de alerta | Propietario |
|---------|---------|--------------|----------|
| Cross-Team Block Rate | < 15% | > 25% | Program Flow Master |
| Tiempo de Resolución de Dependencias | < 2 días | > 3 días | Program Flow Master |
| Tasa de Dependencias | < 10% | > 20% | Program Flow Master |
| Program Goal Completion Rate | > 80% | < 60% | Program Strategist |
| Program Cycle Accuracy Index | 0,9–1,1 | > 1,3 consistentemente | Program Flow Master |

---

## Uso de Métricas en el Program Retrospective

Las métricas de programa proporcionan la base de datos para el Program Retrospective. Discusiones de ejemplo:

- Cross-Team Block Rate del 28%: "¿Qué tipos de dependencias se están bloqueando más? ¿Hay un patrón recurrente en un equipo específico?"
- Tasa de Dependencias por encima del 20% por segundo ciclo consecutivo: "Esto desencadena la revisión arquitectónica obligatoria — ¿quiénes deben estar en esa sala?"
- Program Goal Completion Rate del 60% a pesar de métricas de equipo saludables: "¿Los objetivos del equipo se están trazando de forma efectiva a los objetivos del programa? ¿El camino crítico fue visible antes de que comenzara el ciclo?"

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

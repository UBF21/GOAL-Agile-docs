---
id: wip-limits
title: Límites de WIP
sidebar_position: 6
description: Límites de Work-in-Progress de GOAL — fórmula, Focus Factor, aplicación y gestión del Focus Ratio.
---

# Límites de WIP

Los límites de Work-in-Progress (WIP) son la principal palanca de GOAL para mejorar el flujo. Definen el número máximo de tareas que pueden estar en estados activos simultáneamente.

---

## Definición

El WIP incluye todas las tareas en: **In Progress + Code Review + Validation**.

Las tareas en Backlog, Ready, Blocked o Done no cuentan para el WIP.

---

## La Fórmula

```
Límite de WIP = Tamaño del Equipo × Focus Factor
```

### Selección del Focus Factor

| Factor de Enfoque | Cuándo usar | Ejemplo de equipo |
|-------------------|-------------|-------------------|
| **0,6** | Equipos nuevos en GOAL, alta tasa de interrupciones, muchas dependencias | Equipo nuevo con muchos incidentes P1, o equipo de plataforma con muchas solicitudes entrantes |
| **0,7** | Equipo estándar con tasa de interrupciones moderada | La mayoría de los equipos en funcionamiento |
| **0,8** | Equipos maduros con baja tasa de interrupciones, trabajo bien definido | Equipos establecidos con un backlog estable y pocos bloqueantes |

### Calculadora Rápida de Límite de WIP

| Tamaño del Equipo | FF = 0,6 | FF = 0,7 | FF = 0,8 |
|-------------------|----------|----------|----------|
| 2 | 1 | 1 | 2 |
| 3 | 2 | 2 | 2 |
| 4 | 2 | 3 | 3 |
| 5 | 3 | 4 | 4 |
| 6 | 4 | 4 | 5 |
| 7 | 4 | 5 | 6 |
| 8 | 5 | 6 | 6 |
| 10 | 6 | 7 | 8 |
| 12 | 7 | 8 | 10 |

---

## Autoridad de WIP

El **Flow Master** tiene autoridad para:
- Calcular y publicar el límite de WIP al inicio de cada ciclo
- Bloquear el inicio de nuevas tareas cuando el WIP está lleno
- Aprobar anulaciones temporales del WIP (con documentación escrita del motivo)

Cuando el WIP está lleno, el equipo sigue este orden de prioridades:
1. Mover las tareas existentes hacia Done (tirar, no empujar)
2. Desbloquear las tareas bloqueadas
3. Ayudar con la revisión de código o validación
4. Solo si todo lo anterior no es posible, comenzar una nueva tarea con anulación documentada

---

## Focus Ratio

```
Focus Ratio = Tareas Activas (In Progress + Code Review + Validation) ÷ Límite de WIP
```

| Focus Ratio | Interpretación | Acción |
|-------------|----------------|--------|
| < 0,7 | Posible capacidad inactiva | Verificar si el backlog está listo o si el trabajo es invisible |
| 0,7–1,0 | Saludable | Sin acción necesaria |
| > 1,0 | Límite de WIP excedido | Se requiere intervención inmediata del Flow Master |

---

## Errores Comunes

**Ignorar el límite bajo presión:** El límite de WIP existe precisamente bajo presión — cuando hay "demasiado urgente" es cuando la restricción importa más.

**No actualizar después de cambios en el equipo:** Recalcular cuando los miembros del equipo se unen o salen.

**Tratar WIP como un objetivo en lugar de un máximo:** Operar en 0,85 del límite es mejor que intentar alcanzar exactamente 1,0.

**No contar el trabajo en Code Review y Validation:** Estas columnas forman parte del WIP. Ignorarlas oculta la carga real del sistema.

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

---
id: flow-board
title: El Flow Board
sidebar_position: 5
description: El Flow Board de GOAL — columnas estándar, carriles especiales, sizing de tareas y reglas de visibilidad del trabajo.
---

# El Flow Board

El Flow Board es el artefacto central de gestión visual de GOAL. Proporciona a todo el equipo una vista compartida en tiempo real de todo el trabajo activo, su estado actual, quién es responsable y si está fluyendo o estancado.

---

## Columnas Estándar

| Columna | Propósito | Criterio de entrada | Criterio de salida |
|---------|-----------|---------------------|-------------------|
| **Backlog** | Items listos para el ciclo actual | Está en el Goal Cycle Plan | El desarrollador lo recoge |
| **Ready** | Listo para comenzar trabajo activo | Item completamente preparado, criterios de aceptación completos, tamaño asignado | El desarrollador comienza el trabajo activo |
| **In Progress** | Trabajo activo en curso | El desarrollador ha comenzado | Código completo, listo para revisión |
| **Code Review** | Código bajo revisión por pares | PR abierto, cambios completos | Revisión aprobada |
| **Validation** | Pruebas en entorno staging/QA | Revisión de código aprobada | Todos los criterios de aceptación verificados |
| **Done** | Completado, cumpliendo la DoD | Todas las casillas de la DoD marcadas | N/A — estado final |

---

## Carriles Especiales

### Carril Blocked

Para tareas que no pueden avanzar debido a un factor externo. Moverse a Blocked es **obligatorio**, no opcional. Una tarea bloqueada retenida privadamente es una violación del proceso.

Cuándo mover una tarea a Blocked:
- Una decisión de negocio que está pendiente y bloquea el progreso
- Una dependencia de otro equipo o tercero
- Un problema de infraestructura técnica que no puede ser resuelto por el desarrollador
- Un defecto en una dependencia externa

No está bloqueado (está en progreso):
- El desarrollador está pensando o investigando
- El desarrollador está aprendiendo una nueva tecnología
- El trabajo está simplemente tomando más tiempo de lo esperado

### Carril Expedite

Para trabajo urgente aprobado a través del Protocolo de Gestión de Interrupciones. Reglas:
- Máximo **una tarea activa** en cualquier momento (sin excepciones)
- Requiere aprobación conjunta de Flow Master y Product Strategist
- La justificación empresarial debe estar documentada antes de que comience el trabajo
- Una tarea Expedite que toma más de 3 días sin resolución desencadena una reclasificación

### Carril Technical Debt

Para trabajo de reducción de deuda técnica. Cada ciclo asigna 10–20% de la capacidad del equipo a este carril (mínimo 10%, estándar 15%).

---

## Sizing de Tareas

| Tamaño | Duración de Entrega | Regla |
|--------|---------------------|-------|
| **S (Small)** | 1 día | Lista para ejecutar tal cual |
| **M (Medium)** | 2–3 días | Puede comenzar con los criterios de aceptación definidos |
| **L (Large)** | Más de 3 días | **Debe dividirse antes de entrar en In Progress** |

**Una tarea Large en In Progress es una violación del proceso.** Large es un artefacto de planificación; debe descomponerse antes de que comience el trabajo.

### Cómo Dividir una Tarea Large

1. Identificar los subresultados independientes dentro de la tarea
2. Verificar que cada subtarea puede pasar la DoD de forma independiente
3. Crear tarjetas separadas para cada subtarea con criterios de aceptación propios
4. Archivar o eliminar la tarjeta Large original
5. Si las subtareas tienen dependencias entre sí, secuenciarlas explícitamente

---

## Información Mínima Requerida en la Tarjeta de Tarea

Cada tarjeta de tarea en el Flow Board debe contener:

- **Nombre de la tarea** — claro y orientado al resultado
- **Tamaño** (S/M/L)
- **Propietario** — persona actualmente responsable
- **Fecha de entrada en la columna actual** — para el cálculo del indicador de envejecimiento
- **Objetivo que sirve** — enlace al objetivo primario o secundario que apoya esta tarea

---

## Indicadores de Envejecimiento

| Indicador | Significado | Acción requerida |
|-----------|-------------|-----------------|
| 🟡 Amarillo | La tarea ha estado en la misma columna más tiempo del esperado para su tamaño | Discutir en el próximo Daily Flow Sync |
| 🔴 Rojo | La tarea ha estado en la misma columna 2× el tiempo esperado para su tamaño | Acción inmediata requerida — el Flow Master investiga |

Umbrales de envejecimiento por tamaño:
- Small: Amarillo en 1 día, Rojo en 2 días
- Medium: Amarillo en 2 días, Rojo en 4 días

---

## La Regla de Todo el Trabajo en el Tablero

Todo el trabajo — incluyendo soporte, depuración, herramientas internas, y reuniones que consumen tiempo significativo — va en el Flow Board. No existe un umbral mínimo de tamaño para una tarjeta de tarea.

El trabajo invisible distorsiona el WIP, el tiempo de ciclo y las métricas de tasa de entrega. También oculta la carga cognitiva del equipo y del Flow Master.

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

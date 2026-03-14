---
id: blocked-task-protocol
title: Protocolo de Tareas Bloqueadas
sidebar_position: 2
description: El Protocolo de Tareas Bloqueadas de GOAL — plantilla del Block Register, tipos de bloqueantes, línea de tiempo de escalación y uso en retrospectiva.
---

# Protocolo de Tareas Bloqueadas

El Protocolo de Tareas Bloqueadas define cómo responder cuando el trabajo no puede avanzar. Convierte la gestión de bloqueantes de una actividad ad-hoc a un proceso estructurado con responsabilidad definida.

---

## Qué Significa "Bloqueado"

Una tarea está Bloqueada cuando la persona responsable de ella no puede avanzar debido a un factor fuera de su control inmediato que requiere acción de otra persona.

**Está bloqueado:**
- Una decisión de negocio pendiente que bloquea el progreso
- Una dependencia de otro equipo o tercero
- Un problema de infraestructura técnica que no puede resolverse independientemente
- Un defecto en una dependencia externa

**No está bloqueado (está en progreso):**
- El desarrollador está pensando, investigando o aprendiendo
- El trabajo simplemente está tomando más tiempo de lo esperado

---

## Plantilla de Entrada del Block Register

```
Entrada del Block Register:
  Nombre de la tarea:         [nombre]
  ID de la tarea:             [ID del sistema de gestión]
  Fecha bloqueada:            [fecha]
  Descripción del bloqueante: [descripción clara y específica]
  Tipo de bloqueante:         [ver categorías abajo]
  Responsable de resolución:  [nombre de la persona]
  Plan de resolución:         [qué acción se está tomando]
  Fecha de resolución esperada: [fecha]
  Fecha de resolución real:   [rellenar cuando se resuelva]
  Tiempo total bloqueado:     [días, rellenar cuando se resuelva]
```

Una entrada del Block Register incompleta es en sí misma una violación del proceso.

---

## Categorías de Tipos de Bloqueantes

| Tipo | Descripción | Ruta de escalación (en 48h) |
|------|-------------|---------------------------|
| **Técnico** | Problema técnico que requiere investigación o decisión | Flow Master + Tech Lead |
| **Externo** | Bloqueado por tercero, otro equipo, servicio externo | Product Strategist contacta a parte externa |
| **Decisión de Negocio** | Requiere decisión del Product Strategist o stakeholder | Product Strategist escala |
| **Dependencia** | Bloqueado por otra tarea que no está completa | Flow Master reprioriza la tarea bloqueante |
| **Infraestructura** | Entorno o problema de tooling (pipeline CI roto) | Flow Master escala a DevOps/Plataforma con SLA formal |

---

## Línea de Tiempo de Escalación

```
Hora 0:
  → Tarea marcada como Bloqueada
  → Entrada del Block Register completada por el propietario de la tarea
  → El propietario comienza la resolución independiente

Horas 0–24:
  → El propietario resuelve independientemente si es posible
  → Flow Master está al tanto
  → El bloqueante se discute en el próximo Daily Flow Sync

Hora 24 (si no resuelto):
  → Flow Master asiste activamente
  → Bloqueante discutido en el Daily Flow Sync
  → Propietario de resolución confirmado

Hora 48 (si no resuelto):
  → Escalación formal — ruta según tipo de bloqueante:
    Técnico:             → Flow Master + Tech Lead
    Externo:             → Product Strategist contacta parte externa
    Decisión de Negocio: → Product Strategist escala
    Dependencia:         → Flow Master reprioriza tarea bloqueante
    Infraestructura:     → Flow Master escala a DevOps/Plataforma

Horas 72+ (si no resuelto y afecta a objetivo primario):
  → Objetivo marcado como "en riesgo"
  → Product Strategist notificado formalmente
  → Extensión del ciclo evaluada
```

---

## Uso del Block Register en Retrospectiva

El Block Register se analiza en cada Retrospectiva Basada en Datos para:
- Identificar tipos de bloqueantes recurrentes
- Calcular el Block Rate del ciclo
- Identificar patrones que indican problemas sistémicos de proceso
- Proponer cambios de proceso para prevenir la recurrencia

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

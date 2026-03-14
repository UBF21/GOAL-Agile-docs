---
id: scaling-overview
title: Escalado de GOAL
sidebar_position: 1
description: Los tres niveles de escalado de GOAL — Tier 1, Tier 2 y Tier 3 — cuándo escalar y los principios que guían la coordinación entre equipos.
---

# Escalado de GOAL

GOAL está diseñado con equipos individuales como su unidad principal. Esta sección define cómo el framework se extiende a entornos de múltiples equipos, qué nuevas estructuras se requieren y dónde están los límites actuales.

---

## Los Tres Niveles de Escalado

| Nivel | Equipos | Etiqueta | Qué cambia |
|-------|---------|---------|------------|
| **Tier 1** | 1 equipo (2–12 personas) | **GOAL Equipo Individual** | Sin cambios — el framework base se aplica completamente |
| **Tier 2** | 2–3 equipos | **GOAL Multi-Equipo** | Se añade capa de coordinación a nivel de programa |
| **Tier 3** | 4–8 equipos | **GOAL de Programa** | Tablero de programa completo, roles de programa dedicados, registro formal de dependencias |

**Equipos más allá de 8:** GOAL v0.2 no prescribe un modelo para más de 8 equipos. A esa escala, las organizaciones deberían evaluar SAFe, LeSS o un enfoque personalizado de gestión de programas, potencialmente reteniendo GOAL a nivel de equipo individual.

---

## Cuándo Escalar

No toda organización con múltiples equipos necesita un framework de escalado. La pregunta es si los equipos tienen interdependencias significativas que afectan a la entrega.

```
¿Tienes 2+ equipos trabajando en el mismo producto o plataforma compartida?
├── NO → GOAL Equipo Individual es suficiente. Detente aquí.
└── SÍ
    ↓
¿Las tareas de un equipo bloquean regularmente tareas en otro equipo
(más de una vez por ciclo)?
├── NO → Solo coordinación ligera (sincronización semanal de Flow Masters).
│        No se necesita GOAL de Programa formal todavía.
└── SÍ
    ↓
¿Esas dependencias entre equipos afectan a la entrega de objetivos primarios
en alguno de los equipos?
├── NO → Añadir marcadores de dependencia en los Flow Boards. Revisar
│        en sincronización entre equipos. Monitorear para escalación.
└── SÍ → Introducir GOAL Multi-Equipo (Tier 2 o Tier 3
         dependiendo del número de equipos).
```

---

## Tier 2 — GOAL Multi-Equipo (2–3 Equipos)

Qué se añade al Tier 1:
- **Program Sync** — reunión de sincronización entre equipos semanal o dos veces por semana (30–45 min)
- **Dependency Register** — log simple de dependencias entre equipos con estado de seguimiento
- **Program Flow Master** — el Flow Master más experimentado asume responsabilidades de coordinación entre equipos a tiempo parcial

Los equipos individuales mantienen todos sus rituales y estructuras de GOAL Tier 1. La coordinación del Tier 2 se añade encima.

---

## Tier 3 — GOAL de Programa (4–8 Equipos)

Qué se añade al Tier 2:
- **Program Board** — vista visual de todos los ciclos de equipo con dependencias entre equipos dibujadas explícitamente
- **Cross-Team Dependency Review** — reunión de revisión dedicada dos veces por semana (30 min)
- **Program Retrospective** — retrospectiva a nivel de programa al final de cada ciclo de programa
- **Program Flow Master dedicado** — rol a tiempo completo (no combinado con responsabilidades de equipo)
- **Program Strategist** — define objetivos de programa que los equipos individuales traducen en objetivos a nivel de equipo

---

## Principios de Escalado

1. **Los rituales del equipo individual son inviolables** — el escalado añade coordinación entre equipos, nunca reemplaza los eventos del equipo individual
2. **La visibilidad de dependencias es obligatoria** — las dependencias ocultas destruyen la coordinación del programa
3. **La regla de estabilidad de objetivos se aplica a todos los niveles** — los objetivos del programa no cambian durante los ciclos activos, igual que los objetivos del equipo
4. **Las métricas de programa son adicionales, no reemplazos** — el Cross-Team Block Rate complementa la tasa de bloqueo del equipo; no la reemplaza

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

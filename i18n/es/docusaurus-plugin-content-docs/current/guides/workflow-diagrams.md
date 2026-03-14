---
id: workflow-diagrams
title: Diagramas de Flujo de Trabajo
sidebar_position: 3
description: Diagramas Mermaid del ciclo de vida del Ciclo de Objetivos, máquina de estados de tareas, Protocolo de Gestión de Interrupciones y otros flujos de trabajo clave de GOAL.
---

# Diagramas de Flujo de Trabajo

Diagramas visuales de los procesos clave del framework GOAL.

---

## Ciclo de Vida del Ciclo de Objetivos

```mermaid
stateDiagram-v2
    [*] --> SmartPlanning: Inicio del Ciclo

    SmartPlanning --> Active: Goal Cycle Plan publicado
    Active --> GoalReview: Objetivos completados
    Active --> Extended: Necesita más tiempo
    Active --> Emergency: Cambio fundamental de negocio

    Extended --> GoalReview: Objetivos completados (dentro de extensión)
    Extended --> PartialClose: Objetivos no completados después de extensión

    GoalReview --> Retrospective: Revisión completada
    Retrospective --> SmartPlanning: Próximo ciclo

    PartialClose --> Retrospective: Registrado con notas
    Emergency --> EmergencyPlanning: Protocolo de Ciclo de Emergencia invocado
    EmergencyPlanning --> SmartPlanning: Sesión de emergencia dentro de 24h

    note right of Active
        Ciclo en progreso:
        - Daily Flow Syncs diarios
        - WIP monitoreado constantemente
        - Bloqueantes registrados inmediatamente
        - Grooming a mitad de ciclo
    end note
```

---

## Máquina de Estados de Tarea

```mermaid
stateDiagram-v2
    [*] --> Discovery: Ítem creado

    Discovery --> Refinement: En análisis
    Refinement --> Ready: Criterios de aceptación completos + sizing
    Ready --> InProgress: Desarrollador lo recoge (WIP permite)

    InProgress --> CodeReview: Código completo
    InProgress --> Blocked: Bloqueante encontrado

    Blocked --> InProgress: Bloqueante resuelto
    CodeReview --> Validation: Revisión aprobada
    CodeReview --> InProgress: Cambios solicitados
    Validation --> Done: Todos los criterios de aceptación verificados
    Validation --> InProgress: Defecto encontrado

    Done --> [*]
    Discovery --> Archive: Ya no relevante
    Ready --> Archive: Repriorizado
```

---

## Protocolo de Gestión de Interrupciones

```mermaid
flowchart TD
    A[Solicitud entrante] --> B{¿Sistema en producción\nfallando ahora mismo?}

    B -->|Sí| C[P1 — Incidente en Producción]
    B -->|No| D{¿Impacto documentado\nen 1–5 días?}

    D -->|Sí| E[P2 — Solicitud Urgente]
    D -->|No| F[P3 — Normal Disfrazada]

    C --> G[Entrada inmediata al carril Expedite\nAprobación verbal del FM]
    E --> H{¿Coste de esperar >\ncoste de interrumpir?}
    F --> I[Añadir al backlog con prioridad normal\nComunicar línea de tiempo]

    H -->|Sí| J[Entrar en Expedite\nAprobación conjunta FM + PS]
    H -->|No| K[Añadir al backlog\npriorizado para próximo ciclo]

    G --> L[Documentar business case dentro de 2h]
    J --> L
```

---

## Escalación de Tareas Bloqueadas

```mermaid
flowchart TD
    A[Tarea bloqueada identificada] --> B[Mover a columna Blocked]
    B --> C[Completar entrada del Block Register\nwithin 1 hora]
    C --> D[Hora 0–24: Resolución independiente]

    D --> E{¿Resuelto en 24h?}
    E -->|Sí| F[Mover de vuelta a In Progress]
    E -->|No| G[Hora 24: Flow Master asiste activamente]

    G --> H{¿Resuelto en 48h?}
    H -->|Sí| F
    H -->|No| I{Tipo de bloqueante}

    I -->|Técnico| J[Flow Master + Tech Lead]
    I -->|Externo| K[Product Strategist contacta parte externa]
    I -->|Decisión de Negocio| L[Product Strategist escala]
    I -->|Dependencia| M[Flow Master reprioriza tarea bloqueante]
    I -->|Infraestructura| N[Escalar a DevOps con SLA formal]

    J --> O{¿Objetivo afectado?}
    K --> O
    L --> O
    M --> O
    N --> O

    O -->|Sí| P[Marcar objetivo en riesgo\nNotificar Product Strategist\nEvaluar extensión del ciclo]
    O -->|No| Q[Continuar monitoreo]
```

---

## Smart Planning Session

```mermaid
flowchart TD
    A[Inicio de Smart Planning] --> B[Revisar CAI del ciclo anterior\n5 min]
    B --> C[Revisar preparación del backlog\n5 min]
    C --> D{¿Backlog listo?}
    D -->|No| E[Posponer hasta que el backlog esté listo]
    D -->|Sí| F[Definir objetivos primarios\n20–30 min]
    F --> G[Definir objetivos secundarios\n5–10 min]
    G --> H[Establecer límite de WIP\n5 min]
    H --> I[Confirmar asignación de deuda técnica\n5 min]
    I --> J[Publicar Goal Cycle Plan]
    J --> K[Ciclo comienza]
```

---

## Aplicación de Límites de WIP

```mermaid
flowchart TD
    A[Desarrollador quiere iniciar nueva tarea] --> B{¿WIP actual < Límite de WIP?}
    B -->|Sí| C[Iniciar tarea — WIP permitido]
    B -->|No| D[WIP lleno — NO iniciar nueva tarea]
    D --> E{¿Puede ayudar a mover trabajo existente hacia Done?}
    E -->|Sí| F[Ayudar con revisión de código o validación]
    E -->|No| G{¿Hay tareas bloqueadas que desbloquear?}
    G -->|Sí| H[Trabajar en desbloquer tarea existente]
    G -->|No| I{¿Aprobación de anulación del FM?}
    I -->|Sí| J[Documentar razón por escrito\nIniciar con anulación aprobada]
    I -->|No| K[Esperar hasta que el WIP baje por debajo del límite]
```

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

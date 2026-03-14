---
id: remote-async
title: Equipos Remotos y Asíncronos
sidebar_position: 16
description: Adaptaciones de GOAL para equipos distribuidos y asíncronos, incluyendo protocolos de comunicación, gestión de zonas horarias, Daily Flow Sync remoto, y anti-patterns específicos del trabajo remoto.
---

# GOAL Agile Methodology
## Adaptaciones para Equipos Remotos y Asíncronos

## Índice

1. [Remote-First vs Remote-Friendly: la distinción que define todo](#1-remote-first-vs-remote-friendly-la-distinción-que-define-todo)
2. [Principios de comunicación async-first](#2-principios-de-comunicación-async-first)
3. [Daily Flow Sync adaptado para equipos asíncronos](#3-daily-flow-sync-adaptado-para-equipos-asíncronos)
4. [Smart Planning remoto](#4-smart-planning-remoto)
5. [Formatos de retrospectiva remota](#5-formatos-de-retrospectiva-remota)
6. [Gestión de zonas horarias](#6-gestión-de-zonas-horarias)
7. [Flow Board para equipos remotos](#7-flow-board-para-equipos-remotos)
8. [Pair working remoto y code review asíncrono](#8-pair-working-remoto-y-code-review-asíncrono)
9. [Salud del equipo remoto](#9-salud-del-equipo-remoto)
10. [Tiempo de foco y deep work en remoto](#10-tiempo-de-foco-y-deep-work-en-remoto)
11. [Onboarding remoto en GOAL](#11-onboarding-remoto-en-goal)
12. [Anti-patterns remotos](#12-anti-patterns-remotos)

---

## 1. Remote-First vs Remote-Friendly: la distinción que define todo

### 1.1 La diferencia fundamental

Antes de adaptar GOAL al contexto remoto, el equipo debe resolver una pregunta de diseño que afecta a todas las demás decisiones: ¿somos un equipo **remote-first** o un equipo **remote-friendly**?

Esta distinción no es cosmética. Define la arquitectura de comunicación del equipo, los protocolos predeterminados, y quién carga con el peso de adaptarse.

---

### 1.2 Remote-friendly: la oficina sigue siendo el centro

Un equipo remote-friendly tolera el trabajo remoto, pero diseña sus procesos alrededor de quienes están en la oficina.

**Características:**

| Indicador | Comportamiento observable |
|-----------|--------------------------|
| Reuniones | Se celebran en salas físicas; los remotos se conectan como invitados |
| Decisiones | Ocurren en conversaciones de pasillo que los remotos no presencian |
| Información | Se transmite primero en persona, luego (si alguien recuerda) se documenta |
| Cultura | La visibilidad y la presencia física siguen siendo una ventaja implícita |
| Herramientas | Se adaptan a la oficina; los remotos usan lo que haya disponible |

**El problema con remote-friendly en GOAL:**

El modelo remote-friendly fractura la visibilidad que GOAL necesita para funcionar. Si las decisiones sobre el Goal Cycle Plan ocurren en conversaciones informales de oficina, el Flow Board refleja la realidad de algunos miembros del equipo pero no de todos. Los blockers no se registran porque la persona que podría resolverlos ya fue informada verbalmente. El Daily Flow Sync se vuelve un ritual vacío porque la información real ya circuló por otro canal.

GOAL no puede operar correctamente en un entorno remote-friendly con miembros distribuidos. La asimetría de información destruye la visibilidad que es un principio central del framework.

---

### 1.3 Remote-first: el proceso se diseña para quienes no están en la misma sala

Un equipo remote-first asume que nadie comparte el mismo espacio físico, incluso cuando algunos miembros están en una oficina. Todo proceso, decisión, y artefacto se diseña bajo esa premisa.

**Características:**

| Indicador | Comportamiento observable |
|-----------|--------------------------|
| Reuniones | Se celebran en formato digital por defecto, incluso si dos personas están en la misma oficina |
| Decisiones | Se documentan en el sistema de registro antes de ser consideradas válidas |
| Información | Se escribe primero; la conversación oral es un complemento, no el canal principal |
| Cultura | La contribución es medida por entregables visibles, no por presencia o disponibilidad de respuesta inmediata |
| Herramientas | Se eligen por su capacidad async; la sincronía es opcional, no la base |

**Por qué GOAL en remoto requiere remote-first:**

Los principios de GOAL —visibilidad sobre suposiciones, datos sobre estimaciones, entrega sobre actividad— son nativamente compatibles con remote-first. Ambos requieren que el trabajo sea explícito, documentado y observable. Un equipo remote-first que adopta GOAL no está haciendo una concesión; está aplicando los principios del framework de forma más rigurosa.

---

### 1.4 Declaración de modo de trabajo del equipo

Al comenzar a operar con GOAL en remoto, el equipo debe acordar y documentar explícitamente su modo de trabajo. Esta declaración forma parte del Goal Cycle Plan inaugural y se revisa en cada retrospectiva.

**Plantilla de declaración:**

```
Declaración de modo de trabajo — [Nombre del equipo]

Modo operativo:           [ ] Remote-first  [ ] Remote-friendly  [ ] Híbrido gestionado

Distribución del equipo:
  Zonas horarias presentes:   [lista]
  Horas de solapamiento:      [rango horario UTC]
  Miembros en oficina:        [número y ubicación]
  Miembros completamente remotos: [número]

Canal predeterminado para:
  Decisiones técnicas:        [herramienta/canal]
  Actualizaciones de estado:  [herramienta/canal]
  Blockers urgentes:          [herramienta/canal]
  Conversaciones informales:  [herramienta/canal]

Protocolo de documentación:
  Toda decisión que afecte al Goal Cycle Plan se registra en: [ubicación]
  Toda decisión técnica de impacto se registra en: [ubicación]

Horario de disponibilidad:
  Ventana de respuesta async estándar: [número de horas]
  Horas de sincronía opcional: [rango horario local de cada zona]

Aprobado por: Flow Master + Product Strategist
Fecha: [fecha]
Próxima revisión: [fecha de retrospectiva]
```

---

### 1.5 El modelo híbrido gestionado

Algunos equipos operan con una fracción en oficina y otra completamente distribuida. Este modelo es viable en GOAL bajo una condición: el equipo elige explícitamente comportarse como remote-first, independientemente de cuántas personas compartan una sala.

**Regla del modelo híbrido gestionado:**

> Si al menos un miembro del equipo no está físicamente presente, todo evento, decisión y comunicación relevante para el trabajo ocurre en el canal digital acordado. No hay conversaciones paralelas en sala que no se documenten inmediatamente.

Esto no significa que dos personas en la misma oficina no puedan hablar. Significa que cualquier conclusión de esa conversación que afecte al trabajo del equipo se registra antes del siguiente Daily Flow Sync.

---

## 2. Principios de comunicación async-first

### 2.1 El contrato de comunicación en GOAL remoto

La comunicación asíncrona no es simplemente una preferencia operativa; es una condición para que GOAL funcione en equipos distribuidos. Sin un protocolo explícito de comunicación, los WIP limits se vuelven invisibles, los blockers se gestionan en canales privados, y el Flow Board deja de reflejar la realidad.

GOAL remoto opera bajo cinco principios de comunicación que el equipo acuerda al inicio y revisa en cada retrospectiva.

---

### 2.2 Los cinco principios de comunicación async-first

**Principio 1 — Escribe antes de hablar**

Antes de solicitar una reunión o una llamada de video, escribe la información que necesitas comunicar. Si el mensaje escrito resuelve el problema, la reunión no es necesaria. Si la reunión es necesaria, el mensaje escrito es la agenda.

```
Incorrecto: "¿Tienes un momento para hablar sobre el blocker del módulo de pagos?"
Correcto:   "Blocker en módulo de pagos [Block Register #47]:
             La API de Stripe devuelve error 429 en entorno staging.
             He intentado: [X], [Y].
             Necesito una decisión sobre: ¿ajustamos los rate limits o cambiamos
             el entorno de prueba?
             Si no hay respuesta en 4 horas, escalaré al Flow Master."
```

**Principio 2 — Separa urgencia real de urgencia percibida**

No toda comunicación requiere respuesta inmediata. El equipo clasifica sus comunicaciones en dos categorías antes de enviarlas:

```
Urgencia real (respuesta en < 2 horas):
  - Blocker P1 que detiene el trabajo de alguien
  - Decisión que bloquea el avance del Goal Cycle
  - Incidente de producción

Urgencia estándar (respuesta en ventana de respuesta acordada):
  - Actualizaciones de estado
  - Preguntas técnicas sin blocker asociado
  - Propuestas de cambio de tareas
  - Revisión de documentos no urgentes
```

**Principio 3 — Un canal por tipo de comunicación**

La multiplicación de canales sin propósito definido es uno de los mayores generadores de ruido en equipos remotos. GOAL remoto asigna un propósito único a cada canal y ese propósito no se mezcla.

```
Estructura recomendada de canales:

#goal-flow-board         → Actualizaciones de estado de tareas y blockers
#goal-daily-sync         → Daily Flow Sync escrito (ver Sección 3)
#goal-decisions          → Registro de decisiones técnicas y de proceso
#goal-blockers-urgentes  → Solo blockers que requieren respuesta < 2 horas
#team-general            → Comunicación no relacionada con tareas
#team-social             → Conversación informal del equipo
```

**Principio 4 — La escritura es trabajo, no overhead**

Documentar una decisión, escribir un blocker con contexto suficiente, o registrar el resultado de una conversación no es burocracia adicional; es el trabajo mismo en un entorno remoto. El tiempo que se invierte en escribir bien reduce el tiempo que el equipo pierde en buscar información, re-preguntar, y deshacer malos entendidos.

**Principio 5 — La disponibilidad no es una virtud**

Estar disponible para responder mensajes de forma inmediata durante todo el día laboral no es un indicador de rendimiento en GOAL remoto. Es un indicador de que el trabajo de foco profundo está siendo interrumpido. El equipo reconoce explícitamente que la no-respuesta inmediata, dentro de la ventana acordada, es comportamiento correcto.

---

### 2.3 Tiempos de respuesta estándar

El equipo acuerda los tiempos de respuesta al inicio del primer Goal Cycle remoto y los registra en la declaración de modo de trabajo.

**Marco de referencia recomendado:**

| Tipo de comunicación | Tiempo de respuesta objetivo | Qué ocurre si no se cumple |
|---------------------|------------------------------|----------------------------|
| Blocker P1 en canal urgente | 2 horas | Flow Master escala siguiendo el Blocked Task Protocol |
| Pregunta técnica con blocker | 4 horas (dentro de ventana laboral) | Se escala en el siguiente Daily Flow Sync |
| Revisión de código (Code Review) | 8 horas (dentro de ventana laboral) | Flow Master lo señala como aging indicator |
| Pregunta general sin blocker | 24 horas | Ninguna acción — dentro del contrato async |
| Documentos para revisión | 48 horas | Se menciona en el siguiente Daily Flow Sync |

**Notas importantes sobre los tiempos:**

- Los tiempos se miden dentro del horario laboral declarado de la persona, no en tiempo real. Una pregunta enviada a las 18:00 hora de la persona no vence a las 20:00.
- Los tiempos de respuesta son un contrato de equipo, no una métrica de rendimiento individual. Si un miembro del equipo consistentemente no puede cumplir los tiempos, es un problema de proceso o de carga, no de actitud.
- Durante las ventanas de deep work (ver Sección 10), los tiempos de respuesta se extienden automáticamente. El equipo lo sabe y lo acepta.

---

### 2.4 Protocolo de decisiones asíncronas

Las decisiones que en un entorno presencial ocurrirían en una conversación de treinta segundos requieren un protocolo explícito en remoto para evitar que queden pendientes indefinidamente o que se tomen sin el conocimiento de quienes deben estar informados.

**Clasificación de decisiones:**

```
Decisión tipo A — Autónoma
  Definición: el miembro del equipo puede tomarla dentro del alcance de su tarea
              sin necesidad de validación externa
  Registro: actualización en el sistema de gestión de tareas
  Ejemplos: elección de biblioteca técnica, estructura de una función, nombre de variable

Decisión tipo B — Coordinada
  Definición: afecta a otro miembro del equipo o a la arquitectura compartida
  Proceso: post en #goal-decisions con [DECISIÓN PROPUESTA], ventana de feedback de 24h,
           implementación si no hay objeción
  Registro: entrada en registro de decisiones del equipo
  Ejemplos: cambio de estructura de base de datos, nuevo endpoint de API, cambio de dependencia

Decisión tipo C — Escalada
  Definición: afecta al Goal Cycle Plan, a los goals, al DoD, o a las prioridades del producto
  Proceso: requiere respuesta explícita del Flow Master o del Product Strategist
  No puede implementarse sin confirmación documentada
  Registro: entrada en Goal Cycle Plan o Block Register según corresponda
  Ejemplos: cambio de alcance de una tarea, nueva propuesta de técnica que cambia el timeline
```

---

## 3. Daily Flow Sync adaptado para equipos asíncronos

### 3.1 Por qué el Daily Flow Sync presencial no funciona en remoto distribuido

El Daily Flow Sync en su formato original de GOAL —10 a 12 minutos sincrónicos, todos los miembros del equipo presentes— asume solapamiento horario suficiente para que todos se conecten a la misma hora. En equipos con diferencias de zona horaria superiores a cuatro o cinco horas, este supuesto falla. Forzar una ventana sincrónica en esas condiciones significa que alguien siempre participa fuera de su horario óptimo de trabajo.

GOAL remoto resuelve esto con tres formatos según el grado de solapamiento del equipo.

---

### 3.2 Los tres formatos del Daily Flow Sync remoto

**Formato A — Daily Flow Sync escrito (async completo)**

Para equipos con menos de dos horas de solapamiento horario real.

```
Funcionamiento:
  Cada miembro del equipo publica su actualización en el canal #goal-daily-sync
  antes del final de su ventana matutina de trabajo (primeras 2 horas del día).

  El Flow Master revisa todas las actualizaciones dentro de las 4 horas siguientes
  y publica un resumen con el estado del Flow Board, blockers activos y riesgos.

Plantilla de actualización individual:

  ---
  Daily Flow Sync — [nombre] — [fecha] — [hora local]

  ✦ Avances desde ayer:
    [descripción de qué tarea avanzó o se completó]

  ✦ Trabajo en curso hoy:
    [tarea(s) activa(s) y en qué columna del Flow Board están]

  ✦ Blockers o riesgos:
    [ ] Sin blockers
    [✗] Blocker: [descripción. Block Register #XX]

  ✦ Necesito de otro miembro del equipo:
    [nombre de la persona y qué necesito, o "ninguno"]
  ---
```

**Resumen del Flow Master (plantilla):**

```
  ---
  Resumen Daily Flow Sync — [fecha]

  Estado del Flow Board:
    In Progress:  [número] / WIP Limit: [número]
    Code Review:  [número]
    Validation:   [número]
    Blocked:      [número]

  Aging alerts:
    [lista de tareas con indicador de aging, si aplica]

  Blockers activos:
    [lista con owner y estado de cada blocker]

  Riesgos para hoy:
    [observaciones del Flow Master sobre patrones o riesgos de flujo]

  Acción requerida:
    [si hay algo que requiere respuesta de un miembro específico]
  ---
```

---

**Formato B — Daily Flow Sync semi-sincrónico**

Para equipos con dos a cuatro horas de solapamiento horario.

```
Funcionamiento:
  El equipo publica actualizaciones escritas individuales (misma plantilla del Formato A)
  antes de que comience la ventana de solapamiento.

  En la ventana de solapamiento, se realiza una videollamada de 10 minutos
  exclusivamente para abordar blockers y riesgos identificados en las actualizaciones.
  No se repite lo que está en las actualizaciones escritas.
  El Flow Master conduce la reunión con el resumen ya preparado.

  Si no hay blockers ni riesgos, la reunión sincrónica es opcional.
  El Flow Master puede declararla "cancelada por flujo limpio" en el canal.

Estructura de la videollamada (cuando ocurre):
  - Flow Master presenta resumen: 2 minutos
  - Discusión de blockers activos: 5 minutos
  - Acuerdos de acción y owners: 3 minutos
  - Sin actualizaciones de estado individuales — ya están escritas
```

---

**Formato C — Daily Flow Sync completamente sincrónico**

Para equipos en la misma zona horaria o con solapamiento completo.

```
Funcionamiento:
  Equivale al Daily Flow Sync estándar de GOAL (Sección 12.2 del documento base).
  10-12 minutos, videollamada, formato de tres preguntas.

  La única modificación remota:
    - El Flow Board digital debe estar actualizado antes de la reunión
    - El Flow Master comparte pantalla del Flow Board durante la reunión
    - Todo acuerdo de la reunión se registra en el canal escrito en los 10 minutos
      posteriores a la reunión
```

---

### 3.3 Herramientas recomendadas para el Daily Flow Sync asíncrono

| Necesidad | Herramientas recomendadas | Criterio de selección |
|-----------|--------------------------|----------------------|
| Canal de mensajería estructurado | Slack, Teams, Linear comments | Soporte de hilos y búsqueda |
| Flow Board digital | Linear, Jira, Notion, Trello | Visibilidad en tiempo real, sin fricción de actualización |
| Videollamadas (cuando aplica) | Zoom, Meet, Whereby | Estabilidad en múltiples zonas horarias |
| Documentación de decisiones | Notion, Confluence, GitHub Discussions | Búsqueda, versionado, enlazabilidad |
| Registro asíncrono de video corto | Loom | Para explicaciones técnicas que ahorran texto |

---

### 3.4 Criterios de escalación desde el Daily Flow Sync

El Flow Master define cuándo una situación detectada en el Daily Flow Sync requiere acción inmediata versus puede esperar al siguiente ciclo de revisión.

**Matriz de escalación:**

| Situación | Acción del Flow Master | Urgencia |
|-----------|----------------------|----------|
| Blocker sin owner definido | Asignar owner en las 2 horas siguientes | Alta |
| Tarea en aging indicator rojo (>2x tiempo esperado) | Contactar directamente al owner en el día | Alta |
| WIP Limit excedido | Notificación inmediata al equipo; bloquear nuevos starts | Alta |
| Tarea en Code Review > 8h sin respuesta | Ping directo al reviewer designado | Media |
| Tres o más actualizaciones individuales sin avance declarado | Revisar si hay un blocker sistémico no registrado | Media |
| Goal Cycle en riesgo de no completarse en el tiempo estimado | Discusión sincrónica con Product Strategist en el día | Alta |
| Nadie publicó su actualización en el canal | Verificar disponibilidad del equipo; documentar incidencia | Variable |

---

## 4. Smart Planning remoto

### 4.1 Adaptación del Smart Planning al formato distribuido

El Smart Planning Session es el evento de mayor densidad de información en GOAL. Requiere alineación sobre goals, estimaciones de viabilidad técnica, negociación de WIP limits, y definición de la capacidad del ciclo. En remoto, todo esto es posible, pero requiere preparación más rigurosa que en el formato presencial.

La duración recomendada no cambia (30-60 minutos), pero la distribución del tiempo y el trabajo previo sí.

---

### 4.2 Preparación pre-Smart Planning (48 horas antes)

El Product Strategist y el Flow Master preparan el material con 48 horas de antelación y lo publican en el canal del equipo.

**Checklist de preparación para el Product Strategist:**

```
□ Propuesta de goals primarios para el ciclo (máximo 3)
  - Cada goal incluye:
    → Descripción del outcome esperado
    → Capa(s) de valor del 3-Layer Value Framework
    → Criterios de éxito medibles
    → Dependencias conocidas

□ Propuesta de goals secundarios (máximo 2)

□ Backlog de items Ready confirmado:
  → Mínimo un ciclo de trabajo listo
  → Todos los items tienen criterios de aceptación

□ Informe del Cycle Accuracy Index del ciclo anterior

□ Contexto de negocio relevante: cambios de prioridad, feedback de stakeholders,
  datos de uso que afecten a la dirección del ciclo
```

**Checklist de preparación para el Flow Master:**

```
□ Resumen de métricas del ciclo anterior:
  → Flow Efficiency
  → Block Rate
  → Delivery Rate
  → Cycle Time promedio por tamaño (S/M/L)

□ Cálculo propuesto de WIP Limit para el nuevo ciclo
  (basado en la fórmula y el Focus Factor actual)

□ Capacidad del equipo para el ciclo:
  → Días laborables disponibles por miembro
  → Vacaciones, compromisos externos conocidos
  → Estimación de capacidad efectiva total

□ Riesgos o impedimentos identificados desde el último ciclo
```

---

### 4.3 Estructura del Smart Planning remoto

**Formato recomendado:** Videollamada con Flow Board compartido en pantalla y documento colaborativo abierto en paralelo.

```
Agenda Smart Planning remoto (60 minutos máximo)

[0-10 min]  Contexto del ciclo anterior
  - Flow Master presenta: Cycle Accuracy Index, métricas clave
  - Product Strategist presenta: resumen de valor entregado
  - Sin debate — solo lectura compartida del estado actual

[10-35 min] Definición de goals del ciclo
  - Product Strategist propone goals primarios
  - Equipo da feedback de viabilidad técnica (round robin: máximo 2 minutos por persona)
  - Goals se registran en el documento colaborativo en tiempo real
  - Se identifican dependencias y riesgos

[35-45 min] Capacidad y WIP
  - Flow Master presenta propuesta de WIP Limit
  - Equipo confirma o ajusta con datos del ciclo anterior
  - Allocación de deuda técnica confirmada

[45-55 min] Backlog review rápido
  - Top 5-7 items del Backlog confirmados como Ready
  - Cualquier item sin criterios de aceptación se devuelve a Refinement en el acto

[55-60 min] Confirmación y registro
  - Product Strategist lee en voz alta los goals acordados
  - Todo el equipo confirma entendimiento
  - Flow Master publica el Goal Cycle Plan en el canal del equipo
```

---

### 4.4 Smart Planning asíncrono (para casos con solapamiento horario mínimo)

Cuando el solapamiento horario no permite 60 minutos sincrónicos con todo el equipo presente, el Smart Planning puede estructurarse en dos fases con hasta 24 horas entre ellas.

**Fase 1 — Propuesta y feedback escrito (async, 24 horas)**

```
Día 1 - mañana (hora del Product Strategist):
  Product Strategist publica en #goal-decisions:
    → Propuesta de goals primarios y secundarios
    → Material de contexto preparado
    → Pregunta explícita al equipo: "¿Algún impedimento técnico para estos goals?"

Día 1 - durante el día (async):
  Cada miembro del equipo responde con:
    → Confirmación de viabilidad o flag de riesgo técnico
    → Preguntas de clarificación (si las hay)
    → Input sobre capacidad personal para el ciclo

Día 1 - al final del día (Flow Master):
  Flow Master sintetiza el feedback y publica borrador de:
    → Goals acordados
    → WIP Limit propuesto
    → Preguntas abiertas que requieren resolución
```

**Fase 2 — Reunión de confirmación (sincrónica, 20-30 minutos)**

```
Día 2 - en la ventana de solapamiento:
  Solo se abordan las preguntas abiertas del borrador
  No se repite la discusión de goals — ya ocurrió en async
  Al finalizar, el Flow Master publica el Goal Cycle Plan definitivo
```

---

### 4.5 Regla de visibilidad del Goal Cycle Plan

En remoto, el Goal Cycle Plan no es un documento de referencia pasivo. Es el artefacto central que sustituye a la visibilidad contextual que en un entorno presencial se obtiene de conversaciones informales.

**Reglas de publicación:**

```
1. El Goal Cycle Plan se publica en el canal del equipo inmediatamente
   después del Smart Planning, antes de que comience el ciclo.

2. El documento es accesible con un solo clic desde el canal principal.
   No está enterrado en carpetas de documentación.

3. El Flow Master lo referencia explícitamente en cada Daily Flow Sync:
   "Meta del ciclo: [X]. Estado actual: [on track / en riesgo]."

4. Cualquier modificación al Goal Cycle Plan —por mínima que sea—
   se notifica al canal del equipo con [CAMBIO EN GOAL CYCLE PLAN] como prefijo.
```

---

## 5. Formatos de retrospectiva remota

### 5.1 El desafío de la retrospectiva en remoto

La Data-Driven Retrospective de GOAL depende de dos elementos: los datos de flujo del ciclo y la capacidad del equipo para discutir patrones con honestidad. En remoto, el primer elemento es idéntico al entorno presencial. El segundo requiere estructura adicional, porque el silencio en una videollamada es más ambiguo que el silencio en una sala, y la participación sin estructura tiende a concentrarse en los miembros más verbales del equipo.

---

### 5.2 Preparación de la retrospectiva remota

El Flow Master prepara y publica el siguiente material 24 horas antes de la retrospectiva:

```
Material de retrospectiva pre-publicado:

1. Dashboard de métricas del ciclo:
   □ Flow Efficiency (comparado con los 3 ciclos anteriores)
   □ Cycle Time promedio por tamaño de tarea
   □ Block Rate y análisis del Block Register
   □ Delivery Rate
   □ Compliance con WIP Limits (porcentaje de días dentro del límite)
   □ Cycle Accuracy Index actualizado

2. Resumen del Block Register:
   □ Total de blockers en el ciclo
   □ Clasificación por tipo (técnico, externo, decisión de negocio, dependencia)
   □ Tiempo promedio de resolución
   □ Patrones recurrentes identificados

3. Estado de los ítems de mejora del ciclo anterior:
   □ ¿Se implementaron?
   □ ¿Hay datos que confirmen o refuten su efectividad?

4. Pregunta abierta para reflexión previa (async):
   Publicar en el canal 24h antes:
   "Antes de la retro, reflexiona: ¿qué es una cosa del proceso de este ciclo
    que definitivamente querrías cambiar? Escríbela aunque sea una frase."
```

---

### 5.3 Formato de retrospectiva remota estándar (60 minutos, videollamada)

```
[0-10 min]  Lectura compartida de datos
  El Flow Master presenta el dashboard. Sin debate aún.
  El objetivo es que todos lean los mismos números antes de opinar.
  Regla: ningún comentario interpretativo hasta que el Flow Master termine.

[10-25 min] Análisis del Block Register
  El Flow Master presenta los patrones de blockers.
  Pregunta guía: "¿Cuál de estos patrones podríamos eliminar estructuralmente?"
  Round robin: cada miembro puede aportar una observación basada en un dato del dashboard.
  Restricción: las observaciones deben conectar con un número, no ser solo percepciones.

[25-45 min] Identificación de ítems de mejora
  El equipo propone mejoras. Cada propuesta debe incluir:
    → ¿Qué métrica mejoraría si esto funciona?
    → ¿Cómo sabremos en el próximo ciclo si funcionó?
    → ¿Quién es el owner de implementarla?
  Se seleccionan máximo 3 ítems de mejora. No se generan listas largas.

[45-55 min] Review de mejoras del ciclo anterior
  ¿Se implementaron?
  ¿Qué dicen los datos?
  ¿Se mantienen, se modifican, o se cierran?

[55-60 min] Cierre
  Flow Master lee en voz alta los 3 ítems de mejora acordados con sus owners.
  Se publican en el canal del equipo antes de cerrar la llamada.
```

---

### 5.4 Retrospectiva completamente asíncrona (para equipos sin ventana de solapamiento)

Cuando el solapamiento horario no permite una videollamada grupal, la retrospectiva puede ejecutarse en formato asíncrono distribuido en 48 horas.

**Estructura:**

```
Día 1, mañana (Flow Master):
  Publica en #goal-decisions:
  → Dashboard completo de métricas
  → Análisis del Block Register
  → Estado de mejoras del ciclo anterior
  → Tres preguntas abiertas para respuesta individual:
    (a) ¿Qué dato del dashboard te sorprende más y por qué?
    (b) ¿Qué patrón de blocker del ciclo crees que podríamos eliminar?
    (c) ¿Qué cambiarías en el proceso para el próximo ciclo?

Día 1, durante el día (todos los miembros del equipo):
  Cada miembro responde las tres preguntas en el hilo.
  Mínimo dos párrafos por pregunta. Las respuestas deben referenciar datos.

Día 2, mañana (Flow Master):
  Sintetiza las respuestas en un documento de:
  → Patrones identificados por múltiples miembros
  → Propuesta de 1-3 ítems de mejora con datos de respaldo
  → Owner propuesto para cada ítem

Día 2, tarde (validación async):
  El equipo reacciona a la síntesis con aprobación o corrección.
  Ventana de feedback: 4 horas.
  Si no hay objeción, los ítems de mejora se dan por acordados.
  Flow Master los publica en el Goal Cycle Plan del nuevo ciclo.
```

---

### 5.5 Técnicas de participación equitativa en retrospectiva remota

El silencio en videollamada no equivale a acuerdo. Las siguientes técnicas promueven participación distribuida:

**Round robin estructurado:** El Flow Master pide una observación a cada persona en turno. Nadie puede pasar sin contribuir. La observación debe conectar con un dato del dashboard.

**Dot voting digital:** Para priorizar propuestas de mejora, cada miembro vota con puntos en un tablero digital (Miro, FigJam, o incluso emojis en un mensaje). Visible para todos, simultáneo, sin influencia de voz.

**Escritura simultánea:** Antes de discutir verbalmente, cada miembro escribe sus observaciones en un documento compartido durante tres minutos. Esto evita que los primeros comentarios de la llamada anclen el resto de la discusión.

**Check-in numérico de inicio:** Al comienzo de la retrospectiva, cada miembro dice un número del 1 al 5 que representa cómo fue el ciclo para ellos. Sin explicación inicial. El Flow Master toma nota. Si hay varianza alta (alguien dice 2 y otro dice 5), eso es información sobre la experiencia del ciclo que merece exploración.

---

## 6. Gestión de zonas horarias

### 6.1 Las zonas horarias como riesgo de flujo

En GOAL, los blockers y el tiempo de espera son los principales enemigos del flujo. Las zonas horarias introducen un tipo específico de tiempo de espera que no existe en equipos co-localizados: el tiempo de espera estructural por disponibilidad horaria. Una pregunta técnica que en un equipo presencial se resuelve en veinte minutos puede tomar doce horas en un equipo distribuido si la persona que puede responderla está dormida.

Gestionar las zonas horarias en GOAL no es un asunto de logística de reuniones. Es un asunto de gestión de flujo.

---

### 6.2 Mapeo de zonas horarias del equipo

Al inicio de cada Goal Cycle, el Flow Master publica el mapa de zonas horarias actualizado.

**Plantilla de mapa de zonas horarias:**

```
Mapa de zonas horarias del equipo — [Nombre del equipo]
Actualizado: [fecha]

Miembro         | Zona horaria | Horario laboral (local) | Horario laboral (UTC) | Días disponibles
----------------|-------------|------------------------|----------------------|------------------
[Nombre]        | UTC-5       | 09:00-18:00            | 14:00-23:00          | Lun-Vie
[Nombre]        | UTC+1       | 09:00-18:00            | 08:00-17:00          | Lun-Vie
[Nombre]        | UTC+5:30    | 09:00-18:00            | 03:30-12:30          | Lun-Vie
[Nombre]        | UTC-8       | 09:00-18:00            | 17:00-02:00          | Lun-Vie

Ventana de solapamiento:
  Todos los miembros:    [rango UTC] — [X horas]
  Al menos 3 miembros:  [rango UTC] — [X horas]

Zona horaria de referencia del equipo: UTC (recomendado para todos los registros)
```

---

### 6.3 Reglas de operación con múltiples zonas horarias

**Regla 1 — Todo timestamp en UTC**

Todos los registros de tiempo en el Flow Board, Block Register, y comunicaciones del equipo usan UTC. Los miembros del equipo convierten a su hora local cuando es necesario. Mezclar zonas horarias en los registros crea ambigüedad en los datos de flujo.

**Regla 2 — Las dependencias de respuesta siguen el horario local del receptor**

Cuando una tarea depende de que otra persona responda, el tiempo de espera esperado se calcula sobre el horario laboral de esa persona, no sobre el horario del solicitante. Esto es crítico para el Block Register: un blocker creado a las 09:00 UTC-5 por una persona que espera respuesta de alguien en UTC+9 no vence en dos horas; vence cuando el receptor comienza su jornada.

**Regla 3 — Ningún evento sincrónico obligatorio fuera de las horas centrales del receptor**

Las reuniones obligatorias solo se programan dentro de la ventana de solapamiento declarada. Si un evento (Smart Planning, Goal Review, retrospectiva) requiere participación de alguien fuera de su horario laboral, se aplica el formato asíncrono correspondiente.

**Regla 4 — El "fin de día" no significa el mismo momento para todos**

El Flow Master no puede asumir que "al final del día" significa nada útil en un equipo distribuido. Toda comunicación que requiere acción usa timestamps explícitos en UTC.

```
Incorrecto: "Necesito esto para el final del día"
Correcto:   "Necesito esto antes de las 17:00 UTC del [fecha]"
```

---

### 6.4 Estrategias para equipos con solapamiento mínimo (&lt; 2 horas)

Cuando el solapamiento es inferior a dos horas, el equipo no puede depender de sincronía para resolver blockers. Estas estrategias reducen el tiempo de espera estructural:

**Documentación proactiva de intención:**

Antes de terminar su jornada, cada miembro publica un breve resumen de lo que hará al día siguiente. Esto permite que otros identifiquen dependencias y envíen preguntas con suficiente antelación.

```
Plantilla de cierre de jornada (publicar en #goal-flow-board):

  Cierre de jornada — [nombre] — [hora UTC]

  Completado hoy:  [tarea(s) o avance]
  Plan mañana:     [tarea(s) previstas]
  Necesito mañana: [si requiero respuesta de alguien, especificar quién y qué]
  Blockers activos: [Block Register #XX] o "ninguno"
```

**Desbloqueo por delegación temporal:**

En equipos con solapamiento mínimo, el Flow Master puede designar un "flow proxy" —un miembro del equipo en zona horaria intermedia— con autoridad para tomar ciertas decisiones de tipo A y B cuando el Flow Master no está disponible.

**Diseño de tareas para autonomía:**

En el Smart Planning, el Product Strategist y el equipo priorizan tareas diseñadas para que puedan iniciarse y completarse sin dependencias de respuesta en tiempo real. Las tareas con dependencias de respuesta urgente se programan cuando hay solapamiento.

---

### 6.5 Seguimiento del impacto de zonas horarias en el flujo

En cada Data-Driven Retrospective, el Flow Master añade una sección de análisis de zonas horarias al Block Register:

```
Análisis de impacto de zonas horarias — [ciclo]

Blockers donde el tiempo de espera fue > 8 horas por diferencia horaria:
  [lista]

Tiempo total de espera atribuible a diferencia horaria:
  [días totales de espera de tipo "external" con causa: timezone]

Porcentaje del total de Wait Time:
  [%]

Tareas diseñadas para autonomía en el ciclo:
  [número]

Recomendación de mejora para el próximo ciclo:
  [propuesta específica si el impacto supera el 15% del Wait Time total]
```

---

## 7. Flow Board para equipos remotos

### 7.1 El Flow Board digital no es el mismo que el físico

Un Flow Board físico en una pared de oficina tiene propiedades que los equipos suelen subestimar: es siempre visible sin esfuerzo, actualiza el contexto periférico de todo el equipo, y la latencia de actualización es cero (mover una tarjeta toma tres segundos).

Un Flow Board digital requiere esfuerzo deliberado para lograr las mismas propiedades. La disciplina de actualización es un acuerdo de equipo, no un comportamiento espontáneo.

---

### 7.2 Requisitos del Flow Board digital en GOAL remoto

**Requisito 1 — Acceso inmediato desde el canal principal**

El Flow Board digital debe estar accesible con un click desde el canal principal del equipo. No requiere autenticación separada durante la sesión de trabajo activa. No está detrás de múltiples niveles de navegación.

**Requisito 2 — Actualización en tiempo real visible para todo el equipo**

Cuando un miembro mueve una tarjeta, el cambio debe ser visible para todos sin necesidad de refrescar manualmente. Esto es crítico para que el Flow Master pueda monitorear aging indicators sin hacer auditorías periódicas.

**Requisito 3 — Información completa en la tarjeta, sin necesidad de abrir modales**

La tarjeta debe mostrar en la vista principal: nombre de la tarea, owner, tamaño (S/M/L), fecha de entrada a la columna actual, y goal al que sirve. El miembro del equipo que observa el Flow Board no debe tener que hacer clicks adicionales para evaluar si hay un problema de flujo.

**Requisito 4 — Registro automático de timestamps por columna**

El sistema debe registrar automáticamente cuándo una tarea entra en cada columna. Esto es el fundamento de los datos de Cycle Time y Flow Efficiency. Si la herramienta no hace esto de forma nativa, el equipo debe acordar un protocolo manual (añadir fecha en el campo correspondiente al mover la tarjeta).

**Requisito 5 — Notificaciones configuradas por tipo de evento**

```
Notificaciones recomendadas por rol:

Flow Master:
  → Tarea movida a Blocked
  → Tarea sin movimiento por más de [umbral de aging] horas
  → WIP Limit alcanzado
  → Tarea en Expedite lane añadida o modificada

Delivery Team (individual):
  → Tarea asignada a mí movida por otro
  → Code Review solicitada en mi tarea
  → Comentario en mis tarjetas activas
  → Bloqueo resuelto en tarea que estaba esperando

Product Strategist:
  → Tarea de goal primario completada (moved to Done)
  → Tarea de goal primario bloqueada por más de 24h
  → Cycle en riesgo (Flag del Flow Master)
```

---

### 7.3 Columnas del Flow Board remoto

El Flow Board estándar de GOAL no cambia en su estructura de columnas. Lo que cambia es la disciplina de gestión de cada columna en remoto.

```
Backlog → Ready → In Progress → Code Review → Validation → Done
                      ↓
                   Blocked (lane transversal)
                   Expedite (lane transversal)
                   Technical Debt (lane separado)
```

**Columna Code Review — gestión remota específica:**

La columna Code Review es la principal fuente de Wait Time en equipos remotos. Sin la posibilidad de "golpear el hombro" de un compañero para pedir revisión, las tarjetas pueden envejecer silenciosamente en esta columna.

```
Protocolo de Code Review remoto:

1. Al mover una tarea a Code Review, el owner envía un mensaje
   en #goal-flow-board con:
   "[REVIEW NEEDED] Tarea: [nombre] — PR: [link] — Tamaño estimado de review: [S/M/L]
    Contexto: [una frase de lo que hace el PR]"

2. El reviewer designado o quien esté disponible responde en el hilo
   con "[TOMANDO REVIEW] [nombre]" para registrar la asignación.

3. Tiempo máximo antes de que el Flow Master intervenga:
   → PR de tamaño S: 4 horas sin reviewer asignado
   → PR de tamaño M: 6 horas sin reviewer asignado
   → PR de tamaño L: 8 horas sin reviewer asignado

4. Si el reviewer encuentra un problema que requiere discusión:
   → Documentar en el PR con suficiente contexto para decisión async
   → Si requiere sincronía, proponer horario en el comentario del PR
   → No dejar el PR en estado de limbo sin comunicación
```

---

### 7.4 Aging indicators en remoto

Los aging indicators de GOAL (Section 9.4 del documento base) se mantienen. En remoto, su monitoreo es responsabilidad explícita del Flow Master durante el resumen del Daily Flow Sync.

**Umbrales remotos (ajustados por zona horaria):**

```
En equipos con solapamiento completo:
  Aplicar umbrales estándar del documento base

En equipos con solapamiento parcial (2-4 horas):
  Small task:   > 2 días en la misma columna → indicador amarillo
  Medium task:  > 3 días en la misma columna → indicador amarillo
  Large task:   No debería estar en In Progress; si aparece, inmediatamente rojo

En equipos con solapamiento mínimo (< 2 horas):
  Añadir buffer de 1 día a los umbrales estándar
  (el tiempo de espera por zona horaria es estructural, no una señal de problema)
  Documentar el ajuste en la declaración de modo de trabajo del equipo
```

---

## 8. Pair working remoto y code review asíncrono

### 8.1 Pair working en remoto: cuándo y cómo

El pair programming o pair working —dos personas trabajando simultáneamente en la misma tarea— sigue siendo valioso en equipos remotos para tareas de alta complejidad técnica, onboarding de nuevos miembros, o resolución de blockers técnicos. Las herramientas modernas lo hacen viable, pero requiere más estructura que en presencial.

---

### 8.2 Tipos de pair working remoto en GOAL

**Pair sincrónico — videollamada con compartición de pantalla o live coding:**

```
Cuándo usarlo:
  → Tarea de tamaño L que requiere decisión arquitectónica compartida
  → Bloqueo técnico que el owner no puede resolver solo en < 4 horas
  → Onboarding: primera tarea de un miembro nuevo con un miembro experimentado
  → Debugging de un problema que requiere exploración colaborativa

Duración recomendada: máximo 90 minutos por sesión
  Si el problema no se resuelve en 90 minutos, es señal de que requiere
  más investigación individual antes de otro pair session.

Herramientas:
  → VS Code Live Share (edición simultánea de código)
  → JetBrains Code With Me
  → Videollamada + compartición de pantalla + control remoto

Registro posterior (obligatorio):
  Documentar en la tarea:
  → Participantes y duración
  → Decisiones tomadas durante la sesión
  → Próximos pasos acordados
```

**Pair asíncrono — revisión con contexto profundo:**

```
Cuándo usarlo:
  → Tarea que requiere feedback técnico pero no hay solapamiento horario suficiente
  → Diseño de solución que se beneficia de perspectiva adicional antes de implementar
  → Revisión de enfoque técnico en tareas de tamaño M o L antes de comenzar

Proceso:
  1. El owner de la tarea documenta:
     → Contexto del problema
     → Solución propuesta con pseudocódigo o diagrama si aplica
     → Preguntas específicas para el par (máximo 3)
     → Lo que ya consideró y descartó, con razón

  2. Publica en el canal técnico del equipo con [ASYNC PAIR REQUEST]

  3. Cualquier miembro del equipo puede responder en las siguientes 8 horas
     (o en el tiempo acordado de respuesta del equipo)

  4. Si más de una persona responde, el owner sintetiza y publica el acuerdo
```

---

### 8.3 Code review asíncrono de calidad

El code review asíncrono no es simplemente dejar comentarios en un pull request. Es una comunicación técnica que debe tener suficiente contexto para que el autor pueda actuar sin necesidad de una ronda de preguntas aclaratorias.

**Principios del code review asíncrono en GOAL:**

**Claridad sobre tono:** En texto, los comentarios técnicos pueden leerse como crítica personal sin serlo. Prefija los comentarios con su tipo:

```
[BLOCKER]   → Esto debe cambiar antes de que pueda aprobar
[SUGERENCIA] → Consideraría este enfoque alternativo, pero no es blocker
[PREGUNTA]  → No entiendo esta parte; ¿puedes explicar el razonamiento?
[FYI]       → Para tu conocimiento; no requiere acción
[NITPICK]   → Detalle menor; aplica si quieres, sin presión
```

**Contexto suficiente en los comentarios:**

```
Incorrecto:
  "Esto no es eficiente"

Correcto:
  "[SUGERENCIA] Este bucle itera sobre todos los registros cada vez que se llama.
   Con volúmenes > 10k registros podría ser costoso.
   Consideraría usar un índice aquí o cachear el resultado si el dataset
   no cambia entre llamadas. ¿Hay alguna razón por la que elegiste este enfoque?"
```

**Tiempo de resolución esperado:**

```
El author del PR responde a cada [BLOCKER] dentro de las 8 horas
de haber recibido el review.
Si requiere más tiempo (investigación, decisión), notifica en el PR:
"[ACK] Revisando el punto X. Respondo antes de [hora UTC]."
```

---

### 8.4 WIP y pair working

En GOAL, el pair working activo cuenta como una sola tarea en el WIP Limit, no como dos. La lógica es que dos personas trabajando en la misma tarea simultáneamente son un equipo enfocado en una unidad de trabajo, no dos unidades de trabajo paralelas.

**Registro en el Flow Board:**

```
Cuando hay pair working activo:
  La tarjeta muestra ambos nombres en el campo owner: "Persona A + Persona B"
  El Flow Master registra la sesión como "pair activo" en el comentario de la tarjeta
  Solo una de las dos personas cuenta contra el WIP Limit del resto de su capacidad
  La segunda persona tiene su capacidad efectivamente a cero para ese período
```

---

## 9. Salud del equipo remoto

### 9.1 Por qué la salud del equipo es un tema de flujo, no solo de bienestar

En GOAL, la salud del equipo no es un tema separado del flujo de trabajo. El burnout, el aislamiento, y la desconexión de miembros remotos son causas directas de aumento en el Block Rate, reducción del Delivery Rate, y degradación de la calidad de las decisiones. Un equipo remoto con baja cohesión produce métricas de flujo peores, no solo peores reportes de satisfacción.

El Flow Master en GOAL remoto tiene una responsabilidad explícita sobre la salud del equipo, no como coach de bienestar, sino como gestor de riesgos de flujo.

---

### 9.2 Señales de alerta de salud en el Flow Board

Antes de usar encuestas o conversaciones directas, el Flow Master puede detectar señales de salud del equipo en los propios datos de flujo:

| Señal en los datos | Posible indicador de salud | Acción |
|--------------------|-----------------------------|--------|
| Block Rate personal > 30% durante dos ciclos consecutivos | Posible dificultad técnica no reconocida, o falta de contexto en un miembro | Conversación 1:1 del Flow Master |
| Delivery Rate de un miembro consistentemente menor al promedio del equipo | Posible sobrecarga cognitiva, bloqueo no registrado, o problema de bienestar | Conversación 1:1, revisión de WIP personal |
| Ninguna actualización en el Daily Flow Sync (written) durante dos días | Desconexión o problema personal | Contacto directo fuera del canal de equipo |
| Cycle Time personal significativamente más alto que el promedio del equipo para tareas de mismo tamaño | Posible falta de claridad en las tareas, dependencias no declaradas, o agotamiento | Review del Goal Cycle Plan con el miembro |
| Ausencia de comunicación en canales de equipo durante > 4 horas en horario laboral declarado | Variable — puede ser deep work o puede ser un problema | Verificar vía canal de menor fricción |

---

### 9.3 Rituales de conexión del equipo remoto

Los equipos remotos necesitan tiempo de interacción que no sea sobre tareas. Esto no es un lujo; es parte de la infraestructura de comunicación que hace posible la colaboración técnica efectiva.

GOAL remoto recomienda incorporar los siguientes rituales con frecuencia definida:

**Check-in social (semanal, 15 minutos):**

```
Formato: Videollamada breve al inicio de la semana.
Contenido: No es sobre trabajo. El Flow Master hace una pregunta al equipo
           que no sea sobre el ciclo.
           Ejemplos: "¿Algo fuera del trabajo que quieras compartir esta semana?"
                     "¿Cuál fue el mejor momento de tu fin de semana?"
Regla: nadie habla de blockers, tareas, o el Flow Board en este espacio.
Duración: estricta. Si hay temas de trabajo urgentes, pasan al Daily Flow Sync posterior.
```

**Conversaciones 1:1 del Flow Master (cada dos semanas):**

```
El Flow Master tiene una conversación de 20-30 minutos con cada miembro del equipo.
No es una revisión de rendimiento. Es una conversación sobre cómo está el trabajo
para esa persona en este momento.

Preguntas guía:
  → "¿Qué te está costando más trabajo este ciclo?"
  → "¿Hay algo del proceso que te genera fricción innecesaria?"
  → "¿Tienes lo que necesitas para hacer tu trabajo bien?"
  → "¿Hay algo que quieras que cambie y que no hemos abordado en retro?"

El Flow Master documenta los temas sistémicos para llevarlos a la retrospectiva.
Los temas personales permanecen confidenciales.
```

**Canal de comunicación informal:**

El equipo tiene un canal (#team-social o equivalente) dedicado a comunicación no relacionada con el trabajo. El Flow Master participa activamente. Es el espacio donde se construye la relación de equipo que en presencial ocurre en el pasillo, en el café, o en el almuerzo.

---

### 9.4 Indicadores de salud del equipo remoto para la retrospectiva

El Flow Master prepara un indicador trimestral de salud del equipo para la retrospectiva, basado en datos observables:

```
Indicadores de salud — revisión trimestral

Participación en Daily Flow Sync:
  Porcentaje de actualizaciones publicadas a tiempo:  [%]

Participación en retrospectivas:
  Porcentaje de ítems de mejora con owner voluntario: [%]
  (vs asignados por el Flow Master)

Pair working:
  Número de sesiones de pair working en el trimestre: [número]
  (un equipo con cero sesiones puede estar trabajando en silos)

Comunicación en canales sociales:
  Actividad relativa vs trimestre anterior: [subió / bajó / estable]
  (no un número exacto, sino una tendencia)

Block Rate por persona:
  ¿Hay concentración de blockers en uno o dos miembros?
  [sí / no — si sí, investigar causa]

Rotación de código:
  ¿Las mismas personas trabajan siempre en los mismos módulos?
  (alta concentración puede indicar silos de conocimiento)
```

---

## 10. Tiempo de foco y deep work en remoto

### 10.1 El problema del deep work en remoto

El trabajo en remoto tiene un riesgo paradójico: puede generar más interrupciones que la oficina, no menos. La expectativa implícita de disponibilidad constante en herramientas de mensajería, combinada con la ausencia de señales físicas de "estoy concentrado", hace que los miembros del equipo interrumpan el trabajo de foco de sus compañeros más de lo que lo harían en persona.

GOAL remoto trata el tiempo de foco como un recurso del sistema de flujo. La capacidad de concentración del equipo es directamente proporcional a su Delivery Rate. Protegerla es una responsabilidad del proceso, no de la voluntad individual.

---

### 10.2 Política de foco profundo en GOAL remoto

El equipo acuerda explícitamente una política de tiempo de foco al inicio del primer ciclo remoto.

**Estructura recomendada:**

```
Política de deep work — [Nombre del equipo]

Ventanas de foco protegido:
  Horario:       [por ejemplo: 09:00-12:00 hora local de cada miembro]
  Días:          [por ejemplo: lunes, martes, jueves]

Durante las ventanas de foco:
  → No se esperan respuestas a mensajes que no sean P1
  → Los miembros silencian notificaciones (excepto canal de blockers urgentes)
  → El estado en la herramienta de comunicación se pone en "En foco"
  → No se programan reuniones sincrónicas sin consentimiento explícito del miembro

Lo que SÍ puede interrumpir el foco:
  → Blocker P1 en el canal de urgentes
  → Petición del Flow Master marcada como [URGENTE REAL]
  → Incidente de producción

Ventana de respuesta durante el foco:
  → El miembro puede elegir responder al final de su bloque de foco (máximo 3 horas)
  → No se interpreta como falta de disponibilidad

Comunicación del estado de foco:
  → Actualizar el estado en la herramienta de mensajería al iniciar el bloque
  → No es obligatorio anunciarlo en el canal cada vez
```

---

### 10.3 El Flow Master como guardián del tiempo de foco

El Flow Master tiene responsabilidad explícita sobre la gestión de interrupciones del equipo. En GOAL presencial, el Interrupt Management Protocol protege al equipo de demandas externas. En GOAL remoto, el Flow Master también protege el tiempo de foco interno.

**Acciones del Flow Master:**

```
1. Auditar canales semanalmente:
   ¿Se están enviando mensajes no urgentes durante ventanas de foco?
   ¿Hay preguntas que podrían esperar pero se envían como urgentes?
   → Señalar el patrón en la retrospectiva con datos, sin nombrar personas

2. Defender el calendario del equipo:
   → Bloquear reuniones innecesarias durante ventanas de foco
   → Rechazar peticiones externas de "15 minutos de sincronía" durante horas
      de foco sin agenda clara
   → Consolidar reuniones en ventanas fuera del tiempo de foco

3. Revisar el Focus Ratio del equipo:
   Si el Focus Ratio está consistentemente < 0.7 pero el equipo reporta
   estar ocupado, investigar: ¿hay trabajo invisible? ¿hay interrupciones
   no registradas que absorben capacidad?
```

---

### 10.4 Registro de interrupciones en remoto

En GOAL remoto, las interrupciones que consumen tiempo de foco sin ser P1 o P2 se registran en el Interrupt Log, igual que en el protocolo estándar. Esto incluye:

- Reuniones no planificadas convocadas durante el ciclo
- Peticiones de soporte técnico externas al equipo que no pasaron por el Interrupt Management Protocol
- Consultas recurrentes de stakeholders que podrían resolverse con documentación

El Interrupt Log remoto incluye una columna adicional:

```
¿Interrumpió ventana de foco?  [ ] Sí  [ ] No
Tiempo de foco perdido estimado: [horas]
```

Este dato se presenta en la retrospectiva como parte del análisis de Wait Time y Flow Efficiency.

---

## 11. Onboarding remoto en GOAL

### 11.1 El onboarding como riesgo de flujo

Un nuevo miembro del equipo en remoto no tiene acceso a la absorción pasiva de contexto que existe en una oficina: no escucha conversaciones al lado, no puede preguntar de forma espontánea, no observa las interacciones del equipo de forma natural. Sin un programa de onboarding estructurado, el nuevo miembro opera con información incompleta durante semanas, generando blockers no declarados, contribuciones de baja calidad, y aislamiento progresivo.

GOAL remoto trata el onboarding como un proyecto propio con goals, tareas, DoD, y métricas de éxito.

---

### 11.2 Estructura del onboarding remoto en GOAL

**Duración recomendada:** 4 semanas estructuradas, transición gradual a operación normal.

```
Semana 1 — Contexto y sistema

Goals de la semana:
  □ Comprende y puede explicar el GOAL Manifesto y los cinco valores
  □ Puede navegar el Flow Board sin asistencia
  □ Conoce los canales del equipo y su propósito
  □ Tiene configurado el entorno de desarrollo completo (verificado con DoD técnico)
  □ Ha leído el Goal Cycle Plan actual y puede explicar los goals del ciclo

Acciones del equipo:
  □ Flow Master asigna un buddy (miembro del equipo, no el Flow Master)
  □ Product Strategist tiene una sesión de 30 minutos para explicar el roadmap
  □ Primera sesión de pair working (asíncrona o sincrónica) con el buddy
  □ El nuevo miembro no tiene tareas propias esta semana; contribuye en pair

DoD de la semana 1:
  El nuevo miembro puede publicar el Daily Flow Sync escrito sin ayuda
  y ha completado la configuración técnica verificada.
```

```
Semana 2 — Primera contribución independiente

Goals de la semana:
  □ Completa una tarea de tamaño Small de forma independiente
  □ Realiza su primera Code Review (con revisión del buddy antes de publicar)
  □ Participa en el Backlog Grooming Session
  □ Ha tenido una conversación 1:1 con el Flow Master sobre cómo va el proceso

Acciones del equipo:
  □ Buddy disponible para preguntas sin frictions (canal directo, respuesta en < 2h)
  □ Flow Master asigna tarea Small con criterios de aceptación muy claros
  □ Buddy hace segunda revisión del PR del nuevo miembro antes de que entre a Code Review

DoD de la semana 2:
  Una tarea Small completada que pasa la DoD del equipo sin modificaciones de terceros.
```

```
Semana 3 — Integración al ritmo del equipo

Goals de la semana:
  □ Contribuye a la estimación de tareas en el Backlog Grooming Session
  □ Completa una tarea de tamaño Medium
  □ Usa el Block Register de forma autónoma (registra un blocker si ocurre)
  □ Participa en el Daily Flow Sync sin plantilla de apoyo

Acciones del equipo:
  □ Buddy disponible pero en modo de respaldo, no de guía activa
  □ Flow Master monitorea el Block Rate personal del nuevo miembro
```

```
Semana 4 — Transición a operación normal

Goals de la semana:
  □ Opera con las mismas expectativas que el resto del equipo
  □ Ha identificado al menos un ítem de mejora del proceso basado en su experiencia
     de onboarding (para la retrospectiva)
  □ Puede explicar el Interrupt Management Protocol y cuándo aplicarlo

Al final de la semana 4:
  □ Retrospectiva de onboarding: ¿qué faltó? ¿qué fue excesivo?
     Estos inputs se usan para mejorar el proceso de onboarding.
  □ El buddy registra en el documento de onboarding sus observaciones sobre
     el proceso para el próximo ciclo.
```

---

### 11.3 Documentación de onboarding accesible

El equipo mantiene un documento de onboarding actualizado con:

```
Documento de onboarding — [Nombre del equipo]

Acceso y herramientas:
  □ Lista de herramientas con links de acceso y permisos necesarios
  □ Instrucciones de configuración del entorno de desarrollo
  □ Acceso al Flow Board y canales del equipo

Contexto del producto:
  □ Descripción del producto en dos párrafos
  □ Link al Goal Cycle Plan actual
  □ Link al Backlog con los últimos tres ciclos

Procesos del equipo:
  □ Mapa de zonas horarias actual
  □ Declaración de modo de trabajo
  □ Estructura de canales y su propósito
  □ Política de deep work

GOAL — guía de referencia rápida:
  □ Resumen del GOAL Manifesto (adaptado al equipo)
  □ WIP Limit actual y fórmula usada
  □ DoD del equipo (nivel 1 y nivel 2)
  □ Protocolos: cómo registrar un blocker, cómo clasificar un interrupt

Personas:
  □ Mapa del equipo: nombre, rol, zona horaria, área de expertise
  □ Buddy asignado y cómo contactarle
  □ Cómo llegar al Flow Master para preguntas de proceso

Último updater: [nombre]
Última actualización: [fecha]
```

**Regla de mantenimiento:** el documento de onboarding se revisa en cada retrospectiva. Si un ítem quedó desactualizado durante el ciclo, se actualiza antes de que termine la retrospectiva.

---

### 11.4 Métricas de éxito del onboarding remoto

```
El onboarding es exitoso cuando, al final de la semana 4:

□ Time to First Contribution: el nuevo miembro ha completado al menos una tarea
  que pasó la DoD sin intervención correctiva de terceros

□ Block Rate personal en semanas 3-4: no supera el doble del promedio del equipo

□ Participación en Daily Flow Sync: 100% de actualizaciones publicadas desde semana 2

□ Net Promoter Score interno: en una escala del 1 al 5, el nuevo miembro califica
  el proceso de onboarding ≥ 4

□ Buddy satisfaction: el buddy califica la experiencia de acompañamiento ≥ 4
  (señal de que el proceso no fue una carga excesiva para el equipo)
```

---

## 12. Anti-patterns remotos

### 12.1 Introducción

Los anti-patterns de GOAL descritos en el documento base (Sección 22) aplican también en entornos remotos. Los siguientes son anti-patterns específicos del trabajo remoto que agravan o crean nuevas formas de disfunción en GOAL. Reconocerlos permite al equipo corregir antes de que los datos de flujo se deterioren.

---

### 12.2 Presencialismo digital (digital presenteeism)

**Síntoma:** Los miembros del equipo mantienen su estado como "disponible" y responden mensajes de forma inmediata durante toda la jornada laboral. Los indicadores de "online" se convierten en un proxy informal de rendimiento. El equipo interpreta la no-respuesta inmediata como falta de compromiso.

**Por qué ocurre:** La ausencia de visibilidad física genera ansiedad por demostrar presencia. Los sistemas de mensajería refuerzan esto con indicadores de estado en tiempo real. La cultura del equipo no ha desacoplado explícitamente "disponible" de "productivo".

**Por qué es dañino en GOAL:** Destruye las ventanas de deep work. Un miembro del equipo que interrumpe su trabajo de foco cada vez que llega una notificación tiene un Focus Ratio artificialmente alto pero una Flow Efficiency degradada. El Delivery Rate cae mientras la actividad visible aumenta —exactamente el anti-pattern que GOAL quiere eliminar.

**Corrección:** El equipo acuerda y documenta la Política de deep work (Sección 10.2). El Flow Master modela el comportamiento desconectándose del canal durante sus propias ventanas de foco y comunicándolo explícitamente. Se elimina de la cultura cualquier referencia a la disponibilidad como indicador de rendimiento.

---

### 12.3 Reunionitis compensatoria

**Síntoma:** El equipo programa más reuniones de las necesarias para compensar la pérdida de comunicación informal de oficina. El calendario se llena de "15 minutos de sincronía" y "quick calls". Las reuniones tienen agendas vagas o no tienen agenda. Hay reuniones semanales recurrentes que nadie cuestiona aunque no produzcan ninguna decisión.

**Por qué ocurre:** La falta de visibilidad del trabajo de otros genera la ilusión de que más sincronía produce más alineación. Es más fácil convocar una reunión que escribir bien un documento.

**Por qué es dañino en GOAL:** Las reuniones sin agenda definida son trabajo invisible que no aparece en el Flow Board. Consumen capacidad del equipo sin producir entregables medibles. Destruyen las ventanas de foco. Generan reunionismo periférico donde las decisiones reales se siguen tomando en canales informales post-reunión.

**Corrección:**

```
Criterios de filtro antes de convocar una reunión:

1. ¿Puede resolverse este tema con un mensaje bien escrito?
   → Si sí, escribe el mensaje. No convoques la reunión.

2. ¿Tiene esta reunión una agenda y una decisión esperada?
   → Si no tiene ambas, no se convoca.

3. ¿Es la sincronía necesaria o simplemente más cómoda?
   → Las reuniones de conveniencia se eliminan. Las de necesidad se mantienen.

4. ¿Puede asistir alguien en modo lectura, sin contribuir activamente?
   → Esa persona no debería estar en la reunión. Recibe el resumen.

Flow Master's role:
  Auditar el calendario del equipo mensualmente.
  Cualquier reunión recurrente que no tenga agenda ni decisión documentada
  en el último ciclo se cancela por defecto.
```

---

### 12.4 Flow Board desactualizado

**Síntoma:** El Flow Board no refleja el trabajo real del equipo. Las tarjetas no se mueven cuando las tareas cambian de estado. El Daily Flow Sync (escrito) describe un estado diferente al del tablero. El Flow Master toma decisiones basadas en una imagen desactualizada del flujo.

**Por qué ocurre:** En remoto, no hay un tablero físico visible que genere presión ambiental para actualizarlo. Actualizar el Flow Board digital requiere un paso deliberado que la urgencia del trabajo inmediato desplaza. El costo de no actualizar no es visible de forma inmediata.

**Por qué es dañino en GOAL:** El Flow Board es el sistema nervioso central de GOAL. Los aging indicators, el WIP compliance, el Cycle Time, y el Block Rate dependen de datos en tiempo real. Un Flow Board desactualizado convierte todas las métricas en ficción. Las decisiones del Flow Master —incluida la escalación de blockers y la intervención en WIP— se basan en información incorrecta.

**Corrección:**

```
Regla de actualización inmediata:
  Cada vez que el estado de una tarea cambia, el Flow Board se actualiza antes
  de que el miembro del equipo haga cualquier otra cosa.
  "Primero el tablero, luego el trabajo."

Verificación en Daily Flow Sync:
  El Flow Master verifica que el estado del tablero coincide con las
  actualizaciones escritas individuales.
  Cualquier discrepancia se señala y se corrige en el acto.

Consecuencia de desactualización reiterada:
  Si un miembro del equipo tiene tres o más discrepancias en un ciclo,
  el Flow Master lo aborda en la conversación 1:1.
  No es una sanción; es un diagnóstico: ¿hay fricción en la herramienta?
  ¿hay sobrecarga de trabajo? ¿hay resistencia al proceso?
```

---

### 12.5 Comunicación fantasma (ghost communication)

**Síntoma:** Los miembros del equipo envían mensajes a canales del equipo, hacen preguntas en PRs, o registran blockers, pero no reciben respuesta en la ventana acordada. El silencio no se gestiona. El solicitante aprende a no esperar respuesta y empieza a resolver problemas de forma aislada o a acumular preguntas.

**Por qué ocurre:** En remoto, los mensajes sin respuesta son más fáciles de ignorar que en presencial. No hay consecuencia social inmediata. El ruido de los canales hace que algunos mensajes pasen inadvertidos. La responsabilidad de responder no está asignada.

**Por qué es dañino en GOAL:** La comunicación fantasma degrada el Block Register: los blockers que no se escalan porque "nadie responde de todas formas" son blockers invisibles que degradan el flujo sin aparecer en las métricas. Genera aislamiento en los miembros del equipo que se queda sin respuesta, reduciendo su participación en el proceso.

**Corrección:**

```
Protocolo de response ownership:
  Toda pregunta en un canal técnico del equipo tiene un owner de respuesta
  dentro de la ventana acordada.

  Si el destinatario natural no puede responder a tiempo, cualquier otro
  miembro del equipo puede (y debe) responder aunque sea:
  "[ACK] Lo vi. No tengo la respuesta ahora, pero [nombre] puede ayudarte.
   Le hago ping directo."

Flow Master como receptor de último recurso:
  Cualquier mensaje que no haya recibido respuesta en el doble de la
  ventana acordada se escala al Flow Master para que gestione la respuesta
  o el escalamiento.

En retrospectiva:
  El número de mensajes sin respuesta en la ventana acordada es un indicador
  de salud de comunicación del equipo. Si supera el 10% de los mensajes
  del ciclo, es un ítem de mejora de proceso.
```

---

### 12.6 Silos de conocimiento remoto

**Síntoma:** El conocimiento técnico y de proceso está concentrado en uno o dos miembros del equipo. Las tareas de ciertos módulos o áreas solo pueden ser tomadas por una persona. El Block Rate de esas áreas es disproportionadamente alto cuando esa persona no está disponible.

**Por qué ocurre:** En remoto, la transferencia de conocimiento es más costosa que en presencial porque requiere esfuerzo deliberado de escritura y sesiones de pair working. Los equipos bajo presión de entrega priorizan el output inmediato sobre la distribución de conocimiento.

**Por qué es dañino en GOAL:** Los silos de conocimiento son un riesgo sistémico de flujo. Crean dependencias de persona que el Blocked Task Protocol no puede resolver estructuralmente: no hay escalación posible cuando el único que sabe cómo funciona el módulo está de vacaciones. El Delivery Rate del equipo colapsa en esas situaciones.

**Corrección:**

```
Indicadores de silo en el Flow Board:
  → Misma persona en > 60% de las tareas de un módulo durante 3 ciclos
  → Block Rate > 40% en tareas de un módulo específico cuando el "experto" no está
  → Code Reviews de un módulo realizadas siempre por la misma persona

Acciones preventivas:
  □ El Smart Planning incluye deliberadamente tareas en áreas de bajo solapamiento
    de conocimiento, asignadas a quienes no son los "expertos" habituales
  □ Las sesiones de pair working prioritarias son las que cruzan áreas de expertise
  □ La documentación técnica de módulos críticos es un ítem de Technical Debt
    que se agenda en cada ciclo hasta que el conocimiento esté distribuido

En retrospectiva:
  El Flow Master presenta el mapa de concentración de tareas por módulo
  y por miembro del equipo. Si hay concentración > 60%, es un ítem de mejora.
```

---

### 12.7 Async theater (teatro asíncrono)

**Síntoma:** El equipo sigue los rituales formales del proceso asíncrono —publica actualizaciones del Daily Flow Sync, registra blockers, usa los canales correctos— pero las decisiones reales ocurren en canales privados, llamadas no documentadas, o grupos paralelos fuera del sistema acordado. El proceso formal se convierte en una actuación que no refleja el trabajo real.

**Por qué ocurre:** Los canales formales tienen fricción (hay que escribir bien, hay que seguir plantillas). Los canales informales son más rápidos y cómodos. Con el tiempo, el equipo racionaliza el uso de canales informales como "más eficiente", sin ver que está destruyendo la visibilidad del sistema.

**Por qué es dañino en GOAL:** El async theater es la versión remota del anti-pattern de trabajo invisible (Sección 22.6 del documento base). Cuando las decisiones reales ocurren fuera del sistema, el Flow Board deja de reflejar la realidad, las métricas de flujo son falsas, y el Flow Master no puede gestionar el proceso porque no tiene visibilidad de él. GOAL deja de funcionar aunque el equipo parezca estar siguiendo el proceso.

**Corrección:**

```
Señales de detección:
  → La información del Daily Flow Sync escrito es siempre positiva, sin blockers,
    aunque las métricas muestren problemas
  → Las decisiones registradas en #goal-decisions son siempre menores;
    los cambios grandes "ya estaban decididos"
  → El Block Register está vacío en ciclos donde hubo problemas evidentes
  → Las conversaciones privadas entre miembros del equipo sobre trabajo
    no tienen ninguna documentación en canales públicos del equipo

Conversación directa del Flow Master:
  El async theater no se corrige con reglas adicionales. Se corrige con
  una conversación directa sobre por qué el sistema formal tiene fricción
  que lo hace menos atractivo que los canales informales.
  La solución es reducir la fricción del sistema formal, no añadir
  reglas de compliance.

Revisión del proceso:
  Si el async theater es persistente, es una señal de que las plantillas,
  canales, o herramientas son demasiado costosas para el equipo.
  El Flow Master propone simplificación en la próxima retrospectiva.
```

---

### 12.8 Disponibilidad desigual como ventaja sistémica

**Síntoma:** Los miembros del equipo en la zona horaria "central" —la que tiene mayor solapamiento con el resto— tienen acceso preferencial a información, decisiones, y visibilidad. Los miembros en zonas horarias periféricas se enteran de decisiones después de que ocurren, participan en reuniones en horas incómodas, o ven que su trabajo de la noche anterior ya fue modificado o invalidado por decisiones tomadas sin su conocimiento.

**Por qué ocurre:** En ausencia de protocolos explícitos, la mayoría de los procesos síncronos favorecen a quienes están en el horario mayoritario. Es un sesgo de diseño, no de intención.

**Por qué es dañino en GOAL:** La disponibilidad desigual como ventaja sistémica viola el principio de visibilidad sobre suposiciones. El equipo no puede operar con los mismos estándares de calidad y los mismos datos si algunos miembros tienen información que otros no tienen todavía. Genera resentimiento, reduce la participación de los miembros en desventaja horaria, y deteriora la calidad del proceso.

**Corrección:**

```
Regla de equidad horaria:
  Ninguna decisión que afecte al Goal Cycle Plan, a los goals, o a la
  arquitectura técnica compartida puede tomarse en una ventana sincrónica
  que excluya a algún miembro del equipo por su zona horaria.

  Si se necesita tomar una decisión urgente sin toda la disponibilidad:
  → El Flow Master documenta la decisión en #goal-decisions inmediatamente
  → Abre una ventana de 4 horas para objeción de quienes no estuvieron presentes
  → Si hay objeción, se re-evalúa; si no, la decisión es definitiva

Rotación de horarios de reuniones:
  Las reuniones recurrentes (si las hay) rotan de horario cada ciclo
  para distribuir la incomodidad horaria equitativamente.

En retrospectiva:
  El Flow Master pregunta explícitamente a miembros en zonas horarias
  periféricas si hubo situaciones donde se sintieron en desventaja de información.
  Esto es un input de proceso, no una queja personal.
```

---

*Este documento es una extensión oficial de la GOAL Methodology v0.2. Todos los conceptos base (Flow Board, Daily Flow Sync, Smart Planning, WIP, Backlog, DoD, Goal Cycle, Flow Master, Product Strategist) se usan con sus definiciones originales en inglés tal como se especifican en el documento base.*

*Versión: 1.0 — Marzo 2026*
*Próxima revisión: tras dos ciclos de aplicación en equipo remoto*

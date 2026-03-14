---
id: developer-experience
title: Experiencia del Desarrollador y Ritmo Sostenible
sidebar_position: 11
description: Un framework formal para la salud del equipo, carga cognitiva y capacidad de entrega a largo plazo — el Cognitive Load Index, Protocolo de Ritmo Sostenible, Team Health Check y Protocolo de Focus Time.
---

## Tabla de Contenidos

1. [Por qué la DX importa en GOAL](#1-por-qué-la-dx-importa-en-goal)
2. [Teoría de la Carga Cognitiva aplicada a equipos de software](#2-teoría-de-la-carga-cognitiva-aplicada-a-equipos-de-software)
3. [Cognitive Load Index (CLI)](#3-cognitive-load-index-cli)
4. [Protocolo de Ritmo Sostenible](#4-protocolo-de-ritmo-sostenible)
5. [Framework de Team Health Check](#5-framework-de-team-health-check)
6. [Protocolo de Focus Time](#6-protocolo-de-focus-time)
7. [Experiencia de onboarding para nuevos miembros del equipo](#7-experiencia-de-onboarding-para-nuevos-miembros-del-equipo)
8. [La seguridad psicológica como prerrequisito](#8-la-seguridad-psicológica-como-prerrequisito)
9. [Cultura de feedback en GOAL](#9-cultura-de-feedback-en-goal)
10. [Métricas que reflejan la salud del equipo](#10-métricas-que-reflejan-la-salud-del-equipo)

---

## 1. Por qué la DX importa en GOAL

### 1.1 El problema que GOAL fue diseñado para resolver — extendido

GOAL fue diseñado para reducir el burnout mediante el control de la carga cognitiva. Esa afirmación aparece en los objetivos principales de la metodología. Este documento cumple ese compromiso definiendo con exactitud cómo GOAL lo aborda en la práctica.

El burnout es la principal causa de rotación involuntaria en los equipos de desarrollo de software. Cuando un ingeniero senior se va, el equipo no solo pierde un recurso: pierde conocimiento institucional, capacidad de mentoría, ownership del código y predictibilidad en la entrega. El costo de reemplazar a un ingeniero de nivel medio-senior se estima entre el 50% y el 200% de su compensación anual cuando se contabilizan el reclutamiento, el onboarding y la brecha de productividad. Ninguna métrica de velocidad, ningún gráfico de sprint velocity ni ningún framework de OKRs captura esta pérdida.

La Developer Experience (DX) es el conjunto de todas las interacciones que tiene un desarrollador con sus herramientas, procesos, equipo y organización a lo largo del tiempo. Una DX alta se correlaciona con:

- **Mayor throughput:** Los desarrolladores en entornos con poca fricción y alta seguridad psicológica completan tareas más rápido y con menos defectos.
- **Menores tasas de defectos:** La sobrecarga cognitiva es una causa directa de bugs que escapan a producción. Un desarrollador manejando cinco tareas simultáneas produce peor código que ese mismo desarrollador enfocado en una sola.
- **Mejor retención:** Los desarrolladores que se sienten respetados, capaces y sin bloqueos se quedan. Los que se sienten abrumados, ignorados o gestionados por métricas se van.
- **Mayor calidad de producto:** Los ingenieros que se enorgullecen de su trabajo y tienen tiempo para pensar producen software que perdura. Los que están constantemente compitiendo contra deadlines artificiales producen software que acumula deuda.

### 1.2 La DX como preocupación de primer nivel en un framework ágil

La mayoría de los frameworks ágiles tratan la salud del equipo como un tema secundario: algo que se aborda en las retrospectivas cuando alguien lo menciona, o que se delega a Recursos Humanos. GOAL trata la DX como una propiedad estructural del sistema de entrega, al mismo nivel que la eficiencia de flujo y el cycle time.

Esto significa que la DX en GOAL es:

- **Medida** — a través del Cognitive Load Index y el Team Health Check
- **Monitoreada** — a través de señales de alerta temprana integradas en el Daily Flow Sync
- **Protegida** — a través del Protocolo de Ritmo Sostenible y el Protocolo de Focus Time
- **Aplicada** — a través de reglas que el Flow Master aplica con la misma autoridad con la que hace cumplir los WIP limits

El argumento es simple: un equipo que está sufriendo burnout no es un sistema de entrega saludable, independientemente de lo que digan las cifras de throughput del ciclo actual. GOAL mide ambas cosas.

### 1.3 La correlación productividad-retención-calidad

Los tres resultados que todo líder de ingeniería desea — alta productividad, baja rotación y alta calidad — no son variables independientes. Son expresiones de la misma condición subyacente: si el equipo tiene la capacidad cognitiva y emocional para dar lo mejor de sí.

```
Input de DX → Resultados

Alta carga cognitiva        → Cycle times más largos, mayor tasa de defectos,
                              blockers ocultos
Baja seguridad psicológica  → DoD reportado de forma inflada, retrasos
                              ocultos, actualizaciones falsas en el sync
Ritmo sostenible            → Throughput estable, cycle time consistente,
                              menor block rate
Cultura del heroísmo        → Pico de output a corto plazo → burnout
                              → salida del equipo → colapso de capacidad
```

El principio 4.8 de GOAL — "Sostenibilidad sobre Heroísmos" — no es un detalle menor. Es una estrategia de entrega.

---

## 2. Teoría de la Carga Cognitiva aplicada a equipos de software

### 2.1 Qué es la carga cognitiva

La Teoría de la Carga Cognitiva, desarrollada por el psicólogo educativo John Sweller, describe el esfuerzo mental requerido para procesar y aplicar información en la memoria de trabajo. La memoria de trabajo es limitada: los seres humanos pueden mantener aproximadamente 4 a 7 elementos distintos en atención activa de forma simultánea. Cuando ese límite se supera, el rendimiento se degrada: el aprendizaje se ralentiza, los errores aumentan y la calidad de las decisiones cae.

En el contexto del desarrollo de software, la carga cognitiva es el esfuerzo mental total que un desarrollador lleva mientras hace su trabajo. No se trata solo de un problema complejo y aislado, sino del peso acumulado de todo lo que compite por la atención al mismo tiempo.

La carga cognitiva tiene tres componentes:

#### Carga Intrínseca
La complejidad inherente a la tarea en sí misma. Comprender el modo de fallo de un sistema distribuido, diseñar un esquema de base de datos para una nueva funcionalidad, o depurar una race condition — estas tareas son cognitivamente demandantes por naturaleza. Esta carga no puede eliminarse; es el núcleo del trabajo.

**Implicación para GOAL:** El dimensionamiento de tareas (Small, Medium, Large) es en parte un indicador de carga intrínseca. Las tareas Large deben dividirse no solo porque toman demasiado tiempo, sino porque su carga intrínseca es demasiado alta para gestionarlas bien.

#### Carga Extrínseca
El esfuerzo mental causado por una presentación deficiente, instrucciones poco claras o fricción ambiental — no la tarea en sí, sino el ruido que la rodea. Criterios de aceptación ambiguos, definiciones de objetivos poco claras, un entorno de desarrollo local roto, un pipeline de CI lento, ownership poco claro — todo esto suma carga extrínseca.

**Implicación para GOAL:** La carga extrínseca es la categoría que GOAL ataca más directamente. Los criterios de aceptación claros, la estabilidad de los objetivos, el DoD explícito y el Protocolo de Blocked Tasks reducen la carga extrínseca.

#### Carga Germinal
El esfuerzo mental invertido en construir esquemas mentales, expertise y comprensión duradera. Es el esfuerzo cognitivo productivo — el tipo que hace que un desarrollador mejore con el tiempo. La carga germinal requiere capacidad disponible en la memoria de trabajo. Cuando la carga intrínseca y extrínseca llenan la memoria de trabajo, la carga germinal queda desplazada.

**Implicación para GOAL:** Un equipo que trabaja a un ritmo insostenible nunca construye capacidad germinal. Siempre está reaccionando, nunca aprendiendo. Por eso el heroísmo es contraproducente a largo plazo: consume el espacio cognitivo necesario para alcanzar la maestría.

### 2.2 Cómo el WIP, el context switching, las interrupciones y los objetivos poco claros aumentan la carga cognitiva

**Acumulación de Work In Progress (WIP)**

Cada tarea activa ocupa memoria de trabajo incluso cuando no se está trabajando directamente en ella. Un desarrollador con cinco tareas activas carga mentalmente el estado de las cinco: qué necesita cada una a continuación, cuáles son sus blockers, dónde está en el proceso y qué dependencias tiene. Esta carga mental de fondo — a veces llamada "bucles abiertos" — es un drenaje medible de la capacidad cognitiva.

La investigación sobre multitarea muestra de forma consistente que cada tarea concurrente adicional reduce el rendimiento efectivo en todas las tareas. El costo no es aditivo, es multiplicativo. Tres tareas en paralelo no produce el triple del output de una tarea a la vez — produce menos output total del que se habría logrado con una a la vez, más defectos.

Los WIP limits de GOAL reducen directamente esta forma de carga cognitiva.

**Context switching**

Cambiar entre tareas no es gratuito. Cada cambio requiere descargar el estado mental de una tarea y cargar el estado mental de otra. Para trabajo cognitivo complejo como el desarrollo de software, este costo de transición ha sido estimado en 15 a 20 minutos de tiempo productivo perdido por cambio.

En una jornada laboral con cinco cambios de contexto, un desarrollador puede perder 1,5 horas de trabajo efectivo — sin que esto aparezca en ningún dashboard. El context switching es desperdicio invisible.

Fuentes comunes de context switching en equipos de software:
- Saltar de una tarea de funcionalidad a una corrección urgente de bug
- Ser convocado a una reunión en medio de una implementación
- Solicitudes de code review que interrumpen trabajo de concentración profunda
- Mensajes de Slack o Teams que requieren respuesta inmediata
- Asignaciones simultáneas a múltiples proyectos

**Interrupciones**

Las interrupciones son cambios de contexto que el desarrollador no eligió. Son peores que los cambios auto-iniciados porque dejan la tarea anterior en un estado indefinido y generan ansiedad respecto a lo que fue interrumpido.

Un estudio de Gloria Mark en UC Irvine encontró que después de una interrupción, se necesitan en promedio 23 minutos y 15 segundos para volver completamente a la tarea original. Esto no se debe a que los desarrolladores sean lentos — es porque restaurar el modelo mental de una tarea compleja lleva tiempo.

**Objetivos poco claros y prioridades cambiantes**

Los objetivos poco claros obligan a los desarrolladores a un proceso de decisión de baja intensidad pero constante: "¿Estoy trabajando en lo correcto? ¿Es esto lo que quieren? ¿Debería preguntar?" Esta incertidumbre permanente consume memoria de trabajo sin producir valor. También aumenta la probabilidad de que el trabajo deba rehacerse.

Los cambios de prioridad a mitad de ciclo lo agravan: el desarrollador no solo debe gestionar la incertidumbre sobre el nuevo objetivo, sino también manejar el costo cognitivo de cierre del objetivo abandonado — el peso mental del trabajo inconcluso.

La regla de estabilidad de objetivos de GOAL (Sección 8.3 de la metodología base) es un mecanismo de protección de la carga cognitiva, no solo una restricción de planificación.

### 2.3 Cómo GOAL ya reduce la carga cognitiva

Los mecanismos existentes de GOAL abordan la carga cognitiva, incluso cuando no se describen en esos términos:

| Mecanismo de GOAL | Efecto en la carga cognitiva |
|---|---|
| WIP limits (máximo N tareas según tamaño del equipo) | Reduce la acumulación de tareas activas en la memoria de trabajo |
| Estabilidad de objetivos (bloqueados durante el ciclo) | Elimina la incertidumbre sobre qué significa el éxito |
| Límite de tamaño de tarea (máximo 3 días) | Mantiene la carga intrínseca en un nivel manejable por unidad de trabajo |
| Protocolo de Blocked Tasks (visibilidad obligatoria) | Elimina la carga mental oculta de los blockers gestionados de forma privada |
| Daily Flow Sync (10 min, estructurado) | Proporciona un punto de alineación cognitiva ligero sin interrumpir las ventanas de trabajo profundo |
| Definition of Done (control de calidad explícito) | Elimina la incertidumbre de fondo del "¿está esto realmente terminado?" |
| Protocolo de Interrupt Management | Protege al equipo de interrupciones cognitivas no planificadas |
| Backlog Grooming (criterios de aceptación requeridos) | Reduce la carga extrínseca de las descripciones de tareas ambiguas |
| Retrospectivas basadas en datos | Reemplaza la ansiedad subjetiva con datos objetivos, reduciendo la rumiación |

### 2.4 Las brechas restantes

A pesar de estos mecanismos, la metodología base de GOAL aún no aborda:

1. **No hay medición explícita de la carga cognitiva como métrica a nivel de equipo** — la metodología gestiona las causas pero no cuantifica el estado actual.
2. **No hay un protocolo formal para responder a las señales tempranas de burnout** — los principios son correctos pero falta el playbook.
3. **No hay una evaluación estructurada de la salud del equipo** — la retrospectiva se basa en métricas pero no evalúa formalmente el estado psicológico del equipo.
4. **No hay protección para el tiempo de concentración profunda** — el Daily Flow Sync protege contra reuniones pero no define ventanas explícitas de no-interrupción.
5. **No hay un modelo de onboarding** — los nuevos miembros en un sistema GOAL en marcha se gestionan de forma informal.
6. **No hay reconocimiento formal de que la seguridad psicológica es un prerrequisito** — está implícita pero no declarada.

Este documento aborda las seis brechas.

---

## 3. Cognitive Load Index (CLI)

### 3.1 Qué es el CLI

El Cognitive Load Index (CLI) es una métrica compuesta específica de GOAL que estima la carga cognitiva actual del equipo de entrega. No es una medida psicométrica precisa — es una señal operativa, diseñada para dar al Flow Master una alerta temprana cuando el equipo se está acercando a la sobrecarga cognitiva, antes de que esa sobrecarga se manifieste en tasas de defectos o regresiones en el cycle time.

El CLI se calcula a nivel de equipo, no por individuo. La medición a nivel individual crea dinámicas de vigilancia que destruyen la seguridad psicológica que GOAL requiere.

### 3.2 La fórmula del CLI

```
CLI = (P₁ × TareasActivas) + (P₂ × InterrupcionesDiarias) + (P₃ × BlockersNoResueltos) + (P₄ × PresionDeudaTécnica) + (P₅ × CargaDeReuniones)

Donde:

  TareasActivas          = número de tareas actualmente In Progress (en todo el equipo)
  InterrupcionesDiarias  = promedio de solicitudes no planificadas recibidas por día en el ciclo
  BlockersNoResueltos    = número de tareas en estado Blocked > 24 horas
  PresionDeudaTécnica    = (ítems de deuda técnica / total ítems del Backlog) × 10, máximo 10
  CargaDeReuniones       = total de horas de reunión por semana por desarrollador (promedio)

Pesos por defecto:
  P₁ = 2.0   (la cantidad de tareas activas es el factor de mayor impacto en la carga cognitiva)
  P₂ = 1.5   (las interrupciones son de alto impacto pero el equipo puede amortiguar parcialmente)
  P₃ = 2.5   (los blockers no resueltos generan carga mental elevada — peso más alto)
  P₄ = 1.0   (la presión de deuda técnica es real pero de efecto más lento)
  P₅ = 1.5   (la carga de reuniones consume directamente capacidad cognitiva)
```

**Ejemplo de cálculo — Equipo de 5 personas:**

```
TareasActivas = 4 (dentro del WIP limit)
InterrupcionesDiarias = 3 por día en promedio
BlockersNoResueltos = 2 tareas bloqueadas > 24h
PresionDeudaTécnica = 3 (deuda técnica = 30% del Backlog → 10 × 0.30 = 3)
CargaDeReuniones = 2 horas/semana/desarrollador

CLI = (2.0 × 4) + (1.5 × 3) + (2.5 × 2) + (1.0 × 3) + (1.5 × 2)
    = 8.0 + 4.5 + 5.0 + 3.0 + 3.0
    = 23.5 → Zona amarilla
```

### 3.3 Umbrales del CLI

```
┌──────────────────────────────────────────────────────────────┐
│  Puntuación CLI  │  Zona     │  Estado                       │
├──────────────────┼───────────┼───────────────────────────────┤
│  0 – 20          │  VERDE    │  Carga cognitiva saludable    │
│  21 – 35         │  AMARILLO │  Elevada — monitorear         │
│  36+             │  ROJO     │  Sobrecarga — intervenir ya   │
└──────────────────┴───────────┴───────────────────────────────┘
```

**Verde (0–20):** El equipo tiene una carga cognitiva manejable. Es probable que la entrega sea consistente. Este es el estado estacionario objetivo.

**Amarillo (21–35):** La carga cognitiva está elevada. El equipo puede mantenerlo por un período corto, pero no debería ser el estado por defecto. Si el CLI permanece en amarillo durante más de un ciclo completo, tratarlo como rojo.

**Rojo (36+):** El equipo está en sobrecarga cognitiva. Se esperan tasas de defectos crecientes, cycle times más largos, Daily Flow Syncs acortados que pierden señales reales y agotamiento emocional. Se requiere intervención inmediata.

### 3.4 Cómo medir el CLI

El CLI lo calcula el Flow Master al inicio de cada semana, usando datos que ya existen en el sistema GOAL:

| Input | Fuente |
|---|---|
| TareasActivas | Flow Board — conteo de la columna In Progress |
| InterrupcionesDiarias | Registro de interrupciones — promedio de los últimos 5 días |
| BlockersNoResueltos | Block Register — conteo de entradas abiertas > 24h |
| PresionDeudaTécnica | Backlog — proporción de ítems de deuda técnica sobre el total |
| CargaDeReuniones | Datos del calendario — tiempo promedio de reuniones por desarrollador |

El CLI se revisa al inicio de cada Daily Flow Sync como un número de cabecera único. Tarda menos de 30 segundos reportarlo: "El CLI esta semana es 23 — amarillo. Los principales factores son tres blockers abiertos y el volumen de interrupciones."

El Flow Metrics Dashboard debería incluir el CLI como métrica rastreada con tendencia por ciclos.

### 3.5 Cómo reducir el CLI cuando está en Amarillo o Rojo

**Si el factor es TareasActivas (WIP demasiado alto):**
- Aplicar los WIP limits de forma inmediata y sin excepciones
- Redirigir al equipo a comportamientos de terminar-antes-de-empezar: desbloquear tareas, hacer code reviews, completar validaciones
- Considerar reducir temporalmente el Focus Factor en la fórmula del WIP (por ejemplo, de 0.7 a 0.6)

**Si el factor es InterrupcionesDiarias:**
- Revisar la clasificación de interrupciones — ¿se están permitiendo ítems P3 en el ciclo?
- Establecer ventanas de comunicación (horarios designados en los que el equipo acepta solicitudes externas) en lugar de obligaciones de respuesta en tiempo real
- El Flow Master desvía activamente las interrupciones en el perímetro del equipo durante el período de recuperación

**Si el factor es BlockersNoResueltos:**
- Escalar todos los blockers de más de 24 horas en el próximo Daily Flow Sync
- El Flow Master hace seguimiento personal del responsable de resolución de cada blocker
- Considerar asignar temporalmente a un miembro del equipo exclusivamente a la resolución de blockers

**Si el factor es PresionDeudaTécnica:**
- Aumentar la asignación de capacidad para deuda técnica en el próximo ciclo (del 10–20% estándar al 20–30%)
- Identificar si áreas específicas de deuda técnica están generando blockers repetidos — son candidatos prioritarios

**Si el factor es CargaDeReuniones:**
- Auditar todas las reuniones recurrentes en cuanto a su necesidad y asistencia
- Mover a formato asíncrono cualquier reunión que no requiera participación sincrónica
- Proteger al menos un bloque de trabajo profundo de tres horas por día por desarrollador de todas las reuniones

---

## 4. Protocolo de Ritmo Sostenible

### 4.1 Definición de ritmo sostenible en el contexto de GOAL

Ritmo sostenible significa que el equipo puede entregar a su velocidad actual indefinidamente — no solo durante un ciclo, no solo durante un trimestre, sino como modo de operación permanente.

Esto tiene un listón más alto de lo que parece. Un equipo que entrega a alta velocidad durante tres meses y luego pierde dos ingenieros por burnout no mantuvo un ritmo sostenible. Un equipo que entrega consistentemente a velocidad moderada con membresía estable, baja tasa de defectos y mejora del cycle time a lo largo de doce meses, sí lo hizo.

En términos de GOAL, el ritmo sostenible se define como:

> El equipo completa Goal Cycles a un ritmo de throughput que puede mantenerse durante al menos cuatro ciclos consecutivos sin que el CLI entre en zona roja, sin un aumento en las extensiones de ciclo no planificadas, y sin señales de degradación de la seguridad psicológica.

El ritmo sostenible no es ritmo lento. Un equipo de alto rendimiento con baja carga cognitiva, objetivos claros y buenas herramientas puede operar con alto throughput de forma sostenible. La restricción no está en la velocidad — está en las condiciones bajo las cuales se logra esa velocidad.

### 4.2 Señales de alerta temprana — indicadores adelantados de burnout a nivel de equipo

Estas señales aparecen antes de que el burnout sea visible en las métricas de entrega. El Flow Master las monitorea como parte de su responsabilidad de observación diaria.

**Señales de comportamiento:**

```
Señal 1: Daily Flow Syncs que se acortan progresivamente
  Qué significa: Los miembros del equipo dan respuestas breves y poco comprometidas.
                 "Sin blockers, todo bien" de todos, todos los días.
  Por qué importa: En equipos saludables, la gente sí saca problemas reales a la luz.
                   Los syncs cortos suelen significar que los problemas se están ocultando.

Señal 2: Participación decreciente en retrospectivas
  Qué significa: Menos ítems de mejora sugeridos, discusión más corta,
                 el equipo acepta la primera respuesta sin debate.
  Por qué importa: Los equipos bajo estrés se desconectan de la mejora.
                   Están sobreviviendo, no optimizando.

Señal 3: Aumento de actividad de commits fuera del horario habitual
  Qué significa: Los ingenieros trabajan fuera de su horario normal para cumplir compromisos.
  Por qué importa: Este es el patrón del heroísmo en su forma más textual.
                   Es invisible en el Flow Board.

Señal 4: Reducción del feedback voluntario en code reviews
  Qué significa: Los code reviews se convierten en aprobaciones automáticas —
                 aprobados rápido con comentarios mínimos.
  Por qué importa: Un code review exhaustivo requiere reservas cognitivas.
                   Los revisores exhaustos aprueban sin atención completa.

Señal 5: Aumento del blocker hide rate
  Qué significa: Los blockers aparecen en el Block Register tarde — más cerca de los deadlines,
                 no cuando se encontraron por primera vez.
  Por qué importa: La gente oculta problemas cuando tiene miedo al juicio
                   o cuando intenta resolver todo por sí sola.

Señal 6: Velocidad de "Done" sin entrega real de valor
  Qué significa: Las tareas pasan a Done pero el ciclo no logra entregar valor al usuario.
  Por qué importa: El equipo está manipulando la métrica. Es una respuesta al estrés.

Señal 7: Conversaciones paralelas que reemplazan al Daily Flow Sync
  Qué significa: Los problemas reales se discuten en canales privados o pasillos
                 pero no se sacan a la luz en el sync.
  Por qué importa: El proceso formal está siendo ignorado porque parece inseguro
                   o ineficaz.
```

**Señales en métricas:**

```
Métrica 1: CLI con tendencia ascendente durante dos semanas consecutivas
Métrica 2: Extensiones de ciclo ocurriendo en ciclos consecutivos
Métrica 3: Block rate aumentando mientras el tiempo de detección de blockers también aumenta
           (más blockers Y se detectan más tarde)
Métrica 4: Focus Ratio (tiempo de trabajo activo / tiempo total de flujo) en descenso
Métrica 5: Indicador de horas extra > 10% de los días laborables en un ciclo
```

### 4.3 Playbook de respuesta — qué hace el Flow Master cuando aparecen señales

La responsabilidad del Flow Master no es orientar individualmente a las personas, sino cambiar las condiciones del sistema que están produciendo señales de burnout. La respuesta es estructural, no interpersonal.

**Respuesta Nivel 1 — CLI en zona amarilla o 2 señales de comportamiento observadas:**

```
Acciones:
  □ Reportar la tendencia del CLI en el próximo Daily Flow Sync —
    nombrarlo explícitamente
  □ Reducir el WIP limit para el próximo ciclo en una tarea
  □ Bloquear todas las nuevas entradas al Expedite lane durante
    el resto del ciclo actual, salvo incidente P1 genuino de producción
  □ Cancelar o diferir todas las reuniones no obligatorias esta semana
  □ Agregar un bloque de Focus Time a cada día laborable restante del ciclo
  □ Al finalizar el ciclo en la retrospectiva: realizar un Team Health Check (Sección 5)
```

**Respuesta Nivel 2 — CLI en zona roja o 4 o más señales de comportamiento:**

```
Acciones:
  □ Convocar una sesión breve inmediata (15 minutos) con el equipo —
    no para diagnosticar, sino para nombrar la situación abiertamente:
    "Nuestro CLI está en [X]. El equipo está cargando demasiado.
     Vamos a reducir la carga ahora."
  □ Reducir el WIP limit al cálculo más conservador (Focus Factor = 0.6)
  □ Suspender todas las entradas al Expedite lane hasta que el CLI regrese a verde
  □ Eliminar todas las reuniones recurrentes no obligatorias del calendario del equipo
    por las próximas dos semanas
  □ Diferir todo el trabajo de deuda técnica no crítica —
    el equipo necesita espacio cognitivo primero
  □ Realizar un Team Health Check en las próximas 48 horas
  □ Si hay un ciclo activo, considerar el cierre anticipado y
    un ciclo siguiente con menor compromiso
  □ Escalar al Product Strategist: los objetivos del próximo ciclo
    deben reducirse en alcance
```

**Respuesta Nivel 3 — Zona roja sostenida por más de un ciclo completo:**

```
Acciones:
  □ Iniciar un Recovery Cycle formal (Sección 4.5)
  □ Escalar a la dirección — esto es ahora un riesgo organizacional,
    no solo un problema de proceso del equipo
  □ Realizar una evaluación de riesgo de salida con el Product Strategist
  □ Considerar apoyo externo: coach, facilitador, o cambio en el headcount
```

### 4.4 El anti-patrón del heroísmo — cómo detectarlo y detenerlo

El heroísmo en equipos de software se define como: uno o más miembros del equipo trabajan rutinariamente por encima de su capacidad normal para compensar problemas sistémicos, mientras las métricas superficiales del sistema parecen saludables.

El heroísmo es peligroso precisamente porque es invisible en las métricas de entrega estándar. Un equipo con uno o dos héroes puede mantener la velocidad de entrega mientras esos individuos se degradan. Cuando los héroes sufren burnout y se van, la capacidad del equipo colapsa de forma repentina — a menudo en medio de un período de entrega de alta importancia.

**Cómo detectar el heroísmo:**

```
Detección 1: Commits fuera del horario habitual
  Herramienta: revisar timestamps de commits. Si un porcentaje significativo
  de commits ocurre fuera del horario principal, alguien está haciendo horas extra.

Detección 2: Violaciones de WIP limits que se "perdonan"
  Si un miembro del equipo lleva consistentemente más de su asignación de WIP
  y el equipo lo normaliza ("así trabaja él/ella"),
  el heroísmo está presente y es tolerado.

Detección 3: Puntos únicos de conocimiento
  Si ciertas tareas o dominios solo pueden ser gestionados por una persona,
  esa persona lleva una carga invisible que no aparece en ninguna métrica.

Detección 4: El desarrollador que nunca tiene blockers
  Si un miembro del equipo nunca tiene blockers y siempre entrega a tiempo
  independientemente de la complejidad de la tarea, está o bien ocultando
  blockers o absorbiendo el costo de forma privada.

Detección 5: Los objetivos del ciclo se cumplen "a pesar de todo"
  Cuando las conversaciones de Goal Review incluyen frases como
  "apenas lo logramos" o "el equipo realmente se superó esta vez",
  eso es heroísmo siendo elogiado en lugar de abordado.
```

**Cómo detener el heroísmo:**

```
Paso 1: Nombrarlo sin culpar.
  "Estamos entregando, pero lo hacemos de una manera que no podemos sostener.
   Veamos qué lo hace necesario compensar de forma heroica."

Paso 2: Identificar la causa raíz.
  El heroísmo es un síntoma. La causa suele ser una de estas:
  - WIP limits que no se están aplicando
  - Alcance de objetivos demasiado grande para la capacidad real
  - Deuda técnica oculta que genera fricción invisible
  - Volumen de interrupciones que no está siendo capturado en el CLI
  - Una persona cargando conocimiento especializado en solitario

Paso 3: Arreglar el sistema, no la persona.
  Elogiar al héroe refuerza el comportamiento.
  Arreglar la condición que hizo necesario el heroísmo elimina la necesidad del mismo.

Paso 4: Redistribuir el conocimiento.
  Si el conocimiento en un solo punto es la causa: pair programming,
  documentación, o sesiones de transferencia de conocimiento programadas
  en el próximo ciclo.

Paso 5: Ajustar los objetivos a la capacidad real.
  El presupuesto de heroísmo no es una reserva de capacidad sostenible.
  Los objetivos deben establecerse a lo que el equipo puede entregar sin heroísmo.
```

### 4.5 Diseño del ciclo de recuperación

Un Recovery Cycle es un constructo formal de GOAL que se utiliza cuando el equipo ha estado en sobrecarga sostenida y necesita restaurar el ritmo sostenible antes de reanudar compromisos de entrega normales.

Un Recovery Cycle no es un fracaso. Es el reconocimiento de que los sistemas de entrega, como los sistemas mecánicos, requieren mantenimiento. Un equipo que nunca toma un ciclo de recuperación eventualmente falla de forma catastrófica.

**Características del Recovery Cycle:**

```
Alcance de objetivos:  Reducido en un 30–40% respecto al output del ciclo anterior
WIP limit:             Focus Factor = 0.6, sin excepciones
Entradas al Expedite:  Suspendidas salvo incidentes P1 genuinos de producción
Deuda técnica:         Aumentada al 30% de la capacidad del ciclo
Reuniones:             Todas las reuniones no obligatorias canceladas
                       durante la duración del ciclo
Focus Time:            Mínimo dos bloques de trabajo profundo de tres horas por día
Solicitudes externas:  Todas ruteadas a través del Flow Master —
                       ninguna llega directamente a los desarrolladores
Seguimiento de velocidad: Suspendido para este ciclo —
                          no medir throughput durante la recuperación
```

**Criterios de éxito del Recovery Cycle:**

El Recovery Cycle se completa cuando el CLI del equipo regresa a verde durante dos semanas consecutivas, las puntuaciones del Team Health Check se recuperan a umbrales aceptables en las cinco dimensiones, y el Flow Master observa que las señales de comportamiento vuelven a sus niveles de referencia saludables.

**Comunicación a stakeholders:**

Cuando se convoca un Recovery Cycle, el Product Strategist comunica de forma proactiva:

> "Nuestro equipo está en un período de recuperación estructurada durante este ciclo. La velocidad de entrega se reducirá. Es una inversión deliberada en la capacidad a largo plazo del equipo. El siguiente ciclo retomará los compromisos de entrega estándar. Les mantendremos informados sobre cualquier impacto en los hitos del roadmap."

---

## 5. Framework de Team Health Check

### 5.1 Visión general

El Team Health Check es una evaluación estructurada que se realiza cada tres Goal Cycles (o de forma inmediata cuando el Flow Master observa señales de Nivel 2). Mide la salud del equipo en cinco dimensiones que GOAL identifica como fundamentales para la entrega sostenible.

No es una evaluación de desempeño. No es un proceso de RRHH. Es un diagnóstico de salud del flujo — de la misma manera que el Flow Metrics Dashboard mide la salud de la entrega, el Team Health Check mide el sistema humano que produce esa entrega.

**Las cinco dimensiones:**

1. **Clarity** — ¿El equipo sabe qué está haciendo y por qué?
2. **Flow** — ¿El equipo tiene las condiciones para dar lo mejor de sí sin fricción?
3. **Autonomy** — ¿El equipo tiene agencia sobre su trabajo y su entorno?
4. **Quality** — ¿El equipo tiene la capacidad y la cultura para producir trabajo de calidad?
5. **Sustainability** — ¿El equipo puede mantener este ritmo indefinidamente?

### 5.2 El cuestionario

Cada pregunta es puntuada del 1 al 5 por cada miembro del equipo de forma individual y anónima.

```
1 = Totalmente en desacuerdo / Casi nunca
2 = En desacuerdo / Raramente
3 = Neutral / A veces
4 = De acuerdo / Generalmente
5 = Totalmente de acuerdo / Casi siempre
```

---

**Dimensión 1: Clarity**

```
C1. Entiendo los objetivos principales de nuestro ciclo actual
    y por qué son importantes para el negocio.                       [1–5]

C2. Los criterios de aceptación de las tareas que tomo son
    suficientemente claros como para saber cuándo están terminadas
    sin necesidad de preguntar.                                       [1–5]

C3. Cuando las prioridades cambian, recibo una explicación
    clara del por qué, no solo del qué.                              [1–5]

C4. Conozco lo que requiere el Definition of Done del equipo
    y lo aplico de forma consistente.                                 [1–5]
```

---

**Dimensión 2: Flow**

```
F1. Tengo regularmente bloques de tiempo sin interrupciones
    para concentrarme profundamente en trabajo complejo.              [1–5]

F2. Cuando estoy bloqueado, el equipo y el proceso me ayudan
    a desbloquearse rápidamente.                                      [1–5]

F3. La cantidad de tareas que se espera que maneje de forma
    simultánea me permite hacer cada una bien.                        [1–5]

F4. Nuestro Daily Flow Sync me ayuda a entender la situación
    del equipo sin consumir tiempo productivo.                        [1–5]
```

---

**Dimensión 3: Autonomy**

```
A1. Tengo participación significativa en cómo el equipo decide
    implementar los objetivos (decisiones técnicas).                  [1–5]

A2. Puedo elegir qué tareas tomar según mi habilidad
    e interés, no solo por asignación.                                [1–5]

A3. Cuando identifico una mejor forma de hacer algo,
    me siento con poder para proponerlo e intentarlo.                 [1–5]

A4. Me siento con la confianza suficiente para tomar decisiones
    dentro de mi dominio sin necesitar aprobación constante.          [1–5]
```

---

**Dimensión 4: Quality**

```
Q1. Tengo suficiente tiempo y espacio cognitivo para escribir
    código del que me sienta genuinamente orgulloso/a.                [1–5]

Q2. Nuestro proceso de code review ayuda a mejorar la calidad
    en lugar de ser un cuello de botella o una aprobación vacía.      [1–5]

Q3. La deuda técnica no parece estar silenciosamente
    socavando nuestra capacidad de entregar.                          [1–5]

Q4. Nuestro Definition of Done refleja estándares de calidad
    genuinos, no un checklist que se corre a completar.               [1–5]
```

---

**Dimensión 5: Sustainability**

```
S1. Puedo mantener mi ritmo de trabajo actual durante
    los próximos seis meses sin sufrir burnout.                       [1–5]

S2. El equipo no depende de horas extra o esfuerzo heroico
    para cumplir con los compromisos del ciclo.                       [1–5]

S3. Siento que mi bienestar importa para este equipo
    y para este proceso.                                              [1–5]

S4. Si estuviera agobiado o abrumado, me sentiría cómodo/a
    planteándolo en un entorno de equipo.                             [1–5]
```

### 5.3 Puntuación e interpretación

**Puntuación por dimensión:** Promedio de todas las respuestas individuales de las 4 preguntas de esa dimensión.

**Puntuación de salud global:** Promedio de las cinco puntuaciones por dimensión.

```
Umbrales por dimensión:

  4.0 – 5.0  →  Saludable    (sin acción requerida, celebrar y proteger)
  3.0 – 3.9  →  Atención     (se necesitan acciones de mejora específicas)
  2.0 – 2.9  →  En riesgo    (se requiere respuesta inmediata del Flow Master)
  1.0 – 1.9  →  Crítico      (escalar — esta dimensión está fallando)

Umbrales de puntuación global:

  4.0+     →  El equipo está sano. Monitorear y mantener.
  3.5–3.9  →  Dimensiones específicas necesitan atención.
              Actuar dentro de un ciclo.
  3.0–3.4  →  Múltiples dimensiones bajo estrés. El Flow Master
              y el Product Strategist alinean un plan de respuesta en una semana.
  < 3.0    →  La salud del equipo está en riesgo. Considerar Recovery Cycle.
```

**Interpretaciones por dimensión:**

- **Puntuación baja en Clarity:** La comunicación de objetivos, criterios de aceptación o DoD necesita mejorar. Problema de responsabilidad del Product Strategist.
- **Puntuación baja en Flow:** El volumen de interrupciones, los WIP limits o la resolución de blockers están fallando. Problema de responsabilidad del Flow Master.
- **Puntuación baja en Autonomy:** El equipo está siendo gestionado en exceso o con desconfianza. Problema de liderazgo y del Product Strategist.
- **Puntuación baja en Quality:** La deuda técnica, la presión temporal o la cultura de revisión está degradando el oficio. Problema compartido del equipo.
- **Puntuación baja en Sustainability:** El equipo está sufriendo burnout. Es un problema organizacional urgente.

### 5.4 Con qué frecuencia realizarlo

**Cadencia estándar:** Cada 3 Goal Cycles.

**Cadencia disparada:** Cualquier momento en que el Flow Master observe señales de burnout de Nivel 2, una salida repentina, o un resultado de ciclo significativamente por debajo de las expectativas sin una causa externa obvia.

### 5.5 Qué hacer con los resultados

**Paso 1:** Compartir los resultados agregados y anonimizados con todo el equipo. No ocultar las puntuaciones. La transparencia es el fundamento de la utilidad del framework.

**Paso 2:** En la próxima retrospectiva, discutir primero la dimensión con menor puntuación. No intentar resolver las cinco a la vez.

**Paso 3:** Identificar un cambio concreto y accionable por dimensión con baja puntuación. Cada cambio debe tener un responsable y un criterio de medición.

**Paso 4:** Hacer seguimiento de las puntuaciones por dimensión a lo largo de los ciclos. Una dimensión que mejora de 2.5 a 3.5 en dos ciclos es evidencia de que los procesos de GOAL están funcionando según lo previsto.

**Paso 5:** Si la dimensión Sustainability puntúa por debajo de 2.5, tratarlo como una señal de alerta roja que tiene prioridad sobre el resto. Un equipo que no puede responder "sí" a "puedo mantener este ritmo seis meses" está en riesgo inmediato de rotación.

---

## 6. Protocolo de Focus Time

### 6.1 El argumento por el tiempo de concentración protegido

El desarrollo de software es trabajo de conocimiento que requiere períodos extendidos de concentración sin interrupciones. Los estudios de productividad de desarrolladores identifican consistentemente el "estado de flujo" — compromiso profundo y enfocado con un problema — como la condición en la que se produce el trabajo de mayor calidad y mayor volumen. El estado de flujo típicamente requiere entre 20 y 30 minutos para alcanzarse y colapsa instantáneamente ante cualquier interrupción.

Una jornada laboral estándar de 8 horas con reuniones, mensajes de Slack, email e interacciones con colegas puede contener menos de 2 horas de trabajo real en estado de flujo. El Protocolo de Focus Time de GOAL está diseñado para maximizar esa ventana.

### 6.2 Bloques de trabajo profundo en el calendario de GOAL

**Definición:** Un bloque de trabajo profundo (Deep Work Block) es un período del calendario durante el cual no se permiten interrupciones de ningún tipo — sin reuniones, sin notificaciones de Slack o Teams, sin solicitudes de code review, sin interrupciones verbales de colegas.

**Estructura estándar de Deep Work Blocks en GOAL:**

```
Bloque de la mañana:  9:00 – 12:00   (3 horas)
Bloque de la tarde:   14:00 – 16:30  (2,5 horas)

Tiempo de concentración protegido por día: 5,5 horas

Justificación:
  - Las mañanas son cognitivamente de mayor calidad para la mayoría
    de los desarrolladores
  - El período post-almuerzo se usa para actividades sincrónicas
    (reuniones, revisiones, sync)
  - Las tardes ofrecen una segunda ventana productiva antes del fin de jornada
```

**Estándar mínimo aceptable:** Al menos un Deep Work Block de 3 horas por día laborable por miembro del equipo. Cualquier ciclo que no pueda garantizar este mínimo está operando con capacidad cognitiva degradada por diseño.

**Cómo proteger los Deep Work Blocks:**

```
1. Bloquear el tiempo en los calendarios de todos los miembros del equipo
   como franjas no disponibles recurrentes.
2. Configurar las herramientas de comunicación (Slack, Teams) en DND /
   notificaciones desactivadas durante los Deep Work Blocks.
   Esta es una configuración a nivel de equipo, no una preferencia individual.
3. El Flow Master tiene autoridad para rechazar invitaciones a reuniones
   enviadas durante los Deep Work Blocks en nombre del equipo,
   sin necesitar aprobación individual.
4. Excepción: los incidentes P1 genuinos de producción anulan los Deep Work Blocks.
   Ninguna otra excepción aplica.
```

### 6.3 Ventanas sin reuniones

Además de los Deep Work Blocks, GOAL define una estructura de calendario sin reuniones:

```
Trabajo profundo (sin reuniones):
  Lunes:     Todo el día salvo el Daily Flow Sync a las 9:00
  Martes:    Todo el día salvo el Daily Flow Sync a las 9:00
  Miércoles: Deep Work Block de mañana; reuniones permitidas después de las 13:00
  Jueves:    Todo el día salvo el Daily Flow Sync a las 9:00
  Viernes:   Deep Work Block de mañana; ventana de retrospectiva/revisión
             en la tarde

Ventanas con reuniones permitidas:
  Daily Flow Sync:           Cada mañana, 10 minutos, hora fija
  Backlog Grooming:          Tarde del miércoles (o equivalente según el equipo)
  Smart Planning:            Solo el primer día del ciclo
  Goal Review + Retrospectiva: Solo el último día del ciclo
  1:1s / syncs con stakeholders: Solo tardes de miércoles o viernes
```

Los equipos adaptan esta estructura a su contexto, pero el principio es fijo: **las reuniones se comprimen en ventanas definidas; el trabajo profundo se expande para llenar el resto.**

### 6.4 Comunicación async por defecto

El modo de comunicación predeterminado de GOAL es async. La comunicación sincrónica (verbal, videollamada, mensajería en tiempo real) se reserva para situaciones que genuinamente la requieren.

**Reglas de async primero:**

```
Modo predeterminado:    Async (escrito, sin respuesta inmediata esperada)
Respuesta esperada:     Dentro del mismo día hábil (no dentro de la hora)
Excepciones para sync:
  - Incidentes P1 de producción
  - Decisiones que requieren intercambio en tiempo real
    (usar llamada con timebox de 15 minutos)
  - Blockers que llevan > 4 horas en async sin avance

Herramientas:
  Slack/Teams: Configurar en modo async — sin presión por el estado "online"
  Email:       Revisar máximo dos veces al día (inicio de jornada y post-almuerzo)
  Code review: Solicitud enviada async; el revisor completa en la
               próxima ventana disponible fuera del focus time
```

**La prueba de "urgente" para la comunicación sincrónica:**

Antes de interrumpir a un miembro del equipo de forma sincrónica, quien solicita aplica esta prueba:

> "Si envío esto async y espero 4 horas la respuesta, ¿afectará eso materialmente a la entrega?"

Si no: enviar async.
Si sí: verificar si califica como P1 o P2 bajo el Protocolo de Interrupt Management antes de interrumpir.

### 6.5 Integración con el Daily Flow Sync

El Daily Flow Sync (10 minutos, cada mañana) es el único evento sincrónico del equipo que ocurre todos los días. Está deliberadamente colocado al inicio de la jornada laboral, antes de que comiencen los Deep Work Blocks, de modo que sirva como punto de lanzamiento en lugar de interrupción.

**Cómo el Protocolo de Focus Time modifica el Daily Flow Sync:**

```
Antes del sync:  El Flow Master revisa el Flow Board para tareas envejecidas,
                 estado del WIP y CLI — así el sync llega pre-cargado de contexto.

Durante el sync: Solo las tres preguntas. Sin resolución de problemas, sin discusión
                 extendida. Cualquier ítem que necesite más de 30 segundos de discusión
                 se anota y se aborda en una sesión con timebox después del sync,
                 no durante él.

Después del sync: El Deep Work Block comienza inmediatamente para todos
                  los desarrolladores. El Flow Master gestiona las solicitudes
                  de interrupción que llegan durante el Deep Work Block
                  como buffer del equipo.
```

---

## 7. Experiencia de onboarding para nuevos miembros del equipo

### 7.1 Por qué el onboarding importa en GOAL

La efectividad de GOAL depende del entendimiento compartido. Un nuevo miembro que no entiende los WIP limits los excederá. Uno que no entiende la estabilidad de los objetivos estará confundido cuando su solicitud de prioridad sea declinada. Uno que no entiende el DoD marcará tareas como terminadas prematuramente.

Un onboarding deficiente no solo ralentiza a la nueva persona — aumenta la carga cognitiva de todo el equipo, que debe llenar los vacíos informalmente, responder preguntas repetidas y absorber las consecuencias de procesos mal aplicados.

Un buen onboarding es rápido, explícito y estructurado. Es una inversión en la capacidad cognitiva colectiva del equipo.

### 7.2 Checklist de onboarding de GOAL

#### Semana 1: Orientación al framework

```
Día 1:
  □ Leer GOAL_Methodology_v0.2.md completo
  □ Sesión de orientación de 1 hora con el Flow Master:
      visión general de GOAL, roles, artefactos y convenciones específicas del equipo
  □ Acceso a todos los artefactos del equipo:
      Flow Board (acceso de lectura primero), Flow Metrics Dashboard,
      Block Register, Definition of Done, Backlog
  □ Presentación al Buddy (ver Sección 7.3)

Día 2:
  □ Asistir al Daily Flow Sync como observador — no hablar, solo observar
  □ Revisar los registros de las dos últimas retrospectivas
  □ Revisar el Definition of Done del equipo y el DoD Extendido
  □ Recorrer el Flow Board con el Buddy:
      entender los objetivos actuales, cada tarea In Progress
      y cualquier ítem Blocked

Día 3:
  □ Asistir al Backlog Grooming Session (si está programado esta semana)
    como observador
  □ Revisar el Cycle Accuracy Index del equipo (últimos 3 ciclos)
  □ Revisar el WIP limit del equipo y cómo fue calculado
  □ Briefing sobre el CLI: entender qué es y cómo lo usa el equipo

Día 4:
  □ Tomar la primera tarea — debe ser Small (S)
  □ El Buddy trabaja en par con el nuevo miembro durante al menos
    la mitad de la tarea
  □ Primera participación formal en el Daily Flow Sync (solo check-in breve)

Día 5:
  □ Check-in con el Flow Master: preguntas, observaciones, necesidades de ajuste
  □ La asignación de WIP del nuevo miembro en vigor:
      cuenta como 0.5 de un miembro completo del equipo
      para el cálculo de WIP esta semana
```

#### Semana 2: Integración al proceso

```
  □ Tomar tareas de forma independiente (solo S o M — sin tareas Large aún)
  □ Enviar el primer code review
  □ Participar activamente en el Daily Flow Sync
  □ Asistir al Smart Planning Session si ocurre esta semana
  □ Plantear al menos una pregunta u observación en el foro del equipo
      (establece la norma de participación)
  □ La asignación de WIP aumenta a 0.75 de un miembro completo del equipo
  □ Segundo check-in con el Flow Master: ¿el CLI del nuevo miembro es manejable?
```

#### Primer Goal Cycle completo:

```
  □ Participación plena en todos los eventos de GOAL
  □ Puede tomar tareas de hasta tamaño Medium (M) de forma independiente
  □ Participa en la retrospectiva y aporta al menos una observación
  □ Asignación de WIP: completa (1.0 del miembro del equipo)
  □ Check-in al finalizar el ciclo tanto con el Buddy como con el Flow Master
  □ Opcional: pedir al nuevo miembro que conduzca un segmento breve
      del Daily Flow Sync para confirmar la confianza en el proceso
```

### 7.3 Sistema de Buddy

A cada nuevo miembro del equipo se le asigna un Buddy — un miembro senior del equipo que actúa como su primer punto de contacto para preguntas sobre el proceso, contexto técnico y apoyo en la integración durante el período de onboarding.

**Responsabilidades del Buddy:**

```
  □ Disponible para preguntas durante las primeras dos semanas sin fricción de agenda
  □ Trabaja en par con el nuevo miembro en su primera tarea
  □ Presenta al nuevo miembro las normas del equipo, estilos de comunicación
      y convenciones no escritas
  □ Proporciona una relación "segura" para preguntas que el nuevo miembro
      podría dudar en hacer públicamente
  □ Reporta preocupaciones al Flow Master si el nuevo miembro tiene dificultades
      (no para evaluar, sino para apoyar)
```

**Criterios de asignación del Buddy:**

- No el ingeniero más senior (demasiado ocupado, demasiado intimidante)
- No el miembro más reciente del equipo aparte del onboardee
- Alguien con más de 2 ciclos de experiencia en GOAL dentro de este equipo
- Asignación rotativa — ninguna persona debe ser Buddy en cada nueva contratación

**Ajuste de WIP del Buddy:**

La asignación de WIP del Buddy se reduce en 0.25 durante el período de onboarding. Este costo es real y debe reflejarse en la planificación de capacidad del ciclo. No pedirle a alguien que sea Buddy esperando que entregue a plena capacidad al mismo tiempo.

### 7.4 Ajuste del WIP limit durante el onboarding

Un nuevo miembro del equipo se suma al tamaño del equipo en la fórmula de WIP, pero no inmediatamente a pleno valor.

```
Ajuste de WIP durante el onboarding:

Semana 1:              El nuevo miembro cuenta como 0.5 en la fórmula del WIP
Semana 2:              El nuevo miembro cuenta como 0.75 en la fórmula del WIP
Primer ciclo completo: El nuevo miembro cuenta como 1.0 en la fórmula del WIP

Adicionalmente: El Buddy cuenta como 0.75 (no 1.0) mientras apoya
                activamente al nuevo miembro.

Efecto neto: Incorporar un nuevo miembro al equipo no aumenta de forma inmediata
             la capacidad de WIP del equipo. La capacidad se normaliza
             en 3 a 4 semanas.
```

---

## 8. La seguridad psicológica como prerrequisito

### 8.1 Qué es la seguridad psicológica

La seguridad psicológica es la creencia de que uno puede hablar, plantear preocupaciones, admitir errores y discrepar con ideas sin miedo a castigos, humillaciones o exclusión. El término fue formalizado por la profesora de Harvard Business School Amy Edmondson y ha sido validado como uno de los predictores más sólidos del rendimiento de equipos en entornos de trabajo del conocimiento.

No es comodidad. Los equipos con alta seguridad psicológica siguen discrepando, dando feedback difícil y exigiéndose mutuamente altos estándares. La diferencia es que esa discrepancia, ese feedback y esa rendición de cuentas se llevan a cabo sin el miedo a represalias sociales.

### 8.2 Por qué GOAL falla sin seguridad psicológica

Cada mecanismo de GOAL que depende de que la información salga a la luz asume que los miembros del equipo la sacarán a la luz honestamente. Cuando la seguridad psicológica está ausente, esa suposición se rompe:

```
Mecanismo de GOAL       →  Qué ocurre sin seguridad psicológica

Reporte de blockers     →  Los desarrolladores ocultan blockers e intentan
                           resolverlos solos, esperando evitar el juicio
                           de estar "atascados"

Daily Flow Sync         →  Todos dicen "todo bien" para evitar el escrutinio.
                           Los problemas reales se vuelven invisibles.

Definition of Done      →  Los ítems del DoD se marcan superficialmente.
                           El equipo sabe que el trabajo no cumple realmente
                           el estándar, pero nadie lo dice.

Retrospectiva           →  La discusión se mantiene superficial.
                           Los problemas reales — dinámicas del equipo,
                           comportamientos de gestión, atajos técnicos —
                           no se plantean.

CLI y Health Check      →  Las puntuaciones son optimistas.
                           La gente no reporta cómo se siente realmente.

Violaciones de WIP      →  Las personas exceden silenciosamente los WIP limits
                           en lugar de admitir que están sobrecargadas.
```

Cuando la seguridad psicológica está ausente, las métricas de GOAL se convierten en una actuación, no en una medición. El Flow Board parece sano. La retrospectiva genera ítems de mejora corteses. El Daily Flow Sync termina en 8 minutos sin ningún blocker reportado. Y por debajo de todo eso, el equipo está sufriendo burnout y el codebase se está degradando.

### 8.3 Cómo construir seguridad psicológica

La seguridad psicológica se construye a través de patrones de comportamiento consistentes — principalmente del Flow Master y el Product Strategist, pero en última instancia de todos en el equipo.

**El rol del Flow Master en la seguridad psicológica:**

```
□ Nunca castigar ni expresar frustración cuando se reportan blockers.
  Responder a cada blocker con "bien que lo mencionaste — vamos a abordarlo."

□ Nunca usar las métricas de flujo para evaluar el rendimiento individual.
  Los datos son para la mejora del sistema, no para calificar individuos.

□ Cuando alguien admite un error o un ítem del DoD no cumplido,
  responder con curiosidad, no con juicio. "¿Qué pasó?" y no
  "¿Cómo se te escapó esto?"

□ Modelar la incertidumbre. Decir "no lo sé" cuando no se sabe.
  Esto da permiso a otros para hacer lo mismo.

□ En las retrospectivas, ser el primero en ofrecer observaciones
  críticas del proceso, incluyendo cosas bajo el propio control.
```

**Prácticas a nivel de equipo:**

```
□ Blameless por defecto: cuando algo sale mal, la primera pregunta
  es siempre "¿qué en el sistema permitió que esto ocurriera?"
  y no "¿quién causó esto?"

□ Norma de disagree-and-commit: los miembros del equipo pueden y deben
  discrepar durante la discusión. Una vez tomada la decisión,
  todos se comprometen con ella.

□ Norma explícita de "no hay preguntas tontas" durante el onboarding
  y las reuniones.

□ Celebrar los blockers reportados temprano — "señalar esto el primer día
  evitó una cascada de tres días" vale la pena reconocerlo.
```

### 8.4 Señales de que la seguridad psicológica está ausente

El Flow Master vigila estos indicadores:

```
Señal 1: Las retrospectivas producen solo ítems positivos
  Los equipos saludables tienen problemas. Los equipos que reportan
  solo éxitos están interpretando la seguridad, no viviéndola.

Señal 2: Todos los blockers aparecen cerca del deadline
  Si el Block Register muestra consistentemente tareas bloqueadas
  en el último día o dos del ciclo, la gente ha estado ocultando
  sus blockers en privado.

Señal 3: Los ítems del DoD están siempre al 100%
  Algunos ciclos, algunas tareas deberían ser difíciles de cerrar limpiamente.
  El cumplimiento perfecto del DoD en cada ciclo es sospechoso.

Señal 4: Nadie discrepa nunca en el Smart Planning Session
  El dimensionamiento de los objetivos debería involucrar debate. El consenso
  universal sin discusión sugiere que la gente no está planteando
  sus preocupaciones reales.

Señal 5: Las mismas personas nunca hablan en los syncs
  Si algunos miembros del equipo consistentemente no dicen nada
  en el Daily Flow Sync, puede que no se sientan seguros para contribuir.

Señal 6: Los problemas se plantean en privado pero no en el foro del equipo
  Si el Flow Master escucha sobre problemas en conversaciones 1:1
  que nunca aparecen en el grupo, el foro del equipo no es seguro.
```

---

## 9. Cultura de feedback en GOAL

### 9.1 Cómo las retrospectivas se convierten en espacios seguros para datos honestos

El formato de la Data-Driven Retrospective descrito en la metodología base protege la seguridad psicológica al anclar la discusión en métricas. Cuando la discusión es sobre datos de cycle time, tendencias de block rate y cumplimiento de WIP, se trata del sistema — no de personas.

Esta es una elección de diseño deliberada. Les da a los miembros del equipo un punto de entrada seguro a conversaciones difíciles: "Los datos muestran que nuestro block rate se duplicó este ciclo. ¿Qué cambió?" es menos amenazante que "noté que algunos de nosotros gestionamos mal los blockers."

**Prácticas de retrospectiva que refuerzan la seguridad:**

```
Práctica 1: Preparar el ambiente antes de comenzar
  Abrir con 2 minutos: "En esta retrospectiva miramos los datos del proceso
  para mejorar el sistema. Nada de lo que se diga aquí se usa para
  evaluar a nadie."

Práctica 2: Usar recopilación anónima de input para temas sensibles
  Para puntuaciones de salud del equipo y observaciones personales,
  usar formularios anónimos antes de la sesión para que las personas
  puedan dar datos honestos sin presión social.

Práctica 3: Separar observación de atribución
  "El Flow Board mostró tres tareas envejeciendo más allá del umbral amarillo"
  (observación) es diferente de "las tareas de [X] estuvieron paradas demasiado"
  (atribución). Mantenerlo sistémico.

Práctica 4: Normalizar los ciclos incompletos y los plazos extendidos
  Son puntos de datos sobre precisión de estimación, no fracasos.
  El Cycle Accuracy Index existe precisamente para que las extensiones
  se normalicen y analicen, no se oculten.

Práctica 5: Cerrar con apreciación
  Antes de terminar, cada miembro del equipo nombra algo que otro
  hizo que hizo mejor el ciclo. Breve, específico, genuino.
```

### 9.2 Post-mortems blameless

Cuando ocurre una falla significativa — un incidente de producción, una escapada grave de calidad, un ciclo que falló todos los objetivos principales — GOAL utiliza un formato de post-mortem blameless.

**El principio central de los post-mortems blameless:**

Los seres humanos cometen errores en sistemas complejos. Cuando lo hacen, la pregunta no es "¿quién cometió el error?" sino "¿qué condiciones permitieron que el error ocurriera, y cómo cambiamos el sistema para que sea más difícil cometerlo?"

Esto no es eliminar la responsabilidad. Es reconocer que culpar a individuos:
1. No soluciona el problema subyacente del sistema
2. Destruye la seguridad psicológica
3. Crea incentivos para ocultar fallas futuras

**Estructura del post-mortem:**

```
1. Reconstrucción de la línea de tiempo (10 minutos)
   Qué ocurrió, en secuencia, de forma factual.
   Sin lenguaje evaluativo. Solo lo que sucedió.

2. Factores contribuyentes (15 minutos)
   ¿Qué condiciones del sistema contribuyeron a este resultado?
   Categorías: herramientas, proceso, comunicación, brechas de conocimiento,
   factores externos, estado del WIP en el momento, CLI en el momento.

3. Brecha de detección (10 minutos)
   ¿Cuándo deberíamos haberlo sabido? ¿Cuándo lo supimos?
   ¿Qué nos habría permitido detectarlo antes?

4. Acciones de prevención (15 minutos)
   2 a 3 cambios sistémicos específicos que reducirían la probabilidad
   de que esta clase de falla se repita.
   Cada acción necesita un responsable y un plazo.

5. Apreciación (5 minutos)
   Reconocer quién respondió bien, qué funcionó durante el incidente.
   No son halagos vacíos — es calibrar qué mantener.
```

### 9.3 Modelo de reconocimiento — qué es lo bueno en GOAL

El reconocimiento en GOAL es específico, fundamentado en datos y orientado al comportamiento — no genérico ("gran trabajo este ciclo") y no solo orientado al output ("mayor conteo de tareas este ciclo").

**Lo que GOAL reconoce:**

```
Comportamiento: Señalar un blocker temprano que evitó una cascada
  Reconocimiento: "Señalar esa dependencia de API el segundo día nos ahorró
                  tres días de retrabajo. Así es exactamente como debe funcionar."

Comportamiento: Code review exhaustivo que detectó un problema de seguridad
  Reconocimiento: "La brecha de seguridad detectada en la revisión de [tarea]
                  era real — nombrándolo específicamente en la retro."

Comportamiento: Dividir una tarea Large en piezas entregables sin que se lo pidieran
  Reconocimiento: "La descomposición de [feature] en tres piezas entregables
                  fue la decisión correcta y se reflejó en el cycle time."

Comportamiento: Apoyar a un colega bloqueado hasta la resolución
  Reconocimiento: "Cuando [X] estaba atascado en la integración de autenticación,
                  [Y] haciendo pair durante dos horas lo desbloqueó. Eso es el equipo."

Comportamiento: Contribución honesta en la retrospectiva
  Reconocimiento: "La observación sobre el patrón de la cola de revisión fue
                  difícil de decir y completamente acertada. Ya está en las
                  acciones del próximo ciclo."
```

**Lo que GOAL NO reconoce:**

```
× Horas extra o esfuerzo heroico (premia el comportamiento que GOAL busca eliminar)
× Conteo individual de tareas (premia cantidad sobre calidad)
× Ser el más rápido (premia los atajos)
× "Salvar" el ciclo en el último momento (premia el heroísmo)
```

---

## 10. Métricas que reflejan la salud del equipo

### 10.1 La brecha en las métricas de entrega estándar

Las métricas base de GOAL — Flow Time, Cycle Time, Flow Efficiency, Block Rate, Delivery Rate — miden el rendimiento del sistema de entrega. Son necesarias pero insuficientes para entender si el equipo está sano. Un equipo puede tener excelentes métricas de flujo durante dos ciclos y luego colapsar cuando el estrés acumulado se hace visible.

Las métricas de esta sección son indicadores adelantados y concurrentes de la salud del equipo. Detectan la degradación antes de que aparezca en el output de entrega.

### 10.2 Unplanned work ratio

**Definición:** El porcentaje de ítems de trabajo completados en un ciclo que no estaban en el Goal Cycle Plan al inicio.

```
Unplanned Work Ratio = (Completados no planificados / Total completados) × 100
```

**Objetivo:** &lt; 15%

**Qué mide:** El grado en que el trabajo real del equipo coincide con su trabajo planificado. Un unplanned work ratio alto indica:
- El Protocolo de Interrupt Management no se está aplicando
- El alcance de los objetivos está definido de forma demasiado laxa
- Los stakeholders están saltándose el Backlog
- Las solicitudes P3 están siendo absorbidas en el ciclo

**Cómo rastrearlo:** Al cierre del ciclo, contar todas las tareas completadas que se agregaron al ciclo después del Smart Planning. Dividir por el total de tareas completadas.

**Umbrales de respuesta:**

```
< 15%:  Saludable. Varianza normal.
15–25%: Revisar el registro de interrupciones. ¿Se están permitiendo ítems P3?
> 25%:  Problema estructural. El Protocolo de Interrupt Management no está funcionando.
        Requiere investigación en retrospectiva, no solo reconocimiento.
```

### 10.3 Overtime indicator

**Definición:** El porcentaje de días laborables en un ciclo en los que uno o más miembros del equipo realizaron trabajo fuera de su horario laboral estándar.

```
Overtime Indicator = (Días con overtime detectado / Total días laborables del ciclo) × 100
```

**Objetivo:** 0% como norma; &lt; 5% como aceptable.

**Qué mide:** Si el equipo está compensando la sobrecarga sistémica a través del heroísmo. Las horas extra son el síntoma más visible del ritmo insostenible.

**Cómo rastrearlo:** Timestamps de commits, logs de despliegue e indicadores observables (mensajes enviados en horarios inusuales en los canales del equipo). Nota: debe rastrearse con cuidado y compasión — el objetivo es el diagnóstico del sistema, no la vigilancia.

**Umbrales de respuesta:**

```
0%:     Estado objetivo.
1–5%:   Monitorear. Podría ser preferencia personal ocasional o varianza de zona horaria.
6–15%:  Revisar WIP limits y alcance de objetivos. Aplicar respuesta de Nivel 1.
> 15%:  Aplicar respuesta de Nivel 2. Este nivel de overtime es un indicador
        adelantado de riesgo inminente de salida del equipo.
```

### 10.4 Blocker hide rate

**Definición:** El porcentaje de blockers en el Block Register que fueron registrados formalmente por primera vez después de que la tarea ya había estado bloqueada durante más de un día laborable.

```
Blocker Hide Rate = (Blockers registrados tarde / Total de blockers) × 100

Registrado tarde = la primera entrada en el Block Register se hizo > 24 horas
                   después de la mejor estimación del desarrollador
                   de cuándo comenzó realmente el bloqueo
```

**Objetivo:** &lt; 10%

**Qué mide:** Si los miembros del equipo señalan blockers en cuanto ocurren (saludable) o los retienen en privado esperando resolverlos solos (señal de seguridad psicológica, indicador de burnout).

Esta métrica requiere auto-reporte honesto o inferencia basada en evidencia. Usar el historial de commits de código (sin commits en una tarea por > 24 horas mientras sigue In Progress) como señal proxy de blockers ocultos.

**Umbrales de respuesta:**

```
< 10%:    Los blockers se están reportando rápidamente. La línea base de
          seguridad psicológica es buena.
10–25%:   Investigar. ¿Ciertos miembros del equipo registran consistentemente tarde?
           ¿Hay un patrón en tipos de tareas o fases del ciclo?
> 25%:    Preocupación de seguridad psicológica. Este nivel de ocultamiento de blockers
           sugiere que la gente no se siente segura para admitir que está atascada.
           Abordar antes de que se agrave.
```

### 10.5 Cycle extension frequency

**Definición:** El porcentaje de Goal Cycles que requirieron una extensión formal en una ventana deslizante de los últimos 6 ciclos.

```
Cycle Extension Frequency = (Ciclos extendidos / Total ciclos en la ventana) × 100
```

**Objetivo:** &lt; 25% (1 de cada 4 ciclos o menos)

**Qué mide:** Si la planificación de capacidad del equipo está calibrada con la realidad. La extensión crónica significa que:
- Los objetivos están consistentemente sobredimensionados para el ciclo
- El trabajo oculto (heroísmo, deuda técnica, absorción de interrupciones)
  no se está contabilizando en la capacidad
- El ritmo sostenible del equipo no ha sido correctamente identificado

**Umbrales de respuesta:**

```
< 25%:  Aceptable. Algunas extensiones son normales y están documentadas.
25–50%: Revisar el proceso del Goal Cycle Plan. Los objetivos pueden estar
        sistemáticamente sobredimensionados.
        Considerar reducir el volumen de compromisos del ciclo en el Smart Planning.
> 50%:  La capacidad declarada del equipo no coincide con su capacidad real.
        Realizar una auditoría formal de capacidad.
        Considerar si los WIP limits y la asignación de deuda técnica son realistas.
```

### 10.6 El dashboard de salud

El Flow Master mantiene un Team Health Dashboard junto con el Flow Metrics Dashboard estándar. Como mínimo, contiene:

```
Métrica                          Actual    Objetivo   Tendencia (3 ciclos)
──────────────────────────────────────────────────────────────────────────
CLI (semanal)                    [valor]   < 20        [▲ ▼ →]
Unplanned Work Ratio             [%]       < 15%       [▲ ▼ →]
Overtime Indicator               [%]       < 5%        [▲ ▼ →]
Blocker Hide Rate                [%]       < 10%       [▲ ▼ →]
Cycle Extension Frequency        [%]       < 25%       [▲ ▼ →]
Puntuación Team Health Check     [prom/5]  > 4.0       [▲ ▼ →]
  - Clarity                      [prom/5]
  - Flow                         [prom/5]
  - Autonomy                     [prom/5]
  - Quality                      [prom/5]
  - Sustainability                [prom/5]
```

Este dashboard lo revisa el Flow Master semanalmente. Se comparte con el Product Strategist mensualmente. Se presenta a la dirección cuando cualquier métrica entra en zona roja durante dos ciclos consecutivos.

### 10.7 La relación entre la salud del equipo y la salud de la entrega

Las métricas de salud del equipo predicen los cambios en las métricas de entrega antes de que esos cambios ocurran. Este es el valor operativo de medirlas.

```
Indicador adelantado → Consecuencia rezagada (típicamente 1–2 ciclos después)

CLI entrando en rojo      → Aumento del cycle time, aumento de la tasa de defectos
Overtime en aumento       → Riesgo de salida del equipo, luego colapso de capacidad
Blocker hide rate ↑       → El block rate parece disminuir (ilusión),
                            luego los incidentes de producción aumentan
Decline del Health Check  → La calidad de las retrospectivas cae,
                            luego la velocidad de mejora cae
Unplanned work ↑          → La tasa de completitud del Goal Cycle cae
```

Un equipo que monitorea y actúa sobre las métricas de salud de forma temprana gasta mucho menos capital organizacional en recuperación que uno que espera hasta que las métricas de entrega muestren el problema.

---

## Apéndice A: Tarjeta de referencia para el cálculo del CLI

```
CLI = (2.0 × TareasActivas) + (1.5 × InterrupcionesDiarias) +
      (2.5 × BlockersNoResueltos) + (1.0 × PresionDeudaTécnica) +
      (1.5 × CargaDeReuniones)

Inputs:
  TareasActivas          — Conteo In Progress del Flow Board
                           (todas las columnas: In Progress + Review + Validation)
  InterrupcionesDiarias  — Promedio deslizante de 5 días del registro de interrupciones
  BlockersNoResueltos    — Entradas abiertas del Block Register > 24h
  PresionDeudaTécnica    — (ítems de deuda técnica / total Backlog) × 10, máx 10
  CargaDeReuniones       — Promedio de horas/semana/desarrollador (solo programadas)

Umbrales:
  0–20   = VERDE    (saludable)
  21–35  = AMARILLO (monitorear y reducir)
  36+    = ROJO     (intervenir ya)
```

---

## Apéndice B: Referencia rápida del Team Health Check

```
Dimensión     Preguntas   Puntuación objetivo   Responsable si baja
────────────────────────────────────────────────────────────────────────
Clarity       C1–C4       ≥ 4.0                 Product Strategist
Flow          F1–F4       ≥ 4.0                 Flow Master
Autonomy      A1–A4       ≥ 4.0                 Dirección + Product Strategist
Quality       Q1–Q4       ≥ 4.0                 Delivery Team + Flow Master
Sustainability S1–S4      ≥ 4.0                 Todos — prioridad organizacional

Realizar cada 3 ciclos, o inmediatamente cuando aparezcan señales de Nivel 2.
Resultados compartidos de forma anónima. Se aborda primero la dimensión más baja.
```

---

## Apéndice C: Resumen de respuesta al Ritmo Sostenible

```
Condición               Nivel de respuesta   Acciones clave
───────────────────────────────────────────────────────────────────────────
CLI 21–35 o             Nivel 1             Reducir WIP limit en 1
2 señales de                                Bloquear nuevas entradas al Expedite
comportamiento                              Agregar bloques de Focus Time
                                            Realizar Health Check al fin del ciclo

CLI 36+ o               Nivel 2             WIP al mínimo (FF = 0.6)
4+ señales de                               Suspender el Expedite lane
comportamiento                              Eliminar todas las reuniones no obligatorias
                                            Realizar Health Check en 48h
                                            Considerar cierre anticipado del ciclo

Rojo sostenido          Nivel 3             Recovery Cycle
> 1 ciclo                                   Escalar a dirección
                                            Evaluación de riesgo de salida
```

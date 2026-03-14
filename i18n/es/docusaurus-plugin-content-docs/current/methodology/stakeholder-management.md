---
id: stakeholder-management
title: Gestión de Stakeholders
sidebar_position: 12
description: Gestión de relaciones, comunicación y expectativas con stakeholders en GOAL — mapeo, cadencia de comunicación, Cycle Visibility Report, Executive Dashboard y anti-patrones.
---

## Introducción

El Interrupt Management Protocol de la Metodología GOAL define cómo manejar emergencias: incidentes de producción, solicitudes urgentes del negocio y el caso excepcional de una interrupción total del Goal Cycle. Ese protocolo resuelve el problema agudo: qué hacer cuando algo urgente aparece durante un Goal Cycle activo.

Pero el Interrupt Protocol no aborda el trabajo continuo de las relaciones con stakeholders. No cubre cómo reportar el progreso del ciclo a la dirección, cómo fijar expectativas antes de que comience un ciclo, cómo comunicar un fallo en el logro de un objetivo sin perder credibilidad, ni cómo evitar que los stakeholders rodeen al Product Strategist para solicitar trabajo directamente a los desarrolladores.

Este documento cubre esa brecha. Es una guía operativa completa para el Product Strategist y el Flow Master sobre cómo gestionar el entorno de stakeholders, de modo que el equipo pueda operar GOAL con la estabilidad que requiere.

El principio central de la gestión de stakeholders en GOAL es:

> **La confianza de los stakeholders se gana mediante entrega consistente y comunicación honesta, no prometiendo todo o escondiendo las malas noticias.**

---

## 1. Mapeo del Panorama de Stakeholders

Antes de establecer cualquier estructura de comunicación, el Product Strategist debe comprender el panorama de stakeholders. No todos los stakeholders tienen las mismas necesidades, la misma influencia ni la misma relación con el trabajo del equipo.

### 1.1 Identificación de Stakeholders

Un stakeholder en el contexto de GOAL es cualquier persona o grupo que:

- Financia o autoriza el trabajo del equipo
- Usa o depende de lo que el equipo entrega
- Se ve afectado por los outputs y outcomes del equipo
- Tiene la capacidad de interrumpir o redirigir el trabajo del equipo

El Product Strategist debe realizar un ejercicio de identificación de stakeholders en la formación del equipo y revisarlo en las reuniones trimestrales de alineación de roadmap.

**Lista de verificación para identificación:**

```
¿Quién aprueba el presupuesto o el headcount del equipo?
¿Quién define la dirección estratégica que el equipo ejecuta?
¿Quiénes son los usuarios finales del producto (internos o externos)?
¿Qué otros equipos dependen de los outputs del equipo?
¿Quién es responsable de cumplimiento, seguridad o requisitos legales?
¿Quién se verá afectado si el equipo entrega tarde o entrega algo incorrecto?
¿Quién ha solicitado trabajo al equipo anteriormente?
¿Quién puede bloquear un release, una aprobación o un despliegue?
```

### 1.2 Matriz de Clasificación Interés × Influencia

Una vez identificados los stakeholders, se clasifican en dos dimensiones:

- **Influencia:** ¿Cuánto poder tiene este stakeholder para afectar el trabajo, presupuesto, prioridades o condiciones del equipo?
- **Interés:** ¿Cuánto le importa a este stakeholder el trabajo diario y los outputs del equipo?

Esto produce cuatro cuadrantes:

```
                    ALTO INTERÉS
                          │
          ┌───────────────┼───────────────┐
          │               │               │
ALTA      │   MONITOREAR  │   INVOLUCRAR  │
INFLUENCIA│   DE CERCA    │   EN PROFUND. │
          │               │               │
          ├───────────────┼───────────────┤
          │               │               │
BAJA      │   ESFUERZO    │   MANTENER    │
INFLUENCIA│   MÍNIMO      │   INFORMADO   │
          │               │               │
          └───────────────┼───────────────┘
                          │
                    BAJO INTERÉS
```

**Cuadrante: Involucrar en Profundidad (Alta Influencia, Alto Interés)**

Estos stakeholders definen qué construye el equipo y tienen opiniones sólidas sobre cómo se construye. Requieren comunicación consistente, participación temprana en la definición de objetivos y acceso directo al Product Strategist.

Ejemplos: El sponsor ejecutivo del producto, el cliente clave cuyo contrato depende de entregables específicos, el equipo interno que es usuario primario.

**Cuadrante: Monitorear de Cerca (Alta Influencia, Bajo Interés)**

Estos stakeholders raramente interactúan, pero cuando lo hacen, pueden bloquear, cancelar o redirigir el trabajo del equipo. El riesgo es que se conviertan en el "stakeholder invisible" que aparece al final con poder de veto (ver Sección 10.3).

Ejemplos: Ejecutivos de alto nivel que controlan el presupuesto pero no participan en los detalles, equipos legales o de cumplimiento, liderazgo de seguridad.

Estrategia: Mantenerlos informados a través de canales ligeros y de bajo esfuerzo. Invitarlos a la reunión trimestral de alineación de roadmap. No esperar a que ellos planteen sus preocupaciones — el Product Strategist lleva proactivamente la información relevante.

**Cuadrante: Mantener Informado (Baja Influencia, Alto Interés)**

Estos stakeholders se preocupan profundamente por el trabajo, pero tienen poder limitado para cambiarlo. Con frecuencia son usuarios finales, equipos de soporte o personal operativo que depende de lo que el equipo entrega.

Estrategia: Incluirlos en la distribución del Cycle Visibility Report. Considerar incluir a un representante rotativo en Stakeholder Review Events ocasionales para recoger retroalimentación de usuarios directamente.

**Cuadrante: Esfuerzo Mínimo (Baja Influencia, Bajo Interés)**

Estos stakeholders existen en el panorama pero requieren poca atención continua. El Product Strategist reconoce su existencia y los mantiene en la distribución de informes formales, pero no invierte en gestión activa de la relación.

### 1.3 Tipos de Stakeholders en Proyectos de Software

Los distintos tipos de stakeholders tienen diferentes necesidades de comunicación y diferentes formas de relacionarse con el trabajo del equipo.

**Ejecutivos**

A los ejecutivos les importan los outcomes, no la implementación. Miden la contribución del equipo en términos de negocio: impacto en ingresos, reducción de costos, mitigación de riesgos, posición competitiva. Tienen tiempo y atención limitados. No leen actualizaciones de estado detalladas.

Necesidades de comunicación:
- Alineación trimestral sobre estrategia
- Resumen del cierre del ciclo en lenguaje de negocio (5 métricas, 1 tendencia, 1 riesgo — ver Sección 4)
- Notificación inmediata si algo afectará un compromiso de negocio
- Sin ruido — evitar enviar a ejecutivos actualizaciones rutinarias que no requieren su atención

**Clientes Externos**

Los clientes externos tienen intereses contractuales en el trabajo del equipo. Pueden haber acordado entregables específicos, plazos o niveles de servicio. Sus necesidades de comunicación dependen de la naturaleza del compromiso.

Necesidades de comunicación:
- Anuncio de inicio de ciclo confirmando qué se entregará en el ciclo
- Comunicación proactiva si un entregable está en riesgo — jamás permitir que un cliente descubra un incumplimiento por sí mismo
- Confirmación al cierre del ciclo de lo que fue entregado, con evidencia
- Visibilidad clara sobre lo que viene a continuación

**Usuarios Internos**

Los usuarios internos pertenecen a la misma organización pero están fuera del equipo. Se ven afectados por lo que el equipo publica — como usuarios de herramientas internas, consumidores de APIs internas o equipos cuyos flujos de trabajo dependen de los outputs del equipo.

Necesidades de comunicación:
- Aviso anticipado de cambios que afecten sus flujos de trabajo
- Notas de versión claras para cualquier cambio que modifique el comportamiento existente
- Un canal para proporcionar retroalimentación que llegue al Product Strategist
- Plazos realistas para las funcionalidades solicitadas

**Equipos Asociados (Partner Teams)**

Los partner teams son otros equipos de desarrollo o equipos funcionales que comparten dependencias con el equipo del Product Strategist. Pueden estar esperando una API, un servicio compartido o un flujo de datos que el equipo produce.

Necesidades de comunicación:
- Visibilidad anticipada sobre qué se entregará en los próximos ciclos y que afecta su trabajo
- Comunicación inmediata si una dependencia compartida se retrasará
- Un vínculo directo con el Product Strategist para la coordinación de dependencias
- Representación en la alineación trimestral de roadmap para detectar dependencias entre equipos con antelación

**Cumplimiento y Legal**

Estos stakeholders suelen pertenecer al cuadrante de "monitorear de cerca". Tienen un poder de veto significativo sobre los releases, pero bajo interés en el día a día. Se activan cuando el trabajo toca áreas reguladas: manejo de datos, autenticación, transacciones financieras, privacidad de usuarios, arquitectura de seguridad.

Necesidades de comunicación:
- Aviso temprano cuando un Goal Cycle tocará un área regulada
- Aprobación formal incluida en la Definition of Done para las tareas relevantes
- Sin sorpresas — el Product Strategist identifica el trabajo relevante para cumplimiento en la etapa de planificación, no después de la implementación

---

## 2. La Cadencia de Comunicación GOAL

La estructura de comunicación de GOAL se basa en un principio simple: los stakeholders nunca deberían necesitar pedir una actualización. Si la están pidiendo, la cadencia ha fallado.

El Product Strategist es dueño de la cadencia de comunicación. El Flow Master la apoya proporcionando datos precisos de métricas.

### 2.1 Mapa de Comunicación

| Comunicación | Audiencia | Frecuencia | Formato | Responsable |
|---|---|---|---|---|
| Anuncio de Inicio de Ciclo | Todos los stakeholders | Cada inicio de ciclo | Mensaje escrito | Product Strategist |
| Estado Mid-Cycle | Stakeholders seleccionados (por disparador) | Solo cuando se activa | Nota escrita breve | Product Strategist |
| Cycle Visibility Report | Todos los stakeholders | Cada cierre de ciclo | Documento de una página | Product Strategist |
| Executive Dashboard | Solo ejecutivos | Cada cierre de ciclo | 5 métricas, 1 tendencia, 1 riesgo | Product Strategist |
| Reunión de Alineación de Roadmap | Stakeholders clave (Involucrar + Monitorear) | Trimestral | Reunión presencial/virtual | Product Strategist |
| Comunicación de Incidentes | Stakeholders relevantes | Según sea necesario (eventos P1) | Notificación inmediata + seguimiento | Product Strategist + Flow Master |

### 2.2 Anuncio de Inicio de Ciclo

**Propósito:** Confirmar a los stakeholders en qué trabajará el equipo en el próximo ciclo. Esto fija expectativas y previene el problema del "no sabía que estaban trabajando en eso."

**Audiencia:** Todos los stakeholders en los cuadrantes Involucrar en Profundidad y Mantener Informado. Los ejecutivos reciben el anuncio con un resumen breve.

**Formato:** Mensaje escrito (correo electrónico, Slack u herramienta de comunicación del equipo). Debe enviarse dentro de las 24 horas posteriores a la finalización del Smart Planning Session.

**Contenido requerido:**

```
Anuncio de Inicio de Ciclo — elementos requeridos:

1. Identificador del ciclo y duración estimada
   "Goal Cycle [N] — estimado del [fecha de inicio] al [fecha de fin]"

2. Objetivos primarios — en lenguaje claro
   A qué se compromete a lograr el equipo.
   No es una lista de tareas. Es una descripción de outcomes.

3. Objetivos secundarios — si aplica
   Qué también puede entregarse si la capacidad lo permite.

4. Lo que explícitamente NO está en este ciclo
   Ayuda a prevenir que los stakeholders asuman que algo está incluido cuando no lo está.

5. A quién dirigir preguntas o solicitudes urgentes
   Un contacto nombrado (Product Strategist) y el proceso para solicitudes urgentes.
```

**Ejemplo:**

```
Asunto: Goal Cycle 14 Iniciando — 13 al 27 de marzo

Hola a todos,

El Goal Cycle 14 está activo. Esto es en lo que estaremos enfocados
durante las próximas dos semanas:

Objetivos primarios:
  1. Lanzar el nuevo flujo de onboarding a producción
  2. Integrar la lógica de reintento del gateway de pago
     para reducir transacciones fallidas

Objetivos secundarios (si los objetivos primarios se completan antes):
  3. Agregar exportación CSV al módulo de reportes

No está en este ciclo:
  - El rediseño de notificaciones (programado para el Cycle 15)
  - El trabajo de rendimiento del panel de administración
    (en Backlog, prioridad en revisión)

Si tienes una solicitud urgente, contacta a [nombre del Product Strategist] directamente.
El resto de las solicitudes serán revisadas en la próxima sesión de planificación.

— [Nombre del Product Strategist]
```

**Por qué importa la sección "no está en este ciclo":**

Una de las quejas más comunes de los stakeholders es "pensé que eso iba a estar en este ciclo." La lista explícita de exclusiones elimina la ambigüedad y evita que las suposiciones de alcance se acumulen en sorpresas de fin de ciclo.

### 2.3 Actualización de Estado Mid-Cycle (Basada en Disparadores)

GOAL no requiere una actualización de estado mid-cycle por defecto. Enviar actualizaciones rutinarias mid-cycle que digan "todo está bien" genera ruido sin valor.

Una actualización mid-cycle se activa solo cuando existe una de las siguientes condiciones:

```
Condiciones disparadoras para comunicación mid-cycle:

T1 — Un objetivo primario está en riesgo de no completarse a tiempo
     Algo ha cambiado (bloqueo, subestimación de complejidad, interrupción
     no planeada) y la fecha de fin del ciclo puede verse afectada.

T2 — Se está considerando un cambio de alcance
     Ha surgido una nueva prioridad de negocio que podría afectar
     los objetivos del ciclo actual.

T3 — Se ha absorbido una interrupción P1 o P2 significativa
     Los stakeholders cuyo trabajo se ve afectado necesitan saber
     que los recursos fueron redirigidos.

T4 — Una dependencia externa de un stakeholder está en riesgo
     Si el equipo está esperando algo de un stakeholder que
     está retrasando el ciclo.
```

Cuando existe una condición disparadora, el Product Strategist envía una comunicación escrita breve dentro del mismo día hábil.

**Formato de nota de estado mid-cycle:**

```
Asunto: [Cycle N] Actualización de Estado — [breve caracterización]

Estado actual: [En curso / En riesgo / Ajustado]

Qué cambió:
[Una a tres oraciones describiendo qué ocurrió]

Impacto en los objetivos del ciclo:
[Qué significa esto para los objetivos primarios y el cronograma]

Qué estamos haciendo:
[La acción específica que se está tomando para abordar la situación]

Próxima actualización:
[Cuándo los stakeholders volverán a tener noticias, o confirmación
 de que el Cycle Visibility Report al cierre del ciclo cubrirá la resolución]

— [Nombre del Product Strategist]
```

La actualización mid-cycle no es una solicitud de input ni un inicio de discusión. Es un aviso. Los stakeholders que quieran discutirlo se comunican directamente con el Product Strategist.

### 2.4 Cycle Visibility Report (Obligatorio)

El Cycle Visibility Report es la comunicación principal con stakeholders en GOAL. Es obligatorio al cierre de cada ciclo. La especificación completa está en la Sección 3.

### 2.5 Reunión de Alineación de Roadmap (Trimestral)

**Propósito:** Asegurar que los stakeholders comprendan hacia dónde se dirige el producto en los próximos 3–4 ciclos y tengan la oportunidad de proporcionar input estratégico antes de que esos ciclos sean planificados.

**Frecuencia:** Trimestral. No está vinculada a ciclos individuales. Se realiza independientemente de dónde caiga en el calendario de ciclos.

**Audiencia:** Stakeholders en los cuadrantes Involucrar en Profundidad y Monitorear de Cerca. Los stakeholders de alto nivel que raramente asisten a revisiones de ciclos individuales deben ser invitados específicamente aquí.

**Duración:** 60–90 minutos.

**Agenda:**

```
Agenda de la Reunión de Alineación de Roadmap:

1. Revisión del último trimestre (15 min)
   - Qué fue entregado en los últimos 3–4 ciclos
   - Tendencia de métricas clave (predictibilidad de entrega, mejora de flow efficiency)
   - Qué se aprendió y cómo moldeó el roadmap

2. Presentación del roadmap (25–30 min)
   - Los próximos 4 ciclos mapeados como bloques de objetivos (no listas de funcionalidades)
   - Niveles de confianza asignados a cada ciclo futuro (ver Sección 9)
   - Dependencias y riesgos conocidos destacados

3. Input estratégico y alineación (20–25 min)
   - Los stakeholders plantean consideraciones estratégicas
   - El Product Strategist captura input para el Backlog y la planificación
   - Los conflictos entre prioridades de stakeholders se identifican y documentan
   - NOTA: esta no es una sesión de negociación de alcance para contenido del ciclo actual

4. Preguntas abiertas (10 min)
   - Cualquier pregunta aclaratoria sobre el roadmap o la dirección del equipo
```

**Lo que esta reunión no es:**

La Reunión de Alineación de Roadmap no es una sesión de solicitud de funcionalidades. Los stakeholders que quieren enviar solicitudes específicas lo hacen a través del Product Strategist en cualquier momento. Esta reunión es para alineación estratégica: asegurar que el equipo está construyendo las cosas correctas en la dirección correcta.

---

## 3. Cycle Visibility Report

El Cycle Visibility Report (CVR) es el único documento que el Product Strategist produce al cierre de cada Goal Cycle. Es el registro formal del equipo sobre qué ocurrió y qué fue entregado.

### 3.1 Principios de Diseño

El CVR debe ser:

- **Una sola página.** Los stakeholders no leen informes largos. Si requiere desplazamiento extenso, no será leído. La información densa pertenece a enlaces y adjuntos.
- **Escrito en lenguaje de negocio.** Los porcentajes de flow efficiency y las tasas de bloqueo son métricas del equipo. El CVR los traduce en significado.
- **Honesto.** Un CVR que pasa por alto los fracasos destruye la credibilidad más rápido que el fracaso en sí. Los stakeholders aceptan los problemas cuando se comunican con honestidad. No aceptan descubrir que los problemas fueron ocultados.
- **Orientado al futuro.** Termina con lo que viene a continuación, no solo con lo que ocurrió.

### 3.2 Secciones Requeridas del CVR

**Sección 1: Encabezado del Ciclo**

```
Cycle [N] | [Fecha de inicio] – [Fecha de fin] | [Duración real] días
Estado: [Completado / Parcialmente completado / Extendido]
```

**Sección 2: Objetivos Logrados**

Una declaración clara de qué objetivos primarios se lograron y cuáles no.

```
Objetivos Primarios:
✓ [Nombre del Objetivo 1] — Logrado
✓ [Nombre del Objetivo 2] — Logrado
✗ [Nombre del Objetivo 3] — No completado ([razón en una oración])

Objetivos Secundarios:
✓ [Objetivo secundario] — Logrado
— [Objetivo secundario] — Diferido al Cycle [N+1]
```

No ocultar un objetivo fallido. No enmarcarlo como "sustancialmente completo." Si no cumplió con la Definition of Done, no estaba terminado.

**Sección 3: Valor Entregado (con evidencia)**

Esta es la sección más importante. Conecta el trabajo con los resultados de negocio usando el 3-Layer Value Framework del núcleo de la metodología GOAL.

Para cada objetivo primario completado, el Product Strategist documenta la capa de valor que entrega y la evidencia concreta.

```
Valor entregado en este ciclo:

[Nombre del Objetivo 1]
Capa: Business Value
Evidencia: [Outcome específico, cuantificable u observable]

[Nombre del Objetivo 2]
Capa: User Value
Evidencia: [Outcome específico, cuantificable u observable]
```

La evidencia debe ser lo más concreta posible. "Los usuarios ahora pueden completar el onboarding en 3 pasos en lugar de 7" es evidencia. "Se mejoró la experiencia del usuario" no lo es.

Cuando la evidencia aún no es medible (la funcionalidad acaba de ser publicada), el Product Strategist indica cuándo será medible y se compromete a reportarla.

**Sección 4: Snapshot de Métricas**

Tres a cinco métricas clave del Flow Metrics Dashboard, traducidas a significado.

```
Métricas:
Precisión del ciclo:    Estimado [X] días / Real [Y] días — [en objetivo / extendido N días]
Flow efficiency:        [X]% — [sube/baja/estable vs ciclo anterior]
Objetivos logrados:     [X] de [Y] objetivos primarios
Tasa de entrega:        [X] tareas/día promedio
Interrupciones absorbidas: [N] (P1: [n], P2: [n])
```

**Sección 5: Vista Previa del Próximo Ciclo**

Una vista previa breve, a nivel de compromiso, del próximo ciclo. No es un anuncio completo (ese viene al inicio del ciclo), pero es suficiente para que los stakeholders anticipen lo que viene.

```
Próximo ciclo (Cycle [N+1]):
Enfoque: [Resumen de 1–2 oraciones sobre la dirección del próximo ciclo]
Inicio estimado: [fecha]
Objetivos clave en planificación: [lista breve de objetivos primarios en consideración]
```

**Sección 6: Riesgos en el Radar**

Un máximo de tres riesgos que el Product Strategist está monitoreando. Esta sección existe para demostrar que el equipo es consciente de su entorno y no se sorprende por lo que es previsible.

```
Riesgos en el radar:
1. [Descripción del riesgo] — Probabilidad: [A/M/B] — Impacto potencial: [descripción]
2. [Descripción del riesgo] — Probabilidad: [A/M/B] — Impacto potencial: [descripción]
```

### 3.3 Ejemplo de CVR Completado

El siguiente es un CVR de ejemplo para un ciclo de dos semanas con resultados mixtos.

---

```
────────────────────────────────────────────────────────────────────
CYCLE VISIBILITY REPORT
────────────────────────────────────────────────────────────────────
Cycle 14 | 13 de marzo – 26 de marzo | 10 días hábiles
Estado: Parcialmente completado

OBJETIVOS
✓ Nuevo flujo de onboarding — Logrado y desplegado a producción
✗ Lógica de reintento del gateway de pago — No completado
  (la documentación de la API del tercero era incorrecta;
  la integración completa requirió un enfoque diferente al estimado)
— Exportación CSV para reportes — Diferido (objetivo secundario;
  la capacidad fue consumida por la investigación de la integración
  del pago)

VALOR ENTREGADO
Nuevo flujo de onboarding
  Capa: User Value + Business Value
  Evidencia: El onboarding ahora toma 3 pasos en lugar de 7.
  El análisis muestra un incremento del 23% en la tasa de
  finalización del onboarding en las primeras 48 horas post-lanzamiento
  (de 61% a 75% de línea base).

Lógica de reintento del gateway de pago
  Capa: Business Value (en progreso)
  Estado: El diseño de la integración está validado. La implementación
  continúa en el Cycle 15. Entrega de valor completo: Cycle 15.

MÉTRICAS
Precisión del ciclo:    Estimado 10 días / Real 10 días — en objetivo
Flow efficiency:        38% — sube desde 31% en Cycle 13
Objetivos logrados:     1 de 2 primarios (el trabajo de pago continúa)
Tasa de entrega:        1.8 tareas/día
Interrupciones:         1 P2 (resuelta sin impacto en el ciclo)

PRÓXIMO CICLO (Cycle 15)
Enfoque: Completar la integración del pago + iniciar el rediseño de
notificaciones. Inicio estimado: 27 de marzo.
Objetivos clave: Integración del gateway de pago (arrastre), arquitectura
del sistema de notificaciones.

RIESGOS EN EL RADAR
1. Proveedor de API de pagos — la calidad de la documentación ha sido
   inconsistente. Probabilidad: Media | Impacto: Alcance adicional en
   Cycle 15 si los problemas continúan. Contacto con el proveedor
   escalado al gestor de cuenta.

2. Fecha límite de cumplimiento Q2 — el requisito de auditoría de
   eliminación GDPR llega en aproximadamente 6 semanas. Es probable
   que consuma un ciclo completo. Se requiere buffer en el Cycle 16.
────────────────────────────────────────────────────────────────────
```

---

### 3.4 Cómo Mantener la Honestidad Cuando los Resultados Son Mixtos

Un ciclo con un objetivo primario fallido es incómodo de reportar. El instinto es suavizar el lenguaje, atribuir la culpa a factores externos o enmarcar la compleción parcial como éxito.

Ninguno de estos enfoques funciona. Los stakeholders experimentados ven a través del lenguaje suavizado. La atribución consistente de culpa sin responsabilidad erosiona la confianza. La compleción parcial enmarcada como éxito establece una expectativa que volverá a ser violada.

El enfoque honesto:

**Nombra el incumplimiento directamente.** "El Objetivo X no fue completado en este ciclo." Sin eufemismos.

**Proporciona una oración de causa raíz honesta.** No una asignación de culpa. Una afirmación factual. "La documentación de la API del tercero era inexacta y la integración real requería un enfoque diferente al planeado."

**Declara el siguiente paso concreto.** "El objetivo pasa al Cycle [N+1] con un enfoque actualizado. Compleción esperada: [fecha]."

**No rellenes con calificaciones.** Frases como "si bien no logramos el Objetivo X, es importante señalar que se hizo un progreso significativo y el equipo trabajó arduamente..." son ruido. Elimínalas.

El ejemplo de CVR anterior demuestra esto. El objetivo del gateway de pago está claramente marcado como "no completado" con una explicación de una oración y un compromiso de arrastre claro. Ese es el modelo.

---

## 4. Executive Dashboard

Los ejecutivos tienen necesidades de información diferentes a las de otros stakeholders. No hacen seguimiento de métricas de flujo. No les importan las tasas de bloqueo. Les importa si el equipo está entregando de manera confiable, si se están cumpliendo los compromisos de negocio y si algo requiere su atención o decisión.

### 4.1 Lo que les Importa a los Ejecutivos vs lo que Rastrea el Equipo

| Lo que mide el equipo | Lo que esto significa para los ejecutivos |
|---|---|
| Flow efficiency | ¿Estamos aumentando la capacidad de entregar más rápido? |
| Cycle Accuracy Index | ¿Se puede confiar en los estimados del equipo? |
| Block rate | ¿Hay problemas sistémicos que necesitamos abordar? |
| Delivery rate | ¿Cuán productivo es el equipo? |
| Objetivos logrados por ciclo | ¿Está el equipo entregando lo que comprometió? |
| Frecuencia de incidentes P1 | ¿Es estable el producto? ¿Estamos acumulando riesgo operacional? |

Los ejecutivos no necesitan las métricas del equipo. Necesitan la traducción ejecutiva de esas métricas.

### 4.2 Traducir Métricas de Flujo a Lenguaje de Negocio

**Flow efficiency → Tendencia de capacidad del equipo**

En vez de: "La flow efficiency es del 38%, arriba del 31%."
Di: "El equipo está entregando un 22% más de output de trabajo por día calendario en comparación con hace tres ciclos, a medida que reducimos los cuellos de botella."

**Cycle Accuracy Index → Predictibilidad de entrega**

En vez de: "Nuestro Cycle Accuracy Index es 1.05 en los últimos 5 ciclos."
Di: "Nuestros estimados de entrega están dentro del 5% de los valores reales. Cuando nos comprometemos con una fecha, la cumplimos 9 de cada 10 veces."

**Block rate → Exposición al riesgo**

En vez de: "Nuestra block rate es del 18% en este ciclo."
Di: "El 18% de nuestro trabajo encontró dependencias externas que requirieron resolución. Ninguna retrasó un objetivo comprometido."

**Objetivos logrados → Confiabilidad de compromisos**

En vez de: "Logramos 8 de 10 objetivos primarios en el último trimestre."
Di: "Entregamos 8 de 10 compromisos trimestrales. Los dos incumplimientos tuvieron causas externas documentadas y ambos fueron completados en el ciclo siguiente."

### 4.3 La Predictibilidad de Entrega como Métrica Ejecutiva Clave

De todas las métricas que rastrea el equipo, la métrica que más les importa a los ejecutivos es la predictibilidad de entrega: cuando el equipo se compromete con algo, ¿lo entrega a tiempo?

La predictibilidad de entrega se calcula a nivel de ciclo:

```
Predictibilidad de Entrega = (Ciclos donde todos los objetivos primarios
                               fueron logrados a tiempo)
                             / (Total de ciclos) × 100
```

Un equipo con 85% de predictibilidad de entrega a lo largo de 12 ciclos tiene un historial sólido. Cuando ocasionalmente incumple, se atribuye a la causa externa específica, no a un patrón de bajo rendimiento.

Un equipo que entrega esporádicamente sin patrón es poco confiable, incluso si los ciclos individuales parecieron bien en su momento.

El Product Strategist rastrea y reporta esta métrica cada trimestre. Es el número que los ejecutivos recordarán.

### 4.4 El Formato del Executive Dashboard

El Executive Dashboard no es un documento. Es un mensaje — lo suficientemente breve como para caber en un mensaje de Slack, en el panel de vista previa de un correo electrónico o en una sola pantalla de teléfono.

**Formato: 5 números, 1 tendencia, 1 riesgo**

```
[Nombre del producto/equipo] | Cierre del Cycle [N]
────────────────────────────────────────────────────
5 NÚMEROS
Objetivos entregados:         [X] de [Y]
Predictibilidad de entrega (12 ciclos): [X]%
Ciclo en tiempo:              [Sí / Extendido N días — razón]
Ítems de Business Value:      [N] entregados este ciclo
Riesgos activos:              [N]

1 TENDENCIA
[Una oración describiendo la tendencia positiva o negativa más significativa]

1 RIESGO
[El riesgo más importante en el radar que los ejecutivos necesitan conocer]
────────────────────────────────────────────────────
Cycle Visibility Report completo: [enlace]
Preguntas: [Nombre del Product Strategist y contacto]
```

**Ejemplo completado:**

```
Equipo Pagos & Onboarding | Cierre del Cycle 14
────────────────────────────────────────────────────
5 NÚMEROS
Objetivos entregados:         1 de 2 (integración de pago continúa en Cycle 15)
Predictibilidad de entrega (12 ciclos): 83%
Ciclo en tiempo:              Sí (10/10 días)
Ítems de Business Value:      1 (tasa de compleción de onboarding +23%)
Riesgos activos:              2

1 TENDENCIA
La tasa de compleción del onboarding ha mejorado del 61% al 75% desde
el lanzamiento hace tres días. Primera mejora significativa de métrica de
negocio en dos ciclos.

1 RIESGO
La auditoría de eliminación GDPR llega en ~6 semanas. Es probable que
un ciclo completo de trabajo de cumplimiento sea necesario. Los ítems
del roadmap de Q2 pueden necesitar ajustarse. No se requiere acción
ejecutiva todavía — se señala para conciencia de presupuesto y cronograma.
────────────────────────────────────────────────────
Informe completo: [enlace]
Preguntas: Felipe Montenegro
```

Este mensaje toma 30 segundos leerlo. Un ejecutivo puede actuar sobre él o reenviarlo sin leer nada más.

---

## 5. Gestión de Expectativas de Stakeholders

La gestión de expectativas no consiste en decir sí a todo o suavizar las malas noticias. Consiste en asegurar que lo que los stakeholders esperan que suceda sea lo que realmente sucede.

### 5.1 Fijar Expectativas Antes del Inicio del Ciclo

El momento más efectivo para gestionar las expectativas es antes de que comience el ciclo, no después de que termine.

El Smart Planning Session produce el Goal Cycle Plan. Antes de iniciar el ciclo, el Product Strategist debe verificar:

**Lista de verificación de alineación antes del inicio del ciclo:**

```
□ ¿Todos los stakeholders del cuadrante Involucrar en Profundidad
  han visto los objetivos primarios y tuvieron oportunidad de plantear inquietudes?

□ ¿Hay algo que un stakeholder crea que está en este ciclo
  y que el equipo no planificó incluir?

□ ¿Existen compromisos con stakeholders (internos o externos)
  que dependan de los objetivos de este ciclo?

□ ¿Hay alguna dependencia de stakeholders (aprobaciones, contenido,
  firmas de aceptación) que deba marcarse antes de que comience el trabajo?
```

El Anuncio de Inicio de Ciclo (Sección 2.2) es parte de la fijación de expectativas. La sección explícita "lo que NO está en este ciclo" es lo que previene la forma más común de desalineación.

### 5.2 Cómo Decir No con Datos

Los stakeholders a menudo solicitan cosas que el equipo no puede o no debe hacer en el ciclo actual. El instinto de evitar el conflicto lleva a rechazos suaves ("intentaremos encajarlo," "déjame ver cómo queda") que dejan al stakeholder creyendo que la respuesta fue sí.

Decir no efectivamente en GOAL significa:

**Hazlo sobre capacidad y datos, no sobre opinión.**

"No podemos hacer esto" es una opinión. "El equipo tiene capacidad de WIP para aproximadamente 18 tareas medianas por ciclo de dos semanas. Ya estamos comprometidos con [resumen de objetivos] que representa 16 de esos slots. Agregar tu solicitud requeriría eliminar uno de los objetivos comprometidos" son datos.

**Ofrece una alternativa real.**

Un no sin alternativa es solo una pared. Cada no debe venir con uno de:
- "Esto estará en el Cycle [N+1]. Puedo darte una fecha estimada."
- "Si esto es de mayor prioridad que [objetivo actual], podemos discutir un intercambio — ¿qué eliminaríamos del plan actual?"
- "Esto no encaja como un ciclo completo, pero hay una versión más liviana que podríamos definir como objetivo secundario."

**Documenta la decisión.**

Cuando se declina una solicitud de un stakeholder, va al Backlog con una nota explicando por qué fue diferida y cuándo será reconsiderada. Esto crea responsabilidad en ambas direcciones: el equipo tiene un registro de que reconoció la solicitud, y el stakeholder tiene evidencia de dónde está su solicitud.

**La plantilla de "no con datos":**

```
Hemos recibido tu solicitud de [X].

Esta es la situación actual de capacidad:
- El Goal Cycle [N] está corriendo del [inicio] al [fin]
- Compromisos primarios en este ciclo: [lista breve de objetivos]
- Capacidad estimada restante: [evaluación]

Agregar [X] al ciclo actual requeriría ya sea:
a) Extender el ciclo aproximadamente [estimado], o
b) Eliminar [objetivo específico] de los compromisos actuales

Ninguna opción se recomienda porque [breve razón].

Hemos agregado [X] al Backlog, priorizado en [posición/nivel].
Según los planes actuales, será abordado en el Cycle [N+1]
comenzando el [fecha].

Si el impacto de negocio de [X] justifica repriorizar por encima de
los compromisos actuales, por favor proporciona justificación documentada
y lo reevaluaremos.

— [Nombre del Product Strategist]
```

### 5.3 Gestionar la Presión de Alcance Sin Romper el Ciclo

La presión de alcance — la adición persistente de nuevas solicitudes, expansiones de objetivos actuales y peticiones de "solo una cosa más" — es una de las formas más comunes en que los Goal Cycles se interrumpen.

La arquitectura de GOAL proporciona protección estructural:

- Los objetivos primarios quedan bloqueados una vez que el ciclo comienza (Regla de Estabilidad de Objetivos)
- El nuevo trabajo entra al Expedite lane solo con aprobación conjunta del Flow Master + Product Strategist
- El Flow Master tiene autoridad para hacer cumplir los límites de WIP, incluyendo bloquear el inicio de nuevas tareas

Pero la arquitectura solo funciona si el Product Strategist la usa consistentemente. El fallo más común es que el Product Strategist acomode adiciones de alcance individuales sin evaluar formalmente cada una a través del Interrupt Protocol.

**Proceso de respuesta a la presión de alcance:**

```
Paso 1: Toda nueva solicitud se clasifica, no se absorbe simplemente
  Incluso las solicitudes pequeñas pasan por la clasificación de interrupciones.
  "P3 — agregando al Backlog para el Cycle [N+1]" es una respuesta completa.

Paso 2: Mantener un conteo visible de interrupciones absorbidas en el ciclo
  Los stakeholders que pueden ver que el equipo ya manejó 3 solicitudes P2
  en el ciclo actual son menos propensos a presionar por una cuarta.

Paso 3: Usar el Anuncio de Inicio de Ciclo como escudo
  Cuando llega la presión de alcance, la respuesta es: "Esto no estaba en
  el alcance anunciado al inicio del ciclo. Si crees que debería reemplazar
  a un objetivo actual, por favor envía el caso de negocio."

Paso 4: El Flow Master apoya al Product Strategist
  Si un stakeholder rodea al Product Strategist y aplica presión directamente
  sobre los desarrolladores, el Flow Master interviene (ver Sección 8).
```

### 5.4 Cuándo Escalar vs Absorber la Presión

No toda la presión de los stakeholders debe resistirse. Algunas solicitudes genuinamente son urgentes e importantes. La pregunta es si el Product Strategist está tomando una decisión informada o simplemente cediendo a la presión social.

**Escala (involucra al Flow Master y posiblemente a la dirección superior) cuando:**

- El stakeholder está haciendo demandas que omiten completamente el proceso GOAL
- El mismo stakeholder clasifica repetidamente todo como urgente
- Hay un conflicto genuino entre lo que un stakeholder necesita y a lo que el equipo está comprometido que no puede resolverse al nivel del Product Strategist
- El stakeholder está yendo directamente a los desarrolladores para hacer solicitudes

**Absorbe (acepta la solicitud en el ciclo actual) cuando:**

- La clasificación de interrupción genuinamente justifica P1 o P2
- Hay justificación documentada de impacto de negocio
- El Product Strategist y el Flow Master evaluaron el impacto en el ciclo y es manejable
- El stakeholder ha aceptado un intercambio de alcance — algo se elimina para hacer espacio

**Desvía al próximo ciclo cuando:**

- La solicitud es P3 (sin justificación documentada de impacto de negocio)
- La solicitud es importante pero no más que los compromisos actuales
- Puede hacerse un compromiso realista para el próximo ciclo

---

## 6. Comunicación Cuando las Cosas Salen Mal

Los problemas son inevitables en la entrega de software. La pregunta no es si van a ocurrir, sino cómo el equipo comunica cuando ocurren. Una comunicación deficiente durante un problema daña la confianza de los stakeholders más que el problema en sí.

### 6.1 Comunicación de Extensión del Ciclo

Cuando un Goal Cycle se extiende más allá de su fecha de fin estimada, la comunicación debe ocurrir antes de la fecha de fin original, no después.

**A quién notificar:** Todos los stakeholders que recibieron el Anuncio de Inicio de Ciclo.

**Cuándo:** En cuanto se tome la decisión de extensión — como mínimo, un día hábil antes de la fecha de fin estimada original.

**Qué decir:**

```
Asunto: Extensión del Cycle [N] — [caracterización en una línea]

El Cycle [N] se extenderá más allá de la fecha de fin estimada originalmente [fecha].

Estado actual de los objetivos primarios:
  ✓ [Objetivo 1] — Completado
  ○ [Objetivo 2] — En progreso, requiere [N] días adicionales

Razón de la extensión:
[Categoría de razón de extensión del Extension Record de GOAL, explicada en lenguaje
claro. Una a tres oraciones. Sin encuadre defensivo.]

Detalles de la extensión:
  Nueva fecha de fin estimada: [fecha]
  Días hábiles adicionales: [N]
  Aprobado por: Flow Master y Product Strategist
  Tipo de extensión: [A/B/C/D/E — lenguaje claro]

Qué estamos haciendo para completar:
[Acciones específicas que se están tomando, no garantías genéricas]

Preguntas: Contactar a [nombre del Product Strategist] directamente.
```

**Qué no decir:**

- No digas "casi terminamos" sin una fecha específica
- No atribuyas la extensión completamente a factores externos a menos que genuinamente lo hayan sido
- No te disculpes excesivamente — reconoce, explica y comprométete

### 6.2 Comunicación de Objetivo No Logrado

Cuando un ciclo cierra y un objetivo primario no fue logrado (y no se extenderá — el equipo cierra el ciclo con un registro de compleción parcial), los stakeholders necesitan entender qué ocurrió y qué viene a continuación.

Esta comunicación se envía con o inmediatamente después del Cycle Visibility Report.

**El mensaje de "objetivo no logrado" tiene cuatro partes:**

```
1. Declaración clara del incumplimiento
   "El Objetivo [X] no fue logrado en el Cycle [N]."

2. Una oración de causa raíz honesta
   No una asignación de culpa. Una afirmación factual.
   "La estimación de alcance original no consideró [problema específico]."
   "Una dependencia clave de [equipo/proveedor] no estuvo disponible cuando se esperaba."
   "La complejidad técnica superó lo que era visible en la planificación."

3. Evaluación del impacto
   "Esto afecta a [lo que les importa a los stakeholders] de la siguiente manera:
   [impacto específico]."
   Si no hay impacto aguas abajo en un compromiso del stakeholder, dilo.
   "Esto no afecta la fecha límite de [fecha/compromiso X] porque [razón]."

4. Camino concreto hacia adelante
   "El Objetivo [X] es el objetivo primario del Cycle [N+1], comenzando el [fecha].
    Compleción esperada: [fecha]."
   Da una fecha. Si no puedes dar una fecha, di cuándo podrás.
```

### 6.3 Comunicación de Incidentes de Producción con Stakeholders

Los incidentes de producción (eventos P1 en el Interrupt Protocol) requieren un patrón de comunicación distinto al de la gestión de ciclos. La audiencia incluye stakeholders operacionales, clientes que puedan verse afectados y ejecutivos.

GOAL recomienda una comunicación de incidentes en tres etapas:

**Etapa 1 — Notificación del Incidente (dentro de los 30 minutos de la clasificación P1)**

```
Asunto: [INCIDENTE] [Descripción breve] — Bajo Resolución Activa

Actualmente estamos experimentando [breve descripción no técnica del impacto].

Estado: Investigación activa
Inicio: [hora]
Afectados: [quién/qué está afectado]
Equipo en ello: [nombres o equipo]

Próxima actualización: [hora específica — no más de 2 horas a partir de ahora]
```

**Etapa 2 — Actualización de Progreso (cada 1–2 horas mientras está activo)**

```
Asunto: [ACTUALIZACIÓN DE INCIDENTE] [Descripción breve] — [estado]

Estado actual: [En progreso / Contenido / Resuelto]
Hora de esta actualización: [hora]

Lo que sabemos:
[Actualización factual — qué se encontró, qué se está haciendo]

Lo que aún no sabemos:
[Preguntas abiertas — reconocimiento honesto de la incertidumbre]

Próxima actualización: [hora específica]
```

**Etapa 3 — Resolución y Resumen Post-Incidente (dentro de las 24 horas de la resolución)**

```
Asunto: [RESUELTO] [Descripción breve] — Resumen

El incidente fue resuelto a las [hora].

Cronología:
  [hora] — Primera indicación del problema
  [hora] — Clasificación P1 y equipo movilizado
  [hora] — Causa raíz identificada
  [hora] — Corrección desplegada y verificada
  [hora] — Incidente resuelto

Causa raíz:
[Explicación en lenguaje claro de qué causó el incidente]

Impacto:
[Quiénes se vieron afectados, durante cuánto tiempo, qué fue afectado]

Lo que estamos haciendo para prevenir recurrencia:
[Acciones específicas — registradas en el Block Register y en el Backlog
 de deuda técnica]

Impacto en el ciclo:
[¿Fue el incidente absorbido dentro del ciclo, o desencadenó una extensión?
 Referencia al Extension Record si aplica.]
```

**Principios para la comunicación de incidentes:**

- Velocidad sobre pulido en las etapas tempranas
- Honestidad sobre optimismo — no decir "casi resuelto" sin evidencia
- Tiempos y hechos específicos, no garantías vagas
- Nunca guardar silencio durante un incidente activo
- El resumen post-incidente debe incluir una causa raíz real y una acción preventiva real

### 6.4 Reconstruir la Confianza Después de Fallos Repetidos en el Ciclo

Un solo objetivo fallido o un ciclo tardío es un dato. Dos seguidos son una preocupación. Tres o más es un patrón que los stakeholders nombrarán y ante el que responderán con confianza reducida.

La recuperación después de fallos repetidos requiere un enfoque diferente al de la comunicación de incidentes individuales.

**Paso 1: Reconoce el patrón directamente**

No esperes a que un stakeholder nombre el patrón. El Product Strategist lo nombra primero: "Hemos fallado en lograr objetivos primarios en [X] de los últimos [N] ciclos. Esto es un patrón y requiere una respuesta estructural."

Nombrar el patrón antes de que lo hagan los stakeholders preserva la credibilidad. Esperar a que ellos lo nombren señala que el equipo no era consciente del problema o no le preocupaba.

**Paso 2: Presenta un análisis de causa raíz, no una lista de excusas**

El marco de la Data-Driven Retrospective proporciona los datos para esto. El Product Strategist sintetiza el análisis de causa raíz a lo largo de los ciclos afectados:

- ¿Se subestimaron consistentemente los objetivos? (problema de sizing)
- ¿Se ponderaron consistentemente de menos las dependencias externas? (problema de planificación)
- ¿Absorbió el equipo consistentemente demasiadas interrupciones P2? (problema de disciplina)
- ¿No se escalaron los bloqueos con suficiente rapidez? (problema de proceso)

El análisis de causa raíz se presenta a los stakeholders relevantes — no para asignar culpa, sino para demostrar que el equipo entiende qué salió mal e identificó cambios estructurales.

**Paso 3: Propón un cambio concreto, no solo un compromiso**

"Lo haremos mejor" no es un plan de recuperación. Un plan de recuperación especifica:

- Qué cambio específico se está haciendo al proceso
- Qué métrica se usará para medir si el cambio está funcionando
- Cuál es el estándar de desempeño para los próximos [N] ciclos

**Paso 4: Sub-comprométete y sobre-entrega durante los próximos 2–3 ciclos**

Esta es la forma más confiable de reconstruir la predictibilidad de entrega como historial. Durante una fase de reconstrucción de confianza:

- Establece objetivos primarios conservadores (menos, más pequeños)
- Mejora los objetivos secundarios a primarios solo cuando hay alta confianza en que serán logrados
- Reporta la predictibilidad de entrega explícitamente cada ciclo

Dos o tres ciclos consecutivos donde todos los objetivos primarios se logran a tiempo, con informes honestos, reconstruirán la confianza de los stakeholders de manera más efectiva que cualquier estrategia de comunicación.

---

## 7. Stakeholder Review Event (Opcional)

El Stakeholder Review Event es un evento presencial/virtual opcional en GOAL. No es un equivalente a la sprint review que corra cada ciclo. Está reservado para situaciones donde el compromiso presencial de los stakeholders proporciona valor que la comunicación escrita no puede.

### 7.1 Cuándo Realizar un Stakeholder Review Event

Realiza un Stakeholder Review Event cuando:

```
Condiciones disparadoras:

1. Se está publicando una funcionalidad o área de producto importante
   que requiere demostración a stakeholders y recolección de feedback

2. Hay un trabajo significativo de alineación estratégica con stakeholders
   que se beneficiaría de una discusión en vivo en lugar de un intercambio escrito

3. La confianza necesita reconstruirse después de un período difícil y
   un foro en vivo proporciona un mejor contexto para la conversación honesta

4. Múltiples grupos de stakeholders tienen intereses en competencia
   que necesitan alinearse en la misma sesión

5. Un nuevo stakeholder importante (ejecutivo, cliente) se ha unido
   y necesita orientarse en el trabajo y los métodos del equipo
```

No realices un Stakeholder Review Event:
- Como una ceremonia rutinaria de fin de ciclo (el Cycle Visibility Report lo maneja)
- Cuando no hay nada significativo que revisar o demostrar
- Como una forma de generar presión en el equipo para terminar algo para la demo
- Cuando el trabajo es demasiado interno o técnico para ser significativo para los stakeholders

### 7.2 Formato y Agenda

**Duración:** 45–60 minutos máximo.

**Formato:** La demostración primero. Los stakeholders ven software funcionando o outcomes entregados, no diapositivas.

```
Stakeholder Review Event — Agenda

1. Contexto (5 min)
   Product Strategist: Cuál era el objetivo de este ciclo y por qué era importante.
   NO es un recorrido de todo lo que hizo el equipo.

2. Demostración (20–25 min)
   El Delivery Team demuestra funcionalidades en funcionamiento o outcomes.
   La demostración va contra los criterios de aceptación, no es un recorrido libre.
   Cada demostración termina con: "Este objetivo fue logrado porque [evidencia]."

3. Métricas y valor entregado (10 min)
   El Product Strategist presenta los puntos clave del Cycle Visibility Report.
   La predictibilidad de entrega y la tendencia se destacan.

4. Vista hacia adelante (10 min)
   El Product Strategist presenta la dirección del próximo ciclo.
   El input estratégico de los stakeholders es bienvenido aquí.

5. Preguntas abiertas (10 min)
   Los stakeholders pueden hacer preguntas sobre el trabajo demostrado
   o la dirección del equipo.
```

### 7.3 Quién Debe Asistir

**El Product Strategist** lidera el evento.

**El Flow Master** está presente para proporcionar contexto de proceso si se le pregunta.

**Al menos dos miembros del Delivery Team** que trabajaron en los objetivos demostrados deben presentar su trabajo. Rotar la responsabilidad de presentación entre los miembros del equipo construye confianza y crea responsabilidad compartida de la comunicación con stakeholders.

**Los stakeholders asistentes** deben seleccionarse de los cuadrantes Involucrar en Profundidad y Monitorear de Cerca. No invites a todo el panorama de stakeholders — grupos más grandes crean ansiedad de desempeño y reducen la calidad de la conversación.

Los stakeholders del cuadrante Mantener Informado reciben el Cycle Visibility Report y las notas de la reunión, pero típicamente no asisten.

### 7.4 Cómo Evitar que se Convierta en una Sesión de Negociación de Alcance

El modo de fallo más común de los stakeholder review events es que se convierten en sesiones de negociación de alcance en vivo. Los stakeholders, energizados al ver software funcionando, comienzan a solicitar funcionalidades, cambios y adiciones en tiempo real. El equipo, deseoso de complacer, hace compromisos informales. Esos compromisos se acumulan en disrupción del ciclo.

**Medidas de prevención:**

**Establece el marco de la agenda explícitamente al inicio de la reunión.**

"Esta sesión es para revisar lo que fue construido y alinear sobre la dirección. Las solicitudes específicas de funcionalidades y los cambios de prioridad van a través del Product Strategist por el proceso estándar. Capturaremos el input hoy y fluirá hacia el próximo ciclo de planificación."

**Cuando un stakeholder plantea una solicitud específica durante la sesión:**

"Eso es un input útil. Lo estoy anotando. Pasará por el proceso estándar y recibirás respuesta dentro de [N días] sobre cómo está priorizado."

No evalúes la solicitud en vivo. No digas "eso suena fácil, probablemente podríamos hacerlo." Cualquier funcionalidad que se comprometa en una reunión será exigida en ese compromiso incluso cuando el alcance completo quede claro posteriormente.

**Asigna un tomador de notas para capturar todas las solicitudes planteadas.**

Después del evento, el Product Strategist envía un resumen escrito de todas las solicitudes planteadas y cómo se manejará cada una. Esto cierra el ciclo sin hacer compromisos en vivo.

---

## 8. El Product Strategist como Interfaz con Stakeholders

En GOAL, el Product Strategist es el punto único de contacto para toda la comunicación de stakeholders al equipo. Esto no es burocracia — es una protección estructural deliberada para la capacidad del equipo de entregar.

### 8.1 Proteger al Equipo de la Presión de los Stakeholders

Cada interacción directa de un stakeholder con un desarrollador que omite al Product Strategist crea un riesgo:

- El desarrollador recibe una solicitud que no puede priorizar en contexto
- El desarrollador hace un compromiso informal sin visibilidad sobre la capacidad del ciclo
- El desarrollador siente presión de decir sí, absorbe trabajo no planificado y el ciclo sufre
- El stakeholder cree que la solicitud está siendo atendida cuando no fue formalmente evaluada

El trabajo del Product Strategist es estar presente y ser lo suficientemente receptivo como para que los stakeholders no sientan la necesidad de rodear la interfaz.

**Prevención del rodeo:**

```
El Product Strategist debe:
□ Responder a las comunicaciones de los stakeholders dentro de un día hábil
□ Dar cronogramas claros para cada solicitud, incluso si el cronograma es
  "el próximo trimestre"
□ No dejar solicitudes en estados ambiguos donde los stakeholders
  sientan la compulsión de hacer seguimiento
□ Ser accesible sin estar abrumado — horarios de oficina programados
  o ventanas de respuesta definidas son mejores que la disponibilidad permanente

El Flow Master debe:
□ Redirigir cualquier solicitud directa a desarrolladores de vuelta
  al Product Strategist
□ No negociar alcance o prioridad con stakeholders
□ Informar al Product Strategist cuando ocurran intentos de rodeo
```

Cuando ocurre un rodeo a pesar de estas medidas, el Flow Master lo aborda con el stakeholder directamente:

```
"Veo que has planteado esto con [nombre del desarrollador]. Quiero asegurarme
de que se priorice correctamente. Para todas las solicitudes, el camino correcto
es [nombre del Product Strategist], quien lo evaluará contra el ciclo actual y
te dará una respuesta clara. He reenviado tu solicitud y [PS] hará el seguimiento."
```

Esto no es punitivo. Es mantenimiento del proceso.

### 8.2 Traducir la Demanda de Negocio a Objetivos Compatibles con GOAL

Los stakeholders no piensan en términos de GOAL. Piensan en funcionalidades, problemas y fechas límite. La función de traducción del Product Strategist convierte la demanda de los stakeholders en compromisos de ciclos basados en objetivos.

**Ejemplos de traducción:**

| Demanda del stakeholder | Objetivo compatible con GOAL |
|---|---|
| "Necesitamos un dashboard" | "Los usuarios pueden ver sus métricas clave de cuenta sin salir de la aplicación principal" |
| "El login es muy lento" | "El tiempo de respuesta del login es inferior a 1 segundo para el 99% de las solicitudes" |
| "¿Podemos agregar exportar a Excel?" | "Los usuarios pueden exportar cualquier grilla de datos a CSV o Excel con el filtro actual aplicado" |
| "Necesitamos mejores notificaciones" | "Los usuarios reciben notificaciones en la app y por correo electrónico para [eventos disparadores específicos]" |

El objetivo compatible con GOAL:
- Describe un outcome, no una implementación
- Es verificable (puede evaluarse contra criterios de aceptación)
- Puede evaluarse en términos de valor usando el 3-Layer Value Framework
- No prescribe cómo el Delivery Team lo logra

**Cuando la demanda de un stakeholder es demasiado vaga para traducir:**

No pongas demandas vagas en el Backlog. El Product Strategist tiene la responsabilidad de aclarar la demanda antes de que entre al proceso de planificación.

Preguntas de descubrimiento:
- "¿Quién específicamente se beneficia de esto y cómo?"
- "¿Qué podría hacer un usuario que no puede hacer hoy?"
- "¿Cómo sabríamos si construimos esto correctamente?"
- "¿Cómo se ve el éxito en tres meses?"

Si el stakeholder no puede responder estas preguntas, la demanda no está lista para ser un objetivo. Va al estado Discovery del Backlog hasta que pueda aclararse.

### 8.3 Gestionar Prioridades Competitivas de Stakeholders

Cuando múltiples stakeholders tienen solicitudes competitivas para la misma capacidad de ciclo, el Product Strategist no puede simplemente diferir el conflicto — debe resolverse.

**Proceso de resolución de prioridades competitivas:**

```
Paso 1: Hacer visible el conflicto
  "[Stakeholder A] y [Stakeholder B] tienen solicitudes de alta prioridad
  para el próximo ciclo. Tenemos capacidad para una, no para ambas.
  Necesito tomar una decisión de priorización."

Paso 2: Evaluar cada solicitud usando el Value Framework
  ¿Cuál solicitud entrega mayor Business Value, User Value o Technical Value?
  ¿Ambas solicitudes son igualmente válidas, o la evidencia favorece a una?

Paso 3: Tomar una decisión y comunicarla a ambas partes
  No dejes a los stakeholders competidores en la ambigüedad.
  "[Solicitud A] se priorizará en el Cycle [N] porque [razón].
   [Solicitud B] está programada para el Cycle [N+1] comenzando el [fecha]."

Paso 4: Si el Product Strategist no puede resolver el conflicto a su nivel
  Escalar a la autoridad apropiada — no para obtener permiso de decidir,
  sino para dar visibilidad a un conflicto que tiene implicaciones organizacionales.
  "Tengo dos stakeholders con prioridades de ciclo competitivas de igual
  peso organizacional. Necesito una decisión sobre cuál priorizar."
```

---

## 9. Modelo de Comunicación del Roadmap

### 9.1 Cómo Presentar un Roadmap de GOAL

Un roadmap de GOAL está estructurado alrededor de objetivos, no de funcionalidades. Un roadmap de lista de funcionalidades crea dos problemas:

1. Compromete implementaciones específicas antes de que el equipo sepa lo suficiente para comprometerse con ellas
2. Ancla las expectativas de los stakeholders a soluciones en lugar de problemas, dificultando la adaptación

Un roadmap basado en objetivos presenta los outcomes que el equipo planea lograr, organizados por ciclo aproximado. No es un diagrama de Gantt. No tiene detalle a nivel de tarea. Muestra dirección.

**Formato de roadmap de GOAL:**

```
Roadmap [Producto/Equipo] | [Trimestre/Período]

Q1 (Cycles 12–14)              Q2 (Cycles 15–18)             Q3 (Cycles 19–21)
────────────────────           ────────────────────          ────────────────────
✓ Rediseño del onboarding      Infraestructura de pagos      Modelo de permisos
✓ Lógica de reintento pagos    Trabajo de cumplimiento GDPR  de usuarios
  Sistema de notificaciones    [Por definir — capacidad]     Reportes v2
                                                             [TBD Estratégico]

Confianza: ALTA                Confianza: MEDIA              Confianza: BAJA
(en progreso o planificado)    (planificado, cierta           (solo direccional)
                               incertidumbre)
```

Cuanto más lejos en el futuro, menos específico es el roadmap. Esto es intencional y honesto.

### 9.2 Niveles de Confianza para Ciclos Futuros

Los roadmaps de GOAL usan tres niveles de confianza para los objetivos de ciclos futuros:

**Alta confianza:** El objetivo está bien definido, los ítems del Backlog están en estado Ready y no hay dependencias o riesgos conocidos que puedan impedirlo. El equipo podría comenzar este ciclo mañana.

**Confianza media:** El objetivo está definido y priorizado, pero uno o más de los siguientes son verdaderos: los ítems del Backlog necesitan refinamiento, hay una dependencia aún no confirmada, o el estimado de capacidad es incierto.

**Baja confianza / Direccional:** El objetivo representa una dirección estratégica pero el alcance específico, el cronograma y el enfoque aún no están determinados. Esta es una señal de intención, no un compromiso.

**Cómo se usan los niveles de confianza en la comunicación con stakeholders:**

- Los objetivos de alta confianza pueden comunicarse como compromisos con fechas aproximadas
- Los objetivos de confianza media deben comunicarse con incertidumbre explícita: "Planeamos abordar esto en Q2, sujeto a [condición específica]"
- Los objetivos de baja confianza deben enmarcarse como dirección: "Nuestro pensamiento para el H2 incluye [dirección], aunque el alcance y cronograma específicos se definirán a medida que nos acerquemos a ese período"

### 9.3 Cómo Comunicar la Incertidumbre con Honestidad

Los dos patrones de deshonestidad del roadmap más comunes son:

1. **Presentar todos los ítems con alta confianza** para evitar la incomodidad de los stakeholders con la incertidumbre
2. **Evitar por completo las conversaciones de roadmap** porque el futuro es incierto

Ninguno de estos enfoques sirve bien a los stakeholders. Los stakeholders toman decisiones de negocio basadas en la información del roadmap. La comunicación inexacta del roadmap lleva a decisiones de negocio desalineadas y a una confianza erosionada.

El enfoque honesto:

**Etiqueta la incertidumbre explícitamente.** Usa los niveles de confianza. Los stakeholders que entienden que un objetivo es "direccional / baja confianza" no responsabilizarán al equipo por una funcionalidad perdida que nunca fue firmemente comprometida.

**Actualiza el roadmap en cada reunión trimestral de alineación.** Un roadmap que no se mantiene pierde credibilidad. Un roadmap que refleja el conocimiento actual y está claramente fechado construye confianza.

**Distingue entre "todavía no lo sabemos" y "decidimos no priorizarlo".** Estos son mensajes diferentes y deben comunicarse de manera diferente. "Todavía no hemos planificado los detalles del H2" es honesto. "Decidimos no incluir X este año" también es honesto. Fingir que el primero es el segundo, o viceversa, crea confusión.

---

## 10. Anti-Patrones de Stakeholders

Los anti-patrones son comportamientos disfuncionales recurrentes que socavan el modelo operativo de GOAL. Reconocerlos temprano permite al Product Strategist y al Flow Master responder de manera efectiva antes de que se arraiguen.

### 10.1 El Rodeo

**Patrón:** Un stakeholder — generalmente con influencia significativa — va directamente a un desarrollador con una solicitud, omitiendo al Product Strategist y el proceso formal de entrada.

**Por qué ocurre:** El stakeholder cree que el Product Strategist dirá no, o no entiende el proceso, o tiene prisa y el desarrollador es más accesible.

**Daño que causa:**
- El desarrollador recibe una solicitud que no puede priorizar en contexto
- El desarrollador hace un compromiso informal
- Trabajo no planificado entra al ciclo, desplazando el trabajo planificado
- El Product Strategist pierde visibilidad de en qué está trabajando el equipo
- El rodeo se refuerza a sí mismo — si funcionó una vez, se intentará de nuevo

**Respuesta:**

La primera vez que ocurre un rodeo, el Product Strategist lo aborda directamente pero sin punitivo con el stakeholder:

```
"Noté que hablaste con [Desarrollador] sobre [solicitud]. Quiero asegurarme
de que esto se maneje correctamente. Todas las solicitudes deben pasar por mí
para que pueda evaluarlas contra los compromisos del ciclo actual y darte un
cronograma confiable. [Solicitud] ha sido agregada a [estado]. [Desarrollador]
continuará con sus compromisos del ciclo actual."
```

Si el patrón de rodeo continúa después de la primera conversación, el Flow Master lo escala como una violación del proceso al nivel de gestión apropiado. Los rodeos repetidos que no se abordan eventualmente destruirán la capacidad del equipo de operar GOAL.

### 10.2 El Síndrome de Todo Urgente

**Patrón:** Un stakeholder clasifica consistentemente todas sus solicitudes como P1 o P2. Cada solicitud viene con lenguaje como "esto es crítico," "lo necesitamos inmediatamente," o "esto está bloqueando todo." El equipo descubre a través de la experiencia que el "urgente" del stakeholder raramente significa lo que la clasificación implica.

**Por qué ocurre:** Algunos stakeholders usan el lenguaje de urgencia habitualmente. Algunos genuinamente creen que todo es urgente. Algunos han aprendido que el lenguaje de urgencia es necesario para obtener atención de priorización.

**Daño que causa:**
- El sistema de clasificación de interrupciones pierde significado
- El Expedite lane del equipo se sobrecarga o es ignorado
- Las situaciones genuinas P1 y P2 son más difíciles de identificar
- El equipo se agota ante la urgencia falsa

**Respuesta:**

Requerir justificación documentada de impacto de negocio para cada clasificación P1 y P2. El Product Strategist responde a cada solicitud "urgente" con:

```
"Recibido. Para evaluar el nivel de prioridad, ¿puedes proporcionar:
1. ¿Qué impacto de negocio específico ocurre si esto no se resuelve
   dentro de [N días]?
2. ¿Quiénes están afectados y cómo?
3. ¿Hay una fecha límite o compromiso documentado asociado a esto?"
```

Esto no es obstrucción. Es la pregunta de evaluación P2 estándar del Interrupt Protocol. Los stakeholders que proporcionan respuestas reales reciben tratamiento de urgencia real. Los stakeholders que no pueden responder la pregunta descubren que su solicitud era P3 desde el principio.

Rastrea las clasificaciones de urgencia a lo largo del tiempo. Si las solicitudes P2 de un stakeholder consistentemente resultan ser P3 después de la pregunta de justificación, ese patrón puede abordarse directamente:

```
"He notado que varias solicitudes recientes de tu equipo clasificadas como
urgentes han resultado, tras evaluación, ser prioridad P3. Quiero que
recalibremos juntos sobre qué significan los criterios de urgencia, para
que podamos manejar rápidamente las prioridades genuinas y planificar
el trabajo normal adecuadamente."
```

### 10.3 El Stakeholder Invisible

**Patrón:** Un stakeholder existe en el cuadrante Involucrar en Profundidad o Monitorear de Cerca pero nunca interactúa con las comunicaciones, no asiste a las reuniones de alineación de roadmap, y nunca proporciona input — hasta que un ciclo entrega algo que no cumple sus expectativas, momento en el que aparece con poder de veto o una solicitud de cambio.

**Por qué ocurre:** Algunos stakeholders están genuinamente ocupados. Algunos no son conscientes de que su input es necesario. Algunos difieren el compromiso para evitar conflictos hasta que tengan algo concreto frente a ellos.

**Daño que causa:**
- El trabajo que requería input del stakeholder procede sin él
- Sorpresas costosas en o después de la entrega
- El trabajo del equipo es rechazado o requiere un rework significativo
- La precisión del ciclo sufre porque el input del stakeholder invisible no fue considerado en el alcance

**Respuesta:**

El trabajo del Product Strategist es prevenir que los stakeholders invisibles aparezcan en el momento equivocado.

**Antes de que comience un ciclo:** Identificar específicamente qué aprobación o input de los stakeholders es requerido para los objetivos del ciclo. Hacer la solicitud explícita: "El Objetivo [X] requerirá tu aprobación en la compleción. ¿Estarás disponible durante [rango de fechas]?"

**Cuando un stakeholder no ha interactuado:** No asumir que el silencio significa acuerdo. Comunicarse proactivamente: "No hemos recibido input de tu equipo sobre [tema]. Esto es relevante para el Cycle [N] que comienza el [fecha]. Si tienes inquietudes o requisitos, ahora es el momento de plantearlos. Después del inicio del ciclo, los cambios afectarán el cronograma."

**Si el stakeholder invisible aparece después de la entrega:** Reconocer su input, documentarlo y gestionar la consecuencia con honestidad. Si el trabajo necesita cambiar, se convierte en un nuevo ítem del Backlog en el próximo ciclo. El hecho de que el input no fue proporcionado antes es parte del análisis de la retrospectiva.

### 10.4 El Scope Creep mediante "Pequeñas Solicitudes"

**Patrón:** Un stakeholder no hace solicitudes grandes de cambios de alcance. En cambio, agrega consistentemente pequeñas solicitudes que "deberían tomar solo unas pocas horas." Cada solicitud individual parece insignificante. Acumulativamente, consumen capacidad significativa del ciclo.

**Por qué ocurre:** Los stakeholders subestiman el costo del cambio de contexto y el impacto acumulativo de las pequeñas solicitudes. Las solicitudes son genuinamente pequeñas individualmente. El patrón es invisible para el stakeholder y a veces para el equipo.

**Daño que causa:**
- Los objetivos primarios sufren a medida que la atención del equipo se fragmenta
- El registro de interrupciones se llena con solicitudes demasiado pequeñas para individualmente justificar preocupación
- La flow efficiency cae porque las tareas pequeñas crean cambio de contexto
- El Product Strategist enfrenta presión social para aprobar cada solicitud individual (cada una parece razonable) incluso cuando el patrón es dañino

**Respuesta:**

**Hacer visible el patrón.** Los datos del registro de interrupciones muestran cuántas solicitudes pequeñas fueron absorbidas en un ciclo. Presentar estos datos en el CVR y en conversaciones con el stakeholder: "En el último ciclo, 7 solicitudes pequeñas de tu equipo representaron aproximadamente 4 días hábiles de capacidad. Eso es aproximadamente el 20% del trabajo disponible del ciclo."

**Agrupar las solicitudes pequeñas.** En lugar de manejar cada solicitud pequeña individualmente, establecer con el stakeholder que las solicitudes pequeñas se agrupan y se abordan con una frecuencia definida — por ejemplo, un bloque de dos horas una vez por ciclo dedicado a pequeñas mejoras para su área.

**Crear un umbral de tamaño mínimo para el procesamiento en Expedite.** Una solicitud que toma menos de medio día no recibe tratamiento de Expedite a menos que sea un P1 genuino. Va al grupo.

### 10.5 La Sorpresa Post-Ciclo

**Patrón:** Al cierre del ciclo o después de la entrega, un stakeholder dice "pensé que esto iba a incluir X." La funcionalidad, comportamiento o elemento de alcance que esperaban nunca estuvo en el plan del ciclo, pero asumieron que estaba incluido.

**Por qué ocurre:** El Anuncio de Inicio de Ciclo no fue enviado, no fue leído, o no excluyó explícitamente el ítem. El stakeholder hizo una suposición que nunca fue contrastada con el plan real.

**Daño que causa:**
- El trabajo entregado es rechazado o requiere rework
- La confianza del stakeholder se erosiona ("entregaron la cosa equivocada")
- El historial de entrega del equipo sufre por trabajo que técnicamente estaba dentro del alcance
- Todos están frustrados por una razón prevenible

**Respuesta:**

**La prevención es la única solución real.** La sección "no está en este ciclo" del Anuncio de Inicio de Ciclo existe específicamente para este patrón. Úsala para cualquier cosa que un stakeholder podría asumir razonablemente que está incluida.

**Cuando ocurre una sorpresa post-ciclo:** No discutas sobre cuál entendimiento era correcto. Reconoce la desalineación: "Veo que hubo un malentendido sobre qué incluía este ciclo. Eso es responsabilidad mía — debería haber sido más explícito en el anuncio. [Ítem X] será evaluado para el próximo ciclo."

Luego corrige la prevención: actualiza la plantilla o proceso del anuncio para prevenir que el mismo tipo de suposición ocurra de nuevo.

**Seguimiento de patrones:** Si las sorpresas post-ciclo ocurren más de una vez, rastrea qué tipo de suposición se hizo cada vez. ¿Hay una categoría de trabajo que los stakeholders consistentemente asumen está incluida? Esa categoría debe nombrarse y gestionarse explícitamente en cada anuncio futuro.

---

## Resumen: Los Compromisos del Product Strategist en la Gestión de Stakeholders

Las prácticas de este documento se reducen a un conjunto de compromisos que el Product Strategist asume para mantener un entorno de stakeholders funcional:

```
Compromisos de comunicación:
□ Anuncio de Inicio de Ciclo dentro de las 24 horas del Smart Planning
□ Cycle Visibility Report dentro de las 24 horas del cierre del ciclo
□ Notificación mid-cycle cada vez que existe una condición disparadora
□ Respuesta a comunicaciones de stakeholders dentro de un día hábil
□ Reunión trimestral de Alineación de Roadmap con stakeholders clave

Compromisos de honestidad:
□ Nombrar los incumplimientos directamente en el CVR — sin eufemismos
□ Asignar niveles de confianza precisos a los ítems del roadmap
□ Comunicar extensión o riesgo de objetivo antes de la fecha límite, no después
□ Presentar los datos detrás de las decisiones de priorización, no solo las decisiones

Compromisos de proceso:
□ Todas las solicitudes pasan por la clasificación de interrupciones
□ No se hacen compromisos informales en reuniones o conversaciones ad hoc
□ Los intentos de rodeo se abordan con prontitud y claridad
□ Las prioridades competitivas se resuelven de manera transparente
  con ambos stakeholders

Compromisos estructurales:
□ El equipo nunca es la cara de las decisiones de alcance —
  eso pertenece al Product Strategist
□ El Flow Master y el Product Strategist se alinean en las respuestas
  a la presión de los stakeholders
□ Los anti-patrones de stakeholders se nombran y abordan cuando
  aparecen por primera vez
```

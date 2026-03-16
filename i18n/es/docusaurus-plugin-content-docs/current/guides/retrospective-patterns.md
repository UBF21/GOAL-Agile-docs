---
id: retrospective-patterns
title: Biblioteca de Patrones de Retrospectiva
sidebar_position: 6
description: Referencia completa de formatos para las retrospectivas GOAL, con nueve patrones para cada situación, desde ciclos estándar hasta recuperación de incidentes, baja moral y sesiones entre equipos.
---

## Tabla de Contenidos

1. [Cuándo Usar Cada Patrón — Árbol de Decisión](#1-cuándo-usar-cada-patrón--árbol-de-decisión)
2. [Patrón 1 — Retrospectiva Estándar Basada en Datos](#2-patrón-1--retrospectiva-estándar-basada-en-datos)
3. [Patrón 2 — Primera Retrospectiva](#3-patrón-2--primera-retrospectiva)
4. [Patrón 3 — Retrospectiva Post-Incidente](#4-patrón-3--retrospectiva-post-incidente)
5. [Patrón 4 — Retrospectiva de Baja Moral](#5-patrón-4--retrospectiva-de-baja-moral)
6. [Patrón 5 — Retrospectiva de Alto Rendimiento](#6-patrón-5--retrospectiva-de-alto-rendimiento)
7. [Patrón 6 — Retrospectiva Post-Gran-Funcionalidad](#7-patrón-6--retrospectiva-post-gran-funcionalidad)
8. [Patrón 7 — Retrospectiva Entre Equipos](#8-patrón-7--retrospectiva-entre-equipos)
9. [Patrón 8 — Retrospectiva de Reinicio Trimestral](#9-patrón-8--retrospectiva-de-reinicio-trimestral)
10. [Patrón 9 — Retrospectiva de Recuperación](#10-patrón-9--retrospectiva-de-recuperación)
11. [Guía de Facilitación de Retrospectivas](#11-guía-de-facilitación-de-retrospectivas)
12. [Gestión del Resultado de las Retrospectivas](#12-gestión-del-resultado-de-las-retrospectivas)

---

## 1. Cuándo Usar Cada Patrón — Árbol de Decisión

Comienza desde arriba y sigue la primera condición que aplique.

```
INICIO
  │
  ├─ ¿Es el primer ciclo del equipo con GOAL?
  │     └─ SÍ → Patrón 2: Primera Retrospectiva
  │
  ├─ ¿Ocurrió un incidente de producción P1 durante este ciclo?
  │     └─ SÍ → Patrón 3: Retrospectiva Post-Incidente
  │              (Ejecutar además de la retrospectiva estándar si el ciclo fue
  │               normal en otros aspectos)
  │
  ├─ ¿El equipo está visiblemente agotado, desmoralizado o experimenta conflictos?
  │     └─ SÍ → Patrón 4: Retrospectiva de Baja Moral
  │
  ├─ ¿El equipo acaba de entregar una funcionalidad importante, un lanzamiento o un hito?
  │     └─ SÍ → Patrón 6: Retrospectiva Post-Gran-Funcionalidad
  │
  ├─ ¿Es una sesión entre equipos que involucra más de un equipo GOAL?
  │     └─ SÍ → Patrón 7: Retrospectiva Entre Equipos
  │
  ├─ ¿Es el último ciclo del trimestre o de un período de planificación importante?
  │     └─ SÍ → Patrón 8: Retrospectiva de Reinicio Trimestral
  │
  ├─ ¿El ciclo falló, se extendió más de una vez o no alcanzó sus objetivos significativamente?
  │     └─ SÍ → Patrón 9: Retrospectiva de Recuperación
  │
  ├─ ¿El equipo opera consistentemente a altos niveles sin problemas importantes?
  │     └─ SÍ → Patrón 5: Retrospectiva de Alto Rendimiento
  │
  └─ Ninguna de las anteriores aplica
        └─ Patrón 1: Retrospectiva Estándar Basada en Datos
```

**Usar múltiples patrones en un ciclo:**

Algunos ciclos pueden calificar para más de un patrón. Orientación:
- Post-Incidente + Estándar: Ejecutar el Patrón 3 como sesión independiente primero, luego realizar una retrospectiva Estándar más corta para el resto del ciclo
- Baja Moral + Recuperación: El Patrón 4 tiene precedencia; los elementos de recuperación pueden integrarse dentro de él
- Alto Rendimiento + Post-Gran-Funcionalidad: Ejecutar el Patrón 6; ya contiene elementos de alto rendimiento

---

## 2. Patrón 1 — Retrospectiva Estándar Basada en Datos

### Descripción General

El formato de retrospectiva predeterminado para todos los ciclos normales. Se usa cuando no aplican circunstancias especiales. Construido en torno a métricas de flujo en lugar de sentimientos u opiniones, este formato produce mejoras accionables basadas en evidencia.

**Duración:** 45–60 minutos
**Participantes:** Todos los roles (Flow Master, Product Strategist, Delivery Team completo)
**Cuándo:** Inmediatamente después del Goal Review, al final de cada ciclo
**Datos mínimos requeridos:** Al menos los datos de métricas de un ciclo anterior

---

### Preparación Previa a la Retrospectiva (Flow Master)

Antes de la sesión, preparar:
- Cycle Time de este ciclo vs. el ciclo anterior (promedio y varianza)
- Flow Efficiency % de este ciclo vs. el ciclo anterior
- Block Rate de este ciclo (tareas bloqueadas / total de tareas × 100)
- Delivery Rate (tareas completadas por día hábil)
- Tasa de cumplimiento del WIP (días en o por debajo del WIP Limit / total de días)
- Resumen del Block Register (tipos y conteos)
- Lista de mejoras de la retrospectiva anterior y su estado de implementación

Presentar estos datos como un dashboard simple — no un informe. El objetivo es ver patrones, no generar una presentación.

---

### Agenda

**Segmento 1: Revisión de Métricas (15 minutos)**

Abrir con el dashboard de datos. Recorrer cada métrica:

*Cycle Time:*
- ¿Cuál fue el Cycle Time promedio en este ciclo?
- ¿Mejoró o retrocedió respecto al ciclo anterior?
- ¿Hubo valores atípicos (tareas que tardaron significativamente más que el promedio)? ¿Qué los causó?

*Flow Efficiency:*
- ¿Qué porcentaje del tiempo total de flujo fue trabajo activo?
- ¿Qué porcentaje fue espera?
- ¿Dónde se concentró la mayor parte de la espera? (¿En Ready? ¿En Code Review? ¿En Validation?)

*Block Rate:*
- ¿Qué porcentaje de tareas encontró un bloqueante?
- ¿Cuáles fueron los tipos de bloqueante más comunes (Técnico / Externo / Negocio / Dependencia / Infraestructura)?
- ¿Hay tipos que se repiten en múltiples ciclos?

*Delivery Rate:*
- ¿Cuántas tareas se completaron por día hábil en promedio?
- ¿El ritmo fue consistente a lo largo del ciclo o se concentró al final?

*WIP Compliance:*
- ¿Se respetaron los WIP Limits?
- En los días en que se superó el límite, ¿cuál fue el motivo?

**Regla importante:** Si un miembro del equipo hace una observación subjetiva ("sentí que fuimos muy lentos este ciclo"), el facilitador pregunta: "¿Qué muestran los datos al respecto?" Esto no es desestimación — es investigación. Si los datos no respaldan el sentimiento, el sentimiento puede ser sobre algo que las métricas no están capturando. En ese caso, anotarlo como observación cualitativa e investigar qué no se está midiendo.

---

**Segmento 2: Análisis del Block Register (10 minutos)**

Revisar el Block Register como ejercicio de búsqueda de patrones, no de asignación de culpa.

Preguntas a hacer:
1. ¿Cuáles fueron los 3 principales tipos de bloqueante en este ciclo?
2. ¿Ha aparecido alguno de estos tipos de bloqueante en los últimos 3 ciclos?
3. Para los bloqueantes recurrentes: ¿hay un cambio estructural que evitaría su recurrencia?
4. ¿Hay tareas, categorías de tareas o miembros del equipo cuyo trabajo está bloqueado de forma desproporcionada?

El objetivo de este segmento es identificar problemas sistémicos, no fallos individuales. Si el trabajo de una persona específica siempre está bloqueado por una dependencia externa específica, la pregunta es "¿cómo resolvemos esa dependencia?" no "¿por qué sigue ocurriéndole esto?"

---

**Segmento 3: Identificación de Mejoras (15 minutos)**

Basándose en lo que revelaron los datos, identificar 1 a 3 mejoras específicas y accionables.

**Criterios de calidad de las mejoras:**

Una buena mejora es:
- **Específica:** No "mejorar la comunicación" sino "el Flow Master señalará cualquier tarea bloqueada que siga abierta a las 24 horas en el daily sync"
- **Tiene propietario:** Una persona nombrada es responsable de implementarla
- **Medible:** Hay una señal clara que indica si funcionó (una métrica que debe cambiar, un comportamiento que debe aparecer)
- **Alcanzable en un ciclo:** Si tardaría más de un ciclo implementarla, descomponerla

**Ejercicio de generación de mejoras:**

Escribir todas las mejoras candidatas en una superficie compartida. Votar por las 3 principales con puntos (cada persona obtiene 2 votos). Las 3 primeras avanzan. Las demás se archivan para consideración en una futura retrospectiva.

---

**Segmento 4: Revisión de Mejoras Anteriores (10 minutos)**

Antes de cerrar, revisar las mejoras de la retrospectiva anterior:

Para cada mejora anterior:
- ¿Se implementó? (Sí / Parcialmente / No)
- Si sí: ¿funcionó? ¿Qué cambió en las métricas?
- Si no: ¿por qué no? ¿Sigue valiendo la pena implementarla o debe descartarse?

Este segmento es lo que hace que las retrospectivas se acumulen con el tiempo. Los equipos que lo omiten rompen el bucle de mejora y las retrospectivas se vuelven puramente expresivas en lugar de funcionales.

---

**Segmento 5: Cierre (5 minutos)**

El Flow Master resume:
- 3 mejoras para el próximo ciclo, con propietarios nombrados
- El hallazgo de datos de este ciclo que más sorprendió al equipo (hace los datos memorables)
- Reconocimiento por un esfuerzo específico del equipo que fue visible en los datos o en la retrospectiva

---

### Variaciones Comunes

**Variante de ciclo corto (para ciclos de 1 semana):** Reducir el Segmento 1 a 8 minutos distribuyendo el dashboard de métricas previamente. Omitir el Segmento 4 si este es el segundo ciclo (no hay mejoras anteriores que revisar). Total: 35–40 minutos.

**Variante remota:** Distribuir el dashboard de métricas 24 horas antes de la retrospectiva. Usar un tablero digital compartido (Miro, FigJam, etc.) para el ejercicio de identificación de mejoras. Asegurarse de que todos los participantes tengan la cámara activada para el Segmento 2 en adelante — el lenguaje corporal importa cuando se discuten bloqueantes.

---

## 3. Patrón 2 — Primera Retrospectiva

### Descripción General

La primera retrospectiva que ejecuta un equipo después de adoptar GOAL. Este formato prioriza la seguridad psicológica, la orientación al aprendizaje y el establecimiento de expectativas correctas por encima del análisis basado en métricas. En esta etapa, el equipo aún no tiene suficientes datos para el formato Estándar, y usarlo produciría precisión falsa.

**Duración:** 60 minutos
**Participantes:** Todos los roles
**Cuándo:** Después del primer ciclo GOAL completo
**Datos mínimos requeridos:** Ninguno — este formato no depende de métricas

---

### Establecer el Escenario (Flow Master — 3 minutos)

La declaración de apertura debe ser explícita y entregarse antes que cualquier otra cosa:

*"Esta es nuestra primera retrospectiva de GOAL. Quiero nombrar lo que esta sesión no es: no es una revisión de desempeño, no es un cuadro de puntuación y no es una evaluación de si algún individuo hizo un buen trabajo.*

*Lo que sí es: una sesión de aprendizaje. Hemos estado probando algo nuevo durante [X días]. Esta es nuestra oportunidad de preguntar — honestamente — ¿qué aprendimos? ¿Qué funcionó? ¿Qué fue difícil? ¿Qué queremos hacer diferente?*

*Todo lo que discutamos aquí es sobre nuestro proceso, no sobre ninguna persona. Si algo salió mal, buscamos qué en el proceso permitió que ocurriera, no quién lo causó."*

---

### Agenda

**Segmento 1: ¿Qué se sintió diferente? (15 minutos)**

Por turnos — cada persona comparte una cosa que se sintió notablemente diferente de cómo trabajaba el equipo antes de GOAL.

El facilitador captura cada respuesta en una superficie compartida y las organiza en vivo en cuatro categorías:

| Mejor | Más difícil | Neutral | Sorprendente |
|-------|------------|---------|--------------|
| Cosas que se sintieron como una mejora | Cosas que fueron más difíciles | Cosas que se sintieron igual | Cosas que el equipo no esperaba |

Sin discusión durante la recopilación. Solo capturar. La discusión ocurre en los siguientes segmentos.

---

**Segmento 2: ¿Qué vamos a conservar? (10 minutos)**

Mirar la columna de "Mejor". Para cada ítem, preguntar:
- ¿Esto ocurrió por accidente o lo construimos deliberadamente?
- ¿Cómo nos aseguramos de que esto continúe en el ciclo 2?

Identificar 1–2 prácticas que el equipo se compromete a preservar explícitamente.

---

**Segmento 3: ¿Qué fue difícil? (15 minutos)**

Mirar la columna de "Más difícil". Para cada ítem, el facilitador pregunta:

*"¿Es difícil porque es nuevo y no estamos familiarizados? ¿O es difícil porque algo en el proceso no está funcionando para nosotros?"*

Clasificar cada ítem:
- **Difícil-Desconocido:** "Esto se volverá más fácil con la práctica. No se necesitan cambios."
- **Difícil-Estructural:** "Algo en el proceso necesita cambiar."

Solo los ítems Difícil-Estructural avanzan a la etapa de mejora.

---

**Segmento 4: Preguntas de seguridad (10 minutos)**

Estas preguntas están diseñadas para visibilizar preocupaciones que las personas pueden estar guardando pero que no han expresado aún. Responder a cada una como grupo, brevemente.

1. "¿Hay algo de GOAL que creen que no funcionará para nuestro equipo específico?" (Visibilizar las dudas temprano)
2. "¿Hubo un momento en el ciclo en que sintieron que el proceso se interponía en su camino?" (Visibilizar los puntos de fricción)
3. "¿Hay alguien cuya experiencia de este ciclo fue significativamente diferente de lo que hemos discutido?" (Visibilizar los casos atípicos)

Estos no son problemas a resolver en esta retrospectiva — son datos a reconocer. Si surge algo que requiere acción inmediata, anotarlo y abordarlo después de la sesión.

---

**Segmento 5: Establecer expectativas para el ciclo 2 (7 minutos)**

El Flow Master se dirige al equipo directamente:

*"En el ciclo 2, haremos la mayoría de las mismas cosas que hicimos en el ciclo 1, pero de forma más deliberada. Esto es lo que les pido que enfoquen: [nombrar las 1–2 metas de comportamiento para el ciclo 2, basadas en lo que surgió en la retro — ej., 'actualizar el tablero en tiempo real' o 'marcar los bloqueantes el día en que ocurren'].*

*Esto es en lo que no nos vamos a enfocar: [nombrar las métricas que aún es demasiado temprano para optimizar — ej., 'Flow Efficiency' o 'Cycle Accuracy']. Eso importará más adelante. Ahora mismo, lo más importante es construir los hábitos."*

---

**Segmento 6: Mejoras para el ciclo 2 (5 minutos)**

De los ítems Difícil-Estructural del Segmento 3, identificar 1–3 mejoras.

Aplicar los mismos criterios de calidad que en la retrospectiva Estándar:
- Específica, con propietario, medible, alcanzable en un ciclo

Escribirlas en el tablero antes de que termine la sesión.

---

**Cierre (5 minutos)**

Cada persona comparte una palabra que describe cómo se siente al entrar al ciclo 2.

El Flow Master cierra con: "Gracias. Hemos iniciado el bucle de mejora. Revisemos [señalar las mejoras] en el ciclo 2."

---

### Lo que NO Hacer en la Primera Retrospectiva

- No calcular ni presentar métricas de flujo como medidas del desempeño del ciclo 1
- No comparar al equipo con referencias de la industria ni con otros equipos
- No presionar a los miembros del equipo que están callados — usar opciones de respuesta escrita si es necesario
- No generar una lista larga de mejoras — solo 1–3
- No cerrar sin confirmar propietarios para cada mejora

---

## 4. Patrón 3 — Retrospectiva Post-Incidente

### Descripción General

Se activa cuando ocurrió un incidente de producción P1 durante o adyacente al ciclo GOAL. Este formato es libre de culpa por diseño. Su propósito es entender los sistemas y condiciones que permitieron que ocurriera el incidente, y producir cambios estructurales que reduzcan la probabilidad de recurrencia.

Esta retrospectiva se realiza típicamente además de (no en lugar de) la retrospectiva Estándar de fin de ciclo. Puede realizarse antes — dentro de las 48 horas de la resolución del incidente — mientras los detalles aún están frescos.

**Duración:** 60–90 minutos
**Participantes:** Todos los involucrados en o afectados por el incidente. El Flow Master facilita.
**Cuándo:** Dentro de las 48–72 horas de la resolución del incidente
**Datos mínimos requeridos:** Cronología del incidente (obligatoria — debe construirse antes de la sesión)

---

### Pre-Sesión: Construir la Cronología

Antes de que comience la retrospectiva, construir una cronología cronológica del incidente. Esto es esencial — la cronología previene la distorsión de la memoria y asegura que la discusión esté basada en hechos, no en sentimientos.

**Formato de la cronología:**

```
Fecha/Hora   | Evento                              | Actor         | Fuente
─────────────┼─────────────────────────────────────┼───────────────┼──────────
[timestamp]  | [qué ocurrió]                       | [quién/qué]   | [log/mensaje/memoria]
[timestamp]  | [primera alerta activada]            | [monitoreo]   | [sistema de alertas]
[timestamp]  | [primer aviso al ingeniero]          | [nombre]      | [log de guardia]
[timestamp]  | [diagnóstico inicial]               | [nombre]      | [log de chat]
[timestamp]  | [primer intento de remediación]     | [nombre]      | [log de despliegue]
[timestamp]  | [escalación]                        | [nombre]      | [ticket]
[timestamp]  | [resolución]                        | [nombre]      | [log de despliegue]
[timestamp]  | [confirmación de todo claro]        | [nombre]      | [monitoreo]
```

La cronología debe construirse colaborativamente antes de la sesión usando registros reales, no solo desde la memoria. Asignar a una persona para ensamblarla.

---

### Apertura: El Contrato Libre de Culpa (5 minutos)

El facilitador abre con una declaración explícita del formato libre de culpa. Esto no es opcional — establece el contrato psicológico para todo lo que sigue.

*"Esta retrospectiva opera bajo un supuesto fundamental: todas las personas involucradas en este incidente tomaron las mejores decisiones que pudieron con la información que tenían en ese momento. No estamos aquí para encontrar quién cometió un error. Estamos aquí para encontrar qué en nuestros sistemas, procesos y entorno permitió que esto ocurriera — y qué podemos cambiar para que sea menos probable que ocurra de nuevo.*

*Durante esta sesión, redigiré cualquier declaración que atribuya el incidente al fallo de un individuo. Si tienen observaciones sobre el desempeño individual, por favor abórdenlas por separado y en privado con el manager apropiado. En este espacio, investigamos sistemas."*

---

### Agenda

**Segmento 1: Recorrido de la Cronología (15–20 minutos)**

Recorrer juntos la cronología del incidente preconstruida. Como grupo:
- Confirmar la precisión (¿faltan eventos? ¿hay marcas de tiempo incorrectas?)
- Notar los puntos de decisión (momentos en que una acción diferente podría haber cambiado el resultado)
- Notar los puntos de sorpresa (cosas que funcionaron de manera diferente a lo esperado)

Sin análisis aún — solo confirmar el registro factual.

---

**Segmento 2: Análisis de Causa Raíz con los 5 Por Qués (20–25 minutos)**

Comenzando desde el evento desencadenante del incidente, aplicar la técnica de los 5 Por Qués. Preguntar "¿por qué ocurrió esto?" para cada respuesta hasta alcanzar la causa raíz estructural.

**Ejemplo:**

```
Incidente: El servicio de pagos devolvió errores 500 durante 40 minutos

¿Por qué el servicio de pagos devolvió errores?
→ El pool de conexiones de la base de datos se agotó

¿Por qué se agotó el pool de conexiones?
→ Un pico de tráfico de una campaña de marketing aumentó el volumen de solicitudes en un 400%

¿Por qué el servicio no pudo manejar un incremento del 400% en el tráfico?
→ El auto-escalado no estaba configurado para el servicio de pagos

¿Por qué no estaba configurado el auto-escalado?
→ El servicio de pagos fue migrado del sistema legado sin replicar su configuración de infraestructura

¿Por qué fue migrado sin replicar la configuración?
→ La lista de verificación de migración no incluía una revisión de paridad de infraestructura

Causa raíz: Sin revisión de paridad de infraestructura en el proceso de migración
```

El facilitador documenta cada paso. Cuando emergen dos caminos diferentes (dos explicaciones diferentes para el mismo evento), seguir ambos. Las múltiples causas raíz son comunes y más honestas que forzar una única explicación.

**Regla del facilitador:** Si la cadena de los 5 Por Qués llega a "una persona tomó una decisión" sin profundizar más, hacer una pregunta más: "¿Por qué esta persona estaba en posición de tomar esa decisión sin una red de seguridad?" Esto pasa de la culpa individual al análisis sistémico.

---

**Segmento 3: Análisis de Factores Contribuyentes (10 minutos)**

Más allá de la causa raíz, identificar factores contribuyentes — condiciones que no causaron el incidente pero lo empeoraron o dificultaron su resolución.

Categorías comunes de factores contribuyentes:
- **Brecha de detección:** ¿Por qué no se detectó esto antes?
- **Brecha de recuperación:** ¿Qué hizo que la recuperación fuera más lenta de lo que debería haber sido?
- **Brecha de comunicación:** ¿Se notificó a las personas correctas de manera oportuna?
- **Brecha de conocimiento:** ¿Hubo falta de documentación, runbooks o contexto que dificultó el diagnóstico?
- **Brecha de proceso:** ¿Hay un paso en nuestro proceso que debería haber prevenido esto?

---

**Segmento 4: Ítems de Acción (15 minutos)**

Generar ítems de acción concretos y estructurales. Para cada uno, registrar:

```
Acción:           [cambio específico a realizar]
Tipo:             [Prevención / Detección / Recuperación / Proceso]
Propietario:      [individuo nombrado]
Fecha límite:     [fecha específica — no "pronto" o "el próximo sprint"]
Señal de éxito:   [qué será verdad cuando esto esté hecho]
```

**Reglas de calidad de los ítems de acción:**
- Mínimo 1 ítem de Prevención, 1 de Detección, 1 de Recuperación para cada incidente importante
- Todos los ítems de acción deben tener propietarios nombrados — no "el equipo" o "DevOps"
- Las fechas límite deben ser específicas
- Máximo 5 ítems de acción — si se generan más, priorizar por impacto

---

**Segmento 5: Cierre (5 minutos)**

Confirmar:
- Los ítems de acción y sus propietarios están documentados
- Se programa un seguimiento para cada ítem de acción en su fecha límite
- La cronología del incidente se añadirá a la base de conocimiento del equipo

Pregunta final: "¿Hay algo sobre cómo manejamos este incidente de lo que debamos estar orgullosos?" Esto no es un formalismo — identifica qué funcionó y debe repetirse.

---

### Cómo Prevenir el Comportamiento Defensivo

**Si alguien desvía hacia la culpa individual:**
"Entiendo. Para los propósitos de esta sesión, volvamos a la pregunta sistémica: ¿qué en nuestro proceso permitió que esa decisión se tomara sin una red de seguridad?"

**Si alguien guarda silencio:**
"[Nombre], estuviste involucrado en [parte de la cronología]. ¿Cuál era tu comprensión de la situación en ese punto?" (pregunta específica y factual, no un desafío)

**Si la conversación se calienta:**
"Volvamos a la cronología. ¿Qué muestra el registro que ocurrió a las [hora específica]?" (redirigir a los hechos)

**Si la dirección está en la sala y crea presión:**
Abrir con énfasis adicional en el contrato libre de culpa. Si el comportamiento de la dirección socava activamente el formato libre de culpa (persiguiendo culpas), detener la sesión y reprogramarla con un contrato más claro.

---

## 5. Patrón 4 — Retrospectiva de Baja Moral

### Descripción General

Se usa cuando el equipo está agotado, desmoralizado, experimentando conflictos o en un período prolongado de baja energía. El formato Estándar Basado en Datos sería contraproducente aquí: enfocarse en métricas en un equipo desmoralizado se lee como "necesitamos que rindan mejor" cuando el mensaje real debe ser "vemos que están luchando y queremos ayudar."

**Duración:** 60 minutos
**Participantes:** Todos los roles — el Flow Master facilita, pero un facilitador externo neutral es preferible si hay uno disponible
**Cuándo:** Cuando estén presentes al menos tres o más de las señales a continuación

---

### Señales de que se Necesita Este Patrón

Antes de decidir usar este patrón, buscar al menos tres de las siguientes:

**Señales de comportamiento:**
- La participación en las ceremonias ha disminuido visiblemente (las personas están más calladas, menos comprometidas)
- El Flow Board se está actualizando con menos fiabilidad que en ciclos anteriores
- La comunicación informal del equipo ha disminuido (menos conversaciones en Slack, menos charlas espontáneas)
- Los miembros del equipo trabajan más horas de lo normal

**Señales verbales:**
- Comentarios cínicos o despectivos sobre la metodología o el trabajo
- Lenguaje del tipo "de todas formas no importa"
- Expresiones de impotencia ante problemas recurrentes
- Silencio cuando se solicita aportación

**Señales de desempeño:**
- La Delivery Rate ha caído sin explicación en la carga de trabajo
- El Block Rate está aumentando sin mayor complejidad
- Un miembro del equipo de alto rendimiento de repente se ha vuelto retraído

Si solo están presentes una o dos señales, considerar una conversación de verificación breve antes de la retrospectiva en lugar de cambiar el formato completamente.

---

### Apertura: Crear el Espacio Seguro (10 minutos)

La apertura de esta retrospectiva requiere más cuidado de lo habitual.

**Configuración del espacio/entorno:**
- Si es posible, cambiar el entorno físico o virtual del ambiente normal de reuniones. Una sala diferente, un fondo diferente, sin compartir pantalla al principio.
- Mantener el tamaño del equipo pequeño. Si un equipo grande usa este patrón, dividir en subgrupos de 3 a 4.
- Cámaras activadas pero no obligatorias si alguien está visiblemente angustiado.

**Declaración de apertura:**

*"Quiero reconocer algo directamente: he notado que el equipo ha estado cargando mucho últimamente. [Nombrar 1–2 cosas específicas observadas — no diagnósticos, solo observaciones: 'hemos tenido tres ciclos seguidos con extensiones significativas' o 'ha habido algunos incidentes muy difíciles este trimestre'].*

*Esta retrospectiva no es una retrospectiva normal. No vamos a revisar las métricas. Vamos a pasar este tiempo en una pregunta: ¿qué está haciendo el trabajo difícil ahora mismo, y qué podemos eliminar o reducir?*

*Nada de lo que se diga aquí se usará para evaluación de desempeño. No estoy aquí para medirles ni evaluarles. Estoy aquí para entender qué necesita el equipo."*

---

### Agenda

**Segmento 1: ¿Cómo están realmente todos? (10 minutos)**

Verificación de escala — cada persona responde dos preguntas en una escala de 1 a 5 (1 = muy mal, 5 = muy bien). No se requiere explicación a menos que quieran compartir.

```
Pregunta 1: ¿Cómo te sientes con respecto al trabajo ahora mismo?
Pregunta 2: ¿Cómo te sientes con respecto al equipo ahora mismo?
```

Capturar las puntuaciones de forma visible. Si el promedio está por debajo de 3 en cualquier pregunta, ese dato abre la conversación.

Alternativa opcional para grupos donde las escalas numéricas se sienten clínicas: cada persona elige un emoji o metáfora climática (tormenta, nublado, parcialmente nublado, soleado). El formato importa menos que la respuesta honesta.

---

**Segmento 2: ¿Qué está haciendo el trabajo difícil? (20 minutos)**

Cada persona escribe sus respuestas individualmente en notas adhesivas (digitales o físicas) antes de compartirlas:

Pregunta: "¿Qué está haciendo que el trabajo se sienta más difícil de lo que debería ahora mismo?"

Sin filtros, sin calificaciones. Escribir lo que es verdad.

El facilitador recoge las respuestas y las agrupa:

| En nuestro control | Parcialmente en nuestro control | Fuera de nuestro control |
|--------------------|----------------------------------|--------------------------|

El grupo se enfoca en la categoría "En nuestro control". Las otras categorías se reconocen, no se ignoran.

**Regla para este segmento:** Sin juicios sobre lo que escriben las personas. Sin respuestas del tipo "pero eso no es realmente un problema". La experiencia de dificultad es válida independientemente de si cumple un umbral objetivo.

---

**Segmento 3: ¿Qué podemos eliminar o reducir? (15 minutos)**

Enfocarse solo en los ítems de la columna "En nuestro control".

Para cada ítem, el grupo pregunta: "Si pudiéramos cambiar una cosa sobre esta situación, ¿qué sería?"

Esta pregunta tiene un diseño específico: se enfoca en la eliminación y reducción, no en la adición. Un equipo desmoralizado no necesita más proceso. Necesita menos fricción.

**Lo que NO hacer:**
- No sugerir agregar nuevas métricas o seguimiento
- No sugerir agregar ceremonias
- No sugerir soluciones motivacionales ("necesitamos celebrar más")
- No sugerir que los miembros del equipo necesiten cambiar su actitud

**Lo que hacer:**
- Identificar bloqueantes específicos, puntos de fricción o problemas estructurales que pueden eliminarse
- Identificar fuentes específicas de sobrecarga que pueden reducirse
- Identificar decisiones o aclaraciones específicas que están pendientes y drenan energía

---

**Segmento 4: El plan 1-2-3 (10 minutos)**

Identificar lo siguiente y nada más:

1. **Una cosa que dejamos de hacer** (una reunión, un paso de proceso, un informe que drena energía sin producir valor)
2. **Una cosa que reducimos** (frecuencia de una ceremonia, alcance de un requisito, algo abrumador convertido en más manejable)
3. **Una cosa que cambiamos** (un problema estructural específico que tiene una solución específica)

Cada ítem tiene un propietario. Estos tres ítems son las únicas mejoras de esta retrospectiva. Resistir el impulso de generar una lista más larga.

---

**Cierre (5 minutos)**

El facilitador cierra sin revisión de métricas, sin comentarios sobre el desempeño y sin presión.

*"Gracias por ser honestos hoy. Eso no es fácil de hacer. Esto es lo que acordamos: [leer el plan 1-2-3]. Haré seguimiento personal de estos.*

*Una cosa más: veo un equipo que trabaja duro y se preocupa por el trabajo, incluso cuando es difícil. Eso importa."*

Terminar la sesión. No extenderla.

---

### Lo que NO Hacer en una Retrospectiva de Baja Moral

- No mostrar el dashboard de métricas. Un equipo desmoralizado no necesita ver una gráfica de Flow Efficiency en declive.
- No dar una charla motivacional. El optimismo manufacturado en una sala llena de personas cansadas se lee como condescendencia.
- No minimizar la experiencia del equipo: "No está tan mal" es lo más dañino que puede decir un facilitador.
- No hacer compromisos que no puedes cumplir. Solo prometer cambios que están realmente dentro de tu autoridad.
- No terminar pidiendo al equipo que "se mantenga positivo" o "se mantenga motivado."

---

## 6. Patrón 5 — Retrospectiva de Alto Rendimiento

### Descripción General

Se usa cuando el equipo opera consistentemente a altos niveles — los objetivos se cumplen, las métricas son saludables y el equipo está en un buen ritmo. La retrospectiva estándar puede no producir mejoras significativas cuando todo funciona bien. Este patrón cambia el enfoque hacia extender la excelencia, no solo mantenerla.

**Duración:** 60 minutos
**Participantes:** Todos los roles
**Cuándo:** Cuando los tres siguientes son verdaderos durante al menos 2 ciclos consecutivos:
- Todos los objetivos primarios fueron alcanzados
- La Flow Efficiency está por encima del 30%
- El Block Rate está por debajo del 15%

---

### Apertura: Nombrar el Logro (5 minutos)

Comenzar nombrando explícitamente el desempeño:

*"Estamos aquí porque los datos muestran que estamos trabajando bien. [Métrica específica] está en [valor] — uno de los mejores que hemos visto. [Otra métrica] ha sido consistente durante [X] ciclos. Esto vale la pena nombrarlo. Hoy, en lugar de preguntar '¿qué está roto?', preguntamos '¿qué podemos hacer aún mejor?' y '¿qué queremos aprender a continuación?'"*

---

### Agenda

**Segmento 1: ¿Qué nos trajo aquí? (10 minutos)**

El equipo responde: ¿qué específicamente estamos haciendo que produce estos resultados?

Esto no es obvio. Los equipos de alto rendimiento a menudo no pueden articular por qué rinden bien, lo que significa que no pueden reproducirlo si son perturbados. Hacer explícitas las prácticas subyacentes es esencial.

Cada persona nombra una práctica, hábito o condición que cree que es más responsable del rendimiento actual.

El facilitador agrupa las respuestas e identifica las 3 mencionadas con más frecuencia. Estas se convierten en los "anclas de rendimiento" del equipo — las cosas que deben protegerse.

---

**Segmento 2: El límite de nuestra capacidad actual (15 minutos)**

Cuando nada está roto, la mejora significa avanzar hacia el límite de la capacidad actual.

Preguntas para explorar:
- ¿Qué tipo de trabajo aún tarda más de lo que quisiéramos?
- ¿Qué tipo de bloqueante no logramos eliminar?
- ¿Dónde en el flujo todavía hay tiempo de espera evitable?
- ¿Cómo se vería nuestro proceso si intentáramos doblar el throughput? ¿Qué se rompería primero?

Este segmento usa preguntas como sondas en lugar de identificación de problemas. El objetivo es encontrar el próximo límite, no arreglar un problema actual.

---

**Segmento 3: Objetivos ambiciosos y experimentos (15 minutos)**

Identificar 1–2 experimentos deliberados para el próximo ciclo. Un experimento en este contexto significa:

- Un cambio específico al proceso etiquetado explícitamente como experimento (no un cambio permanente)
- Una duración definida (probarlo durante un ciclo, luego evaluar)
- Una hipótesis específica: "Creemos que [cambio] mejorará [métrica] en [cantidad]"
- Una evaluación predefinida: ¿cómo sabremos si funcionó?

Ejemplos de experimentos para equipos de alto rendimiento:
- "Reducir el Daily Flow Sync a 3x por semana en lugar de 5x y evaluar el impacto en el Cycle Time"
- "Introducir programación en parejas en todas las tareas M este ciclo y medir el cambio en el Block Rate"
- "Intentar reducir el WIP Limit en 1 y medir el impacto en la Flow Efficiency"
- "Introducir una convención de 'horas de silencio' (sin reuniones de 9–12 diariamente) y medir la Delivery Rate"

---

**Segmento 4: Intercambio de conocimiento y crecimiento del equipo (10 minutos)**

Los equipos de alto rendimiento corren el riesgo de convertirse en silos de alto rendimiento — individuos que son excelentes en su trabajo específico pero que no están haciendo crecer deliberadamente su capacidad colectiva.

Preguntas para este segmento:
- ¿Hay conocimiento o habilidad concentrado en una persona que otros se beneficiarían de tener?
- ¿Hay un miembro del equipo más nuevo o menos experimentado que se beneficiaría de mentoría deliberada?
- ¿Hay un área técnica en la que el equipo es colectivamente débil y que el próximo año requerirá?
- ¿Qué quiere ser capaz de hacer el equipo en 6 meses que no puede hacer tan fácilmente hoy?

Identificar 1 objetivo de aprendizaje para el próximo ciclo: una habilidad, tecnología o práctica específica en la que el equipo invertirá en desarrollar juntos.

---

**Segmento 5: Revisar mejoras y métricas (10 minutos)**

Segmento 4 y Segmento 1 estándar del Patrón 1:
- ¿Se implementaron las mejoras anteriores? ¿Funcionaron?
- ¿Qué muestran los datos de este ciclo?

En un equipo de alto rendimiento, este segmento es rápido. Los datos son buenos. Las mejoras se implementaron. La conversación se enfoca en lo que los datos revelan sobre el próximo límite.

---

**Cierre (5 minutos)**

Confirmar:
- 1–2 experimentos para el próximo ciclo, con propietarios y criterios de evaluación
- 1 objetivo de aprendizaje, con una acción específica para el inicio del ciclo
- Plan de protección para las anclas de rendimiento (las cosas que te trajeron aquí)

---

## 7. Patrón 6 — Retrospectiva Post-Gran-Funcionalidad

### Descripción General

Se usa después de que el equipo entrega una funcionalidad significativa, un lanzamiento de producto, una versión importante o un hito importante. El propósito es dual: celebrar la entrega y extraer todo el aprendizaje posible de la experiencia.

**Duración:** 75–90 minutos (más larga que la estándar — la profundidad está justificada)
**Participantes:** Todos los roles más cualquier stakeholder que estuvo estrechamente involucrado
**Cuándo:** Dentro de una semana después de que la entrega importante se complete

---

### Apertura: Celebrar Antes de Analizar (10 minutos)

Antes de cualquier análisis, reconocer el logro. Esto no es una cortesía — es una señal deliberada de que entregar valor importa y es reconocido.

**Opciones de celebración:**
- Compartir una métrica o resultado específico que muestre el impacto de la entrega (tasa de adopción de usuarios, cambio en la tasa de error, retroalimentación de stakeholders)
- Pedir a cada persona que nombre la contribución de la que está más orgullosa de esta funcionalidad
- Leer una cita positiva específica de un stakeholder si existe

El facilitador hace esto no opcional y no superficial. Debe tomar los 10 minutos completos.

---

### Agenda

**Segmento 1: Evaluación de la calidad de entrega (15 minutos)**

Examinar lo que se entregó contra lo que se planeó:

- ¿Cumplió la funcionalidad todos los criterios de aceptación?
- ¿Se hicieron excepciones a la Definition of Done? Si es así, ¿cuáles fueron y cuál es el plan para resolverlas?
- ¿Cuál fue la tasa de defectos en producción en la primera semana después del lanzamiento?
- ¿Cómo fue la experiencia de despliegue? (¿Fluida? ¿Complicada? ¿Requirió rollback?)

Esto no es culpa — es una revisión de calidad técnica. Si se hicieron excepciones a la DoD, la pregunta es "¿por qué?" y "¿cómo lo prevenimos la próxima vez?"

---

**Segmento 2: Discusión de validación de valor (20 minutos)**

El Product Strategist lidera este segmento. Preguntas clave:

- ¿Cuál era la hipótesis de valor original para esta funcionalidad? ("Creemos que esto [resultado] para [usuario/negocio]")
- ¿Qué datos tenemos de la primera semana que confirman o desafían esta hipótesis?
- Si no tenemos datos aún: ¿cómo sabremos en 30 días si esto entregó el valor esperado?
- ¿Hubo resultados valiosos que no anticipamos?
- ¿Hubo costos que no anticipamos (confusión de usuarios, carga de soporte, efectos secundarios técnicos)?

Este segmento es particularmente importante para conectar el trabajo de desarrollo con los resultados de negocio. Cierra el bucle desde la planificación hasta la entrega.

---

**Segmento 3: Revisión del proceso (20 minutos)**

Mirar cómo trabajó el equipo durante el período de entrega:

*¿Qué funcionó bien?*
- ¿Qué decisiones de planificación resultaron ser particularmente buenas?
- ¿Qué prácticas específicas durante la ejecución hicieron la entrega más fluida?
- ¿Hubo momentos de gestión de dependencias que salieron especialmente bien?

*¿Qué fue difícil?*
- ¿Hubo períodos de sobrecarga significativa?
- ¿Hubo decisiones que tardaron demasiado en tomarse?
- ¿Hubo descubrimientos técnicos que deberían haberse encontrado antes?
- ¿Hubo problemas de coordinación con otros equipos o stakeholders?

*¿Qué haríamos diferente?*
- Específicamente: si empezáramos esta funcionalidad de nuevo hoy, ¿qué es lo único que cambiaríamos en cómo la planificamos? ¿En cómo la ejecutamos?

---

**Segmento 4: Revisión de calidad técnica (10 minutos)**

Una breve reflexión técnica liderada por el Delivery Team:

- ¿Introdujimos alguna deuda técnica durante esta entrega? (Si es así: ¿está registrada?)
- ¿Hay decisiones arquitectónicas tomadas bajo presión que queramos revisar?
- ¿Es el nuevo código tan mantenible y testeable como el equipo quiere?
- ¿Qué inversión en mejora técnica haría más fácil el trabajo futuro en esta área de funcionalidad?

---

**Segmento 5: Mejoras y aprendizaje (10 minutos)**

Generación estándar de mejoras: 1–3 mejoras basadas en lo que revelaron los segmentos, con propietarios y señales de éxito.

Adicionalmente, capturar cualquier innovación de proceso que emergió durante la entrega y que debería convertirse en práctica permanente.

---

**Cierre (5 minutos)**

El Product Strategist cierra con una declaración sobre lo que significa la entrega para el producto y el equipo. Luego abrir el turno al equipo para compartir cualquier reflexión final.

---

## 8. Patrón 7 — Retrospectiva Entre Equipos

### Descripción General

Se usa cuando dos o más equipos GOAL necesitan examinar sus interfaces compartidas, dependencias y patrones de coordinación. Las retrospectivas individuales de equipo no pueden visibilizar los problemas que existen entre equipos — este patrón está diseñado específicamente para ese espacio.

**Duración:** 90–120 minutos
**Participantes:** Flow Masters de todos los equipos (obligatorio), Product Strategists de todos los equipos (obligatorio), 1–2 miembros del Delivery Team de cada equipo (recomendado)
**Cuándo:** Cada 2–3 ciclos cuando los equipos tienen dependencias activas, o cuando la fricción de dependencias ha surgido en las retrospectivas individuales de los equipos

---

### Preparación Previa a la Sesión

Cada equipo prepara un resumen breve (5 minutos para presentar):
- Métricas del ciclo actual (Cycle Time, Block Rate)
- ¿Cuántas tareas en este ciclo fueron bloqueadas debido a dependencias del otro(s) equipo(s)?
- ¿Cuál fue la naturaleza de esos bloqueos?
- ¿Qué solicitudes hizo este equipo a otros equipos? ¿Se manejaron bien?

Estos datos enmarcan la sesión entre equipos con elementos específicos en lugar de generalidades.

---

### Agenda

**Segmento 1: Snapshots de equipos (10 minutos)**

Cada equipo presenta su resumen de 5 minutos. Sin preguntas aún — solo escuchar.

El facilitador captura los bloqueos de dependencia en una vista compartida: qué equipo bloqueó a qué otro equipo, cuántas veces y durante cuánto tiempo.

---

**Segmento 2: Análisis de fricción de dependencias (25 minutos)**

Para cada bloqueo de dependencia entre equipos identificado:

1. ¿Cuál fue la naturaleza de la dependencia? (Técnica / Decisión / Recurso / Información)
2. ¿Cómo se comunicó la dependencia? ¿El otro equipo sabía de la necesidad con anticipación?
3. ¿Cómo se resolvió la dependencia? ¿Fue aceptable el cronograma de resolución?
4. ¿Qué podría haber sido diferente en cualquiera de los lados para reducir la fricción?

**La regla entre equipos:** Ambos equipos tienen el mismo estatus en este análisis. Un "bloqueo de dependencia" es un problema compartido, no la culpa de un equipo. La pregunta siempre es "¿cómo hacemos que esto funcione mejor?" no "¿por qué no respondiste más rápido?"

---

**Segmento 3: Brechas de comunicación entre equipos (20 minutos)**

Más allá de los bloqueantes, examinar cómo se comunican los equipos:

- ¿Cuándo se entera el Equipo A de los planes del Equipo B? ¿Es lo suficientemente temprano para planificar alrededor de ellos?
- ¿Hay decisiones tomadas por un equipo que afectan al otro pero que no se comunican de forma proactiva?
- ¿Hay desalineaciones recurrentes sobre prioridades? (Un equipo considera algo urgente; el otro no)
- ¿Hay canales de comunicación informales entre equipos que estén funcionando? ¿Qué se puede aprender de ellos?

---

**Segmento 4: Ítems de mejora a nivel de programa (20 minutos)**

Basándose en los segmentos 2 y 3, identificar mejoras que requieren acuerdo y coordinación entre equipos:

**Formato de mejora para ítems entre equipos:**

```
Mejora:               [cambio específico]
Requerido del Equipo A:  [acción/cambio específico]
Requerido del Equipo B:  [acción/cambio específico]
Propietario conjunto:    [una persona de cada equipo es responsable]
Señal de éxito:          [¿qué mediremos para saber que funcionó?]
Fecha de revisión:       [¿cuándo harán seguimiento ambos equipos?]
```

Máximo 2 mejoras entre equipos por sesión. Más de esto abruma la capacidad de coordinación.

---

**Segmento 5: Acuerdo de visibilidad anticipada (10 minutos)**

Un acuerdo práctico entre equipos sobre cómo compartir información de planificación en adelante:

- ¿Con cuánta anticipación compartirá cada equipo sus próximos objetivos de ciclo con el otro?
- ¿Hay una forma ligera de marcar las dependencias entre equipos antes de que comiencen los ciclos (no después de que bloqueen)?
- ¿Cuál es el tiempo de respuesta acordado cuando un equipo solicita algo al otro?

Documentar estos acuerdos explícitamente. Los compromisos vagos no sobreviven el regreso al flujo de trabajo normal.

---

**Cierre (5 minutos)**

El Flow Master de cada equipo enuncia un compromiso concreto para el próximo período de interacción entre equipos.

---

## 9. Patrón 8 — Retrospectiva de Reinicio Trimestral

### Descripción General

Se realiza al final de un trimestre o de un período de planificación importante. Más larga y más estratégica que una retrospectiva a nivel de ciclo. Combina reflexión de proceso con análisis de calidad de objetivos y revisión de alineación con OKR.

**Duración:** 120–150 minutos (inversión de medio día — programar en consecuencia)
**Participantes:** Todos los roles más stakeholders de liderazgo (opcional pero valioso)
**Cuándo:** Al final de cada trimestre, o cada 8–10 ciclos si los ciclos no se alinean con los trimestres

---

### Preparación Previa a la Sesión

Preparar lo siguiente antes de la sesión:
- Métricas de ciclo para todos los ciclos del trimestre (Cycle Time, Flow Efficiency, Block Rate)
- Tasa de completitud de objetivos en todos los ciclos (¿qué porcentaje de objetivos primarios se logró?)
- Análisis de calidad de objetivos: mirando atrás, ¿los objetivos que establecimos eran buenos objetivos? ¿Su logro entregó el valor esperado?
- Seguimiento de mejoras: de todas las mejoras de retrospectiva identificadas este trimestre, ¿cuántas se implementaron y sostuvieron?

---

### Agenda

**Segmento 1: El trimestre en datos (20 minutos)**

Presentar la vista trimestral de métricas de flujo. Buscar:
- Tendencias (¿el equipo está mejorando velocidad? ¿eficiencia? ¿más bloqueados?)
- Ciclos que fueron valores atípicos (mejor y peor) y por qué
- Tasa de logro de objetivos general: ¿entregamos lo que nos comprometimos?

La vista de datos trimestral revela patrones que las retrospectivas a nivel de ciclo no pueden ver. Un equipo que se ve bien ciclo a ciclo puede revelar un patrón estacional, un efecto de deuda técnica acumulada o una tendencia de burnout gradual a nivel trimestral.

---

**Segmento 2: Análisis de calidad de objetivos (25 minutos)**

Este segmento examina no si los objetivos se lograron, sino si se establecieron los objetivos correctos.

Para cada objetivo establecido este trimestre:
- ¿Se logró? (Sí / Parcialmente / No)
- Retrospectivamente, ¿fue lograrlo tan valioso como pensábamos?
- ¿Hubo objetivos que establecimos que resultaron ser menos importantes de lo esperado?
- ¿Hubo cosas que no establecimos como objetivos que deberíamos haber hecho?
- ¿Estaban nuestros objetivos conectados con las prioridades estratégicas reales de la organización?

Este análisis es valioso porque los equipos pueden desarrollar un patrón de establecer objetivos "seguros" — alcanzables pero sin impacto — en respuesta a la presión de objetivos. La revisión trimestral visibiliza este patrón.

**Resultado:** Una lista de patrones de calidad de objetivos a mejorar en la planificación del próximo trimestre. Discutir con el Product Strategist.

---

**Segmento 3: Revisión de alineación con OKR (20 minutos)**

Si el equipo opera dentro de un marco OKR:

- ¿Cuáles de los objetivos de este trimestre conectaron con los OKR organizacionales? ¿Cuáles no?
- ¿Hubo OKRs que el equipo no abordó en absoluto este trimestre? ¿Por qué?
- Para el próximo trimestre: ¿cómo deben conectar los Goal Cycles del equipo con los OKRs entrantes?

Si el equipo no opera dentro de un marco OKR:

- ¿Cuáles fueron las cosas más importantes que el equipo entregó este trimestre desde la perspectiva de la organización?
- ¿Hubo brechas entre lo que el liderazgo necesitaba y lo que el equipo construyó?
- ¿Cuáles deben ser los 2–3 resultados más importantes que el equipo entregue el próximo trimestre?

---

**Segmento 4: Evaluación de madurez del proceso (20 minutos)**

Usar el Cuadro de Mando de Adopción de GOAL (del Manual de Adopción) para evaluar la madurez del proceso del equipo trimestralmente.

Comparar las puntuaciones con el trimestre anterior:
- ¿Qué ha mejorado?
- ¿Qué se ha estancado o ha retrocedido?
- ¿Cuáles son las áreas más valiosas en las que invertir el próximo trimestre?

---

**Segmento 5: Revisión de la efectividad de las retrospectivas (15 minutos)**

Una evaluación honesta del propio bucle de mejora:

- ¿Cuántas mejoras se identificaron en todas las retrospectivas de ciclo de este trimestre?
- ¿Cuántas se implementaron y sostuvieron realmente?
- ¿Qué impidió la implementación de las que no llegaron a concretarse?
- ¿La práctica de retrospectiva del equipo está mejorando, manteniéndose igual o decayendo?

Esta pregunta de meta-retrospectiva es incómoda pero esencial. Los equipos que la omiten siguen generando mejoras que no se concretan.

---

**Segmento 6: Intenciones para el próximo trimestre (20 minutos)**

Basándose en todo lo anterior, establecer colaborativamente 3–5 intenciones para el próximo trimestre:

- 1–2 mejoras de proceso que el equipo priorizará
- 1 habilidad o capacidad que el equipo desarrollará deliberadamente
- 1 métrica de calidad que el equipo intentará mejorar en una cantidad específica
- 1 mejora de calidad de objetivos (¿cómo establecerá el equipo mejores objetivos el próximo trimestre?)

Estas son intenciones, no compromisos. Guían la planificación a nivel de ciclo sin restringirla.

---

**Cierre (10 minutos)**

Cada persona comparte:
1. La cosa de este trimestre de la que están más orgullosos
2. La intención para el próximo trimestre sobre la que se sienten más fuertemente

Documentar las intenciones en una ubicación compartida y revisarlas al inicio del primer ciclo del próximo trimestre.

---

## 10. Patrón 9 — Retrospectiva de Recuperación

### Descripción General

Se usa después de un ciclo que falló significativamente — los objetivos no se cumplieron, el ciclo se extendió múltiples veces, o el equipo está experimentando una crisis de confianza. El propósito es entender qué ocurrió, distinguir las causas sistémicas de las únicas, y reconstruir la confianza del equipo en su capacidad de mejorar.

**Duración:** 75–90 minutos
**Participantes:** Todos los roles
**Cuándo:** Inmediatamente después de un ciclo con fallo significativo de objetivos o después de un período de señales rojas

---

### Apertura: Antes de los Datos (10 minutos)

A diferencia de la retrospectiva estándar, comenzar con la experiencia humana, no con las métricas.

*"Antes de mirar los datos, quiero reconocer lo que acaba de ocurrir. El Ciclo [X] fue difícil. [Nombrar las dificultades específicas: 'No terminamos los objetivos que nos comprometimos' o 'Tuvimos tres bloqueantes que nos detuvieron durante una semana' o 'Tuvimos que extendernos dos veces y fue frustrante']. Eso es real y vale la pena nombrarlo.*

*Esto es lo que es esta retrospectiva: una investigación estructurada sobre por qué ocurrió esto, para poder evitar que ocurra de nuevo. No es una revisión de desempeño. No es una evaluación de si el equipo es capaz. Todos los equipos tienen ciclos difíciles. La diferencia entre los equipos que mejoran y los que no, es si entienden el porqué."*

---

### Agenda

**Segmento 1: ¿Qué ocurrió realmente? (15 minutos)**

Reconstruir el ciclo factualmente, sin interpretación.

Crear una cronología simple del ciclo:
```
Día 1:       [¿Cuál era el estado del trabajo?]
Días 3–5:    [¿Primeras señales de que las cosas no iban según lo planeado?]
Días 7–10:   [Eventos clave: bloqueantes, cambios de alcance, problemas de capacidad]
Días finales: [¿Cómo terminó?]
```

Esta cronología se construye colaborativamente. Diferentes personas notaron cosas diferentes. El objetivo es construir un relato compartido y preciso antes de sacar conclusiones.

---

**Segmento 2: Causa raíz sin culpa (20 minutos)**

Usando la cronología, preguntar: ¿cuáles fueron las causas raíz de las dificultades de este ciclo?

Usar la técnica de los 5 Por Qués del Patrón 3, pero aplicarla a los fallos de proceso en lugar de a los incidentes.

**La plantilla de pregunta libre de culpa:** Para cada problema identificado en la cronología, preguntar: "¿Qué en nuestra planificación, proceso o entorno hizo posible este resultado?"

Categorizar las causas raíz:

| Sistémica | Única |
|-----------|-------|
| Problemas que se repetirán si nada cambia | Problemas causados por circunstancias específicas poco probables de repetirse |

Enfocar la discusión de mejoras en las causas sistémicas. Documentar las causas únicas y cerrarlas.

---

**Segmento 3: Distinguir causas sistémicas de únicas (10 minutos)**

Para cada causa raíz identificada, preguntar:
1. "¿Ha ocurrido esto antes?" (Si sí: sistémica)
2. "¿Habría ocurrido esto en un ciclo diferente?" (Si sí: sistémica)
3. "¿Fue causado por un evento único específico?" (Si sí: única — confirmar que el evento ha terminado realmente)

Los equipos a veces atribuyen problemas sistémicos a eventos únicos como mecanismo de afrontamiento. El facilitador debe desafiar suavemente las clasificaciones de "única": "¿Hay alguna posibilidad de que esto pueda volver a ocurrir? ¿Qué tendría que ser verdad para prevenirlo?"

---

**Segmento 4: Reconstruir la confianza (15 minutos)**

Después del análisis de causa raíz, cambiar el enfoque.

Preguntas:
- ¿Qué hicimos bien este ciclo, a pesar de las dificultades? (Algo estaba funcionando — encuéntralo)
- ¿Qué aprendimos que no sabíamos antes?
- ¿Qué hubiera sido peor sin [práctica específica de GOAL]? (Esto identifica qué protegió el marco incluso en un ciclo difícil)
- Dado lo que hemos identificado, ¿qué tendría que ser verdad para que el próximo ciclo fuera significativamente mejor?

Este segmento no es opcional ni cosmético. Un equipo que sale de una retrospectiva de recuperación solo con una lista de lo que salió mal está desmoralizado. Un equipo que también entiende qué puede cambiar específicamente, y tiene confianza en que el cambio es posible, es capaz de recuperarse.

---

**Segmento 5: Plan de recuperación (15 minutos)**

Identificar 1–3 mejoras específicas y de alto impacto para el próximo ciclo.

Para una retrospectiva de recuperación, las mejoras deben ser defensivas: cosas que previenen que las causas raíz identificadas se repitan. No adiciones al proceso, sino protecciones contra lo que falló.

Preguntas adicionales de planificación de recuperación:
- ¿Debe reducirse el alcance del próximo ciclo para reconstruir la confianza y el impulso? (Un ciclo más pequeño logrado completamente es más valioso que otro ciclo grande logrado parcialmente)
- ¿Hay condiciones externas que necesitan cambiar antes de que el equipo pueda tener éxito? (Si es así: ¿quién escala esto y a quién?)
- ¿Necesita el equipo soporte específico en el próximo ciclo? (Flow Master más activo, Product Strategist más disponible, etc.)

---

**Cierre (5 minutos)**

Cerrar con un compromiso específico hacia adelante:

*"Esto es lo que cambiamos para el Ciclo [N+1]: [nombrar las 1–3 mejoras]. Esto es lo que NO cambiamos: [nombrar las cosas que funcionaron y deben continuar]. El objetivo del Ciclo [N+1] no es ser perfectos — es ser mejores que el Ciclo [N] en estas formas específicas."*

---

## 11. Guía de Facilitación de Retrospectivas

### 11.1 Cómo facilitar cada patrón

**Principios universales de facilitación:**

1. **Prepárate más de lo que crees que necesitas.** La retrospectiva debe sentirse sin esfuerzo para los participantes, lo que requiere una preparación significativa del facilitador. Conoce las métricas, conoce la cronología, conoce el historial del equipo.

2. **Tu trabajo es visibilizar información, no enseñar.** Los facilitadores que usan las retrospectivas como oportunidades de coaching pierden la sala. Haz preguntas. Haz observaciones. Ofrece hipótesis. No des cátedra.

3. **Haz el pensamiento visible.** Captura todo en una superficie compartida. Las ideas que no se escriben no sobreviven a la reunión.

4. **Protege las cajas de tiempo.** Cada segmento tiene un tiempo. Aplícalo. Si una discusión se extiende, decidir explícitamente si continuar (cortando un segmento posterior) o aparcar la discusión para después de la retrospectiva.

5. **Los últimos 10 minutos son los más importantes.** Las mejoras sin propietarios nunca ocurren. Nunca termines sin propietarios confirmados para cada mejora. Nunca dejes que el último segmento sea apresurado.

---

**Notas de facilitación específicas por patrón:**

*Patrón 1 (Estándar):*
- Tu habilidad más importante es redirigir las declaraciones subjetivas hacia los datos: "¿Qué nos dice el Cycle Time sobre eso?"
- Vigilar que la retrospectiva no se convierta en una sesión de desahogo sin acción. Capturar todo pero convertir en hipótesis de mejora.

*Patrón 2 (Primera Retrospectiva):*
- La declaración de apertura lo es todo. Hazla bien. Practicala.
- Algunos miembros del equipo querrán pasar al modo de análisis de inmediato. Desacelera. Los segmentos orientados a sentimientos de este patrón existen por una razón.

*Patrón 3 (Post-Incidente):*
- Construir la cronología antes de la sesión. Nunca construirla en la sala — lleva demasiado tiempo y crea conflictos.
- Tu habilidad más importante es redirigir la culpa individual hacia el análisis sistémico.

*Patrón 4 (Baja Moral):*
- Lee la sala constantemente. Ajusta el ritmo. Si las personas están retraídas, dale más tiempo.
- Resiste el impulso del facilitador de llenar el silencio. El silencio a menudo es procesamiento.

*Patrón 5 (Alto Rendimiento):*
- El riesgo en este patrón es la complacencia. Empuja hacia el límite de la capacidad.
- Mantén la sesión en movimiento — los equipos de alto rendimiento tienen menos que procesar y pueden moverse más rápido.

*Patrón 6 (Post-Gran-Funcionalidad):*
- El segmento de celebración es obligatorio. No lo omitas ni lo apresures. Establece el marco emocional para todo lo que sigue.

*Patrón 7 (Entre Equipos):*
- Mantén una neutralidad estricta entre los equipos. Nunca parezcas abogar por la posición de un equipo.
- La sala a veces se sentirá como una negociación. Tu trabajo es mantenerla colaborativa.

*Patrón 8 (Reinicio Trimestral):*
- Esta es una sesión larga. El manejo de energía importa. Programar un descanso en el punto medio.
- El análisis de calidad de objetivos es incómodo. Las personas están admitiendo que establecieron objetivos equivocados. Crear seguridad explícitamente antes de este segmento.

*Patrón 9 (Recuperación):*
- Este es el patrón emocionalmente más exigente de facilitar.
- Nunca usar lenguaje que evalúe la capacidad o el potencial futuro del equipo. "El equipo luchó este ciclo" es muy diferente de "el equipo está luchando."

---

### 11.2 Errores comunes de facilitación

**Error 1: Dejar que la persona de mayor estatus establezca la agenda**
El Product Strategist o el desarrollador senior habla primero y su encuadre domina el resto de la discusión. Prevención: usar escritura silenciosa individual antes de la discusión grupal para cada segmento. Obtener el pensamiento de todos en papel antes de compartir.

**Error 2: Generar demasiadas mejoras**
La retrospectiva produce 8 mejoras y ninguna se implementa. Prevención: límite estricto de 3. Usar la votación con puntos para hacer cumplir la selección.

**Error 3: Aceptar mejoras vagas**
"Mejorar la comunicación" se añade a la lista. Nunca ocurrirá. Prevención: rechazar cualquier mejora que no tenga un comportamiento específico, un propietario y una señal medible. Insistir en la especificidad antes de cerrar.

**Error 4: Omitir la revisión de mejoras anteriores**
El equipo genera nuevas mejoras pero nunca verifica las antiguas. Prevención: hacer este segmento el 1, no el 4. Hacerlo innegociable.

**Error 5: Pasarse del tiempo**
La reunión debía durar 60 minutos. Se extiende a 90. Las personas llegan tarde a su próxima reunión y se van antes de que se asignen las mejoras. Prevención: caja de tiempo estricta para cada segmento. Usar un temporizador visible.

**Error 6: Facilitar en lugar de participar**
El Flow Master nunca comparte sus propias observaciones. Prevención: el facilitador puede y debe compartir observaciones basadas en datos. No opiniones, sino observaciones: "Noté que el bloqueante más común este ciclo fueron las dependencias externas. ¿Otros lo vieron también?"

---

### 11.3 Cómo manejar voces dominantes y miembros silenciosos

**Voces dominantes:**

Un miembro del equipo que habla primero en cada segmento, habla más largo y cuyo encuadre tiende a ser adoptado por el grupo sin mucho cuestionamiento.

Técnicas:
- Usar escritura silenciosa antes de compartir para cada segmento. Hace salir el pensamiento de todos antes de que la voz dominante lo enmarque.
- Llamar explícitamente a otros antes de volver a la voz dominante: "Escuchemos de alguien que aún no ha compartido."
- Para el segmento de generación de mejoras, usar notas adhesivas individuales en lugar de lluvia de ideas abierta. Las ideas de todos tienen el mismo peso visual en el tablero.
- Después de que la voz dominante comparte, preguntar: "¿Alguien lo ve de manera diferente?" antes de continuar.

**Miembros silenciosos:**

Un miembro del equipo que raramente contribuye durante las retrospectivas, ya sea por introversión, desconfianza en la seguridad o desconexión.

Técnicas:
- No forzar el intercambio público. Ofrecer alternativas escritas para cada segmento.
- Hacer preguntas específicas y factuales que inviten a la contribución sin poner a las personas en un apuro: "¿Estuviste involucrado en ese bloqueante? ¿Cuál fue tu experiencia con él?"
- Verificar después de la retrospectiva (no en la sala): "Noté que estuviste callado hoy. ¿Está todo bien? ¿Hay algo que quisieras que supiera sobre cómo fue el ciclo?"
- Con el tiempo, los miembros silenciosos a menudo se vuelven más participativos a medida que se construye la seguridad psicológica.

---

### 11.4 Especificidades de facilitación remota

**Diferencias en la preparación:**
- Distribuir el dashboard de métricas 24 horas antes de la sesión para que las personas puedan reflexionar sobre él previamente
- Preparar el tablero de colaboración digital (Miro, FigJam, Mural, o equivalente) antes de la sesión — un tablero en blanco al inicio de una retrospectiva remota desperdicia tiempo y rompe el flujo
- Probar el compartir pantalla antes de que comience la sesión

**Diferencias en el compromiso:**
- Cámaras activadas es la norma pero no un requisito para miembros del equipo angustiados
- Usar las funciones de reacción (pulgares arriba, emojis) para las verificaciones — más rápido que escribir
- Usar breakout rooms para segmentos que se benefician de la discusión en grupos más pequeños (3–4 personas) antes de la síntesis del grupo completo

**Diferencias de facilitación:**
- Llamar a las personas por nombre más explícitamente en entornos remotos — "Me gustaría escuchar de [nombre] antes de continuar"
- Ser más explícito sobre las transiciones: "Pasamos al segmento 2 ahora. Por favor abre la [sección] en el tablero."
- Las cajas de tiempo son aún más importantes de forma remota — la fatiga de atención se instala más rápido en línea

**La escritura silenciosa funciona mejor de forma remota:**
El formato de escritura individual antes de compartir en realidad funciona mejor en entornos remotos que en persona. Las notas adhesivas digitales eliminan la barrera de la escritura a mano, múltiples personas pueden publicar simultáneamente y hay menos presión social para coincidir con lo que otros han escrito.

---

## 12. Gestión del Resultado de las Retrospectivas

### 12.1 Cómo asegurar que las mejoras realmente ocurran

El fallo más común de las retrospectivas no es producir malas mejoras. Es producir buenas mejoras que nunca se implementan. El sistema de gestión del resultado debe ser tan deliberado como la propia retrospectiva.

**El registro de mejoras:**

Cada mejora generada en una retrospectiva debe registrarse en una ubicación compartida persistente con:

```
Mejora:          [descripción específica]
Propietario:     [individuo nombrado — no "el equipo"]
Ciclo objetivo:  [el ciclo en que se implementará]
Señal de éxito:  [¿qué será measurablemente diferente cuando funcione?]
Estado:          [No iniciado / En progreso / Implementado / Cerrado-no-implementado]
Fecha de revisión: [la retrospectiva donde esto se verificará]
```

Este registro es mantenido por el Flow Master y revisado al inicio de cada retrospectiva.

**La regla de máximo 3 mejoras:**

Una retrospectiva que produce 3 mejoras enfocadas que se implementan es infinitamente más valiosa que una que produce 10 mejoras que ninguna se implementa.

El máximo de 3 mejoras no es una sugerencia — es una regla estructural. Cuando se generan más de 3 (común en sesiones del Patrón 8), usar la votación con puntos para seleccionar las 3 más valiosas. Archivar el resto para futuras retrospectivas.

**¿Por qué 3?**

Tres mejoras caben en la memoria de trabajo. Tres mejoras pueden seguirse en un segmento de 5 minutos de la próxima retrospectiva. Tres mejoras no abruman a un equipo que también está ejecutando trabajo. Más de tres crea la sensación de que "hay demasiado que arreglar" — lo que produce parálisis en lugar de acción.

---

### 12.2 Máximo 3 mejoras por retrospectiva — justificación y aplicación

**La paradoja de las listas de mejoras comprehensivas:**

Una retrospectiva que identifica 10 cosas a mejorar comunica (implícitamente) que el equipo está profundamente roto. Esto desmoraliza en lugar de motivar. Una retrospectiva que identifica 3 mejoras específicas y alcanzables y las implementa consistentemente construye confianza y capacidad genuina con el tiempo.

**Aplicación en la práctica:**

1. Después de la generación de mejoras, el facilitador cuenta los ítems. Si hay más de 3 con votos, las 3 principales se confirman y el resto se archiva explícitamente:
   *"Tenemos 7 mejoras candidatas. Vamos a tomar las 3 principales. Las otras 4 están archivadas aquí [señalar ubicación] — no están olvidadas, son candidatas para ciclos futuros."*

2. Si el equipo objeta ("pero todas estas son importantes"), el facilitador responde:
   *"Estoy de acuerdo en que todas son importantes. La razón por la que limitamos a 3 no es que las demás no importen — es que una lista de 7 mejoras consistentemente obtiene 0 implementadas. Una lista de 3 consistentemente obtiene 2–3 implementadas. Prefiero que hagamos bien 3 de estas que ninguna de 7."*

3. Si una mejora crítica no llega al top 3 del voto, puede escalarse fuera de la retrospectiva como ítem prioritario para que el Product Strategist o el Flow Master lo aborden directamente. El resultado de la retrospectiva es independiente del canal de escalación.

---

### 12.3 Cómo hacer seguimiento de la implementación de mejoras entre ciclos

**Durante el ciclo (no solo en el momento de la retrospectiva):**

El Flow Master es responsable de la implementación de mejoras entre ciclos. A mitad del ciclo, el Flow Master debe:

- Verificar si los propietarios de mejoras han actuado sobre sus ítems
- Marcar cualquier mejora que parezca atascada: "La mejora que acordamos es [X]. ¿Ha ocurrido eso? ¿Qué está en el camino?"
- Anotar el progreso de implementación en el registro de mejoras

Las mejoras no son ítems de tarea en el Flow Board. Son cambios de comportamiento o cambios estructurales que ocurren junto al trabajo regular. Requieren seguimiento activo, no solo adición a una lista.

**En la próxima retrospectiva:**

El Segmento 4 del Patrón 1 (o un segmento equivalente en otros patrones) abre con: "Verifiquemos las mejoras del último ciclo."

Para cada mejora:
- Mostrar el estado
- Pedir al propietario que describa qué cambió
- Si se implementó: "¿Qué muestran los datos?" (Conectar a una métrica si es posible)
- Si no se implementó: "¿Qué lo impidió? ¿Sigue valiendo la pena hacerlo? ¿Quién lo lleva adelante?"

**Ciclo de vida de las mejoras:**

```
Identificada en la retrospectiva
         ↓
Registrada con propietario y señal de éxito
         ↓
Implementada durante el próximo ciclo (el Flow Master hace seguimiento)
         ↓
Revisada en la próxima retrospectiva
         ↓
Bien: [Confirmada funcionando → se convierte en práctica estándar]
   o  [Confirmada no funcionando → investigada o eliminada]
   o  [No implementada → reevaluar: ¿sigue siendo valiosa? ¿propietario diferente? ¿enfoque diferente?]
```

**Qué hacer con las mejoras que nunca se implementan:**

Si una mejora aparece en la lista dos veces seguidas sin progreso, preguntar explícitamente: "Esta mejora ha estado en nuestra lista durante dos ciclos sin movimiento. Una de tres cosas es verdad: no es realmente una prioridad, el propietario no tiene la capacidad o el tiempo para implementarla, o hay una barrera estructural que no hemos identificado. ¿Cuál es?"

Esta pregunta fuerza una respuesta honesta en lugar de permitir que la mejora permanezca indefinidamente en la lista como actuación de intención sin sustancia.

---

*Fin de la Biblioteca de Patrones de Retrospectiva GOAL v1.0*
*Documento complementario: Metodología GOAL v0.2*
*Relacionado: Manual de Adopción GOAL*

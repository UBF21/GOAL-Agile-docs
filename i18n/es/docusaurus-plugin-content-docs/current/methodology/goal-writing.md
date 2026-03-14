---
id: goal-writing
title: Framework de Escritura de Goals
sidebar_position: 10
description: Cómo escribir goals que determinen el éxito del ciclo — la distinción output vs outcome, la fórmula GOAL, criterios de calidad y patrones por tipo de equipo.
---

## Tabla de Contenidos

1. [Por Qué la Calidad del Goal Determina el Éxito del Ciclo](#1-por-qué-la-calidad-del-goal-determina-el-éxito-del-ciclo)
2. [Output vs Outcome — La Distinción Central](#2-output-vs-outcome--la-distinción-central)
3. [La Fórmula GOAL para Goals](#3-la-fórmula-goal-para-goals)
4. [Checklist de Criterios de Calidad del Goal](#4-checklist-de-criterios-de-calidad-del-goal)
5. [Dimensionamiento del Goal](#5-dimensionamiento-del-goal)
6. [Descomposición del Goal](#6-descomposición-del-goal)
7. [Goals Primarios vs Goals Secundarios](#7-goals-primarios-vs-goals-secundarios)
8. [Anti-patrones en la Escritura de Goals](#8-anti-patrones-en-la-escritura-de-goals)
9. [Formato del Taller de Escritura de Goals](#9-formato-del-taller-de-escritura-de-goals)
10. [Traducción de OKRs a Goals](#10-traducción-de-okrs-a-goals)
11. [Preguntas de Validación del Goal](#11-preguntas-de-validación-del-goal)
12. [Criterios de Revisión del Goal](#12-criterios-de-revisión-del-goal)
13. [Registro de Goals](#13-registro-de-goals)
14. [Patrones de Goals por Tipo de Equipo](#14-patrones-de-goals-por-tipo-de-equipo)
15. [Errores Comunes por Rol](#15-errores-comunes-por-rol)

---

## 1. Por Qué la Calidad del Goal Determina el Éxito del Ciclo

### 1.1 El argumento fundamental

La GOAL Agile Methodology está construida sobre un único contrato fundamental:

> **Los goals son el contrato. Las tareas son el camino.**

Esta frase codifica una verdad operativa profunda. Cuando un equipo se compromete con un goal —no con una lista de tareas, no con un backlog de sprint, no con un conjunto de story points— el acuerdo de trabajo completo cambia. El equipo ya no es responsable de hacer; es responsable de lograr.

Esta distinción tiene consecuencias en cascada. Si el goal está bien escrito, el equipo tiene una condición de éxito clara. Puede decidir diariamente si el trabajo que está realizando los acerca a él. Puede tomar decisiones de compromiso de forma autónoma. Puede detener el trabajo que no contribuye. Puede adaptar su camino cuando un descubrimiento técnico cambia el enfoque.

Si el goal está mal escrito, todas estas ventajas se derrumban. Un goal vago no puede usarse como filtro de decisión. Un goal basado en outputs no le dice al equipo si entregó valor. Un goal inconmensurable no puede evaluarse al final del ciclo. Un goal demasiado grande no puede completarse en un ciclo.

La calidad de los goals escritos en el Smart Planning no es una preferencia de estilo. Es la variable principal que determina si un Goal Cycle tiene éxito o fracasa, independientemente de la calidad de ejecución del equipo.

### 1.2 El efecto compuesto de los goals mal escritos

Un goal mal escrito no solo causa un ciclo fallido. Crea una secuencia de fallas posteriores:

**Nivel de ciclo:** El equipo completa todas las tareas pero no puede responder "¿Logramos el goal?" en el Goal Review. La revisión se convierte en una demostración de features en lugar de una evaluación de valor.

**Nivel de retrospectiva:** Sin una condición de éxito clara, la retrospectiva no tiene ancla. El equipo no puede analizar de manera significativa qué salió bien y qué falló porque no existe una medida objetiva de resultado.

**Nivel de portafolio:** El Registro de Goals acumula ciclos donde los goals fueron "completados" por una interpretación subjetiva. El liderazgo no puede evaluar si el equipo está entregando valor de negocio. La confianza se erosiona.

**Nivel cultural:** Los equipos que trabajan repetidamente en goals ambiguos pierden su sentido de propósito. Los ingenieros dejan de conectar su trabajo con los resultados. La motivación se convierte en completar tareas en lugar de resolver problemas.

### 1.3 El ciclo virtuoso de los goals excelentes

Por el contrario, los equipos que dominan la escritura de goals experimentan beneficios acumulativos:

- Cada ciclo produce un resultado medible que valida o cuestiona las suposiciones del equipo sobre su producto
- El Registro de Goals se convierte en una biblioteca de aprendizaje — un registro de qué funcionó, qué no, y qué aprendió el equipo
- El Product Strategist gana credibilidad con los stakeholders porque los resultados del ciclo son demostrables y cuantificados
- El equipo desarrolla un vocabulario compartido en torno a los resultados versus la actividad, lo que mejora cada conversación de planificación posterior
- Con el tiempo, la escritura de goals se vuelve más rápida porque el equipo reconoce patrones y tiene vocabulario para la precisión

### 1.4 La calidad del goal como prerrequisito para todas las demás prácticas de GOAL

Cada mecanismo de GOAL depende de la calidad del goal:

- **Los límites de WIP** controlan la tasa de completación de tareas, pero las tareas solo son valiosas si sirven a un goal que vale la pena alcanzar
- **La eficiencia de flujo** mide la rapidez con que se mueve el trabajo, pero la velocidad hacia el resultado equivocado es desperdicio
- **Las Retrospectivas Basadas en Datos** miden qué tan bien operó el equipo, pero "operar bien" solo es significativo si el goal valía la pena perseguir
- **El Goal Review** solo puede funcionar si hay algo concreto que revisar
- **El Cycle Accuracy Index** mide la precisión de estimación, pero los ciclos con goals malos producen estimaciones precisas de trabajo sin valor

La calidad del goal no es un componente del framework GOAL. Es la base sobre la que descansa cada otro componente.

---

## 2. Output vs Outcome — La Distinción Central

### 2.1 Definición de los términos

**Output** es lo que el equipo produce — features construidas, bugs corregidos, páginas creadas, APIs desarrolladas. Los outputs son directamente controlables. Un equipo siempre puede producir más outputs trabajando más duro o por más tiempo.

**Outcome** es el cambio en comportamiento, rendimiento o valor que resulta del output. Los outcomes no son directamente controlables — dependen de cómo respondan los usuarios, los sistemas o el mercado al output. Un equipo puede lanzar una feature (output) y no tener ningún usuario que la adopte (sin outcome). La feature existe; el valor no.

Los goals de GOAL deben escribirse al nivel del outcome. Cuando los goals se escriben al nivel del output, el equipo gestiona producción. Cuando los goals se escriben al nivel del outcome, el equipo gestiona valor.

### 2.2 Por qué la distinción es difícil en la práctica

La distinción es intelectualmente clara pero operativamente difícil. La mayoría de los equipos han pasado años midiendo outputs. Gráficos de velocidad, burndowns de story points, registros de lanzamiento de features — todas estas son medidas de output. El reflejo organizacional es escribir goals en lenguaje de output porque el output es visible, controlable y fácil de medir.

Escribir outcomes requiere hacer una pregunta más difícil: "¿Por qué importa este output? ¿Qué cambia si lanzamos esto?" Esa pregunta puede ser incómoda porque fuerza honestidad sobre si el trabajo tiene realmente valor medible.

### 2.3 La prueba de Output vs Outcome

Antes de escribir un goal, aplica esta prueba:

> "Si entregamos este goal pero nada cambia para el usuario o el negocio, ¿el goal se logró de todas formas?"

Si la respuesta es sí, el goal está escrito al nivel del output. Los outputs siempre pueden "lograrse" porque solo requieren producción. Si la respuesta es no — si el goal requiere que algo cambie realmente — entonces está escrito al nivel del outcome.

### 2.4 Ejemplos reales de software — malo vs bueno (10+)

Cada ejemplo muestra un goal de output mal escrito y un goal de outcome reescrito para la misma situación.

---

**Ejemplo 1 — Onboarding de SaaS (Equipo de Features)**

Goal de output (malo):
> "Construir un nuevo asistente de onboarding para usuarios nuevos."

Goal de outcome (bueno):
> "Aumentar el porcentaje de nuevos usuarios que completan la configuración de cuenta dentro de las 24 horas posteriores al registro del 38% al 60%."

Por qué funciona la reescritura: El goal de output se satisface con lanzar cualquier asistente de onboarding, independientemente de si los usuarios lo usan o se benefician de él. El goal de outcome solo puede satisfacerse con una solución que realmente cambie el comportamiento del usuario.

---

**Ejemplo 2 — Checkout de e-commerce (Equipo de Features)**

Goal de output (malo):
> "Rediseñar el flujo de checkout para reducir el número de pasos."

Goal de outcome (bueno):
> "Reducir la tasa de abandono del carrito durante el checkout del 72% a menos del 60%."

Por qué funciona la reescritura: Menos pasos es una hipótesis sobre lo que causa el abandono. La hipótesis podría ser incorrecta. El goal de outcome valida o invalida la hipótesis con datos reales.

---

**Ejemplo 3 — Rendimiento de API (Equipo de Plataforma)**

Goal de output (malo):
> "Optimizar la API de búsqueda de productos para mejorar los tiempos de respuesta."

Goal de outcome (bueno):
> "Reducir el tiempo de respuesta p95 de la API de búsqueda de productos de 1.200ms a menos de 400ms bajo condiciones de carga pico (medido en producción durante horas hábiles)."

Por qué funciona la reescritura: "Mejorar los tiempos de respuesta" no tiene un mínimo — cualquier mejora satisface el goal. El goal de outcome es específico y falseable.

---

**Ejemplo 4 — Aplicación móvil (Equipo Mobile)**

Goal de output (malo):
> "Agregar soporte de notificaciones push a la aplicación móvil."

Goal de outcome (bueno):
> "Alcanzar una tasa de retención al día 7 del 25% entre los usuarios que activan las notificaciones push, comparado con el 12% de baseline para usuarios sin notificaciones."

Por qué funciona la reescritura: Las notificaciones push son un mecanismo. El goal de outcome valida si el mecanismo realmente impulsa la retención.

---

**Ejemplo 5 — Sistema de autenticación (Equipo de Seguridad/Plataforma)**

Goal de output (malo):
> "Implementar autenticación de dos factores para todas las cuentas de administrador."

Goal de outcome (bueno):
> "Alcanzar el 100% de inscripción en autenticación de dos factores para cuentas de administrador dentro de los 14 días posteriores al lanzamiento, con cero bloqueos de administradores durante el despliegue."

Por qué funciona la reescritura: La implementación es el output. La adopción completa sin interrupción del servicio es el outcome.

---

**Ejemplo 6 — Dashboard de SaaS B2B (Equipo de Features)**

Goal de output (malo):
> "Construir un dashboard de reportes para clientes enterprise."

Goal de outcome (bueno):
> "Permitir que los clientes enterprise generen y exporten los tres tipos de reportes más solicitados (resumen de uso, asignación de licencias, historial de facturación) sin contactar soporte, reduciendo los tickets de soporte relacionados con el dashboard en un 40%."

Por qué funciona la reescritura: El goal de output produce un dashboard que puede o no resolver el problema. El goal de outcome define el problema claramente: los clientes contactan soporte porque no pueden encontrar información por sí mismos.

---

**Ejemplo 7 — Pipeline de CI/CD (Equipo DevOps/Plataforma)**

Goal de output (malo):
> "Mejorar el pipeline de CI/CD para acelerar los despliegues."

Goal de outcome (bueno):
> "Reducir el tiempo promedio de despliegue desde commit hasta producción de 47 minutos a menos de 15 minutos para branches de features estándar."

Por qué funciona la reescritura: "Acelerar" es inconmensurable. El goal de outcome tiene un baseline de inicio y un estado objetivo, haciéndolo evaluable.

---

**Ejemplo 8 — Manejo de errores (Equipo de Calidad)**

Goal de output (malo):
> "Mejorar los mensajes de error en toda la aplicación."

Goal de outcome (bueno):
> "Reducir los tickets de soporte de usuarios que reportan 'no sé qué salió mal' en un 50% reemplazando todos los códigos de error genéricos en los 10 flujos principales orientados al usuario con mensajes de orientación accionables."

Por qué funciona la reescritura: Los mejores mensajes de error son un output. Menos usuarios confundidos que contactan soporte es el outcome.

---

**Ejemplo 9 — Herramientas internas (Equipo de Plataforma)**

Goal de output (malo):
> "Migrar los scripts de despliegue de Bash a Python."

Goal de outcome (bueno):
> "Eliminar todas las fallas de despliegue causadas por problemas de compatibilidad de Bash específicos del entorno (actualmente promediando 3 por semana) migrando los scripts de despliegue a Python con cobertura de pruebas en múltiples entornos."

Por qué funciona la reescritura: La migración tecnológica es un output. La eliminación de un patrón de falla recurrente es el outcome.

---

**Ejemplo 10 — Crecimiento de usuarios (Equipo de Crecimiento)**

Goal de output (malo):
> "Lanzar un programa de referidos."

Goal de outcome (bueno):
> "Adquirir 500 nuevos usuarios activados en 30 días a través de un mecanismo de referidos, donde 'activado' significa que el usuario referido ha completado al menos una acción clave dentro de las 48 horas posteriores al registro."

Por qué funciona la reescritura: Lanzar un programa de referidos es un output. Adquirir usuarios calificados específicos a través de él es el outcome.

---

**Ejemplo 11 — Feature de búsqueda (Equipo de Features)**

Goal de output (malo):
> "Agregar filtros a la página de resultados de búsqueda."

Goal de outcome (bueno):
> "Aumentar el porcentaje de sesiones de búsqueda que resultan en una vista de página de producto del 31% al 45% introduciendo filtros de categoría, rango de precios y valoración."

Por qué funciona la reescritura: Los filtros son una hipótesis. El goal de outcome prueba si la hipótesis mejora la conversión de búsqueda a producto.

---

**Ejemplo 12 — Deuda técnica (Cualquier equipo)**

Goal de output (malo):
> "Refactorizar el servicio de pagos."

Goal de outcome (bueno):
> "Reducir el tiempo promedio para que un desarrollador implemente una nueva integración de método de pago de 12 días a 4 días refactorizando el servicio de pagos para usar un patrón de adaptador estandarizado."

Por qué funciona la reescritura: La refactorización es una actividad. Reducir el tiempo de integración es un outcome medible que justifica la inversión.

---

## 3. La Fórmula GOAL para Goals

### 3.1 La fórmula

Cada goal bien escrito de GOAL sigue esta estructura:

```
[Verbo de Acción] + [Objeto] + [Resultado Medible] + [Restricción de Tiempo (opcional)]
```

**Verbo de Acción:** Una palabra específica y direccional que indica movimiento — Aumentar, Reducir, Lograr, Eliminar, Habilitar, Migrar, Estabilizar, Entregar, Alcanzar, Mantener.

Evitar verbos de acción vagos: Mejorar, Potenciar, Soportar, Abordar, Trabajar en, Gestionar, Investigar.

**Objeto:** Lo que está siendo cambiado — una métrica, un comportamiento de usuario, una propiedad del sistema, un proceso.

**Resultado Medible:** Un objetivo específico y cuantificable con un baseline y un estado destino. Debe responder: "¿Cómo sabremos si esto está hecho?"

**Restricción de Tiempo (opcional):** Cuando aplique, especificar el marco temporal dentro del cual el resultado debe mantenerse. Útil para goals que miden un comportamiento sostenido en lugar de un evento único.

---

### 3.2 Ejemplos de aplicación de la fórmula por tipo de equipo

**Equipo de Features SaaS**

```
[Reducir] [tasa de abandono del carrito] [del 72% a menos del 60%] [dentro del ciclo actual]
```

Goal completo: "Reducir la tasa de abandono del carrito del 72% a menos del 60% dentro de este ciclo."

---

**Equipo de Plataforma / Infraestructura**

```
[Reducir] [tiempo de respuesta p95 de la API del servicio de autenticación] [de 800ms a menos de 200ms] [medido bajo carga de producción estándar]
```

Goal completo: "Reducir el tiempo de respuesta p95 de la API del servicio de autenticación de 800ms a menos de 200ms bajo carga de producción estándar."

---

**Equipo Mobile**

```
[Lograr] [valoración en la app store para la versión 4.x] [de 4.3 o superior] [dentro de los 30 días posteriores al lanzamiento]
```

Goal completo: "Lograr una valoración en la app store de 4.3 o superior dentro de los 30 días del lanzamiento de la versión 4.x."

---

**Equipo de API**

```
[Habilitar] [desarrolladores externos] [a completar una integración de API estándar en menos de 2 horas] [usando el nuevo SDK y documentación]
```

Goal completo: "Habilitar que los desarrolladores externos completen una integración de API estándar en menos de 2 horas usando el nuevo SDK y documentación, validado por pruebas de usabilidad con 3 desarrolladores externos."

---

**Equipo de Calidad / Confiabilidad**

```
[Reducir] [tasa de incidentes en producción] [de 8 incidentes por mes a 3 o menos] [sostenido durante dos ciclos consecutivos]
```

Goal completo: "Reducir la tasa de incidentes en producción de 8 por mes a 3 o menos, sostenido durante dos ciclos consecutivos."

---

**Equipo de Crecimiento**

```
[Aumentar] [usuarios activos semanales del segmento enterprise] [de 1.200 a 1.800] [dentro de este Goal Cycle]
```

Goal completo: "Aumentar los usuarios activos semanales del segmento enterprise de 1.200 a 1.800 dentro de este ciclo."

---

**Equipo de Datos / Analytics**

```
[Entregar] [una capacidad de reportes self-service] [que permita a los gerentes de operaciones generar resúmenes semanales sin intervención de ingeniería] [reduciendo las solicitudes de datos ad-hoc en un 70%]
```

Goal completo: "Entregar una capacidad de reportes self-service que permita a los gerentes de operaciones generar resúmenes semanales sin intervención de ingeniería, reduciendo las solicitudes de datos ad-hoc en un 70%."

---

**Equipo de Deuda Técnica / Foundations**

```
[Eliminar] [todos los endpoints de API que omiten la capa de autenticación centralizada] [reduciendo la superficie de ataque confirmada por una auditoría de seguridad]
```

Goal completo: "Eliminar todos los endpoints de API que omiten la capa de autenticación centralizada, reduciendo la superficie de ataque de acceso no autorizado, confirmado por aprobación de auditoría de seguridad."

---

### 3.3 El requisito de baseline

Cada resultado medible debe incluir un baseline — el estado actual antes de perseguir el goal. Sin un baseline, un goal como "reducir la tasa de errores en un 50%" no puede verificarse. ¿El 50% de qué?

Si el baseline es desconocido, el primer paso en un ciclo puede ser establecerlo. Este es un goal válido y explícito:

> "Establecer una medición baseline de la tasa de abandono del checkout, segmentada por tipo de dispositivo y cohorte de usuario, para informar el goal de optimización del próximo ciclo."

Los goals de medición son goals legítimos de ciclo. Los equipos que no conocen sus baselines están operando a ciegas, y crear visibilidad es valor genuino.

---

### 3.4 Resultados medibles cuantitativos vs cualitativos

No todos los goals pueden expresarse como números. Algunos outcomes se validan cualitativamente — a través de investigación de usuarios, aprobación de stakeholders, o capacidad demostrada. Estos son aceptables siempre que el método de validación sea explícito.

**Cuantitativo (preferido):**
> "Reducir el tiempo promedio de respuesta de soporte de 4 horas a menos de 1 hora."

**Cualitativo con validación explícita:**
> "Entregar una nueva experiencia de reportes para inversores que reciba aprobación del CFO y el Director de Finanzas, validado a través de una sesión de revisión estructurada."

**Cualitativo sin validación (no aceptable):**
> "Mejorar la experiencia de reportes para inversores."

La diferencia entre goals cualitativos aceptables e inaceptables es la presencia de un proceso de validación explícito y acordado.

---

## 4. Checklist de Criterios de Calidad del Goal

Antes de confirmar un goal en el Goal Cycle Plan, debe pasar todos los criterios siguientes. Este checklist lo usa el Product Strategist durante la preparación y lo valida el equipo completo en el Smart Planning.

---

**Criterio 1 — Orientado al outcome**

El goal describe un cambio en una métrica, comportamiento de usuario o propiedad del sistema — no la entrega de una feature o la completación de una actividad.

Prueba: ¿Puede el goal "lograrse" lanzando algo que nadie usa? Si sí, reescribir.

---

**Criterio 2 — Medible**

El goal contiene una condición de éxito específica y cuantificable. No hay ambigüedad sobre si el goal fue alcanzado cuando ocurre el Goal Review.

Prueba: Si tres miembros del equipo evaluaran independientemente el outcome del ciclo, ¿llegarían todos a la misma conclusión sobre si el goal fue logrado? Si no, reescribir.

---

**Criterio 3 — Con baseline definido**

El goal incluye una referencia al estado actual (el baseline) contra el cual se medirá el objetivo. El baseline está basado en datos reales y accesibles.

Prueba: ¿Puede el equipo consultar el baseline en una fuente de datos ahora mismo? Si no, o se establece el baseline primero, o se documenta la fuente de donde provendrá.

---

**Criterio 4 — Tamaño apropiado para el ciclo**

El goal puede lograrse de manera realista dentro de la duración del ciclo planificado (1, 2 o 3 semanas) dada la capacidad actual del equipo y la complejidad del trabajo.

Prueba: Preguntarle al equipo si creen que el goal es alcanzable en el plazo. Si más de una persona expresa dudas, tratarlo como un problema de dimensionamiento, no de confianza.

---

**Criterio 5 — Dentro del control del equipo**

El goal puede lograrse a través de las propias acciones del equipo. No depende de decisiones o entregables de otro equipo, un proveedor externo, o una condición de mercado que no puede influenciarse.

Prueba: Si el equipo hace todo perfectamente, ¿puede lograr el goal sin necesitar que otra parte tome una decisión específica? Si no, o se reencuadra el goal o se reconoce explícitamente la dependencia.

---

**Criterio 6 — Relevante para el negocio**

El goal se conecta con un valor de negocio o usuario reconocible. El equipo puede explicar en una oración por qué este outcome importa para el producto, el usuario o la organización.

Prueba: Preguntar "¿Y qué?" después de leer el goal. Si la respuesta es obvia, el goal pasa. Si la respuesta requiere una explicación larga, el goal puede ser demasiado técnico o abstracto.

---

**Criterio 7 — Un solo outcome**

El goal describe un outcome. Los goals que contienen "y" frecuentemente describen dos outcomes distintos que deberían separarse en un goal primario y uno secundario.

Prueba: Quitar todo lo que va después del primer "y" en el goal. ¿Es el enunciado restante aún un goal completo y significativo? Si sí, el goal original probablemente contiene dos goals.

---

**Criterio 8 — Temporalmente apropiado (si tiene restricción de tiempo)**

Si el goal incluye una restricción de tiempo más allá de la duración del ciclo (ej., "sostenido durante 30 días"), la ventana de medición es realista y el equipo tiene un plan para recolectar los datos dentro del ciclo o poco después.

Prueba: ¿El equipo sabe cuándo y cómo se tomará la medición? ¿Es automatizada, manual, o depende de un tercero?

---

**Criterio 9 — Propiedad inequívoca**

Está claro qué rol es responsable de definir, medir y reportar el goal. Típicamente el Product Strategist define y reporta; el equipo logra; el Flow Master monitorea el progreso.

Prueba: Si algo sale mal a mitad del ciclo que amenaza el goal, ¿está claro quién toma la decisión?

---

**Criterio 10 — Conectado a una fuente de datos**

La medición definida en el goal puede accederse a través de una fuente de datos existente y confiable (plataforma de analytics, herramienta de monitoreo, consulta de base de datos, proceso de investigación de usuarios). El goal no depende de datos que aún no existen.

Prueba: ¿Puede el equipo demostrar de dónde vendrá la medición antes de que comience el ciclo?

---

## 5. Dimensionamiento del Goal

### 5.1 Por qué importa el dimensionamiento

Un goal bien escrito pero demasiado grande para un ciclo crea presión para comprometer el estándar de medición o la duración del ciclo. Un goal demasiado pequeño deja capacidad del equipo sin usar y crea la tentación de agregar más goals de los que el equipo puede manejar limpiamente.

El dimensionamiento del goal es la habilidad de calibrar la ambición con la capacidad del ciclo.

### 5.2 Heurísticas de dimensionamiento por duración del ciclo

**Goals para ciclos de 1 semana**

Apropiados cuando:
- El outcome está acotado a un flujo de usuario, un componente del sistema o una métrica medible
- El baseline ya está establecido y el equipo tiene alta confianza en el camino al objetivo
- El trabajo implica mejora incremental en lugar de nueva capacidad
- El equipo está completamente enfocado con riesgo de interrupción mínimo

Señales de que un goal tiene tamaño de 1 semana:
- El equipo puede identificar todas las tareas requeridas en el Smart Planning con razonable confianza
- El trabajo estimado total de tareas es el 60–80% de la capacidad semanal del equipo (dejando margen)
- No hay más de una dependencia externa involucrada

Ejemplos de goals de 1 semana:
> "Reducir el tiempo promedio de carga de la página de inicio de sesión de 3,2s a menos de 1,5s optimizando el patrón de consulta del servicio de autenticación."

> "Eliminar todos los errores 500 devueltos al cliente móvil durante el flujo de checkout, confirmado por cero errores en el monitoreo de producción durante 24 horas consecutivas."

---

**Goals para ciclos de 2 semanas**

Apropiados cuando:
- El outcome requiere cambios en múltiples capas del sistema o flujos de usuario
- El baseline está establecido pero el camino de implementación tiene incertidumbre moderada
- El goal requiere un lanzamiento suave o un despliegue gradual para recolectar datos de medición
- El equipo tiene confianza moderada pero reconoce una o dos incógnitas

Señales de que un goal tiene tamaño de 2 semanas:
- El Smart Planning produce una primera semana clara de tareas pero la segunda semana requiere flexibilidad
- Al menos una tarea de investigación técnica se anticipa antes de que comience la implementación principal
- El goal implica coordinación con otro equipo (diseño, datos, seguridad) pero no depende de sus decisiones

Ejemplos de goals de 2 semanas:
> "Aumentar la tasa de activación de nuevos usuarios B2B (definida como crear su primer proyecto dentro de las 48 horas) del 22% al 40% rediseñando el flujo post-registro."

> "Reducir el tiempo promedio de consulta de base de datos para el módulo de reportes de 8 segundos a menos de 2 segundos mediante indexación específica y optimización de consultas."

---

**Goals para ciclos de 3 semanas**

Apropiados cuando:
- El outcome requiere construir una capacidad nueva que aún no existe en el sistema
- El camino al outcome implica un descubrimiento técnico significativo o decisiones de arquitectura
- La medición en sí requiere una ventana de recolección de datos de más de unos pocos días
- El equipo espera descubrir incógnitas a mitad del ciclo que requieran replanteo

Señales de que un goal tiene tamaño de 3 semanas:
- El Smart Planning solo puede definir claramente la primera semana; las semanas posteriores dependen de los descubrimientos tempranos
- El goal implica migrar, reemplazar o reestructurar significativamente un sistema existente
- La medición del outcome requiere observar el comportamiento del usuario durante varios días

Ejemplos de goals de 3 semanas:
> "Migrar el sistema de gestión de sesiones de una implementación basada en Redis a una nativa de base de datos con cero tiempo de inactividad en producción y sin aumento en la latencia de autenticación."

> "Lanzar la API de socios afiliados con documentación completa e incorporar los dos primeros socios piloto, validado por su completación exitosa de una integración de prueba."

---

### 5.3 La regla de capacidad del equipo

El dimensionamiento del goal debe tener en cuenta la capacidad realista, no el máximo teórico:

```
Capacidad realista del ciclo = (Tamaño del equipo × días disponibles × 0,7)

El factor 0,7 tiene en cuenta:
- Participación en el Daily Flow Sync
- Revisiones de código (trabajo no relacionado con tareas)
- Interrupciones no planificadas absorbidas por el ciclo
- Backlog Grooming y otros eventos
- Variación natural diaria en el output productivo
```

Un equipo de 4 personas en un ciclo de 2 semanas tiene aproximadamente:
```
4 personas × 10 días × 0,7 = 28 persona-días de capacidad productiva
```

Los goals deben dimensionarse para consumir no más del 80% de esta capacidad, para preservar margen para lo imprevisto:
```
28 × 0,8 = 22 persona-días de trabajo planificado por ciclo
```

---

### 5.4 Cuando un goal no cabe en ningún tamaño de ciclo

Si un goal no puede lograrse en 3 semanas ni en condiciones ideales, no es un goal de ciclo — es una iniciativa estratégica. Las iniciativas estratégicas deben descomponerse en una secuencia de goals del tamaño de un ciclo antes de entrar al Smart Planning.

---

## 6. Descomposición del Goal

### 6.1 El principio de descomposición

Los objetivos estratégicos son demasiado grandes para ser goals de ciclo. Los ítems del roadmap de producto son demasiado grandes para ser goals de ciclo. Los OKRs trimestrales son demasiado grandes para ser goals de ciclo. Todos estos deben descomponerse en una secuencia de goals del tamaño de un ciclo con outcomes mensurables.

La descomposición no es lo mismo que la creación de tareas. Descomponer un goal no significa listar las tareas dentro de un goal grande. Significa identificar la secuencia de outcomes independientemente valiosos que juntos logran el objetivo mayor.

### 6.2 La prueba de descomposición

Una descomposición de goal es válida cuando:

1. Cada pieza entrega valor medible de forma independiente — el equipo podría detenerse después de cualquier pieza y aún haber producido algo útil
2. Las piezas están ordenadas por riesgo — la pieza de mayor incertidumbre debería ir primero para que el equipo aprenda temprano
3. Las piezas están ordenadas por dependencia — las piezas posteriores pueden depender de las anteriores, pero no al revés
4. Cada pieza cabe dentro de un solo ciclo bajo suposiciones realistas de capacidad

### 6.3 Ejemplo de descomposición — recorrido completo

**Objetivo estratégico (demasiado grande para un ciclo):**

> "Transformar nuestra experiencia de soporte al cliente para reducir el volumen de tickets, disminuir el tiempo de resolución y mejorar los puntajes de satisfacción del cliente."

Este objetivo contiene múltiples outcomes distintos, dependencias desconocidas y requeriría meses de trabajo. No puede ser un goal de ciclo.

**Paso 1 — Identificar las dimensiones de outcome distintas:**
- Reducir el volumen de tickets (probablemente requiere mejoras de autoservicio)
- Disminuir el tiempo de resolución (probablemente requiere mejoras en las herramientas de agentes o mejor categorización)
- Mejorar los puntajes de satisfacción (requiere cambios en ambas dimensiones anteriores más posiblemente capacitación de agentes)

**Paso 2 — Identificar qué dimensión abordar primero (mayor riesgo/más fundamental):**
El equipo no tiene datos sobre por qué se crean los tickets. Sin entender la causa raíz, cualquier esfuerzo de mejora es una suposición. El paso fundamental es la medición.

**Goal del Ciclo 1:**
> "Establecer una comprensión baseline de las causas raíz de los tickets de soporte categorizando los últimos 90 días de tickets en una taxonomía definida, produciendo un desglose ordenado de los 10 tipos de tickets principales por volumen."

**Paso 3 — Basado en los datos del Ciclo 1, diseñar el goal del Ciclo 2:**
Los datos revelan que el 45% de los tickets son solicitudes de restablecimiento de contraseña — un problema completamente automatizable.

**Goal del Ciclo 2:**
> "Eliminar los tickets de soporte de restablecimiento de contraseña lanzando un flujo de autoservicio, apuntando a una reducción del 45% del volumen de tickets a menos del 5% dentro de las dos semanas posteriores al lanzamiento."

**Paso 4 — El Ciclo 3 aborda el siguiente problema de mayor volumen, y así sucesivamente.**

Este enfoque convierte una iniciativa vaga de varios trimestres en una secuencia de ciclos enfocados, medibles y guiados por el aprendizaje.

---

### 6.4 Patrones de descomposición

**Patrón 1 — Medición primero**

Usar cuando: El equipo no tiene suficientes datos para saber qué construir o cambiar.
Estructura: Ciclo 1 = establecer baseline. Ciclos 2+ = actuar sobre los hallazgos.

**Patrón 2 — Fundación antes que features**

Usar cuando: El outcome deseado requiere infraestructura, arquitectura o una plataforma que aún no existe.
Estructura: Ciclo 1 = construir la capa habilitadora. Ciclo 2 = entregar el primer outcome orientado al usuario sobre ella.

**Patrón 3 — Alcance reducido, validar, expandir**

Usar cuando: El equipo quiere validar una hipótesis antes de invertir en un despliegue completo.
Estructura: Ciclo 1 = implementar para un segmento reducido (un tipo de usuario, una geografía, un área de producto). Ciclo 2 = revisar datos, expandir si se valida.

**Patrón 4 — Secuenciación por riesgo primero**

Usar cuando: Un goal de múltiples partes tiene un componente de alta incertidumbre que podría invalidar el resto si falla.
Estructura: Ciclo 1 = abordar el componente de mayor riesgo. Si falla o revela nueva información, los ciclos posteriores se replantean antes de que se invierta en el trabajo de menor riesgo.

---

## 7. Goals Primarios vs Goals Secundarios

### 7.1 La distinción

**Los goals primarios** son los outcomes obligatorios de un ciclo. Un ciclo se considera exitoso solo si todos los goals primarios son logrados. Si un goal primario no se logra para el final del ciclo, el ciclo se extiende o cierra con un registro de completación parcial que debe abordarse.

**Los goals secundarios** son outcomes valiosos que el equipo persigue después de que los goals primarios están asegurados. Los goals secundarios son compromisos reales — se planifican, se dimensionan y se asignan recursos — pero se desprioriza explícitamente si los goals primarios requieren más tiempo o recursos de lo anticipado.

### 7.2 La regla para el conteo de goals primarios

Un ciclo debe contener uno, máximo dos goals primarios.

Los equipos consistentemente sobreestiman en cuánto pueden enfocarse. Los múltiples goals primarios crean un riesgo oculto: el equipo divide el enfoque entre ellos, y ambos terminan parcialmente completados en lugar de uno completamente logrado.

La tentación de agregar un segundo goal primario generalmente es una señal de que el primer goal está siendo escrito de manera muy acotada. Si el equipo siente que puede lograr más en un ciclo, la respuesta correcta es escribir un goal más ambicioso, no agregar más goals.

**Excepción:** Los equipos con flujos de trabajo claramente independientes (ej., un desarrollador backend y uno frontend con goals completamente paralelos que nunca se intersectan) pueden llevar dos goals primarios si la independencia puede demostrarse en el Smart Planning.

### 7.3 La regla para el conteo de goals secundarios

Los goals secundarios no deben ser más de dos. Más de dos goals secundarios es una ficción de planificación — el equipo no llegará a ellos si los goals primarios consumen la capacidad esperada, y tener una lista larga de goals secundarios crea sobrecarga cognitiva sin beneficio operativo.

Los goals secundarios que no se logran en el ciclo actual regresan al backlog y se reconsideran para el próximo ciclo. No se llevan automáticamente hacia adelante.

### 7.4 Ejemplos — primario vs secundario

**Escenario: Equipo de e-commerce, ciclo de 2 semanas**

Goal primario:
> "Reducir la tasa de abandono del checkout del 68% a menos del 55% implementando un carrito persistente y un flujo de checkout de una sola página."

Goal secundario:
> "Agregar información de guía de tallas a las páginas de producto para la categoría de calzado, reduciendo las solicitudes de devolución por tallas en un 20%."

El goal primario es un cambio mayor y más riesgoso que requiere el enfoque completo del equipo. El goal secundario es una mejora más pequeña e independiente que puede abordarse si el goal primario se completa antes de lo previsto o por miembros del equipo cuyas tareas del goal primario están temporalmente bloqueadas.

---

**Escenario: Equipo de plataforma, ciclo de 1 semana**

Goal primario:
> "Eliminar todos los errores de timeout en la cola de procesamiento de eventos durante las horas de tráfico pico, verificado por cero alertas relacionadas con la cola durante 48 horas hábiles consecutivas."

Goal secundario:
> "Instrumentar la cola de eventos con métricas de latencia y throughput en el dashboard central de monitoreo."

El goal secundario es aditivo: si el trabajo primario está hecho, el goal secundario agrega observabilidad. Si el goal primario toma la semana completa, la instrumentación de monitoreo espera para el próximo ciclo.

---

### 7.5 La regla de promoción

Un goal secundario puede ser promovido a estado primario si, durante el ciclo, el goal primario está lo suficientemente avanzado como para que el equipo haya confirmado que se completará con capacidad de sobra. Esta promoción requiere acuerdo explícito entre el Flow Master y el Product Strategist en un Daily Flow Sync.

Un goal secundario no puede ser promovido a mitad del ciclo simplemente porque alguien quiere trabajar en él. La promoción debe estar basada en datos, en el progreso real del goal primario.

---

## 8. Anti-patrones en la Escritura de Goals

Los siguientes anti-patrones aparecen en casi todos los intentos tempranos de escritura de goals de los equipos. Cada uno socava el contrato de outcome de una manera específica. Para cada anti-patrón se proporciona un ejemplo del mundo real junto con una reescritura corregida.

---

### Anti-patrón 1 — La Tarea Disfrazada de Goal

**Qué es:** El goal describe un trabajo específico en lugar del resultado de ese trabajo. Suena como un goal porque está enmarcado como un objetivo, pero en realidad es una tarea.

**Por qué falla:** Una tarea puede completarse sin producir valor. "Implementar X" está hecho cuando X está implementado, independientemente de si X funciona, es usado, o resuelve el problema previsto.

**Ejemplo (malo):**
> "Implementar el sistema de notificaciones por email para actualizaciones de estado de pedidos."

**Reescritura (buena):**
> "Reducir las consultas de soporte sobre el estado de pedidos en un 40% habilitando notificaciones automáticas por email en los eventos clave del ciclo de vida del pedido."

**Señal de detección:** El goal comienza con un verbo tecnológico (Implementar, Construir, Crear, Agregar, Desplegar, Configurar). Si quitar el verbo y el objeto no deja nada de valor, es una tarea.

---

### Anti-patrón 2 — El Goal Inconmensurable

**Qué es:** El goal describe una dirección deseable pero no proporciona forma de confirmar que ha sido alcanzada. Todos tendrán una opinión diferente sobre si el goal fue logrado.

**Por qué falla:** En el Goal Review, el equipo no puede evaluar objetivamente el éxito. La revisión se convierte en una negociación sobre interpretación en lugar de una evaluación de outcome.

**Ejemplo (malo):**
> "Mejorar la experiencia de usuario del flujo de onboarding."

**Reescritura (buena):**
> "Aumentar el porcentaje de nuevos usuarios que completan el flujo de onboarding sin abandonarlo del 41% al 65%, medido por análisis de embudo en el dashboard de analytics."

**Señal de detección:** Preguntar "¿Cómo sabremos al final del ciclo si este goal fue logrado?" Si la respuesta involucra juicio, opinión o sensación en lugar de datos, el goal es inconmensurable.

---

### Anti-patrón 3 — El Goal Demasiado Grande

**Qué es:** El goal describe un outcome que genuinamente requiere múltiples ciclos, múltiples equipos o múltiples meses para lograrse. No está mal en su aspiración — está mal en su alcance para un solo ciclo.

**Por qué falla:** El equipo comienza el trabajo y descubre a mitad del ciclo que el goal no puede completarse. El ciclo se extiende repetidamente o cierra con un registro vago de "parcialmente completado."

**Ejemplo (malo):**
> "Migrar todo el monolito heredado a arquitectura de microservicios."

**Reescritura (buena — primer ciclo de una secuencia de múltiples ciclos):**
> "Extraer el módulo de autenticación de usuarios del monolito hacia un servicio independiente con una API estable, con cero regresiones en el rendimiento de autenticación, como primera fase de la migración a microservicios."

**Señal de detección:** Si el Smart Planning no puede identificar todas las tareas principales del ciclo, el goal probablemente es demasiado grande. Si el equipo dice "descubriremos las partes posteriores sobre la marcha," el goal es demasiado grande.

---

### Anti-patrón 4 — El Goal Técnico sin Valor para el Usuario

**Qué es:** El goal describe un cambio técnico interno que no tiene conexión articulada con una experiencia de usuario, una métrica de negocio o una propiedad del sistema medible.

**Por qué falla:** El trabajo técnico no tiene valor intrínseco. Su valor viene de lo que habilita. Un goal que no articula qué cambia para el usuario o el sistema no puede evaluarse como "valioso."

**Ejemplo (malo):**
> "Refactorizar la capa de acceso a datos para usar el patrón repositorio."

**Reescritura (buena):**
> "Reducir el tiempo promedio de un desarrollador para agregar una nueva entidad de base de datos de 3 días a menos de 4 horas refactorizando la capa de acceso a datos para usar un patrón repositorio consistente, validado cronometrando las siguientes dos adiciones de entidades después de la refactorización."

**Señal de detección:** Preguntar "Si hacemos esto perfectamente, ¿qué será diferente para el usuario o el producto?" Si la respuesta es "nada directamente, pero mejora el código," hacer una pregunta de seguimiento: "¿Cómo se traduce el mejor código en algo que podamos medir?" La respuesta a esa pregunta es el goal real.

---

### Anti-patrón 5 — El Goal de Negocio Vago

**Qué es:** El goal está copiado directamente de un documento de estrategia de negocio o de una solicitud de un stakeholder y no ha sido traducido a un outcome específico y accionable. Suena importante pero no guía las decisiones del equipo.

**Por qué falla:** "Crecer los ingresos" o "mejorar la retención" son estrategias, no goals. Un equipo no puede tomar decisiones diarias de tareas basadas en una estrategia. Necesitan un outcome específico hacia el cual moverse.

**Ejemplo (malo):**
> "Mejorar la retención de clientes."

**Reescritura (buena):**
> "Reducir la tasa de churn a 30 días para el plan Estándar del 8,5% a menos del 6% implementando una notificación in-app de 'recordatorio de valor' para usuarios que no han iniciado sesión durante 7 días."

**Señal de detección:** El goal podría aparecer en una presentación de estrategia de negocio sin modificación. No menciona una métrica específica, un segmento de usuario específico, un componente del sistema específico o un mecanismo específico.

---

### Anti-patrón 6 — El Goal con Múltiples Outcomes

**Qué es:** El goal describe dos o más outcomes distintos que coinciden en estar relacionados, unidos por "y" o implicados por un objetivo amplio.

**Por qué falla:** Dos outcomes requieren dos evaluaciones de éxito. Cuando uno se logra y el otro no, el ciclo termina en ambigüedad. El equipo no puede responder "¿Tuvimos éxito?" con un simple sí o no.

**Ejemplo (malo):**
> "Mejorar la documentación de la API y agregar rate limiting a la API de desarrolladores."

**Reescritura (buena — dividida en dos goals):**

Goal primario:
> "Habilitar a los desarrolladores externos para completar una integración básica de API sin soporte humano publicando documentación completa de API con ejemplos de código en vivo, validado por tres desarrolladores externos que completen exitosamente una integración de prueba."

Goal secundario:
> "Proteger la infraestructura de la API de abusos implementando rate limiting por cliente a 1.000 solicitudes por minuto, con respuestas de límite excedido devolviendo códigos de estado 429 estándar."

**Señal de detección:** El goal contiene la palabra "y" conectando dos objetos u outcomes distintos. Quitar todo después de "y" — si la primera parte es un goal completo y significativo, el original contenía dos goals.

---

### Anti-patrón 7 — El Goal de Actividad ("Mejorar el Rendimiento")

**Qué es:** El goal nombra una categoría de actividad o una preocupación de ingeniería en lugar de un outcome específico. Usa palabras que describen un tipo de trabajo en lugar de un estado a alcanzar.

**Por qué falla:** Las actividades no tienen estados de completación. "Mejorar el rendimiento" siempre puede hacerse más, mejor o de manera diferente. No hay un momento en el que el goal esté objetivamente completo.

**Ejemplo (malo):**
> "Trabajar en mejoras de rendimiento para la aplicación móvil."

**Reescritura (buena):**
> "Lograr un tiempo de inicio de la aplicación de menos de 1,5 segundos en dispositivos Android de gama media (equivalente a Samsung Galaxy A52) según lo medido por pruebas de rendimiento automatizadas que corren en el pipeline de CI."

**Señal de detección:** El goal usa frases en gerundio (Trabajando en, Mejorando, Investigando, Soportando, Abordando) o palabras de categoría que describen esfuerzos continuos en lugar de estados específicos.

---

### Anti-patrón 8 — El Goal de Input vs Goal de Outcome

**Qué es:** El goal mide lo que el equipo pone (esfuerzo, tiempo, recursos, entregables) en lugar de lo que cambia como resultado de ese input.

**Por qué falla:** Los inputs están completamente dentro del control del equipo. Un equipo siempre puede afirmar que un goal de input fue logrado porque los inputs solo dependen del esfuerzo. Esto elimina la responsabilidad por los resultados.

**Ejemplo (malo):**
> "Escribir 20 artículos de base de conocimientos para apoyar el centro de ayuda de autoservicio."

**Reescritura (buena):**
> "Reducir el volumen de tickets de soporte de nuevos usuarios en un 30% publicando contenido de base de conocimientos que cubra las 10 principales fuentes de solicitudes de soporte de la primera semana."

**Señal de detección:** La condición de éxito puede confirmarse contando lo que el equipo produjo (artículos escritos, pruebas agregadas, endpoints documentados) sin referencia a si funcionó.

---

### Anti-patrón 9 — El Goal Dependiente de Terceros

**Qué es:** El goal solo puede lograrse si otro equipo, otro sistema o una parte externa entrega algo específico. El rendimiento del equipo está a merced de un factor fuera de su control.

**Por qué falla:** En el Goal Review, el equipo puede legítimamente afirmar que el goal falló debido a la dependencia, creando un registro de responsabilidad no verificable. Las fallas de dependencia repetidas erosionan la calidad de los datos del ciclo.

**Ejemplo (malo):**
> "Lanzar la nueva integración de pasarela de pago con la nueva experiencia de checkout."

Problema: La integración de la pasarela de pago depende de que la API del equipo de pagos esté lista. Si eso se retrasa, la experiencia de checkout no puede validarse.

**Reescritura (buena):**
> "Completar y validar la nueva experiencia de checkout contra una pasarela de pago simulada, lista para integración en producción dentro de las 48 horas posteriores a que la API del equipo de pagos esté disponible."

O, mejor, dividir el goal: el goal del equipo de checkout es la experiencia de checkout; el goal del equipo de pagos es la API. El éxito de cada equipo es medible independientemente.

**Señal de detección:** El resultado medible del goal requiere un verbo como "lanzar," "integrar con" o "poner en producción," y cualquiera de esos eventos requiere la acción de otra parte para ser posible.

---

### Anti-patrón 10 — El Goal de Retrospectiva

**Qué es:** El goal describe algo que el equipo quiere hacer en lugar de algo que quiere lograr. Es un compromiso con un proceso, no un outcome.

**Por qué falla:** Los compromisos de proceso se manejan mejor como acuerdos del equipo o actualizaciones de la Definition of Done. Convertirlos en goals de ciclo infla el conteo de goals sin agregar responsabilidad por outcomes.

**Ejemplo (malo):**
> "Mejorar nuestro proceso de revisión de código estableciendo estándares y checklists de revisión."

**Reescritura (buena — si genuinamente importa):**
> "Reducir el tiempo promedio del ciclo de revisión de código de 3,2 días a menos de 24 horas estableciendo y adoptando un checklist de estándares de revisión, medido durante las últimas 10 revisiones del ciclo."

O, si el equipo simplemente quiere establecer un mejor proceso, manejarlo como un acuerdo de equipo en la retrospectiva, no como un goal de ciclo.

**Señal de detección:** El goal se satisface con que el equipo acuerde hacer algo en lugar de con un cambio medible en un estado externo.

---

### Anti-patrón 11 — El Goal de Métrica Vanidosa

**Qué es:** El goal usa una métrica que es fácil de medir y muestra movimiento positivo pero no refleja valor de negocio real.

**Por qué falla:** El equipo logra la métrica mientras el problema subyacente permanece sin resolver. El liderazgo ve un "éxito" que en realidad es vacío.

**Ejemplo (malo):**
> "Aumentar las visitas a páginas del blog del producto en un 50%."

**Reescritura (buena):**
> "Aumentar los registros de prueba provenientes de búsqueda orgánica y contenido del blog de 120 a 200 por mes."

**Señal de detección:** Alcanzar la métrica se vería bien en un informe pero no cambiaría un comportamiento real del usuario o un outcome de negocio. Preguntar: "Si esta métrica mejora pero todo lo demás permanece igual, ¿la vida de alguien será mejor?"

---

## 9. Formato del Taller de Escritura de Goals

### 9.1 Propósito

Un Taller de Escritura de Goals es una sesión estructurada de 60 minutos realizada al inicio de un nuevo trimestre del producto, en la formación del equipo, o cuando un equipo identifica que la calidad de sus goals ha sido consistentemente baja. Es distinto del Smart Planning, que ocurre cada ciclo. El taller construye la capacidad del equipo para escribir goals; el Smart Planning usa esa capacidad.

### 9.2 Prerrequisitos

Antes de ejecutar el taller:
- El Product Strategist debe tener 5–8 goals o objetivos estratégicos en borrador preparados (no necesitan estar bien escritos; serán trabajados en el taller)
- El Flow Master debe distribuir la distinción Output vs Outcome y la Fórmula GOAL para Goals a todos los participantes 24 horas antes
- Un espacio colaborativo (pizarrón digital o físico) debe estar listo con columnas: "Goal en Borrador," "Problemas Encontrados," "Goal Reescrito"

### 9.3 Agenda del taller (60 minutos)

**0–10 min — Encuadre (10 min)**

El facilitador (típicamente el Flow Master o un Product Strategist experimentado) presenta:
- La distinción Output vs Outcome con dos ejemplos del historial del propio equipo
- La Fórmula GOAL para Goals (Acción + Objeto + Resultado Medible + Restricción de Tiempo)
- El Checklist de Criterios de Calidad del Goal (visible para todos los participantes durante todo el taller)

No dedicar más de 10 minutos al encuadre. El aprendizaje ocurre en la práctica, no en la presentación.

---

**10–25 min — Primera pasada: identificar los problemas (15 min)**

Publicar 3–4 de los goals en borrador del Product Strategist en la columna "Goal en Borrador." Pedirle al equipo que revise silenciosamente cada uno e identifique problemas usando el Checklist de Criterios de Calidad como guía. Cada persona escribe los problemas en notas adhesivas.

Agrupar los problemas. Hallazgos comunes:
- "Esto es un output, no un outcome"
- "No hay medición"
- "Esto son dos goals en uno"
- "No tenemos baseline para esto"
- "Esto depende de otro equipo"

Aún no reescribir. El diagnóstico primero.

---

**25–45 min — Reescrituras colaborativas (20 min)**

Para los 2 goals más problemáticos identificados en la primera pasada, el grupo reescribe colaborativamente usando la fórmula. El Flow Master facilita pero no dicta — la reescritura debe venir del grupo.

Para cada reescritura, preguntar:
- "¿Cuál es el baseline?" (Forzar especificidad)
- "¿Cómo sabremos al final del ciclo si este goal fue logrado?" (Forzar mensurabilidad)
- "¿Hay algo que el equipo haría que satisfaga este goal pero no entregue valor?" (Forzar orientación al outcome)
- "¿Podemos lograr esto en un ciclo?" (Forzar dimensionamiento)

---

**45–55 min — Práctica individual (10 min)**

Cada participante reescribe individualmente uno de los goals en borrador restantes usando la fórmula. Compartir y comparar. Nota: se espera que diferentes reescrituras hagan diferentes elecciones sobre el alcance y la métrica. Esto es productivo — saca a la superficie suposiciones sobre lo que importa.

---

**55–60 min — Cierre y compromisos (5 min)**

El grupo acuerda:
- Qué criterios el equipo viola con más frecuencia (esto se convierte en una lista de vigilancia específica)
- Si el Product Strategist tendrá los goals revisados contra el checklist antes de cada Smart Planning
- Si el equipo agregará un paso de "verificación de calidad del goal" a la agenda del Smart Planning

---

### 9.4 Notas para el facilitador

- El fallo más común del taller es gastar demasiado tiempo en el encuadre y quedarse sin tiempo para la práctica. Recortar el encuadre agresivamente.
- Los equipos frecuentemente resisten la reescritura porque se siente como una crítica al trabajo del Product Strategist. Enmarcar las reescrituras como "mejoras de precisión," no como correcciones.
- Si el equipo se queda bloqueado en una reescritura, preguntar "¿En qué datos miraríamos al final del ciclo para saber si esto tuvo éxito?" — esta pregunta casi siempre desbloquea el componente de resultado medible.
- Ejecutar el taller nuevamente 3 ciclos después para evaluar la mejora con ejemplos reales del propio Registro de Goals del equipo.

---

## 10. Traducción de OKRs a Goals

### 10.1 La relación entre OKRs y los goals de GOAL

La mayoría de las organizaciones que usan establecimiento estructurado de objetivos operan al nivel de OKR (Objectives and Key Results) para la planificación trimestral o anual. Los Goal Cycles de GOAL son de 1 a 3 semanas. Los OKRs y los goals de GOAL operan en escalas de tiempo y niveles de abstracción diferentes.

La relación es:
```
OKR de la Compañía (Objetivo)
  └── Key Result (trimestral, medible)
        └── Goal del Ciclo 1 (outcome de 2 semanas)
        └── Goal del Ciclo 2 (outcome de 2 semanas)
        └── Goal del Ciclo 3 (outcome de 2 semanas)
        └── Goal del Ciclo N (outcome de 2 semanas)
```

Un Key Result trimestral típicamente es demasiado grande para ser un único goal de ciclo de GOAL. Debe descomponerse en una secuencia de goals de ciclo que, colectivamente, logran el Key Result.

### 10.2 Proceso de traducción

**Paso 1 — Comenzar con el Key Result**

El Key Result ya es (cuando está bien escrito) un outcome con una métrica y un objetivo. Sirve como el destino.

Ejemplo de Key Result:
> "Reducir el tiempo promedio de obtención de valor para nuevos clientes enterprise de 45 días a 20 días."

**Paso 2 — Identificar el estado actual**

¿Dónde está la métrica ahora? El baseline es el punto de partida para la secuencia de goals de ciclo.

**Paso 3 — Identificar los obstáculos principales**

¿Cuáles son las principales razones por las que la métrica está actualmente en 45 días? Estos se convierten en los enunciados de problema que cada goal de ciclo aborda.

Hallazgos de ejemplo:
- La documentación de onboarding está incompleta (los clientes se quedan atascados en la configuración)
- El proceso de importación inicial de datos es manual y lento
- Los gerentes de customer success están sobrecargados durante la semana 1 del onboarding de nuevos clientes

**Paso 4 — Secuenciar los goals de ciclo por riesgo y dependencia**

¿Qué problema, si no se resuelve primero, bloqueará el progreso en los demás? Comenzar por allí.

```
Goal del Ciclo 1: "Habilitar que los nuevos clientes enterprise completen la importación
                   inicial de datos sin la intervención de Customer Success construyendo
                   un asistente de importación guiado, reduciendo las importaciones
                   asistidas por CS del 100% a menos del 30%."

Goal del Ciclo 2: "Reducir los tickets de soporte de '¿por dónde empiezo?' en los
                   primeros 14 días de los clientes enterprise de 6,2 por cuenta a menos
                   de 2 por cuenta lanzando un checklist de configuración interactivo
                   vinculado a hitos de éxito definidos por el cliente."

Goal del Ciclo 3: "Lograr un tiempo promedio de primer valor de 22 días o menos para los
                   clientes enterprise incorporados en este ciclo, medido desde la firma
                   del contrato hasta la completación de su primer flujo de trabajo configurado."
```

**Paso 5 — Validar la alineación**

Después de escribir la secuencia de goals de ciclo, preguntar: "Si todos estos goals se logran, ¿se logrará el Key Result?" Si sí, la traducción está completa. Si quedan brechas, agregar ciclos adicionales.

### 10.3 Qué hacer cuando los OKRs están mal escritos

Muchas organizaciones escriben OKRs al nivel del output o con Key Results inconmensurables. Cuando esto ocurre, el proceso de traducción debe corregir el OKR antes de que pueda convertirse en un goal de ciclo.

**Key Result de OKR mal escrito:**
> "Mejorar la experiencia del desarrollador para los equipos de ingeniería internos."

Esto no tiene medición ni especificidad. Antes de traducirlo a un goal de ciclo, preguntar al Product Strategist: "¿Qué datos convencerían al liderazgo al final del trimestre de que la experiencia del desarrollador mejoró?" La respuesta a esa pregunta es el Key Result real.

---

## 11. Preguntas de Validación del Goal

Antes de que un goal sea confirmado en el Goal Cycle Plan al final del Smart Planning, el equipo hace estas preguntas. Cualquier pregunta que no pueda responderse con confianza es una señal para revisar el goal.

---

**P1 — ¿Qué exactamente cambia si se logra este goal?**

Esta pregunta fuerza al equipo a articular el outcome en términos concretos. "La retención de usuarios mejora" no es concreto. "La retención a 30 días para los usuarios del plan Estándar aumenta del 71% al 80%" es concreto.

---

**P2 — ¿Cuál es el baseline y dónde podemos encontrarlo ahora mismo?**

El equipo debe poder abrir un dashboard, ejecutar una consulta o señalar un informe que muestre el estado actual de la métrica antes de que comience el ciclo. Si no pueden, el baseline no existe y el goal no puede medirse.

---

**P3 — ¿Cómo se ve el fracaso y quién decide?**

Definir el estado de fracaso con la misma especificidad que el estado de éxito. Si el goal es aumentar la activación del 38% al 60%, el fracaso es cualquier valor por debajo del 60% en el momento de la medición. ¿Quién en el Goal Review toma la decisión? Típicamente el Product Strategist.

---

**P4 — ¿Hay algo que el equipo podría hacer que satisfaga el goal literalmente pero no en espíritu?**

Esta pregunta prueba los problemas de la "Ley de Goodhart" — situaciones donde optimizar la métrica socava la intención real. Por ejemplo, un goal de "aumentar los usuarios activos diarios" técnicamente podría satisfacerse disparando notificaciones push diarias que llevan a los usuarios a la aplicación pero no generan compromiso real. ¿Eso contaría? Si la respuesta es "técnicamente sí," ajustar la definición del goal.

---

**P5 — ¿Cuál es el mayor riesgo para lograr este goal?**

Nombrar el riesgo explícitamente en el Goal Cycle Plan. Esto no es pesimismo — es planificación. Los riesgos conocidos obtienen planes de mitigación. Los riesgos desconocidos que surgen a mitad del ciclo son genuinas sorpresas. El objetivo de esta pregunta es convertir los riesgos desconocidos en conocidos.

---

**P6 — ¿Alguna parte de este goal depende de otro equipo o parte externa?**

Si sí, ¿está confirmada esa dependencia? ¿El otro equipo se comprometió con su entregable dentro del marco temporal del ciclo? Si no, o bien quitar la dependencia de la definición del goal o reconocerla explícitamente como un riesgo.

---

**P7 — ¿Puede el equipo explicar este goal a un stakeholder en una oración?**

Si el goal requiere un párrafo para explicarse, probablemente es demasiado complejo para un ciclo. Un goal bien dimensionado y bien escrito es comprensible de un vistazo.

---

**P8 — ¿Hay una fuente de datos lista para medir el resultado en el Goal Review?**

No "vamos a configurar analytics para esto" — la fuente de datos debe existir antes de que comience el ciclo. Si la infraestructura de medición no existe, o agregar una tarea para crearla como parte del ciclo, o escribir un goal de ciclo previo que establezca la capacidad de medición.

---

**P9 — ¿Vale la pena lograr este goal?**

Preguntarlo directamente. Dado todo en lo que el equipo podría estar trabajando, ¿es este el outcome más valioso que pueden producir en este ciclo? El Product Strategist es dueño de esta pregunta, pero el equipo debe desafiar si tiene evidencia convincente de que un goal diferente produciría más valor.

---

**P10 — ¿Qué pasa si logramos este goal? ¿Cuál es el siguiente goal natural en esta secuencia?**

Esta pregunta orientada al futuro asegura que el goal actual encaje en una secuencia estratégica coherente. También siembra el backlog para el Smart Planning del próximo ciclo.

---

## 12. Criterios de Revisión del Goal

### 12.1 El evento Goal Review

El Goal Review es el evento final de un Goal Cycle. Su propósito es evaluar, con datos objetivos, si los goals primarios fueron logrados. No es una demostración de features. No es una actualización del estado del proyecto. Es un veredicto, respaldado por evidencia, sobre si los outcomes del equipo fueron alcanzados.

### 12.2 Marco de evaluación

Para cada goal primario, el Goal Review aplica la siguiente evaluación:

---

**Dimensión 1 — Verificación de la medición**

¿Se midió la métrica de la manera acordada, desde la fuente de datos acordada, en el momento acordado?

Si el método de medición cambió durante el ciclo (fuente de datos diferente, ventana de tiempo diferente, población diferente), ese cambio debe reconocerse y justificarse explícitamente. Cambiar los métodos de medición a posteriori es una falla de integridad de datos.

---

**Dimensión 2 — Logro del objetivo**

¿La métrica alcanzó el objetivo definido?

La evaluación es binaria: el objetivo fue alcanzado o no lo fue. El crédito parcial debe etiquetarse explícitamente como crédito parcial, no reenmarcarse como éxito. "Llegamos al 52% contra un objetivo del 60%" es un logro parcial. Es información valiosa pero no es completación del goal.

---

**Dimensión 3 — Sostenibilidad**

Para goals que requieren un outcome sostenido (ej., "cero errores durante 48 horas consecutivas" o "mantenido por debajo de 1 segundo de tiempo de respuesta bajo carga"), ¿se sostuvo el outcome durante la duración requerida completa?

Una métrica que alcanzó el objetivo durante una hora pero no de forma consistente no satisface un goal de outcome sostenido.

---

**Dimensión 4 — Atribución**

¿Existe evidencia razonable de que el trabajo del equipo causó que la métrica se moviera? Esta pregunta no siempre puede responderse con certeza, pero el equipo debe reflexionar sobre si factores de confusión (eventos externos, cambios de mercado, efectos estacionales) podrían explicar el movimiento.

Si la atribución es incierta, anotarlo en el registro del ciclo. Esto no es un fracaso — es honestidad que mejora la escritura de goals futura.

---

**Dimensión 5 — Cumplimiento del control de calidad**

¿Las tareas que habilitaron el goal se completaron en cumplimiento con la Definition of Done? Un goal logrado a través de atajos que omiten la DoD no es un éxito limpio. Es un éxito con deuda técnica adjunta.

---

### 12.3 Resultados del Goal Review

Después de aplicar las cinco dimensiones, cada goal primario recibe uno de tres veredictos:

**Logrado:** La métrica fue medida correctamente, el objetivo fue alcanzado, el outcome fue sostenido (si aplica), la atribución es razonable y se respetó la DoD.

**Parcialmente Logrado:** La métrica se movió en la dirección correcta pero no alcanzó el objetivo. El registro del ciclo anota la brecha, la razón de la brecha y si el trabajo restante continuará en el próximo ciclo.

**No Logrado:** La métrica no se movió, o se movió en la dirección equivocada, o no pudo medirse. El registro del ciclo investiga la causa raíz: ¿El goal estaba mal escrito? ¿La implementación fue incorrecta? ¿La hipótesis era incorrecta?

Los tres outcomes son valiosos. "No Logrado" con análisis honesto de causa raíz es más valioso que un "Logrado" reenmarcado que oculta un fracaso. El Registro de Goals depende de registros honestos para servir como recurso de aprendizaje.

---

## 13. Registro de Goals

### 13.1 Qué es el Registro de Goals

El Registro de Goals es un registro persistente y estructurado de cada goal primario y secundario a través de todos los Goal Cycles completados. Sirve como la memoria organizacional del equipo — un registro de lo que se intentó, lo que se logró, lo que se aprendió y cuál fue el impacto medible a lo largo del tiempo.

A diferencia de un archivo de proyecto, el Registro de Goals se referencia activamente. Se consulta en el Smart Planning para evitar goals redundantes, en las retrospectivas para identificar patrones, y en las revisiones estratégicas para demostrar el impacto acumulado del equipo.

### 13.2 Estructura de entrada del registro

Cada goal completado genera una entrada de registro con los siguientes campos:

```
Entrada del Registro de Goals

ID del Ciclo:        [identificador único del ciclo, ej., 2025-Q1-C3]
Duración del ciclo:  [planificada vs real, ej., "2 semanas / 2 semanas"]
Tipo de goal:        [Primario / Secundario]
Enunciado del goal:  [texto exacto del goal como fue escrito en el Goal Cycle Plan]
Baseline:            [valor de la métrica al inicio del ciclo]
Objetivo:            [valor de la métrica requerido para la completación del goal]
Resultado:           [valor de la métrica en el Goal Review]
Veredicto:           [Logrado / Parcialmente Logrado / No Logrado]
Causa raíz:          [breve explicación si Parcialmente Logrado o No Logrado]
Aprendizajes:        [qué descubrió el equipo sobre el espacio del problema]
Próxima acción:      [goal de seguimiento agregado al backlog, si hay alguno]
Fuente de datos:     [de dónde vino la medición]
Redactado por:       [nombre del Product Strategist]
Revisado por:        [nombre del Flow Master]
```

### 13.3 Responsabilidades de mantenimiento del registro

- El Product Strategist completa la entrada del registro dentro de las 24 horas posteriores al Goal Review
- El Flow Master revisa y aprueba la entrada para verificar la precisión de los campos de cumplimiento de proceso
- El registro se almacena en una ubicación accesible para todos los miembros del equipo y para los stakeholders relevantes
- Las entradas del registro nunca se modifican después de la aprobación — si se necesita una corrección, se agrega una nota de corrección, no se realiza una edición

### 13.4 Casos de uso del registro

**Preparación del Smart Planning:** El Product Strategist revisa las últimas 5–10 entradas del registro antes de escribir nuevos goals para evitar reciclar enfoques previamente intentados (y fallidos) y para construir sobre los aprendizajes del ciclo anterior.

**Análisis de retrospectiva:** El Flow Master analiza las entradas del registro para identificar patrones: ¿Los mismos tipos de goal son consistentemente parcialmente logrados? ¿Los goals en un área específica del producto se sobreestiman consistentemente? ¿Ciertas métricas nunca se mueven a pesar de múltiples ciclos dirigidos hacia ellas?

**Reporte a stakeholders:** El registro proporciona una narrativa honesta y respaldada por datos del impacto trimestral del equipo. En lugar de reportar features lanzadas, el equipo reporta outcomes logrados con datos de antes/después de las métricas.

**Mejora de la calidad del goal:** Con el tiempo, el registro revela qué patrones de escritura de goals producen veredictos limpios de "Logrado" y cuáles producen "Parcialmente Logrado" o "No Logrado." Esto es retroalimentación directa sobre la calidad de escritura de goals del equipo.

### 13.5 Anti-patrones del registro a evitar

- **Desplazamiento retroactivo del goal:** Cambiar el enunciado del goal después del ciclo para que coincida con lo que realmente se logró. Esto invalida el registro como recurso de aprendizaje.
- **Inflación del veredicto:** Registrar "Logrado" para goals que fueron parcialmente alcanzados porque el equipo no quiere que el registro muestre una brecha. Los registros honestos de logro parcial son más valiosos que los falsos registros de logro completo.
- **Aprendizajes escasos:** Completar el campo "Aprendizajes" con "sin aprendizajes específicos" o dejarlo en blanco. Cada ciclo produce aprendizaje, incluso si el aprendizaje es "nuestra hipótesis era correcta."
- **Registro desconectado:** Mantener el registro en un formato o ubicación que dificulte su consulta y referencia. El registro debe ser buscable por tipo de goal, veredicto, área del producto y rango de fechas.

---

## 14. Patrones de Goals por Tipo de Equipo

Los diferentes tipos de equipo enfrentan diferentes desafíos en la escritura de goals. Los siguientes patrones representan enfoques validados para cada contexto.

---

### 14.1 Goals de equipos de features

Los equipos de features construyen funcionalidades orientadas al usuario. Sus goals siempre deben conectarse a una métrica de comportamiento del usuario o una métrica de valor para el usuario — no a la existencia de la feature.

**Patrón: Mejora de conversión**
```
Aumentar [tasa de conversión / tasa de adopción / tasa de completación] para [flujo específico de usuario]
de [baseline] a [objetivo] mediante [hipótesis de mecanismo].
```

Ejemplo:
> "Aumentar el porcentaje de usuarios que invitan a un compañero de equipo dentro de los 7 días posteriores al registro del 18% al 35% mostrando un aviso de colaboración persistente durante el tour del producto."

**Patrón: Reducción de fricción**
```
Reducir [indicador de fricción del usuario: abandono / tasa de errores / tiempo para completar / solicitudes de soporte]
para [flujo específico] de [baseline] a [objetivo].
```

Ejemplo:
> "Reducir los errores de envío de formularios en el flujo de actualización del perfil de usuario del 23% a menos del 5% agregando validación de campo en tiempo real."

**Patrón: Aumento de compromiso**
```
Aumentar [frecuencia / profundidad / amplitud de la métrica de compromiso] para [segmento de usuario]
de [baseline] a [objetivo] dentro de [marco temporal].
```

Ejemplo:
> "Aumentar el promedio de sesiones semanales por usuario en el módulo de analytics de 1,2 a 3,0 entre los usuarios avanzados, agregando reportes de resumen por email que enlazan a perspectivas accionables en el producto."

---

### 14.2 Goals de equipos de plataforma e infraestructura

Los equipos de plataforma sirven a clientes internos (otros equipos de ingeniería). Sus goals deben conectarse con un cambio medible en la experiencia del desarrollador, la confiabilidad del sistema o el costo de la infraestructura.

**Patrón: Productividad del desarrollador**
```
Reducir [tiempo del desarrollador / carga de trabajo / fricción] para [tarea de ingeniería específica]
de [baseline] a [objetivo], validado por [método de medición].
```

Ejemplo:
> "Reducir el tiempo promedio para incorporar un nuevo microservicio de 3 días a menos de 4 horas publicando una plantilla de servicio estandarizada con scaffolding automatizado."

**Patrón: Mejora de confiabilidad**
```
Reducir [tasa de errores / tiempo de inactividad / tasa de incidentes / MTTR] para [sistema o servicio]
de [baseline] a [objetivo] durante [período de medición].
```

Ejemplo:
> "Reducir el MTTR para incidentes del servicio de pagos de 4,2 horas a menos de 45 minutos implementando runbooks automatizados y alertas con diagnósticos contextuales."

**Patrón: Habilitación de escalabilidad**
```
Habilitar que [sistema / servicio] maneje [carga / tráfico / volumen] de [objetivo]
sin [degradación inaceptable], validado por pruebas de carga.
```

Ejemplo:
> "Habilitar que el servicio de notificaciones maneje 50.000 entregas de notificaciones concurrentes sin exceder 500ms de latencia de entrega, confirmado por resultados de pruebas de carga."

---

### 14.3 Goals de calidad y confiabilidad

Los equipos de calidad mejoran la confiabilidad del sistema. Sus goals deben conectarse con cambios medibles en indicadores de confiabilidad, tasas de defectos o cobertura de pruebas que ha demostrado valor predictivo.

**Patrón: Reducción de defectos**
```
Reducir [tipo de defecto] que llega a [entorno] de [baseline] a [objetivo]
durante [período de medición].
```

Ejemplo:
> "Reducir el número de bugs de producción introducidos por release de un promedio de 4,5 a menos de 1 durante los próximos 3 ciclos de release expandiendo la cobertura de regresión automatizada a los flujos de checkout y pago."

**Patrón: Cobertura con valor demostrado**
```
Agregar cobertura de pruebas automatizadas a [área específica] que prevenga los [N] tipos de
regresión conocidos que causaron incidentes de producción en el último trimestre.
```

Ejemplo:
> "Prevenir la recurrencia de las 6 regresiones de producción más comunes (documentadas en el registro de incidentes) agregando pruebas de integración específicas a los flujos de autenticación y gestión de sesiones."

**Patrón: Mejora de observabilidad**
```
Habilitar a los ingenieros de guardia para diagnosticar [tipo de incidente] en menos de [objetivo de tiempo]
agregando [monitoreo / alertas / logging] a [área del sistema].
```

Ejemplo:
> "Reducir el tiempo promedio para identificar la causa raíz de incidentes relacionados con la base de datos de 95 minutos a menos de 20 minutos agregando logging estructurado de consultas y un dashboard de alertas que cubre patrones de consultas lentas."

---

### 14.4 Goals de crecimiento de usuarios

Los equipos de crecimiento optimizan la adquisición, activación y retención. Sus goals deben ser específicos sobre el segmento de usuarios, el mecanismo y la cohorte de medición.

**Patrón: Adquisición**
```
Adquirir [N] nuevos [usuarios calificados / clientes de pago / cuentas activadas]
a través de [canal / mecanismo] dentro de [marco temporal].
```

Ejemplo:
> "Adquirir 300 nuevos usuarios activados (definidos como completar al menos 1 acción principal dentro de las 48 horas) del canal de marketing de contenidos dentro de este ciclo de 2 semanas lanzando las páginas de destino de comparación optimizadas para SEO."

**Patrón: Activación**
```
Aumentar el porcentaje de [segmento de usuario] que alcanza [hito de activación]
dentro de [ventana de tiempo] de [baseline] a [objetivo].
```

Ejemplo:
> "Aumentar el porcentaje de usuarios de prueba que crean su primer flujo de automatización dentro de los 3 días posteriores al registro del 14% al 28% rediseñando la experiencia de estado vacío con plantillas guiadas."

**Patrón: Retención**
```
Reducir [tasa de churn / tasa de inactividad] para [segmento de usuario / nivel de plan]
de [baseline] a [objetivo] durante [período de medición].
```

Ejemplo:
> "Reducir la tasa de churn a 60 días para los usuarios del plan Básico del 22% al 15% implementando una campaña de compromiso proactivo disparada en la marca de los 45 días para los usuarios que no han usado una feature clave."

---

### 14.5 Goals de deuda técnica

Los goals de deuda técnica frecuentemente se escriben como goals de output ("refactorizar X") en lugar de goals de outcome. La clave está en conectar la refactorización con un cambio medible en una métrica de experiencia del desarrollador, confiabilidad o rendimiento.

**Patrón: Reducción del costo de mantenimiento**
```
Reducir [tiempo del desarrollador / tasa de incidentes / complejidad de despliegue] asociado con [área del sistema]
de [baseline] a [objetivo] mediante [enfoque de refactorización].
```

Ejemplo:
> "Reducir el tiempo promedio para implementar un cambio de regla de precios de 5 días a menos de 1 día refactorizando el motor de precios de una estructura condicional hardcodeada a un modelo de configuración basado en reglas."

**Patrón: Habilitación de trabajo futuro**
```
Desbloquear [capacidad específica / equipo / flujo de trabajo] mediante [cambio técnico],
validado por [la capacidad siendo demostrablemente disponible].
```

Ejemplo:
> "Habilitar que el equipo móvil lance actualizaciones de features independientes sin un despliegue de backend extrayendo el servicio de configuración de features hacia una API independiente, validado por el equipo móvil lanzando exitosamente una feature sin coordinación con el backend."

**Patrón: Eliminación de riesgo**
```
Eliminar [clase específica de riesgo / vulnerabilidad / modo de falla] mediante [cambio técnico],
confirmado por [auditoría / resultados de pruebas / monitoreo].
```

Ejemplo:
> "Eliminar todas las clases de vulnerabilidad de inyección SQL en el módulo heredado de importación de datos, confirmado por una prueba de penetración que cubra los 12 endpoints afectados."

---

## 15. Errores Comunes por Rol

### 15.1 Errores del Product Strategist

**Error 1 — Escribir goals desde el roadmap en lugar de desde los problemas del usuario**

El roadmap describe features planificadas, no problemas del usuario. Las features son la hipótesis de solución. El goal debe escribirse desde el problema: ¿qué dolor del usuario se está reduciendo, qué comportamiento se está cambiando, qué outcome se está logrando?

Síntoma: Cada goal comienza con "Lanzar," "Enviar" o "Publicar."

Corrección: Antes de escribir el goal, escribir primero el enunciado del problema. Luego escribir el goal como la reducción medible de ese problema.

---

**Error 2 — Aceptar el lenguaje del stakeholder sin traducción**

Los stakeholders se comunican en abstracciones de negocio: "mejorar la experiencia del cliente," "aumentar los ingresos," "reducir el churn." Estos son objetivos de negocio válidos, no goals de ciclo. El trabajo del Product Strategist es traducirlos en outcomes específicos y medibles.

Síntoma: El goal suena como si viniera de un briefing ejecutivo.

Corrección: Preguntar "¿Qué comportamiento específico cambia si se logra este objetivo?" y escribir el goal en torno a ese cambio de comportamiento.

---

**Error 3 — Escribir goals sin conocer el baseline**

Establecer un objetivo sin saber desde dónde se está comenzando es una ficción de planificación. Un goal de "aumentar la conversión en un 30%" sin conocer la tasa de conversión actual no puede medirse.

Síntoma: El goal establece un objetivo pero no un baseline.

Corrección: Antes de escribir cualquier goal con una métrica, confirmar que el baseline puede obtenerse de una fuente de datos existente. Si no puede, escribir primero un goal de medición del baseline.

---

**Error 4 — Sobrecargar el ciclo con goals secundarios**

La presencia de una lista de goals secundarios que es más larga que la lista de goals primarios es una señal de que el Product Strategist no ha tomado las difíciles decisiones de priorización. Una larga lista de goals secundarios funciona como una segunda lista de goals primarios oculta.

Síntoma: El Goal Cycle Plan contiene un goal primario y cinco goals secundarios.

Corrección: Ordenar por rango forzado los goals secundarios y mantener solo el primero o los dos primeros. Mover el resto al backlog.

---

**Error 5 — Cambiar el goal después del ciclo para que coincida con el outcome real**

En el Goal Review, si el equipo logró algo diferente al goal establecido, el Product Strategist puede verse tentado a reencuadrar el goal para que coincida con el outcome. Esto destruye el valor de aprendizaje de los datos honestos del Goal Review.

Síntoma: El Registro de Goals muestra una tasa inusualmente alta de veredictos de "Logrado" incluso cuando los miembros del equipo recuerdan el ciclo como difícil o redirigido.

Corrección: Comprometerse a registrar el goal original y el outcome real, incluso cuando divergen. La divergencia es el dato.

---

### 15.2 Errores del Flow Master

**Error 1 — Tratar la calidad del goal como el problema de otra persona**

El Flow Master es responsable del sistema de entrega. Un goal mal escrito es un riesgo sistémico para el ciclo, no solo un problema de gestión de producto. El Flow Master debe desafiar activamente los goals que no pueden medirse o son demasiado grandes.

Síntoma: Los problemas de calidad del goal solo salen a la superficie en el Goal Review, no en el Smart Planning.

Corrección: Agregar una verificación de calidad del goal a la agenda del Smart Planning. El rol del Flow Master en el Smart Planning incluye confirmar que los goals cumplen los criterios de mensurabilidad y dimensionamiento para el ciclo.

---

**Error 2 — Permitir que el alcance del goal se extienda sin documentación**

Cuando un goal cambia a mitad del ciclo — incluso sutilmente, incluso con buena razón — el Flow Master debe documentar el cambio. Los cambios de goal no documentados significan que el Goal Review evalúa un goal diferente al que el equipo se comprometió.

Síntoma: En el Goal Review, la respuesta del equipo a "¿logramos el goal?" hace referencia a un outcome diferente del que está escrito en el Goal Cycle Plan.

Corrección: Cualquier aclaración o refinamiento del goal a mitad del ciclo se documenta como una enmienda del ciclo, con fecha y razón, en el Goal Cycle Plan.

---

**Error 3 — Confundir la completación de tareas con el logro del goal**

El Flow Master monitorea el Flow Board y puede reportar "todas las tareas completadas" como progreso del ciclo. La completación de tareas es un indicador rezagado del progreso del goal, no una garantía del logro del goal. Un goal puede tener todas sus tareas completadas y aun así fallar si el outcome no se materializó.

Síntoma: Las actualizaciones del Daily Flow Sync son completamente sobre el estado de las tareas sin referencia al progreso del goal.

Corrección: En cada Daily Flow Sync, preguntar "Basándonos en el progreso actual, ¿estamos en camino de lograr el resultado medible del goal?" Esto desplaza el enfoque del conteo de tareas al seguimiento del outcome.

---

**Error 4 — Dejar que goals inconmensurables pasen al Smart Planning**

El Flow Master tiene co-autoridad sobre el Smart Planning. Permitir que un goal sin resultado medible sea confirmado en un ciclo es una falla de facilitación.

Síntoma: Las sesiones del Goal Review consistentemente degeneran en debates sobre si el goal fue logrado.

Corrección: El Flow Master debe aplicar la prueba de mensurabilidad ("¿Cómo sabremos al final del ciclo si este goal fue logrado?") a cada goal propuesto antes de que sea finalizado en el Smart Planning.

---

### 15.3 Errores del Delivery Team

**Error 1 — Tratar el goal como decoración**

Algunos miembros del equipo tratan el goal del ciclo como contexto de fondo y se enfocan completamente en sus tareas asignadas. Esto crea completación de tareas sin seguimiento del goal. Un desarrollador que termina sus tareas sin saber si el goal fue logrado ha pasado por alto el punto del framework GOAL.

Síntoma: Los miembros del equipo no pueden resumir el goal del ciclo en el Daily Flow Sync sin consultarlo.

Corrección: El goal debe ser visible en el Flow Board. Cada tarjeta de tarea debe vincularse con el goal al que sirve. El Daily Flow Sync debe incluir una breve verificación del progreso del goal.

---

**Error 2 — Plantear preocupaciones sobre el goal solo en el Goal Review**

Si un desarrollador se da cuenta a mitad del ciclo de que el enfoque actual no logrará el goal, debe plantearlo de inmediato — no en la revisión. Un descubrimiento técnico que redirige el ciclo es información valiosa. Un descubrimiento técnico anunciado en el Goal Review es un desperdicio del ciclo.

Síntoma: Las sesiones del Goal Review contienen sorpresas sobre desafíos de implementación que el equipo conocía días antes.

Corrección: Los descubrimientos que amenazan el goal se reportan en el mismo Daily Flow Sync donde se descubren. El Flow Master y el Product Strategist son informados de inmediato.

---

**Error 3 — Optimizar la métrica a expensas de la intención**

Los desarrolladores que entienden el goal pero no su intención pueden encontrar formas técnicamente válidas de lograr la métrica que no reflejan el propósito subyacente. Esta es la Ley de Goodhart en práctica.

Ejemplo: Un goal de "aumentar los usuarios activos diarios" lleva a un desarrollador a agregar una notificación diaria por email que lleva a los usuarios a la aplicación pasivamente, inflando los DAU sin compromiso genuino.

Síntoma: Las métricas mejoran pero la retroalimentación cualitativa o las métricas secundarias cuentan una historia diferente.

Corrección: En el Smart Planning, el Product Strategist explica no solo la métrica objetivo sino el problema del usuario o de negocio detrás de ella. El equipo debe entender el "por qué" lo suficientemente profundo como para autocorregirse cuando un enfoque técnico podría satisfacer la letra del goal pero no su espíritu.

---

**Error 4 — Aceptar un goal mal escrito sin desafiarlo**

El Delivery Team tiene conocimiento directo de la complejidad técnica involucrada en lograr un goal. Son las personas mejor posicionadas para identificar cuándo un goal es técnicamente imposible en el marco temporal establecido o cuándo la métrica establecida no puede medirse con las herramientas disponibles.

Síntoma: El equipo acuerda un goal en el Smart Planning que en privado creen que no puede lograrse.

Corrección: El Smart Planning es el momento correcto para desafiar el dimensionamiento, la mensurabilidad y la viabilidad técnica del goal. Plantear dudas en privado después del Smart Planning pero no durante él es una falla del equipo, no solo una falla del producto. El framework GOAL depende de la participación honesta en el proceso de establecimiento de goals.

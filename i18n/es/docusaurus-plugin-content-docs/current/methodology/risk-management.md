---
id: risk-management
title: Gestión de Riesgos
sidebar_position: 15
description: Modelo formal de gestión de riesgos para GOAL — taxonomía de riesgos, registro de riesgos, técnicas de identificación, estrategias de respuesta e integración con el ciclo de meta.
---

# GOAL Gestión de Riesgos
## Modelo Formal de Gestión de Riesgos para el Goal-Oriented Adaptive Lifecycle

## Tabla de Contenidos

1. [Filosofía de Riesgos en GOAL](#1-filosofía-de-riesgos-en-goal)
2. [Taxonomía de Riesgos para Equipos de Software](#2-taxonomía-de-riesgos-para-equipos-de-software)
3. [Artefacto: Registro de Riesgos](#3-artefacto-registro-de-riesgos)
4. [Técnicas de Identificación de Riesgos](#4-técnicas-de-identificación-de-riesgos)
5. [Estrategias de Respuesta a Riesgos](#5-estrategias-de-respuesta-a-riesgos)
6. [Integración de Riesgos en el Ciclo de Meta](#6-integración-de-riesgos-en-el-ciclo-de-meta)
7. [Cadencia de Revisión de Riesgos](#7-cadencia-de-revisión-de-riesgos)
8. [Escalación de Riesgos](#8-escalación-de-riesgos)
9. [Riesgo de Dependencias](#9-riesgo-de-dependencias)
10. [Anti-patrones de Gestión de Riesgos](#10-anti-patrones-de-gestión-de-riesgos)

---

## 1. Filosofía de Riesgos en GOAL

### 1.1 La postura fundamental

El séptimo principio central de GOAL establece: **Visibilidad Sobre Supuestos**. Los riesgos son la clase más común de supuesto oculto en los equipos de software. Existen en cada ciclo. Los equipos que no los nombran no los eliminan — simplemente eligen ser sorprendidos por ellos.

GOAL trata la gestión de riesgos no como una puerta burocrática ni como un ejercicio de cumplimiento para la PMO, sino como una herramienta práctica de entrega. El propósito de nombrar un riesgo es reducir la probabilidad de que destruya el momentum del ciclo.

El principio de tres palabras para la gestión de riesgos en GOAL es:

> **Los riesgos son visibles, tienen dueño y tienen fecha límite.**

- **Visibles:** Todo riesgo que cualquier miembro del equipo conozca debe ser registrado y compartido. Los riesgos privados —aquellos que una persona teme pero nunca menciona— son amenazas invisibles para todo el equipo.
- **Con dueño:** Cada riesgo tiene exactamente un responsable. Un responsable no es alguien obligado a prevenir el riesgo. Es responsable de monitorearlo, ejecutar la estrategia de respuesta y dar la alarma si el riesgo se materializa.
- **Con fecha límite:** Cada riesgo tiene una fecha de revisión. Un riesgo sin fecha de revisión es un riesgo que se olvidará. Los riesgos olvidados son indistinguibles de los riesgos ignorados.

### 1.2 Relación con los artefactos existentes de GOAL

El Plan del Ciclo de Meta de GOAL ya hace referencia a los "ítems de riesgo" como componente nombrado. Este documento formaliza lo que eso significa. El Registro de Riesgos descrito en la Sección 3 es el artefacto que popula el campo de ítems de riesgo del Plan del Ciclo de Meta. Estos dos documentos están conectados:

- En la Planificación Inteligente, los riesgos identificados se añaden al Registro de Riesgos
- El Plan del Ciclo de Meta referencia el Registro de Riesgos de forma resumida
- Durante el ciclo, el Registro de Riesgos es el documento vivo; el Plan del Ciclo de Meta permanece estable

### 1.3 Qué es un riesgo — y qué no lo es

Un **riesgo** es un evento futuro incierto que, si ocurre, afectaría negativamente la capacidad del equipo para completar una meta dentro del ciclo esperado.

Un **bloqueo** es un riesgo que ya se materializó. Una vez que un riesgo se vuelve real, sale del Registro de Riesgos y entra al Registro de Bloqueos. El Protocolo de Tareas Bloqueadas aplica desde ese momento.

Un **supuesto** es una creencia mantenida sin confirmación. Los supuestos no validados son la materia prima de los riesgos. Durante la identificación de riesgos, la pregunta "¿qué estamos asumiendo que podría no ser cierto?" convierte supuestos en riesgos.

Una **restricción** es una limitación fija y conocida (tope de presupuesto, fecha límite regulatoria, dotación del equipo). Las restricciones no son riesgos — son hechos que se deben planificar. Sin embargo, pueden ser fuente de riesgos (por ejemplo, un presupuesto fijo crea el riesgo de que el alcance supere los recursos disponibles).

### 1.4 Tolerancia al riesgo en GOAL

GOAL no prescribe un nivel universal de tolerancia al riesgo. Cada equipo, producto y organización tiene un umbral diferente para el riesgo aceptable. Lo que GOAL prescribe es que la tolerancia al riesgo del equipo debe ser:

- Acordada explícitamente, no asumida
- Documentada en el Registro de Riesgos como ancla de referencia
- Revisada cuando el contexto organizacional cambia (nueva etapa del producto, nuevos interesados, cambios regulatorios)

---

## 2. Taxonomía de Riesgos para Equipos de Software

GOAL organiza los riesgos en cinco categorías. Esta taxonomía existe para asegurar completitud durante la identificación de riesgos. Cuando un equipo hace una lluvia de ideas de riesgos, trabajar cada categoría sistemáticamente previene los puntos ciegos que emergen cuando los equipos solo piensan en riesgos técnicos.

### 2.1 Riesgos Técnicos

Los riesgos técnicos surgen de la naturaleza del software en sí — incertidumbre en la implementación, arquitectura, infraestructura y dependencias.

**2.1.1 Riesgos de arquitectura**

| Riesgo de ejemplo | Descripción |
|---|---|
| Decisión arquitectónica no validada | Una elección de diseño central no ha sido prototipada. Si no funciona, se requiere reelaboración significativa. |
| Rendimiento bajo carga es desconocido | El sistema nunca ha sido probado a escala de producción. |
| Ruta de migración no establecida | Un esquema de datos existente debe migrarse pero la estrategia no ha sido probada. |
| Comportamiento de SDK de terceros sin documentar | Una nueva biblioteca debe integrarse. El comportamiento en casos límite no se conoce. |

**2.1.2 Riesgos de dependencias (técnicas)**

| Riesgo de ejemplo | Descripción |
|---|---|
| Límites de tasa de API externa desconocidos | Una integración puede alcanzar límites de tasa a escala, requiriendo caché o lógica de reintento no planeada. |
| Incompatibilidad de versiones de biblioteca | Una actualización requerida puede romper otras dependencias. |
| Fragilidad del pipeline CI/CD | El pipeline de construcción tiene fallos intermitentes que bloquean el despliegue. |

**2.1.3 Incógnitas desconocidas (riesgos de descubrimiento)**

Estos son los más difíciles de enumerar porque, por definición, todavía no se conocen. El mejor enfoque es usar los datos históricos del Registro de Bloqueos para identificar áreas donde ciclos anteriores consistentemente generaron sorpresas, y tratar esas áreas como zonas de riesgo elevado.

**Indicadores de alto riesgo de descubrimiento:**
- El equipo nunca ha construido este tipo de funcionalidad antes
- El área del código no ha sido tocada en más de seis meses
- El líder técnico que trabajó en este componente por última vez ya no está en el equipo
- Los requerimientos en esta área cambiaron más de dos veces en los últimos dos ciclos

### 2.2 Riesgos Externos

Los riesgos externos se originan fuera del equipo de entrega. El equipo no puede eliminarlos mediante sus propias acciones — solo puede prepararse para ellos.

| Tipo de riesgo | Ejemplos |
|---|---|
| **Fallo de entrega de terceros** | Un proveedor no entrega una API, credencial o servicio en la fecha acordada. |
| **Problemas del proveedor de infraestructura** | Interrupción del proveedor de nube, falla de DNS, vencimiento de certificado, pico de costos que requiere throttling de emergencia. |
| **Disponibilidad del proveedor** | Un contacto clave del proveedor no está disponible para aprobación o firma. |
| **Retrasos del socio de integración** | El trabajo de un equipo socio es un prerrequisito para la meta actual. |
| **Cambio de seguridad o cumplimiento** | Un organismo regulatorio anuncia nuevos requerimientos durante el ciclo. |
| **Acceso al entorno** | El equipo no puede acceder a un entorno similar a producción para pruebas. |

**Característica clave:** Los riesgos externos requieren estrategias de mitigación que no dependan únicamente de la acción del equipo. El responsable de un riesgo externo debe tener un plan de contingencia que el equipo pueda ejecutar de forma independiente si la parte externa no entrega.

### 2.3 Riesgos del Equipo

Los riesgos del equipo se relacionan con las personas que realizan el trabajo — su disponibilidad, conocimiento y sostenibilidad.

| Tipo de riesgo | Descripción |
|---|---|
| **Reducción de capacidad** | Un miembro del equipo no está disponible (enfermedad, licencia inesperada, reasignación) por una porción significativa del ciclo. |
| **Concentración de conocimiento** | Solo una persona en el equipo comprende un componente crítico del sistema. Si esa persona no está disponible, la meta no puede completarse. |
| **Fricción de incorporación** | Un nuevo miembro del equipo se incorpora durante el ciclo y requerirá tiempo de mentoría de miembros senior. |
| **Rotación de personal** | Un colaborador clave ha anunciado su salida durante o inmediatamente después del ciclo. |
| **Brecha de habilidades** | La meta requiere experiencia que el equipo actualmente no tiene. |
| **Señal de agotamiento** | Uno o más miembros del equipo muestran señales tempranas de patrones de carga de trabajo insostenibles. |

**La concentración de conocimiento merece atención especial.** Es uno de los riesgos del equipo con mayor probabilidad e impacto en el software. Un equipo donde una sola persona tiene conocimiento crítico sobre autenticación, pagos, pipeline de datos o infraestructura opera con fragilidad estructural. La mitigación no es despedir a esa persona — es transferir sistemáticamente su conocimiento antes de que se convierta en una crisis.

**El enfoque de GOAL sobre concentración de conocimiento:**

Durante las retrospectivas, el equipo debe mantener un mapa de conocimiento simple:
```
Componente / Área del sistema → Quién lo conoce bien → Quién tiene conocimiento parcial → Quién no tiene ninguno
```
Cualquier componente con solo una entrada "lo conoce bien" es un riesgo de concentración de conocimiento y debe ser marcado en el Registro de Riesgos.

### 2.4 Riesgos de Negocio

Los riesgos de negocio se originan en el contexto organizacional y comercial en el que opera el equipo.

| Tipo de riesgo | Descripción |
|---|---|
| **Cambio de prioridades** | Un evento de negocio (lanzamiento de competidor, cambio de mercado, decisión ejecutiva) cambia lo que es estratégicamente importante durante el ciclo. |
| **Indisponibilidad de interesados** | Un tomador de decisiones o aprobador clave no está disponible para las aprobaciones requeridas para completar la meta. |
| **Cambio de cumplimiento o legal** | Surge una obligación legal, regulatoria o contractual que afecta lo que puede desplegarse. |
| **Restricción presupuestaria** | Los costos de recursos o infraestructura superan lo aprobado, limitando lo que puede entregarse. |
| **Fecha límite de mercado** | Un evento externo de mercado (una conferencia, la fecha de lanzamiento de un competidor, una fecha límite contractual) crea una ventana de entrega fija que puede no ser alcanzable. |
| **Ambigüedad en la definición de la meta** | La meta fue definida sin alineación completa con los interesados, creando el riesgo de que el resultado entregado sea rechazado. |

**El riesgo de cambio de prioridades** es particularmente importante en GOAL porque la metodología protege explícitamente la estabilidad de las metas dentro de un ciclo (Sección 8.3 de la metodología central). Sin embargo, la protección es tan buena como la disposición de la organización para respetarla. Cuando la probabilidad de un cambio de prioridades a mitad del ciclo es alta, esto debe ser señalado antes de que comience el ciclo — no como razón para evitar el compromiso, sino como razón para diseñar el alcance del ciclo de manera más resiliente a la compleción parcial.

### 2.5 Riesgos de Proceso

Los riesgos de proceso surgen del propio flujo de trabajo del equipo, sus prácticas de planificación y sus mecanismos de coordinación.

| Tipo de riesgo | Descripción |
|---|---|
| **Error de estimación** | La estimación de la duración del ciclo está significativamente equivocada, ya sea porque la meta fue subestimada o porque la capacidad del equipo fue sobreestimada. |
| **Expansión del alcance** | Las tareas o requerimientos se expanden incrementalmente durante el ciclo más allá de lo acordado en la Planificación Inteligente. |
| **Conflicto de dependencias** | Dos metas dentro del mismo ciclo dependen del mismo componente, creando contención o riesgo de integración. |
| **Fallo de disciplina de WIP** | El equipo supera consistentemente los límites de WIP, creando la degradación del flujo que GOAL está diseñado para prevenir. |
| **Brechas en la Definición de Terminado** | Una tarea se mueve a Terminado sin cumplir realmente los criterios de DoD, creando riesgo de retrabajo en ciclos posteriores. |
| **Refinamiento incompleto** | El backlog no fue preparado apropiadamente antes de la Planificación Inteligente, resultando en metas con criterios de aceptación poco claros. |
| **Ruptura de comunicación** | Una decisión tomada por un miembro del equipo no es compartida con el resto, creando supuestos divergentes. |

---

## 3. Artefacto: Registro de Riesgos

### 3.1 Qué es el Registro de Riesgos

El Registro de Riesgos es un documento vivo que registra todos los riesgos identificados para el Ciclo de Meta actual y hace seguimiento de su estado durante el ciclo. No es un artefacto de planificación de una sola vez — se actualiza a medida que se descubren nuevos riesgos y a medida que los existentes evolucionan.

**Ubicación:** El Registro de Riesgos debe mantenerse en la misma herramienta que el Tablero de Flujo y el Plan del Ciclo de Meta. Es un documento propiedad del equipo, no un informe para la gerencia.

**Responsabilidad:** El Flow Master es responsable de asegurar que el Registro de Riesgos sea mantenido. Los responsables individuales de cada riesgo son responsables de actualizar sus propias entradas.

### 3.2 Campos requeridos

Cada entrada en el Registro de Riesgos debe contener los siguientes campos:

```
Entrada del Registro de Riesgos — Campos Requeridos

RIESGO-[ID]         Identificador único (ej. RIESGO-001, RIESGO-002)
Descripción         Enunciado claro y específico del riesgo (1–3 oraciones)
                    Malo:  "Problemas técnicos"
                    Bueno: "El servicio de autenticación del que dependemos no
                            ha publicado su documentación de API v3. Si no está
                            disponible antes del Día 3, nuestra tarea de integración
                            no puede comenzar."
Categoría           Técnico / Externo / Equipo / Negocio / Proceso
Probabilidad        Escala 1–5 (ver guía de puntuación abajo)
Impacto             Escala 1–5 (ver guía de puntuación abajo)
Puntuación de riesgo  Probabilidad × Impacto (rango: 1–25)
Responsable         Una persona nombrada — no "el equipo"
Plan de mitigación  Pasos específicos y accionables para reducir probabilidad
                    o impacto. No genérico. No "monitorear la situación."
Plan de contingencia  Qué se hará si el riesgo se materializa (es decir, se convierte en bloqueo)
Estado              Abierto / Monitoreando / Escalado / Cerrado / Materializado
Fecha de revisión   La fecha en que esta entrada de riesgo será revisada y actualizada
```

### 3.3 Escala de probabilidad

| Puntuación | Definición |
|---|---|
| **1** | Muy improbable. No ha ocurrido en los últimos 5+ ciclos. Sin indicadores actuales. |
| **2** | Improbable. Ha ocurrido una vez en ciclos pasados. Señal actual baja. |
| **3** | Posible. Ha ocurrido en memoria reciente. Algunos indicadores actuales presentes. |
| **4** | Probable. Patrón de ocurrencia a lo largo de los ciclos. Fuertes indicadores actuales. |
| **5** | Casi seguro. Se espera que ocurra a menos que se prevenga activamente. |

### 3.4 Escala de impacto

| Puntuación | Definición |
|---|---|
| **1** | Insignificante. Causaría inconveniente menor. La compleción de la meta no se ve afectada. |
| **2** | Bajo. Causaría un retraso de 1 día o reelaboración menor. La meta aún es alcanzable. |
| **3** | Moderado. Causaría un retraso de 2–3 días o reelaboración significativa. La meta probablemente es alcanzable con esfuerzo. |
| **4** | Alto. Causaría una extensión del ciclo o falla parcial de la meta. La meta primaria está en riesgo. |
| **5** | Crítico. Causaría falla total del ciclo o forzaría un reinicio del Ciclo de Emergencia. |

### 3.5 Matriz de puntuación de riesgos

La Puntuación de Riesgo (Probabilidad × Impacto) ubica cada riesgo en una de tres zonas:

```
                           IMPACTO
                  1     2     3     4     5
               ┌─────┬─────┬─────┬─────┬─────┐
             5 │  5  │ 10  │ 15  │ 20  │ 25  │
               ├─────┼─────┼─────┼─────┼─────┤
P            4 │  4  │  8  │ 12  │ 16  │ 20  │
R              ├─────┼─────┼─────┼─────┼─────┤
O            3 │  3  │  6  │  9  │ 12  │ 15  │
B              ├─────┼─────┼─────┼─────┼─────┤
A            2 │  2  │  4  │  6  │  8  │ 10  │
B              ├─────┼─────┼─────┼─────┼─────┤
I            1 │  1  │  2  │  3  │  4  │  5  │
L              └─────┴─────┴─────┴─────┴─────┘
I
D     Puntuación 1–4:    VERDE    — Solo monitorear. Revisar en retrospectiva del ciclo.
A     Puntuación 5–9:    AMARILLO — Monitoreo activo. Revisar en cada Goal Review.
D     Puntuación 10–14:  NARANJA  — Se requiere mitigación activa. Revisar en Daily Flow Sync
                                    cuando el riesgo muestre movimiento.
      Puntuación 15–25:  ROJO     — Se requiere acción inmediata. Considerar ajuste del alcance del ciclo.
```

### 3.6 Mantenimiento del Registro de Riesgos

**Quién lo actualiza:**

| Tipo de actualización | Responsable | Cuándo |
|---|---|---|
| Agregar nuevo riesgo | Cualquier miembro del equipo que lo identifique | Inmediatamente al identificarlo |
| Actualizar estado | Responsable del riesgo | En la fecha de revisión del riesgo, o antes si las condiciones cambian |
| Revisar todos los riesgos abiertos | Flow Master | En cada Goal Review |
| Archivar riesgos cerrados | Flow Master | Al final del ciclo, durante la preparación de la retrospectiva |

**Cuándo se actualiza:**

- En la Planificación Inteligente: se agregan los riesgos iniciales
- Durante el ciclo: cualquier miembro del equipo puede agregar un riesgo que descubra
- En el Daily Flow Sync: si un riesgo activo muestra nueva señal, el estado se actualiza (brevemente — no una discusión detallada)
- En el Goal Review: todos los riesgos abiertos son revisados con el equipo completo
- En la Retrospectiva: los riesgos materializados son analizados; el registro se archiva para el registro del ciclo

**El Registro de Riesgos nunca se congela.** Un riesgo descubierto en el Día 6 de un ciclo de 10 días es tan importante como uno identificado en la Planificación Inteligente.

---

## 4. Técnicas de Identificación de Riesgos

### 4.1 Lluvia de ideas de riesgos pre-ciclo (durante la Planificación Inteligente)

La Planificación Inteligente ya incluye un paso de "Riesgos y dependencias identificados" (Sección 12.1 de la metodología central). Esta sección formaliza ese paso en una lluvia de ideas estructurada de 5 minutos.

**Formato:**

```
Duración:     5 minutos (con tiempo definido, sin extensión)
Facilitador:  Flow Master
Participantes: Todos los roles presentes en la Planificación Inteligente

Pasos:
  1. El Flow Master lee la(s) meta(s) del ciclo en voz alta.
  2. Pensamiento individual en silencio: 90 segundos.
     Cada persona escribe riesgos en post-its / tarjetas digitales — un riesgo por tarjeta.
  3. Compartir en ronda: cada persona lee una tarjeta, colocada en la zona de riesgos.
     Sin discusión durante esta fase — capturar primero, evaluar después.
  4. Deduplicación rápida: fusionar riesgos idénticos o muy similares.
  5. Puntuación rápida: el Flow Master asigna puntuaciones preliminares de probabilidad/impacto.
     La puntuación completa puede hacerse de forma asíncrona después de la sesión.
  6. Los riesgos con puntuación superior a 8 son marcados para planificación de mitigación inmediata.
```

**Por qué 5 minutos:**
La lluvia de ideas de riesgos tiende a expandirse indefinidamente si no se limita en tiempo. La mayoría de los riesgos de alto valor surgen en los primeros 3 minutos. El límite de 5 minutos fuerza la priorización y evita que la sesión se convierta en una espiral de ansiedad por riesgos.

### 4.2 Mapeo de dependencias como fuente de riesgo

Las dependencias son el generador más confiable de riesgos externos y técnicos. Antes de finalizar el alcance del ciclo, el equipo realiza un mapa de dependencias:

```
Plantilla de Mapa de Dependencias (por meta):

Meta: [nombre de la meta]

Dependencias internas (otras tareas en este ciclo de las que depende esta meta):
  → La Tarea A debe completarse antes de que la Tarea B pueda comenzar
  → [listar todas las dependencias secuenciales]

Dependencias de equipos externos (otros equipos cuyo trabajo depende esta meta):
  → El Equipo [X] debe entregar [Y] antes de [fecha]
  → [listar todas las dependencias entre equipos]

Dependencias de terceros (proveedores, APIs, infraestructura):
  → [Nombre del servicio] debe proporcionar [cosa específica] antes de [fecha]
  → [listar todas las dependencias de terceros]

Para cada dependencia externa o de terceros:
  ├── ¿Está confirmada la dependencia? (sí / no / parcialmente)
  ├── ¿Quién es el responsable del otro lado?
  ├── ¿Cuál es el riesgo si llegan tarde?
  └── ¿Cuál es el plan alternativo si no entregan?
```

Cualquier dependencia no confirmada, con un plazo ajustado, o sin plan alternativo, se convierte automáticamente en una entrada del Registro de Riesgos.

### 4.3 Minería de datos históricos del Registro de Bloqueos

El Registro de Bloqueos (Sección 7.4 de la metodología central) es un registro histórico de cada tarea bloqueada. Es la fuente de inteligencia de riesgos más rica en datos disponible para el equipo.

**Preguntas de análisis para la identificación de riesgos:**

```
Antes de cada Sesión de Planificación Inteligente, el Flow Master revisa
los últimos 3 ciclos de datos del Registro de Bloqueos:

1. ¿Qué tipos de bloqueos aparecieron con mayor frecuencia?
   → Estos son riesgos de alta probabilidad para ciclos futuros.

2. ¿Cuál fue el tiempo promedio de resolución para cada tipo de bloqueo?
   → Tiempos de resolución largos = alto impacto si el mismo bloqueo recurre.

3. ¿Hay componentes, sistemas o partes externas que aparecen repetidamente?
   → Bloqueos recurrentes = riesgo sistémico, no varianza aleatoria.

4. ¿Hubo bloqueos que fueron sorpresas completas (no listados como riesgos antes del ciclo)?
   → Estos son candidatos para la taxonomía de riesgos — incógnitas desconocidas a vigilar.

5. ¿Algún bloqueo en cascada resultó en extensiones del ciclo?
   → Estos merecen puntuación de riesgo NARANJA o ROJO si pudieran recurrir.
```

**Resultado:** Una lista corta de "patrones de riesgo recurrentes" que deben ser añadidos preventivamente al Registro de Riesgos de cada ciclo relevante futuro. Estos no son teóricos — se derivan empíricamente de la historia real del equipo.

### 4.4 Preguntas estructuradas "¿qué podría salir mal?" por categoría

Cuando la lluvia de ideas pre-ciclo por sí sola no genera suficientes riesgos (señal de que el equipo puede estar sobreconfiado), el Flow Master puede guiar al equipo a través de preguntas detonadoras específicas por categoría.

**Técnicos:**
- ¿Hay algún área del código que no hayamos tocado en mucho tiempo?
- ¿Estamos integrando alguna API que no hemos usado en esta configuración antes?
- ¿Hemos validado la arquitectura de la nueva funcionalidad con la carga que esperamos?
- ¿Esta meta requiere una migración de base de datos? ¿Hemos probado el rollback?
- ¿Todas nuestras dependencias (bibliotecas, servicios) son versiones que hemos probado juntas?

**Externos:**
- ¿Hay algún tercero cuya acción necesitamos para proceder?
- ¿Hemos confirmado todas las credenciales, claves de API o accesos al entorno necesarios?
- ¿Hay puertas de aprobación de fuera del equipo antes de que podamos desplegar?
- ¿Algún equipo del que dependemos está actualmente en congelamiento, lanzamiento o período de alta carga?

**Del equipo:**
- ¿Algún miembro del equipo está al 100% de capacidad o cerca al entrar en este ciclo?
- ¿Hay vacaciones, conferencias o ausencias planificadas durante este ciclo?
- ¿Solo una persona puede trabajar en alguna parte de esta meta?
- ¿Estamos incorporando a alguien nuevo en este ciclo?

**De negocio:**
- ¿Esta meta ha sido claramente aprobada por todos los interesados que la evaluarán?
- ¿Hay algún evento de negocio (un lanzamiento de producto, una reunión de junta, una fecha límite fiscal) que podría redirigir la atención durante este ciclo?
- ¿Hay consideraciones regulatorias o de cumplimiento que no hemos mapeado completamente?
- ¿Los criterios de aceptación para esta meta son inequívocos para todos en la sala?

**De proceso:**
- ¿El alcance del ciclo es demasiado grande dado nuestros datos recientes de tiempo de ciclo?
- ¿Alguna de las dos metas de este ciclo dependen entre sí de una manera que crea un cuello de botella secuencial?
- ¿Todos los ítems de este ciclo han sido refinados hasta el estándar listo-para-ejecutar?
- ¿Hay tareas en este ciclo que nunca se han hecho antes y pueden ser más difíciles de lo estimado?

---

## 5. Estrategias de Respuesta a Riesgos

Cada riesgo en el Registro de Riesgos debe tener una estrategia de respuesta declarada. GOAL usa cuatro estrategias estándar de respuesta, adaptadas al contexto de los equipos de entrega de software.

### 5.1 Evitar

**Definición:** Cambiar la meta, el enfoque o el alcance del ciclo para eliminar el riesgo por completo.

**Cuándo usarlo:** Cuando la probabilidad y el impacto son ambos altos (zona ROJO) y el elemento evitado no es esencial para el valor central de la meta.

**Ejemplos específicos en GOAL:**

```
Riesgo: La meta requiere integrar con el Servicio X, cuya API no está documentada
        y cuyo equipo de soporte no responde. (Puntuación: 4×4 = 16 — ROJO)

Estrategia de evitar:
  Rediseñar la meta para no requerir el Servicio X en este ciclo.
  Usar un mock/stub para el Servicio X para que el resto de la funcionalidad
  pueda construirse y validarse. Diferir la integración real a un ciclo futuro
  cuando la documentación del Servicio X esté disponible o se elija una integración diferente.
```

```
Riesgo: Esta meta requiere tocar el módulo de autenticación, que tiene
        cobertura de pruebas cero y ninguna documentación. Cualquier cambio
        arriesga romper el inicio de sesión para todos los usuarios. (Puntuación: 3×5 = 15 — ROJO)

Estrategia de evitar:
  Eliminar el cambio de autenticación del alcance de este ciclo.
  Añadir una meta dedicada de "refactorización de autenticación y cobertura" al próximo ciclo,
  debidamente preparada con cobertura de pruebas antes de que comience el trabajo de funcionalidad.
```

**Importante:** Evitar no significa "renunciar a la meta." Significa encontrar un camino que logre el valor de la meta sin el riesgo. La distinción importa — la evasión es una respuesta creativa, no una capitulación.

### 5.2 Mitigar

**Definición:** Tomar acciones específicas antes o durante el ciclo para reducir la probabilidad de que el riesgo ocurra, reducir el impacto si ocurre, o ambos.

**Cuándo usarlo:** Cuando el riesgo no puede evitarse (el elemento que lleva el riesgo es esencial para la meta) pero acciones específicas pueden reducir su severidad.

**Ejemplos específicos en GOAL:**

```
Riesgo: Solo un desarrollador conoce el módulo de procesamiento de pagos, y ese
        desarrollador puede ser llamado por una emergencia familiar durante el ciclo.
        (Puntuación: 2×4 = 8 — AMARILLO)

Mitigación (probabilidad):
  Programar una sesión de transferencia de conocimiento en la Semana 1. El desarrollador
  conocedor lleva a un segundo desarrollador a través del módulo durante 2 horas,
  documentando puntos de decisión clave. El segundo desarrollador ahora es capaz de
  manejar cambios directos con orientación mínima.

Mitigación (impacto):
  Dividir la tarea relacionada con pagos en una porción que el desarrollador conocedor
  completa primero (el núcleo riesgoso), y una porción que es lo suficientemente sencilla
  para cualquier miembro del equipo.
```

```
Riesgo: La duración estimada del ciclo es de 2 semanas, pero los últimos 3 ciclos
        similares se ejecutaron 20% sobre la estimación. (Puntuación: 4×3 = 12 — NARANJA)

Mitigación:
  Aplicar explícitamente el buffer histórico de sobreestimación del 20% a la estimación del ciclo.
  Tratar el ciclo como de 2.4 semanas para efectos de planificación.
  Reducir el alcance de las metas secundarias para proteger la compleción de las metas primarias.
```

### 5.3 Transferir

**Definición:** Asignar la responsabilidad de gestionar o absorber el riesgo a otra parte — típicamente a través de contratos, SLAs, seguros o acuerdos organizacionales.

**Cuándo usarlo:** Cuando el riesgo se origina de una parte externa y un acuerdo formal puede desplazar la responsabilidad de la entrega.

**Nota práctica:** La transferencia es la estrategia menos común en la gestión de riesgos de equipos de software. La mayoría de los riesgos no pueden transferirse verdaderamente en sentido puro. Sin embargo, hay casos genuinamente relevantes en GOAL:

**Ejemplos específicos en GOAL:**

```
Riesgo: La infraestructura que aloja nuestro servicio es administrada por un proveedor
        externo. Una interrupción importante podría impedirnos desplegar durante el ciclo.
        (Puntuación: 2×4 = 8 — AMARILLO)

Transferencia:
  Confirmar el SLA con el proveedor. Documentar la ruta de escalación si ocurre una interrupción.
  Asegurar que la obligación de respuesta a incidentes del proveedor esté por escrito.
  El riesgo de interrupción en sí se transfiere al proveedor dentro de los términos del SLA.
  La responsabilidad del equipo se limita a conocer la ruta de escalación.
```

```
Riesgo: Se requiere revisión legal de los nuevos términos y condiciones antes del lanzamiento,
        y la disponibilidad del equipo legal es incierta.

Transferencia:
  Formalizar un SLA de entrega con el equipo legal: "Revisión legal entregada dentro de
  3 días hábiles de la presentación." Esto convierte una dependencia incierta en un compromiso
  medible, desplazando la responsabilidad por el retraso al equipo legal si el SLA es incumplido.
```

### 5.4 Aceptar

**Definición:** Reconocer el riesgo, documentarlo y continuar sin mitigación activa, porque el costo de la mitigación supera el costo probable de que el riesgo se materialice.

**Cuándo usarlo:** Riesgos de zona VERDE (puntuación 1–4) donde el impacto es suficientemente bajo para que la mitigación activa no valga el tiempo del equipo. También se usa para riesgos donde todas las opciones de mitigación se han agotado.

**La regla crítica sobre la aceptación:** Aceptar un riesgo no es ignorarlo. Los riesgos aceptados aún deben ser monitoreados y revisados. La diferencia es que no se toman acciones adicionales para reducirlos.

**Ejemplos específicos en GOAL:**

```
Riesgo: El servicio de analytics de terceros que usamos ocasionalmente tiene
        interrupciones de 2–3 horas, lo que impediría rastrear nuestros eventos
        de analytics durante esa ventana. (Puntuación: 2×1 = 2 — VERDE)

Aceptar:
  El impacto es insignificante — unas pocas horas de datos de analytics no son críticas.
  No se justifica ninguna mitigación. El riesgo se registra en el registro con
  estado "Aceptado" y una fecha de revisión al final del ciclo. Si se materializa,
  no requiere escalación.
```

```
Riesgo: Un miembro del equipo está presentando en una conferencia el Día 4
        y perderá ese día. (Puntuación: 5×1 = 5 — AMARILLO, caso límite)

Aceptar:
  Un día de capacidad reducida está dentro de la varianza normal. La estimación del ciclo
  ya incluye un buffer de disponibilidad estándar. No se necesita acción especial.
  Registrar y monitorear.
```

---

## 6. Integración de Riesgos en el Ciclo de Meta

### 6.1 Cómo los riesgos afectan la estimación de duración del ciclo

La estimación de duración del ciclo establecida en la Planificación Inteligente debe incorporar el riesgo. Una estimación que ignora el riesgo es un pronóstico optimista, no uno realista.

**Fórmula de estimación del ciclo ajustada por riesgo:**

```
Estimación base:     Días requeridos asumiendo que todo va como se planeó
Buffer de riesgo:    Días adicionales basados en las puntuaciones del registro de riesgos

Cálculo del buffer de riesgo:
  Sumar todas las puntuaciones de riesgo para los riesgos NARANJA y ROJO en el registro.
  Dividir por un factor de calibración basado en la precisión histórica de riesgos del equipo.

  Regla simplificada:
    0 riesgos ROJO, 0 riesgos NARANJA:       +0 días de buffer
    1–2 riesgos NARANJA (puntuación 10–14):  +1 día de buffer
    3+ riesgos NARANJA:                      +2 días de buffer
    1 riesgo ROJO (puntuación 15–25):        +2 días de buffer
    2+ riesgos ROJO:                         +3–4 días de buffer o consideración de descope

Estimación del ciclo ajustada = Estimación base + Buffer de riesgo
```

El Buffer de riesgo se documenta explícitamente en el Plan del Ciclo de Meta. Los interesados deben entender que el buffer existe por riesgos nombrados y específicos — no porque el equipo esté inflando los plazos.

### 6.2 Cálculo de capacidad ajustada por riesgo

La capacidad del equipo no es simplemente el número de personas multiplicado por los días de trabajo. La capacidad ajustada por riesgo tiene en cuenta la probabilidad de que la capacidad del equipo se reduzca.

```
Capacidad base:      Miembros del equipo × días del ciclo × factor de enfoque
Ajustes de riesgo:
  - Para cada riesgo de EQUIPO identificado (puntuación ≥ 8): reducir la capacidad en
    (cantidad de miembros afectados) ÷ (total del equipo) × 20%
  - Para ausencias planificadas conocidas: reducir proporcionalmente
  - Para riesgos de concentración de conocimiento: reducir la capacidad efectiva
    para ese componente en 50% (se asume que una persona hace el trabajo de dos
    cuando el conocimiento está concentrado)

Capacidad ajustada por riesgo = Capacidad base × (1 - suma de factores de reducción)
```

Esta cifra de capacidad ajustada la usa el Flow Master al establecer el límite de WIP para el ciclo.

### 6.3 Umbral de riesgo para el alcance del ciclo

Cuando el Registro de Riesgos muestra una concentración inusualmente alta de riesgos ROJO y NARANJA, el alcance del ciclo debe reducirse activamente. El razonamiento es simple: un ciclo cargado de ítems de alto riesgo y alcance completo tiene alta probabilidad de fracasar. Un ciclo con alcance reducido y los mismos riesgos tiene mayor probabilidad de entregar su meta central exitosamente.

**Marco de decisión:**

```
Evaluación de carga de riesgo en la Planificación Inteligente:

Si el equipo identifica:
  ≤ 2 riesgos AMARILLO y 0 riesgos NARANJA/ROJO:
    → Proceder con el alcance planificado completo.

  3+ riesgos AMARILLO o 1–2 riesgos NARANJA:
    → Revisar cada meta secundaria.
    → Eliminar la meta secundaria más dependiente de los componentes riesgosos.
    → Agregar buffer de riesgo a la estimación.

  1+ riesgos ROJO:
    → Conversación obligatoria de alcance antes de que comience el ciclo.
    → Opción A: reducir las metas primarias al subconjunto mínimo valioso
    → Opción B: rediseñar la meta para evitar el riesgo ROJO (ver estrategia Evitar)
    → No iniciar un ciclo con un riesgo ROJO y alcance completo. Este es un patrón de fallo conocido.

  2+ riesgos ROJO:
    → Escalar al Estratega de Producto inmediatamente.
    → Considerar si el ciclo está listo para comenzar en absoluto.
    → El trabajo previo de riesgo (spike, validación, confirmación de dependencia) puede necesitar
       ocurrir antes de que comience el ciclo de meta.
```

---

## 7. Cadencia de Revisión de Riesgos

### 7.1 Escaneo de riesgos en el Daily Flow Sync (2 minutos, condicional)

El Daily Flow Sync está limitado a 10–12 minutos y no debe convertirse en una reunión de revisión de riesgos. Sin embargo, cuando el Registro de Riesgos contiene ítems activos NARANJA o ROJO, se añade un breve escaneo de riesgos:

```
Detonador del escaneo: El Registro de Riesgos contiene ≥ 1 riesgo NARANJA o ROJO abierto.

Formato (máximo 2 minutos):
  El Flow Master lee el nombre de cada riesgo activo NARANJA/ROJO y pregunta:
  "¿Alguna información nueva sobre [nombre del riesgo]?"

  Respuestas aceptables:
    "Sin cambios." → Continuar. Sin discusión.
    "Hubo movimiento — aquí está la actualización." → El responsable del riesgo actualiza el registro después del sync.
    "Está ocurriendo." → El riesgo se materializó; el protocolo de bloqueos se activa inmediatamente.
```

Esto mantiene el riesgo visible sin convertir cada sync diario en una sesión de gestión de riesgos.

### 7.2 Revisión completa de riesgos en el Goal Review

El Goal Review (Sección 12.4 de la metodología central) incluye un segmento dedicado de revisión de riesgos:

```
Segmento de revisión de riesgos en el Goal Review (5–10 minutos):

1. El Flow Master revisa todos los riesgos abiertos en el Registro de Riesgos con el equipo completo.
2. Para cada riesgo abierto:
   - ¿Fue precisa la evaluación del riesgo? (¿Se estimó correctamente la probabilidad/impacto?)
   - ¿Se materializó el riesgo? (Si sí → registrar como "Materializado" y notar impacto real)
   - ¿Sigue siendo relevante para el próximo ciclo?
3. Riesgos que no se materializaron y ya no son relevantes → Cerrar.
4. Riesgos que no se materializaron pero siguen siendo relevantes → Trasladar al registro del próximo ciclo.
5. Riesgos materializados → mover a la agenda de análisis de retrospectiva.
```

### 7.3 Análisis retrospectivo de riesgos

La Retrospectiva Basada en Datos (Sección 12.5 de la metodología central) incluye una sección de análisis de riesgos:

```
Análisis Retrospectivo de Riesgos (10 minutos):

Preguntas:

Para riesgos que se materializaron (se volvieron reales):
  1. ¿Estaba este riesgo en el registro antes de materializarse?
     Si NO → Esta es una brecha de identificación. Añadir a la lista estándar de verificación futura.
     Si SÍ → El riesgo era conocido. ¿Funcionó el plan de mitigación? ¿Por qué sí o no?

  2. ¿Fue precisa la puntuación de impacto?
     Si el impacto real fue mayor que el estimado → recalibrar la puntuación de impacto del equipo.

  3. ¿Fue precisa la puntuación de probabilidad?
     Si este riesgo se materializó en múltiples ciclos → aumentar a puntuación 4–5 para el futuro.

Para riesgos que fueron listados pero NO se materializaron:
  1. ¿Funcionó el plan de mitigación, o simplemente el riesgo fue sobreestimado?
  2. Si fue sobreestimado → considerar reducir la puntuación de probabilidad para riesgos similares en el futuro.
  3. Si la mitigación funcionó → documentar la mitigación como entrada de un libro de jugadas reutilizable.

Resultado:
  1–2 mejoras de gestión de riesgos por retrospectiva.
  Estas se convierten en insumos para el proceso de identificación de riesgos del próximo ciclo.
```

---

## 8. Escalación de Riesgos

### 8.1 Cuando un riesgo se convierte en un bloqueo

Un riesgo se materializa cuando el evento futuro incierto que describía realmente ocurre. En ese momento, ya no es un riesgo — es un bloqueo. La transición debe ser inmediata y explícita:

```
Protocolo de materialización de riesgo:

1. El responsable del riesgo o cualquier miembro del equipo reconoce que el riesgo se materializó.
2. Actualizar el Registro de Riesgos: estado → "Materializado", fecha de materialización → hoy.
3. Crear una entrada en el Registro de Bloqueos inmediatamente (según el Protocolo de Tareas Bloqueadas,
   Sección 14 de la metodología central).
4. Señalar en el próximo Daily Flow Sync, o inmediatamente si la puntuación era ROJO.
5. El responsable del riesgo ahora es el responsable del bloqueo hasta su resolución.
```

La distinción entre un riesgo (futuro, incierto) y un bloqueo (presente, cierto) importa porque activan protocolos diferentes. Clasificar erróneamente un riesgo materializado como "todavía siendo monitoreado" retrasa la resolución y enmascara el verdadero estado del ciclo.

### 8.2 Cuándo un riesgo requiere notificación a los interesados

No todos los riesgos requieren la participación de los interesados. La mayoría de los riesgos son preocupaciones de entrega interna que el equipo resuelve a través de sus propias estrategias de mitigación. La notificación a los interesados es apropiada cuando:

```
Detonadores de notificación:

  El riesgo afecta la fecha de entrega de la meta de manera que cambia
  las expectativas de los interesados:
    → Notificar al Estratega de Producto inmediatamente.
    → El Estratega de Producto determina si notificar a los interesados de nivel superior.

  El riesgo está en la categoría de Negocio e involucra disponibilidad de interesados,
  cumplimiento o compromiso externo:
    → Notificar al Estratega de Producto para coordinar la respuesta con interesados.

  Un riesgo ROJO se materializó y es probable una extensión del ciclo:
    → El Estratega de Producto y el Flow Master notifican a los interesados dentro de 24 horas.
    → Comunicar: qué sucedió, impacto esperado y plan de acción.

  El riesgo requiere una decisión de recursos, presupuesto o autoridad que está fuera
  del control del equipo:
    → Escalar al nivel organizacional apropiado con una solicitud clara:
       "Necesitamos [decisión/recurso específico] antes de [fecha] para proceder."
```

**Estándar de comunicación:** Las notificaciones a interesados sobre escalación de riesgos deben incluir (1) qué es el riesgo, (2) qué está haciendo el equipo al respecto, (3) qué necesita hacer el interesado (si algo), y (4) el plazo esperado para la resolución o actualización. Las comunicaciones vagas sobre riesgos ("puede que tengamos un problema") no son aceptables.

### 8.3 Justificación de extensión del ciclo impulsada por riesgo

Cuando un riesgo se materializa y requiere una extensión del ciclo, la extensión debe ser formalmente documentada (según la Sección 8.2 de la metodología central, Categoría de Extensión A, C o E según el tipo de riesgo). La entrada del Registro de Riesgos para el riesgo materializado se convierte en el documento de justificación principal.

```
Registro de justificación de extensión impulsada por riesgo:

ID de riesgo:              [RIESGO-XXX]
Categoría de riesgo:       [Técnico / Externo / Equipo / Negocio / Proceso]
Materializado el:          [fecha]
Impacto real:              [descripción de lo que ocurrió]
Puntuación original:       [puntuación — ¿fue el riesgo correctamente anticipado?]
Razón de extensión:        [Categoría de Extensión GOAL A/C/E]
Días adicionales:          [número]
Aprobado por:              Flow Master + Estratega de Producto
Mitigación aplicada:       [qué acciones se tomaron una vez materializado]
Prevención para próximo ciclo: [qué se hará diferente]
```

Esta documentación sirve dos propósitos: justifica la extensión a los interesados con evidencia concreta, y alimenta el análisis retrospectivo para la mejora continua de la identificación de riesgos.

---

## 9. Riesgo de Dependencias

El riesgo de dependencias recibe su propia sección porque es la fuente más frecuente de fracaso del ciclo en los equipos de software modernos. Casi toda meta no trivial tiene dependencias, y las dependencias no gestionadas se convierten consistentemente en los bloqueos que impulsan las extensiones del ciclo.

### 9.1 Mapear todas las dependencias externas antes del inicio del ciclo

Antes de que comience el reloj del ciclo, cada dependencia debe ser mapeada. Una dependencia que "probablemente está bien" sin confirmación es un riesgo con probabilidad e impacto desconocidos — el peor tipo.

**Lista de verificación de confirmación de dependencias pre-ciclo:**

```
Para cada dependencia en el ciclo:

Equipos externos:
  □ ¿El equipo dependiente ha confirmado que entregará antes de [fecha]?
  □ ¿Tenemos un contacto nombrado al que se pueda contactar si se retrasan?
  □ ¿Su entrega está en un estado visible para nosotros (ej., un tablero compartido
    o ticket que podemos monitorear)?

Servicios / APIs de terceros:
  □ ¿El proveedor ha confirmado la estabilidad de la API para el período de integración?
  □ ¿Tenemos todas las credenciales, claves y documentación requeridas?
  □ ¿Hemos probado la integración en un entorno que no sea producción?

Infraestructura:
  □ ¿El entorno objetivo está aprovisionado y es accesible?
  □ ¿Hay ventanas de mantenimiento planificadas durante el ciclo?
  □ ¿Tenemos los permisos de acceso necesarios?

Internas (entre componentes):
  □ ¿Todas las tareas prerrequisito están listas-para-ejecutar en el backlog?
  □ ¿Hay riesgo de que una tarea prerrequisito bloquee una tarea posterior
    debido a restricciones de ordenamiento?
```

Cualquier ítem donde la respuesta sea "no" o "desconocido" se convierte en un riesgo de dependencia en el Registro de Riesgos.

### 9.2 Puntuación del riesgo de dependencias

Las dependencias deben puntuarse usando la matriz estándar del Registro de Riesgos con peso adicional dado a los siguientes factores:

```
Ajustes de puntuación del riesgo de dependencias:

  Dependencia no confirmada (sin compromiso explícito de la parte dependiente):
    → Agregar +2 a la puntuación de probabilidad
    → Agregar +1 a la puntuación de impacto

  Sin plan alternativo disponible:
    → Agregar +2 a la puntuación de impacto

  La parte dependiente ha fallado en entregar en un ciclo anterior:
    → Agregar +2 a la puntuación de probabilidad (patrón histórico)

  Dependencia de ruta crítica (esta tarea no puede comenzar sin la dependencia):
    → Agregar +1 a la puntuación de impacto (los retrasos se propagan en cascada)
```

### 9.3 Mitigación: pistas paralelas, validación temprana, planes alternativos

**Pistas paralelas**

Cuando una meta tiene una dependencia externa de alto riesgo, el equipo debe identificar trabajo que puede avanzar en paralelo — trabajo que no requiere que la dependencia se resuelva. Esto evita que una sola dependencia deje a todo el equipo inactivo.

```
Ejemplo:
Meta: Integrar el proveedor de pagos X en el flujo de checkout.
Riesgo de dependencia: El proveedor de pagos X no ha proporcionado credenciales sandbox.

Pista paralela:
  - Construir el flujo completo de UI de checkout usando una interfaz de pago simulada.
  - Construir la capa de abstracción del servicio de backend de pagos con un proveedor simulado.
  - Escribir todas las pruebas de integración contra el simulador.
  - Solo el paso final de integración requiere credenciales reales del proveedor X.
  Si las credenciales llegan tarde, solo el último paso se retrasa — no toda la meta.
```

**Validación temprana (spike)**

Para riesgos de dependencia con probabilidad ≥ 3, un spike de validación debe programarse en el primer cuarto del ciclo:

```
Definición de spike:
  Una investigación acotada en tiempo (máximo medio día) para validar la dependencia.
  Resultado: confirmado funcionando O confirmado roto, dentro del Día 2 del ciclo.
  Si está roto: el riesgo es ahora un bloqueo. Escalar inmediatamente.
  Si funciona: la puntuación de riesgo se reduce. Monitorear y continuar.

Los spikes para validación de dependencias son tareas Pequeñas en el Tablero de Flujo.
No son opcionales cuando la puntuación de riesgo de dependencia es ≥ 10.
```

**Planes alternativos**

Cada dependencia externa en zona NARANJA o ROJO debe tener un plan alternativo documentado antes de que comience el ciclo. Un plan alternativo responde: "Si esta dependencia no se cumple, ¿qué hacemos para seguir entregando el valor central de la meta?"

```
Plantilla de plan alternativo:

Dependencia:         [qué necesitamos de quién]
Esperada para:       [fecha]
Detonador del plan alternativo: [fecha en que cambiamos al alternativo si no se resuelve]
Acción alternativa:  [enfoque alternativo específico]
                     "Si el proveedor X no entrega credenciales de API antes del Día 3,
                      construimos la funcionalidad usando la API equivalente del proveedor Y,
                      a la que ya tenemos acceso."
Responsable del alternativo: [persona nombrada responsable de ejecutar el plan alternativo]
Impacto en alcance:  [qué se pierde si usamos el alternativo — ¿la meta sigue siendo completamente alcanzable?]
```

---

## 10. Anti-patrones de Gestión de Riesgos

Los anti-patrones son comportamientos de gestión de riesgos que parecen útiles pero que activamente socavan el proceso. Reconocerlos es el primer paso para corregirlos.

### 10.1 Riesgos listados pero nunca revisados

**El patrón:** El equipo crea diligentemente un Registro de Riesgos en la Planificación Inteligente. Nadie lo vuelve a ver hasta la retrospectiva, momento en el cual varios riesgos se han materializado silenciosamente sin ninguna respuesta.

**Por qué ocurre:** El registro de riesgos se convierte en una actividad de casilla de verificación. El equipo siente que escribir el riesgo es suficiente. No hay una cadencia de revisión estructurada, por lo que el registro se convierte en un cementerio de buenas intenciones.

**La corrección:** Implementar la cadencia de revisión de la Sección 7. Asignar un responsable de riesgo que tenga responsabilidad explícita. El Flow Master incluye el registro de riesgos en su revisión diaria del tablero. Si un riesgo no ha sido revisado en su fecha de revisión, se plantea en el próximo Daily Flow Sync.

### 10.2 Sesgo "a nosotros no nos va a pasar"

**El patrón:** El equipo consistentemente asigna puntuaciones bajas de probabilidad a los riesgos basándose en el optimismo más que en la evidencia. "Sí, esa dependencia ha fallado antes, pero esta vez hablamos con ellos, así que estará bien." Cuando los riesgos se materializan, el equipo queda genuinamente sorprendido.

**Por qué ocurre:** Los equipos están psicológicamente motivados a querer que sus planes tengan éxito. Asignar una alta probabilidad a un riesgo se siente como admitir que el plan es malo. También puede sentirse irrespetuoso con los socios (asignar una alta probabilidad de que un proveedor falle implica desconfianza).

**La corrección:** Usar el Registro de Bloqueos como insumo principal para la puntuación de probabilidad, no el instinto. Los datos históricos son neutrales. Si el mismo tipo de riesgo se ha materializado tres veces en los últimos cinco ciclos, la puntuación de probabilidad es 4 o 5, punto. Separar el ejercicio de puntuación del ejercicio de gestión de relaciones — puedes confiar en un proveedor y aún así puntuar correctamente su riesgo de entrega basándose en la historia.

### 10.3 Sobre-riesgificación (listar todo como riesgo)

**El patrón:** El equipo lista cada incertidumbre concebible como riesgo. El Registro de Riesgos contiene 30 ítems para un ciclo de dos semanas. Cada ítem está puntuado como NARANJA. El registro se vuelve inmanejable, el equipo no puede priorizar, y toda la actividad de gestión de riesgos pierde credibilidad.

**Por qué ocurre:** Un equipo quemado recientemente por un evento inesperado tiende a sobrecompensar intentando anticipar todo. La gestión de riesgos se convierte en ansiedad por riesgos.

**La corrección:** Aplicar la matriz de puntuación rigurosamente. Los riesgos VERDES (puntuación 1–4) se registran y se olvidan hasta la retrospectiva. No requieren gestión activa. Enfocar la atención exclusivamente en los riesgos NARANJA y ROJO. Si todo es NARANJA, recalibrar: re-puntuar usando definiciones estrictas. El objetivo es claridad de señal, no exhaustividad.

**El límite práctico:** Un ciclo GOAL bien gestionado no debe tener más de 5–8 riesgos en el registro. Si tiene más, o está sobre-riesgificando o el alcance del ciclo es demasiado grande.

### 10.4 Riesgos sin responsables

**El patrón:** Los riesgos se listan en el registro con "equipo" o "Por definir" en el campo de responsable. Cuando el riesgo se materializa, nadie toma acción porque nadie se sintió personalmente responsable.

**Por qué ocurre:** Asignar responsabilidad se siente incómodo, especialmente cuando el riesgo involucra un área fuera de la experiencia de una persona. El equipo recurre a la propiedad colectiva, que en la práctica significa ninguna propiedad.

**La corrección:** Cada riesgo debe tener exactamente un responsable nombrado — una persona específica, no un rol, no un equipo. El responsable no necesita ser la persona que puede resolver el riesgo. Necesita ser la persona que lo monitorea y da la alarma si se mueve. La responsabilidad es por conciencia y comunicación, no por resolver cada problema solo.

**Un encuadre útil:** El trabajo del responsable del riesgo es ser la última persona que puede decir "no sabía que eso estaba pasando." Si el riesgo se materializa y sorprende al responsable, la estructura de responsabilidad falló. Si el riesgo se materializa y el responsable ya está dando la alarma — el sistema funcionó.

---

## Apéndice A: Plantilla del Registro de Riesgos

```
# Registro de Riesgos — [Nombre del Equipo] — Ciclo [N]
# Creado: [fecha] | Última actualización: [fecha]
# Flow Master: [nombre]

---

| Campo                 | Valor                                              |
|-----------------------|----------------------------------------------------|
| ID de riesgo          | RIESGO-001                                         |
| Descripción           | [Descripción específica del riesgo en 1–3 oraciones] |
| Categoría             | Técnico / Externo / Equipo / Negocio / Proceso     |
| Probabilidad          | 1 / 2 / 3 / 4 / 5                                  |
| Impacto               | 1 / 2 / 3 / 4 / 5                                  |
| Puntuación de riesgo  | [Probabilidad × Impacto]                           |
| Zona                  | VERDE / AMARILLO / NARANJA / ROJO                  |
| Responsable           | [Nombre Apellido]                                  |
| Mitigación            | [Acciones específicas para reducir P o I]          |
| Contingencia          | [Qué hacer si el riesgo se materializa]            |
| Estado                | Abierto / Monitoreando / Escalado / Cerrado / Materializado |
| Fecha de revisión     | [fecha]                                            |
| Notas                 | [opcional — actualizaciones, cambios, contexto]    |

---

[Repetir para cada riesgo]

---

Resumen de riesgos del ciclo:
  Total de riesgos:           [n]
  ROJO (15–25):               [n]
  NARANJA (10–14):            [n]
  AMARILLO (5–9):             [n]
  VERDE (1–4):                [n]
  Buffer de riesgo aplicado:  [+N días]
  Riesgos materializados:     [n] (trasladados al Registro de Bloqueos)
```

---

## Apéndice B: Lista de Verificación de Gestión de Riesgos para Cada Evento del Ciclo

```
Sesión de Planificación Inteligente:
  □ Lluvia de ideas de riesgos pre-ciclo completada (5 min)
  □ Mapa de dependencias creado para cada meta
  □ Registro de Bloqueos de los últimos 3 ciclos revisado para patrones recurrentes
  □ Todos los riesgos puntuados e ingresados en el Registro de Riesgos
  □ Buffer de riesgo agregado a la estimación del ciclo
  □ Riesgos ROJO resueltos, evitados o alcance del ciclo reducido en consecuencia
  □ Todos los riesgos ROJO/NARANJA tienen responsables nombrados

Durante el ciclo (revisión diaria del Flow Master):
  □ Registro de Riesgos revisado para fechas de revisión vencidas
  □ ¿Se identificaron y agregaron nuevos riesgos?
  □ ¿Algún riesgo muestra nueva señal? → estado actualizado

Daily Flow Sync (cuando el registro tiene ítems NARANJA/ROJO):
  □ Escaneo de riesgos de 2 minutos añadido al sync
  □ ¿Algún riesgo confirmado como materializado? → Protocolo de Tareas Bloqueadas activado

Goal Review:
  □ Todos los riesgos abiertos revisados con el equipo completo
  □ Riesgos materializados documentados con impacto real
  □ Riesgos no materializados y no relevantes cerrados
  □ Riesgos relevantes trasladados al registro del próximo ciclo

Retrospectiva Basada en Datos:
  □ Análisis retrospectivo de riesgos completado
  □ Brechas de identificación abordadas (riesgos que deberían haber estado en el registro)
  □ Puntuación de probabilidad/impacto recalibrada según los resultados
  □ Libros de jugadas de mitigación exitosos documentados
  □ 1–2 mejoras de gestión de riesgos identificadas
```

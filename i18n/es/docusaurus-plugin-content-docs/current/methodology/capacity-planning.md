---
id: capacity-planning
title: Planificación de Capacidad
sidebar_position: 14
description: Alineando la capacidad del equipo con los compromisos de objetivos — cálculo de capacidad efectiva, ciclos reducidos, onboarding, y anti-patrones de planificación.
---

# GOAL Planificación de Capacidad
## Alineando la Capacidad del Equipo con los Compromisos de Objetivos

## Tabla de Contenidos

1. [Por Qué Importa la Planificación de Capacidad en GOAL](#1-por-qué-importa-la-planificación-de-capacidad-en-goal)
2. [Vocabulario de Capacidad](#2-vocabulario-de-capacidad)
3. [Modelo de Cálculo de Capacidad](#3-modelo-de-cálculo-de-capacidad)
4. [Tabla y Calculadora de Capacidad](#4-tabla-y-calculadora-de-capacidad)
5. [Dimensionamiento de Objetivos Contra la Capacidad](#5-dimensionamiento-de-objetivos-contra-la-capacidad)
6. [Ciclos de Capacidad Reducida](#6-ciclos-de-capacidad-reducida)
7. [Impacto del Onboarding de Nuevos Miembros](#7-impacto-del-onboarding-de-nuevos-miembros)
8. [Impacto de la Salida de Miembros del Equipo](#8-impacto-de-la-salida-de-miembros-del-equipo)
9. [Miembros del Equipo a Tiempo Parcial](#9-miembros-del-equipo-a-tiempo-parcial)
10. [Capacidad de Contratistas y Colaboradores Externos](#10-capacidad-de-contratistas-y-colaboradores-externos)
11. [Proyección Trimestral de Capacidad](#11-proyección-trimestral-de-capacidad)
12. [Anti-Patrones de Capacidad](#12-anti-patrones-de-capacidad)

---

## 1. Por Qué Importa la Planificación de Capacidad en GOAL

### 1.1 El problema con la fórmula de WIP en aislamiento

La metodología GOAL define una fórmula de límite de WIP: `Tamaño del Equipo × Factor de Enfoque`. Esta fórmula controla correctamente cuántas tareas están activas en cualquier momento. Pero asume que el equipo está completamente disponible. En la práctica, los equipos casi nunca están completamente disponibles.

Consideremos un equipo de cinco desarrolladores. La fórmula de WIP sugiere un límite de 3–4 tareas activas. Pero ¿qué pasa si:
- Un desarrollador está de vacaciones
- Uno está en tres días de entrevistas de trabajo para un rol abierto
- Uno está haciendo onboarding de un nuevo colega
- Uno está gestionando un incidente P1 de producción del ciclo anterior

La fórmula de WIP sigue diciendo 3–4 tareas. Pero la capacidad productiva real del equipo podría ser del 40–50% de lo normal. Comprometerse a un conjunto completo de objetivos primarios bajo estas condiciones es preparar el ciclo para fallar.

La planificación de capacidad es la disciplina de entender qué tienes realmente antes de comprometerte a lo que quieres entregar.

### 1.2 El costo de sobrecomprometer objetivos

Cuando un ciclo GOAL se compromete con objetivos que exceden la capacidad real, ocurren varias fallas predecibles:

- **El Índice de Precisión de Ciclo se degrada** — el ciclo tarda más, lo cual se documenta pero nunca se aborda estructuralmente si no se nombra la causa raíz (sobrecompromiso de capacidad)
- **La calidad cae** — los desarrolladores bajo presión de tiempo recortan atajos en tests, documentación y profundidad de revisión. La DoD se presiona
- **El retrabajo aumenta** — el trabajo apresurado genera más bugs, que consumen capacidad en el siguiente ciclo
- **La moral del equipo se erosiona** — los equipos que constantemente no cumplen sus objetivos comprometidos desarrollan impotencia aprendida sobre la planificación

Ninguna de estas fallas es visible a menos que se midan. El sistema de métricas de GOAL (eficiencia de flujo, tasa de retrabajo, tasa de fallas en cambios) las revelará — pero solo si la planificación de capacidad se hace honestamente y se rastrea la comparación entre capacidad planificada y real.

### 1.3 La planificación de capacidad como disciplina, no como cálculo

La planificación de capacidad en GOAL no es puramente matemática. Requiere:
- Honestidad sobre cuál es la disponibilidad real del equipo (no la que desearías que fuera)
- Disciplina para contabilizar los costos generales que son reales pero fáciles de ignorar
- Disposición para comprometerse con menos objetivos cuando la capacidad está restringida
- Transparencia con los stakeholders sobre por qué se dimensionaron menos objetivos

El principio fundamental es:

> **Es mejor comprometerse con dos objetivos y cumplir ambos que comprometerse con cuatro objetivos y cumplir dos.**

El primer resultado construye confianza y demuestra fiabilidad. El segundo construye una reputación de prometer demasiado, lo que degrada la confianza de los stakeholders con el tiempo y crea presión que compone los problemas de calidad.

---

## 2. Vocabulario de Capacidad

El lenguaje preciso previene la confusión en las conversaciones de planificación. GOAL usa tres términos de capacidad distintos que frecuentemente se confunden.

### 2.1 Capacidad Disponible

```
Definición:   El número bruto de horas-persona o días-persona de trabajo que el equipo
              tiene durante el ciclo, antes de cualquier deducción.

Cálculo:  Tamaño del Equipo × Días Hábiles en el Ciclo × Horas por Día Hábil

Este es el techo — el máximo que podría existir teóricamente.
Casi nunca es el número correcto contra el cual planificar.

Ejemplo:
  5 desarrolladores × 10 días hábiles × 8 horas = 400 horas-persona
  (Capacidad Disponible)
```

### 2.2 Capacidad Efectiva

```
Definición:   Las horas de trabajo productivo y enfocado disponibles después de
              contabilizar todas las deducciones: ausencias planificadas, ceremonias,
              costos generales y el factor de enfoque.

Este es el número contra el cual realmente planificas.

Capacidad Efectiva = Capacidad Disponible
                     − Deducciones por ausencia (vacaciones, estimación de días de enfermedad, festivos)
                     − Tiempo de ceremonias (planning, daily syncs, reviews, retrospectivas)
                     − Costos operativos generales (1:1s, entrevistas de contratación, reuniones
                       entre equipos)
                     − Factor de enfoque aplicado (límites cognitivos humanos)

Ejemplo:
  400 horas-persona disponibles
  − 40 horas (un desarrollador: 1 semana de vacaciones = 5 días × 8 horas)
  − 20 horas (ceremonias del equipo: planning + 10 daily syncs + review + retro)
  − 15 horas (1:1s + reuniones entre equipos)
  − Factor de enfoque aplicado al restante = 325 × 0.7 = 227.5 horas
  ≈ 228 horas-persona de Capacidad Efectiva
```

### 2.3 Capacidad Planificada

```
Definición:   La porción de la Capacidad Efectiva formalmente asignada a categorías
              de trabajo específicas en el Goal Cycle Plan.

En GOAL, la Capacidad Planificada se divide entre:
  - Objetivos primarios (el trabajo central comprometido)
  - Objetivos secundarios (valiosos si la capacidad lo permite)
  - Asignación de deuda técnica (10–20% de la Capacidad Efectiva, reservada antes de
    que se dimensionen los objetivos)
  - Buffer (el margen recomendado del 20% — ver Sección 5.5)

Capacidad Planificada ≤ Capacidad Efectiva (siempre)
La diferencia entre la Capacidad Efectiva y la Capacidad Planificada es el margen
de seguridad. Los equipos que establecen Capacidad Planificada = Capacidad Efectiva
han eliminado su buffer.
```

**Por qué importan estos tres términos:**

Las conversaciones de planificación frecuentemente mezclan estos términos. "Tenemos 5 desarrolladores por 2 semanas" (Capacidad Disponible) no es lo mismo que "podemos entregar 5 objetivos" (un salto que omite completamente la Capacidad Efectiva). Hacer las distinciones explícitas obliga a conversaciones honestas sobre lo que está verdaderamente disponible.

---

## 3. Modelo de Cálculo de Capacidad

### 3.1 El Cálculo Base

```
Paso 1: Contar los días-equipo disponibles

  Fórmula:  Suma de (Días Hábiles Disponibles) para cada miembro del equipo

  Ejemplo para un ciclo de 2 semanas (10 días hábiles):
    Desarrollador A:  10 días (completamente disponible)
    Desarrollador B:   8 días (2 días de PTO)
    Desarrollador C:  10 días (completamente disponible)
    Desarrollador D:   7 días (3 días para onboarding de nuevo integrante)
    Desarrollador E:  10 días (completamente disponible)
    ─────────────────────────────────────────────────────────────
    Total días-equipo brutos:  45 días

Paso 2: Restar el tiempo de ceremonias (convertir a días)

  Costo general estándar de ceremonias para un ciclo GOAL de 2 semanas:
    Smart Planning:             0.5 días (por persona)
    Daily Flow Sync (10 días):  10 × 12min = 2 horas = 0.25 días (por persona)
    Backlog Grooming:           0.5 días (para los miembros asistentes; frecuentemente
                                solo 2–3 asisten)
    Goal Review:                0.5 días (por persona)
    Retrospectiva Basada en Datos: 0.5 días (por persona)
    ───────────────────────────────────────────────────────────────────────
    Total costo general de ceremonias: ~1.75 días por persona (para asistentes
    a todos los eventos)

  Deducción de ceremonias para equipo de 5 personas:
    5 × 1.75 días = 8.75 días

  Días-equipo después de ceremonias:  45 − 8.75 = 36.25 días

Paso 3: Restar costos operativos generales

  Reuniones 1:1 (suponer 30 min/semana × 2 semanas × 5 personas) = 5 horas = 0.625 días
  Entrevistas de contratación (si están activas): variable — estimar por ciclo
  Reuniones entre equipos: variable — estimar por ciclo
  Comunicación asíncrona/Slack/email: típicamente 0.5–1 hora por persona por día
    → 5 personas × 1 hora/día × 10 días = 50 horas = 6.25 días

  Estimación de costos operativos: ~6.875 días

  Días-equipo después de costos generales:  36.25 − 6.875 = 29.375 días

Paso 4: Aplicar el Factor de Enfoque

  Factor de Enfoque (equipos GOAL estándar): 0.7
  Capacidad Efectiva:  29.375 × 0.7 = 20.6 días-persona efectivos

  Redondeado a unidades de trabajo: ~21 días-persona efectivos
```

### 3.2 El Factor de Enfoque Explicado

El Factor de Enfoque no es un ajuste de pesimismo. Refleja la realidad de que un "día hábil" no equivale a ocho horas de producción pura. Contempla:

- Cambio de contexto entre tareas (incluso con límites de WIP, existe algún cambio de contexto)
- Coordinación no planificada (aclarar un requisito, ayudar a un colega, depurar un problema del entorno)
- Costo cognitivo general (leer documentación, comprender código, pensar antes de escribir)
- La brecha entre estar en un escritorio y estar en trabajo profundo

La investigación sobre productividad de trabajadores del conocimiento muestra consistentemente que cuatro a seis horas de producción enfocada por día de ocho horas es realista para la mayoría de personas en la mayoría de días. El factor de enfoque de 0.7 de GOAL representa esto.

Los equipos que creen que pueden sostener mayor enfoque (trabajo muy bien definido, reuniones mínimas, equipo experimentado) pueden usar 0.8. Los equipos con interrupciones frecuentes, alta sobrecarga de coordinación o trabajo volátil deberían usar 0.6.

### 3.3 Ejemplos Detallados

**Ejemplo A: Ciclo de 1 semana, equipo de 4**

```
Equipo:            4 desarrolladores, todos disponibles por 5 días hábiles
Días-equipo brutos: 4 × 5 = 20 días

Deducciones de ceremonias (ciclo de 1 semana):
  Smart Planning:      0.5 días/persona × 4 = 2 días
  Daily Flow Sync:     5 × 12min/persona × 4 = 4 horas = 0.5 días (total)
  Goal Review:         0.5 días/persona × 4 = 2 días
  Retrospectiva:       0.5 días/persona × 4 = 2 días
  (Sin Backlog Grooming — ciclo demasiado corto; el grooming se ejecuta de forma
  independiente)
  Total deducción de ceremonias: 6.5 días

Días después de ceremonias: 20 − 6.5 = 13.5 días

Costos generales operativos (1 semana):
  1:1s: 30 min × 4 personas = 2 horas = 0.25 días
  Comunicación asíncrona: 4 × 1 hora/día × 5 días = 20 horas = 2.5 días
  Total costos generales: 2.75 días

Días después de costos generales: 13.5 − 2.75 = 10.75 días

Factor de Enfoque (0.7): 10.75 × 0.7 = 7.5 días-persona efectivos

Resultado: ~7–8 días-persona efectivos para un ciclo de 1 semana con 4 desarrolladores

Implicación para dimensionamiento de objetivos:
  Con tareas promediando 1 día cada una, este ciclo puede absorber 7–8 tareas.
  Con asignación de deuda técnica al 15%: 7.5 × 0.85 = ~6 tareas para objetivos primarios.
```

**Ejemplo B: Ciclo de 2 semanas, equipo de 6, un miembro de vacaciones**

```
Equipo:           6 desarrolladores
  Desarrollador A–E: completamente disponibles (10 días cada uno) = 50 días
  Desarrollador F:   de vacaciones semana 1 = 5 días disponibles

Días-equipo brutos:  50 + 5 = 55 días

Deducciones de ceremonias (ciclo 2 semanas, 6 personas, Desarrollador F no asiste
a eventos de semana 1):
  Smart Planning:    5 × 0.5 = 2.5 días (Desarrollador F ausente)
  Daily Flow Sync:   6 × 0.25 = 1.5 días (solo semana 2 para Desarrollador F: 0.125 días)
  Backlog Grooming:  2 asistentes × 0.5 = 1 día
  Goal Review:       6 × 0.5 = 3 días
  Retrospectiva:     6 × 0.5 = 3 días
  Total aproximado: ~10 días

Días después de ceremonias: 55 − 10 = 45 días

Costos generales operativos:
  6 personas × (1:1 + estimación asíncrona) ≈ 9 días en 2 semanas

Días después de costos generales: 45 − 9 = 36 días

Factor de Enfoque (0.7): 36 × 0.7 = 25.2 días-persona efectivos

Resultado: ~25 días-persona efectivos para un ciclo de 2 semanas con 6 desarrolladores
(uno de vacaciones)

Para comparación: mismo equipo completamente disponible = ~28 días-persona efectivos
Las vacaciones reducen la capacidad efectiva aproximadamente un 11%.
```

**Ejemplo C: Ciclo de 3 semanas, equipo de 8, condiciones estándar**

```
Equipo:           8 desarrolladores, todos disponibles por 15 días hábiles
Días-equipo brutos: 8 × 15 = 120 días

Deducciones de ceremonias (ciclo de 3 semanas):
  Smart Planning:      8 × 0.5 = 4 días
  Daily Flow Sync:     8 × 0.3 = 2.4 días (15 días × 12 min = 3 horas/persona)
  Backlog Grooming:    2 sesiones × 3 asistentes × 0.5 = 3 días
  Goal Review:         8 × 0.5 = 4 días
  Retrospectiva:       8 × 0.75 = 6 días
  Total ceremonias: ~19.4 días

Días después de ceremonias: 120 − 19.4 = 100.6 días

Costos generales operativos:
  8 personas × (1:1 + reuniones + asíncrono) ≈ 20 días en 3 semanas

Días después de costos generales: 100.6 − 20 = 80.6 días

Factor de Enfoque (0.7): 80.6 × 0.7 = 56.4 días-persona efectivos

Resultado: ~56 días-persona efectivos para un ciclo de 3 semanas con 8 desarrolladores

Deuda técnica al 15%: 56 × 0.15 = 8.4 días
Buffer al 20%: 56 × 0.20 = 11.2 días
Disponible para objetivos primarios + secundarios: 56 − 8.4 − 11.2 = 36.4 días
```

---

## 4. Tabla y Calculadora de Capacidad

### 4.1 La Plantilla de Tabla de Capacidad

En la Smart Planning, el equipo llena una tabla de capacidad. Esto toma 5–10 minutos y evita que el resto de la sesión de planificación se construya sobre supuestos incorrectos.

```
TABLA DE CAPACIDAD — [Nombre del Ciclo] — [Fecha inicio] al [Fecha fin]

Miembro del equipo | Días dispon. | Horas enfoque/día | Sobrecarga de rol | Días efectivos
───────────────────────────────────────────────────────────────────────────────────────────
[Nombre A]         |     10       |     5.6 horas     |     0.5 días      |    9.5 días
[Nombre B]         |      8       |     5.6 horas     |     0.5 días      |    7.5 días
[Nombre C]         |     10       |     5.6 horas     |     1.0 día       |    9.0 días  (tech lead)
[Nombre D]         |     10       |     5.6 horas     |     0.5 días      |    9.5 días
[Nombre E]         |     10       |     5.6 horas     |     2.0 días      |    8.0 días  (buddy onboarding)
───────────────────────────────────────────────────────────────────────────────────────────
TOTALES            |     48       |                   |     4.5 días      |   43.5 días
───────────────────────────────────────────────────────────────────────────────────────────

Pre-deducciones:
  Ceremonias:               − 8.75 días (de la fórmula estándar)
  Restante:                 43.5 − 8.75 = 34.75 días

Factor de Enfoque aplicado: 34.75 × 0.7 = 24.3 días-persona efectivos

Asignación deuda técnica (15%):  24.3 × 0.15 = 3.6 días
Buffer (20%):                    24.3 × 0.20 = 4.9 días
Disponible para objetivos:       24.3 − 3.6 − 4.9 = 15.8 días-persona efectivos

CAPACIDAD EFECTIVA PARA COMPROMISO DE OBJETIVOS: ~16 días-persona
```

**Definiciones de columnas:**

- **Días disponibles:** Días hábiles del calendario menos ausencias confirmadas (vacaciones, festivos, compromisos pre-agendados)
- **Horas de enfoque diarias:** El estándar es 5.6 horas (8 horas × 0.7 factor de enfoque). Puede ajustarse para individuos específicos
- **Sobrecarga de rol:** Tiempo adicional deducido por responsabilidades más allá de las tareas de entrega — responsabilidades de revisión del tech lead, deberes como buddy de onboarding, obligaciones entre equipos
- **Días efectivos:** Días disponibles menos sobrecarga de rol. Esta es la contribución individual a la capacidad del equipo

### 4.2 Cómo Llenar la Tabla de Capacidad en Smart Planning

1. **Antes de la reunión:** Cada miembro del equipo reporta por sí mismo sus ausencias confirmadas para el ciclo. El Flow Master las recopila.

2. **Al inicio de la Smart Planning (5 minutos):** La tabla de capacidad se llena en vivo con el equipo. Cualquiera puede señalar cambios o correcciones.

3. **Regla de transparencia:** La tabla es visible para todos. Si alguien tiene sobrecarga significativa en este ciclo (contratación, onboarding, médica), la declara aquí. Esto no es una evaluación de rendimiento — es un insumo para la planificación.

4. **Verificación cruzada:** Comparar la capacidad efectiva de este ciclo con la entrega real del ciclo anterior. Si el equipo típicamente entrega 18 días-persona de trabajo y este ciclo tiene 14 días-persona efectivos, los objetivos deben escalarse hacia abajo en consecuencia.

5. **El dimensionamiento de objetivos sigue a la capacidad:** Nunca establecer objetivos primero y luego calcular la capacidad como justificación. El cálculo de capacidad ocurre primero. Los objetivos se dimensionan para caber en la capacidad.

---

## 5. Dimensionamiento de Objetivos Contra la Capacidad

### 5.1 Cómo Hacer Coincidir la Complejidad de los Objetivos con la Capacidad Disponible

La complejidad de los objetivos en GOAL se estima en términos de las tareas necesarias para lograr el objetivo y sus tamaños (S, M, L). Antes de la Smart Planning, el Product Strategist y el Flow Master deberían tener un desglose aproximado de tareas para cada objetivo propuesto.

```
Proceso de dimensionamiento de objetivos:

1. Para cada objetivo primario propuesto:
   a. Listar las tareas necesarias para lograrlo (no exhaustivamente — desglose aproximado)
   b. Asignar a cada tarea un tamaño: S (1 día), M (2–3 días), L (debe dividirse antes de comenzar)
   c. Sumar los días esperados para el objetivo
   d. Agregar 20% de buffer de incertidumbre por objetivo (siempre aparece nueva información)

2. Comparar el total de días del objetivo con la capacidad disponible para objetivos
   (después de deuda técnica y buffer)

3. Si total de días del objetivo ≤ capacidad disponible → proceder
   Si total de días del objetivo > capacidad disponible → reducir escala (ver Sección 5.3)

Ejemplo:
  Capacidad disponible para objetivos: 16 días-persona

  Objetivo primario A propuesto: "Rediseño de autenticación de usuarios"
    Tarea 1: Actualizar UI del formulario de login (S = 1 día)
    Tarea 2: Implementar flujo OAuth (M = 2 días)
    Tarea 3: Actualizar gestión de sesiones (M = 3 días)
    Tarea 4: Escribir tests de aceptación (M = 2 días)
    Tarea 5: Validación en staging (S = 1 día)
    Subtotal: 9 días + 20% buffer = ~11 días

  Objetivo primario B propuesto: "Funcionalidad de exportación"
    Tarea 1: Endpoint API para exportación (M = 2 días)
    Tarea 2: Manejo de formato de archivo (M = 2 días)
    Tarea 3: Disparador en frontend (S = 1 día)
    Tarea 4: Tests + validación (S = 1 día)
    Subtotal: 6 días + 20% buffer = ~7.2 días

  Total: 11 + 7.2 = 18.2 días
  Disponible: 16 días

  18.2 > 16 → El equipo necesita reducir escala o negociar alcance.
  Opciones: Diferir Objetivo B a secundario, reducir alcance del Objetivo A,
  o agregar al siguiente ciclo.
```

### 5.2 Referencia de Dimensionamiento de Tareas

Al estimar la complejidad de los objetivos, usar estas definiciones de tamaño de forma consistente:

```
Pequeña (S):  1 día de trabajo activo por un desarrollador
              Alcance claro y acotado. Ruta de implementación bien entendida.
              Ejemplos: cambio de texto en UI, corrección de bug con causa raíz conocida,
                        agregar un campo a un formulario existente

Media (M):    2–3 días de trabajo activo por un desarrollador
              Complejidad moderada. Requiere algo de investigación pero la ruta es clara.
              Ejemplos: nuevo endpoint API, refactorización de componente, integración con
                        servicio de terceros conocido

Grande (L):   Tomaría más de 3 días — debe dividirse antes de entrar a In Progress
              Los elementos Grandes son artefactos de planificación usados a nivel de objetivo,
              no elementos de trabajo entregables.
              Si un elemento Grande no puede dividirse, es señal de alcance poco claro
              o dependencia de decisiones no tomadas aún
```

### 5.3 Reglas para Cuando los Objetivos Deseados Exceden la Capacidad

Cuando el análisis de Smart Planning muestra que los objetivos deseados exceden la capacidad disponible, el equipo tiene cuatro opciones. Se listan en orden de preferencia:

**Opción 1: Reducir el alcance del objetivo (preferida)**

En lugar de eliminar un objetivo por completo, reducir su alcance para que quepa en la capacidad. Entregar la parte más valiosa del objetivo ahora; diferir el resto.

```
Ejemplo:
  Objetivo original: "Reconstruir el dashboard de reportes con tres nuevos tipos de gráficos"
  Alcance reducido:  "Agregar el tipo de gráfico más solicitado; diferir los otros dos al
                     siguiente ciclo"

  Esto preserva la entrega de valor mientras respeta la capacidad.
  El alcance diferido vuelve al backlog como elemento priorizado.
```

**Opción 2: Mover un objetivo a secundario**

Degradar un objetivo primario menos crítico a secundario. Se retoma si los objetivos primarios se completan antes de lo esperado.

**Opción 3: Diferir el objetivo al siguiente ciclo**

Si un objetivo no puede reducirse de alcance de manera significativa, diferirlo en su totalidad. La entrega parcial de un objetivo complejo frecuentemente crea más confusión que valor.

**Opción 4: Negociar aumento de capacidad (raramente apropiado)**

En casos excepcionales, el Product Strategist puede negociar recursos temporales adicionales (contratista, segundo desarrollador en pair) si el objetivo es genuinamente crítico y la brecha de capacidad es significativa. Esta es la opción menos preferida porque introduce sobrecarga de onboarding (ver Sección 10).

**Lo que NO debe hacerse:**

- Comprometerse con objetivos que exceden la capacidad y esperar lo mejor
- Reducir la asignación de deuda técnica para crear más capacidad para objetivos (esto crea deuda de calidad compuesta)
- Eliminar el buffer para incluir un objetivo más (el buffer existe precisamente para lo inesperado)

### 5.4 Asignación de Deuda Técnica Antes del Dimensionamiento de Objetivos

La asignación de deuda técnica se decide antes de que se dimensionen los objetivos. No es lo que "sobra" después de comprometerse con los objetivos. Este orden importa porque asegura que la salud técnica nunca se sacrifique por el logro de objetivos a corto plazo.

```
Secuencia de asignación en Smart Planning:

1. Calcular Capacidad Efectiva (desde la tabla de capacidad)
2. Deducir asignación de deuda técnica (10–20% según la salud del codebase)
3. Deducir buffer (20% recomendado)
4. Lo que queda es la capacidad disponible para objetivos primarios y secundarios
5. Dimensionar objetivos contra esa capacidad restante

Nunca invertir esta secuencia.
```

**Guías de asignación de deuda técnica:**

```
Salud del codebase          Asignación recomendada de deuda técnica
────────────────────────────────────────────────────────────────────
Codebase saludable          10% (modo mantenimiento)
Deuda acumulada normal      15% (estándar)
Carga de deuda significativa 20–25% (modo reducción activa)
Riesgo crítico de deuda técnica 30%+ (requiere acuerdo del Product Strategist)
```

### 5.5 Capacidad de Buffer: Por Qué se Recomienda el 20%

El buffer del 20% no es pesimismo — es la diferencia entre un equipo fiable y uno no fiable. Absorbe:

- Tareas que resultan ser más grandes de lo estimado (ocurre en cada ciclo)
- Correcciones de bugs P2 que surgen durante el ciclo desde la columna de Validación
- Descubrimientos inesperados de dependencias durante la implementación
- El ocasional P1 que, incluso con el carril Expedite, consume atención del desarrollador

Los equipos que consistentemente usan su buffer completo están operando al nivel correcto de compromiso. Los equipos que nunca usan su buffer pueden estar subcomprometiéndose. Los equipos que consistentemente exceden la capacidad a pesar del buffer están subestimando la complejidad de los objetivos y necesitan revisar su calibración de dimensionamiento.

**El buffer no es lo mismo que el tiempo libre.** El buffer es capacidad reservada que permanece sin comprometer en el plan. Si el ciclo completa los objetivos primarios antes de lo esperado sin necesitar el buffer, se toman objetivos secundarios, se aceleran las tareas de deuda técnica, o el ciclo cierra anticipadamente según las reglas de cierre del Goal Cycle.

---

## 6. Ciclos de Capacidad Reducida

### 6.1 Cuándo Declarar un Ciclo de Capacidad Reducida

Un ciclo de capacidad reducida se declara formalmente cuando la capacidad efectiva del equipo para un ciclo es menor al 70% de su capacidad efectiva base (la capacidad efectiva en un ciclo normal con asistencia completa).

```
Umbral de activación: Capacidad Efectiva < 70% de la línea base

Ejemplos que pueden activar un ciclo de capacidad reducida:
  - Múltiples miembros del equipo de vacaciones simultáneamente
  - Arrastre de incidente P1 extendido del ciclo anterior
  - Un evento significativo de onboarding (nuevo integrante ingresando)
  - Evento mayor de la empresa que consume tiempo del equipo
  - Alta incidencia de días de enfermedad (puede estimarse desde el promedio histórico)

Estimación de días de enfermedad:
  Los equipos GOAL rastrean el uso de días de enfermedad con el tiempo.
  Para planificación de capacidad, usar el promedio histórico:
  "En promedio, este equipo toma X días de enfermedad por persona por ciclo de 2 semanas."
  Para un primer ciclo sin historial, usar el promedio de la industria:
  0.5 días por persona por 2 semanas.
```

### 6.2 Cómo Ajustar Objetivos, Límite de WIP y Deuda Técnica en un Ciclo de Capacidad Reducida

**Ajuste de objetivos:**

Cuando la capacidad cae al 70% de la línea base, los objetivos deben ajustarse proporcionalmente. Si el equipo normalmente se compromete con tres objetivos primarios en un ciclo de capacidad completa, dos objetivos primarios es el nivel correcto para un ciclo de capacidad reducida.

```
Fórmula de ajuste de objetivos:
  Cantidad de objetivos reducida ≈ Cantidad normal de objetivos ×
  (Capacidad Reducida / Capacidad Base)

Ejemplo:
  Ciclo normal: 28 días-persona efectivos, 3 objetivos primarios
  Ciclo reducido: 18 días-persona efectivos (64% de la línea base)
  Objetivos ajustados: 3 × 0.64 = 1.9 → comprometerse con máximo 2 objetivos primarios
```

**Ajuste del límite de WIP:**

La fórmula de WIP es `Tamaño del Equipo × Factor de Enfoque`. En un ciclo de capacidad reducida, el tamaño efectivo del equipo es menor. Ajustar en consecuencia.

```
Ajuste de WIP:
  Normal: 5 desarrolladores × 0.7 = 3.5 → límite de WIP de 4
  Reducido (3 desarrolladores efectivos): 3 × 0.7 = 2.1 → límite de WIP de 2

  "Desarrolladores efectivos" contempla disponibilidad parcial:
  Un desarrollador que está 50% en deberes de onboarding cuenta
  como 0.5 desarrolladores efectivos.
```

**Asignación de deuda técnica:**

En un ciclo de capacidad reducida, la tentación es recortar la asignación de deuda técnica para preservar la capacidad de objetivos. Esto está mal. El trabajo de deuda técnica durante un ciclo reducido es más valioso por hora, no menos — reduce el riesgo de calidad que viene con un equipo menos atento.

Mantener el porcentaje de deuda técnica. Si el 15% se asignó en ciclos normales, asignar el 15% de la capacidad reducida a deuda técnica. Las horas absolutas serán menores; la proporción debe mantenerse igual.

### 6.3 Comunicación con los Stakeholders

Cuando se declara un ciclo de capacidad reducida, los stakeholders deben ser informados antes de que comience el ciclo — no después de que falle en entregar los objetivos esperados.

**Plantilla de comunicación:**

```
Asunto: [Nombre del Equipo] — Ciclo [N] — Aviso de Capacidad Ajustada

Durante este ciclo ([rango de fechas]) el equipo opera con capacidad reducida:
  Capacidad efectiva normal:    [X] días-persona
  Capacidad de este ciclo:      [Y] días-persona ([Z]% del normal)

Motivo: [vacaciones / onboarding / incidentes / etc.]

Como resultado, nos comprometemos con:
  Objetivos primarios: [lista — reducida respecto a la cantidad normal]
  Objetivos secundarios (si los primarios se completan antes): [lista]
  Objetivos diferidos: [lista de lo que se postergó al siguiente ciclo]

Esperamos volver a capacidad completa a partir de [fecha del siguiente ciclo].

Preguntas o cambios de prioridad: contactar a [nombre del Product Strategist]
```

Esta comunicación no es una disculpa. Es un pronóstico profesional. Los stakeholders que reciben esta comunicación antes del ciclo tienen la oportunidad de repriorizar si es necesario. Los stakeholders que descubren objetivos perdidos después del hecho no pueden hacer nada útil con esa información.

---

## 7. Impacto del Onboarding de Nuevos Miembros

### 7.1 Reducción de Capacidad durante el Período de Onboarding

Un nuevo miembro que se une al equipo crea un impacto de capacidad de dos maneras:

1. **La capacidad propia del nuevo miembro está reducida** — están aprendiendo el codebase, herramientas, procesos y dominio. Su contribución efectiva es significativamente inferior a la de un desarrollador completamente integrado.

2. **Los miembros senior absorben el costo del onboarding** — sesiones de pair, code review del trabajo del nuevo miembro, respuesta a preguntas, revisión de decisiones de arquitectura. Este tiempo proviene directamente de la capacidad productiva de los miembros senior.

```
Impacto de capacidad del onboarding por semana:

Semana 1 (orientación):
  Contribución del nuevo miembro:  ~10% de un desarrollador senior
  Sobrecarga para miembro senior:  1.0–1.5 días por senior que apoya al nuevo miembro
  Cambio neto de capacidad:        Ligeramente negativo (costo > contribución)

Semana 2:
  Contribución del nuevo miembro:  ~25% de un desarrollador senior
  Sobrecarga para miembro senior:  0.75 días por senior
  Cambio neto de capacidad:        Cerca de neutral

Semana 3:
  Contribución del nuevo miembro:  ~40% de un desarrollador senior
  Sobrecarga para miembro senior:  0.5 días por senior
  Cambio neto de capacidad:        Ligeramente positivo

Semana 4:
  Contribución del nuevo miembro:  ~55–60% de un desarrollador senior
  Sobrecarga para miembro senior:  0.25 días por senior
  Cambio neto de capacidad:        Positivo pero aún por debajo del valor de reemplazo total

Integración completa (típicamente semanas 6–8 para la mayoría de equipos de software):
  Contribución del nuevo miembro:  ~80–90% de desarrollador senior
  Sobrecarga para miembro senior:  Mínima (interacción de pares rutinaria)
```

**Implicación práctica:** En el primer ciclo que incluye a un nuevo miembro, planificar como si el tamaño del equipo aumentara en 0.3–0.4 (no en 1.0) para propósitos de capacidad. El tamaño del equipo para los cálculos de WIP debe reflejar los contribuyentes efectivos reales.

### 7.2 Recomendaciones de Ajuste de WIP

Durante las semanas 1–2 de onboarding, el límite de WIP debe establecerse de forma conservadora. El nuevo miembro aún no es capaz de llevar una tarea independiente a través del flujo completo sin soporte significativo. Asignarles una tarea crea un costo de WIP oculto: el senior que los apoya está parcialmente comprometido con dos tareas simultáneamente.

```
Recomendación de WIP durante el onboarding:

Semanas 1–2:
  Calcular WIP como si el nuevo miembro es 0.3 de un desarrollador
  Si el límite de WIP normal = 4, mantenerlo en 4
  (no aumentarlo solo porque aumentó la dotación)
  Asignar al nuevo miembro pair en una tarea existente en lugar de una tarea individual nueva

Semanas 3–4:
  El nuevo miembro cuenta como 0.5 desarrollador para efectos de WIP
  Son apropiadas tareas individuales pequeñas (tamaño S, 1 día, alcance bien definido)
  El buddy senior reduce la complejidad de la tarea individual revisando antes de In Progress

Semana 5+:
  El nuevo miembro toma participación completa en el WIP
  Aumentar el límite de WIP en 1 cuando se demuestre su rendimiento de tareas individuales
  (no asumirlo — esperar datos del Flow Metrics Dashboard)
```

### 7.3 Cómo los Miembros Senior Absorben el Costo del Onboarding

El costo del onboarding no recae equitativamente en todos los miembros senior. GOAL recomienda designar un "buddy de onboarding" por nuevo integrante. Esta persona absorbe más sobrecarga pero proporciona soporte consistente, lo cual es mejor para el nuevo miembro que ayuda distribuida e inconsistente de múltiples personas.

La sobrecarga del rol del buddy de onboarding debe reflejarse en la tabla de capacidad. Un desarrollador que actúa como buddy de onboarding en las semanas 1–2 debe tener 1.0–1.5 días por ciclo deducidos de su capacidad.

Esta sobrecarga es un costo legítimo y planificado — no una interrupción. No contabilizarla contra el rendimiento del nuevo miembro y no esperar que el buddy la absorba de forma invisible. La tabla de capacidad la hace visible.

---

## 8. Impacto de la Salida de Miembros del Equipo

### 8.1 Evaluación Inmediata del Impacto en el Ciclo

Cuando un miembro del equipo anuncia su salida (o en casos de salida repentina), la primera acción es una evaluación del impacto en el ciclo. No se trata de la respuesta emocional a la salida — es un análisis práctico de qué debe hacerse para mantener la continuidad de entrega.

```
Evaluación del impacto de la salida (completar dentro de las 24 horas de confirmación):

1. Recálculo de capacidad
   ¿Cuál es la capacidad efectiva restante para el ciclo actual?
   Si la salida es a mitad del ciclo: recalcular desde la fecha de salida hasta el fin del ciclo.

2. Revisión de propiedad de tareas
   ¿Qué tareas son actualmente propiedad del miembro que se va?
   ¿Qué tareas están en progreso? ¿En Code Review? ¿Bloqueadas?
   ¿Qué tareas están sin comenzar pero se necesitan para los objetivos primarios?

3. Re-evaluación de factibilidad de objetivos
   Con la capacidad revisada, ¿los objetivos primarios son aún alcanzables?
   Si no: ¿qué objetivos están en riesgo y cuál es el alcance mínimo viable?

4. Identificación de brechas de conocimiento
   ¿Qué sabe esta persona que nadie más sabe?
   ¿Qué sistemas, componentes o procesos poseen exclusivamente?
   Este es el inventario de puntos únicos de falla (ver Sección 12.4).
```

### 8.2 Redistribución de Capacidad

Después de una salida, el límite de WIP y los compromisos de objetivos del equipo restante deben recalcularse usando el tamaño del equipo ajustado a la salida.

```
Ejemplo:
  Equipo de 5, una salida anunciada con 7 días restantes en un ciclo de 2 semanas.

  Límite de WIP original: 5 × 0.7 = 3.5 → 4 tareas
  Tamaño de equipo revisado: 4 desarrolladores (efectivo desde la fecha de salida)
  Límite de WIP revisado: 4 × 0.7 = 2.8 → 3 tareas

  Tareas en progreso que eran propiedad del miembro que se va:
    → Si cerca de completarse: el miembro que sale las completa antes de irse
    → Si en etapa temprana: reasignar con transferencia de contexto completa
      (documentación + sesión de pair)
    → Si bloqueadas: evaluar si diferir o reasignar según impacto en el objetivo

  Impacto en objetivos: si el objetivo primario está en riesgo, notificar al
  Product Strategist inmediatamente.
  Posibles acciones: reducir alcance del objetivo primario, extender el ciclo
  (razón de extensión E), o declarar finalización parcial del ciclo.
```

### 8.3 Transferencia de Conocimiento como Tarea Formal de GOAL

La transferencia de conocimiento no es una conversación informal. Es una tarea en el Flow Board con criterios de aceptación, un responsable y una fecha límite.

```
Plantilla de tarea de transferencia de conocimiento:

Nombre de tarea: "Transferencia de Conocimiento — [Miembro que Sale] —
                 [Componente/Sistema]"
Tamaño:          Media o Grande (nunca Pequeña — la KT real lleva tiempo)
Responsable:     Miembro que sale (autor) + miembro receptor (aprendiz)
Criterios de aceptación:
  □ Todos los sistemas/componentes en propiedad documentados a un nivel donde el receptor
    puede depurarlos y modificarlos de forma independiente
  □ Las tareas activas han sido revisadas y entregadas con contexto completo
  □ Las credenciales de acceso y configuraciones han sido transferidas a las personas
    apropiadas
  □ Al menos una sesión de pair completada por sistema que el miembro que sale conocía
    exclusivamente
  □ Documentación actualizada en la base de conocimiento del equipo

Prioridad:
  Si el miembro que sale tiene 2+ semanas restantes: prioridad media, tarea planificada
  Si el miembro que sale tiene < 2 semanas: alta prioridad, entra al ciclo inmediatamente
  Si salida repentina: triaje de emergencia para identificar brechas críticas de conocimiento
```

---

## 9. Miembros del Equipo a Tiempo Parcial

### 9.1 Cómo Contar la Capacidad a Tiempo Parcial Justamente

Los miembros a tiempo parcial contribuyen capacidad real y merecen ser contados con precisión en la tabla de capacidad — no redondeados a cero o aproximados vagamente.

```
Cálculo de capacidad a tiempo parcial:

Paso 1: Determinar las horas reales por semana
  El tiempo parcial no siempre es el 50%. Algunos arreglos a tiempo parcial son:
  - 3 días por semana (60%)
  - 4 días por semana (80%)
  - Solo mañanas (50%)
  - Horario variable

Paso 2: Convertir a días equivalentes a tiempo completo (FTE) para el ciclo
  Días FTE = (Horas por semana / Horas estándar por semana) × Días hábiles en el ciclo

  Ejemplo:
    Desarrollador trabaja 24 horas por semana (3 días)
    Estándar = 40 horas por semana
    Ratio FTE = 24/40 = 0.6
    Ciclo de 2 semanas = 10 días hábiles × 0.6 = 6 días disponibles

Paso 3: Aplicar las mismas deducciones de factor de enfoque y costos generales
  que los miembros a tiempo completo
  El porcentaje de sobrecarga frecuentemente es mayor para miembros a tiempo parcial
  porque las ceremonias y los costos generales de coordinación son costos fijos
  aproximados, pero el tiempo de entrega disponible está reducido.

  Ejemplo con ceremonias:
    Miembro a tiempo completo: sobrecarga de ceremonias = 1.75 días / 10 días = 17.5%
    Miembro a tiempo parcial (6 días): misma sobrecarga = 1.75 días / 6 días = 29%

  Esto significa que los miembros a tiempo parcial pueden necesitar participación
  ajustada en ceremonias (ej. asistir solo a las ceremonias más relevantes para su trabajo)
  para evitar que toda su contribución sea consumida por los costos generales.
```

### 9.2 Ajuste del Límite de WIP para Equipos Mixtos (Tiempo Completo/Parcial)

Cuando el equipo incluye tanto miembros a tiempo completo como a tiempo parcial, la fórmula de límite de WIP necesita reflejar los contribuyentes efectivos, no la dotación de personal.

```
Cálculo de WIP para equipo mixto:

Miembro a tiempo completo = 1.0 para el cálculo de WIP
Miembro a tiempo parcial = Su ratio FTE

Ejemplo:
  3 desarrolladores a tiempo completo (1.0 cada uno) + 2 desarrolladores a tiempo
  parcial (0.6 cada uno)
  Tamaño efectivo del equipo = 3(1.0) + 2(0.6) = 3 + 1.2 = 4.2 desarrolladores efectivos
  Límite de WIP = 4.2 × 0.7 = 2.94 → límite de WIP de 3

Nota: Este es el mismo límite de WIP que un equipo de 3 desarrolladores a tiempo completo.
Puede parecer contraintuitivo, pero es correcto: los desarrolladores a tiempo parcial
contribuyen capacidad, pero su disponibilidad diaria reducida significa que las tareas
asignadas a ellos toman más tiempo en tiempo calendario, lo cual refleja el cálculo de WIP.
```

### 9.3 Consideraciones de Asignación de Tareas para Miembros a Tiempo Parcial

Los miembros a tiempo parcial deben recibir tareas con límites claros y dependencias mínimas de la disponibilidad de otros miembros del equipo. Las tareas que requieren coordinación sincrónica frecuente son difíciles para los miembros a tiempo parcial porque sus horas disponibles pueden no coincidir con el resto del equipo.

Mejores tipos de tareas para miembros a tiempo parcial:
- Tareas de implementación bien definidas y acotadas
- Trabajo de documentación y especificación
- Escritura de tests
- Code review (puede hacerse de forma asíncrona)

Menos adecuado sin coordinación explícita:
- Tareas con dependencias duras en insumos del mismo día de otros miembros
- Tareas en pair que requieren sesiones sincrónicas extendidas
- Respuesta a incidentes P1 (los miembros a tiempo parcial pueden no estar disponibles cuando ocurren P1s)

---

## 10. Capacidad de Contratistas y Colaboradores Externos

### 10.1 Cómo Contabilizar Contratistas en la Capacidad

Los contratistas contribuyen capacidad, pero no son equivalentes a los miembros del equipo a tiempo completo en términos de planificación. Las diferencias clave:

- Llevan sobrecarga de onboarding independientemente de la experiencia técnica
- No tienen conocimiento previo del codebase, las convenciones o las decisiones del equipo
- El tiempo de preparación de contexto es un costo inicial real e inevitable
- Su disponibilidad puede no coincidir exactamente con el ciclo del equipo

```
Modelado de capacidad de contratistas:

Semana 1 del compromiso:
  Contribución:    ~20–30% de un desarrollador a tiempo completo comparable
  Costo de sobrecarga: 1.5–2.0 días de los miembros del equipo para onboarding y contexto

Semana 2:
  Contribución:    ~40–50%
  Costo de sobrecarga: 0.5–1.0 días

Semanas 3–4:
  Contribución:    ~60–70% (para trabajo bien delimitado y bien definido)
  Costo de sobrecarga: Mínimo (interacción rutinaria)

Nota: Estos números asumen que el contratista tiene las habilidades técnicas relevantes.
Los contratistas sin conocimiento del dominio en la pila tecnológica específica
tardan más en integrarse y pueden no alcanzar el 70% de contribución
en un compromiso corto.
```

### 10.2 Sobrecarga de Onboarding para Contratistas

El onboarding de contratistas debe seguir el mismo proceso formal que el onboarding de miembros a tiempo completo. Frecuentemente se omite porque los contratistas son percibidos como "ya experimentados" — pero la experiencia en su campo no transfiere el conocimiento de tu codebase, tus convenciones o tu proceso de despliegue.

```
Onboarding mínimo para contratistas (antes de la primera tarea):

□ Recorrido del codebase: visión general de la arquitectura, módulos clave, puntos de entrada
□ Configuración del entorno de desarrollo: configuración local verificada y funcionando
□ Proceso de despliegue: cómo desplegar en staging, cómo funciona el CI/CD
□ Convenciones del equipo: estándares de código, convenciones de nomenclatura, proceso de PR
□ Briefing sobre la DoD: el contratista debe entender y comprometerse con la DoD del equipo
□ Selección de la primera tarea: comenzar con una tarea S o M pequeña en un área acotada
  (no en la parte más compleja o crítica del codebase)

Omitir este onboarding garantiza uno de dos resultados:
  a) El contratista entrega trabajo que no cumple los estándares, requiriendo retrabajo
  b) Un miembro senior del equipo se convierte en un soporte full-time invisible,
     consumiendo capacidad que se suponía que compensaría el contratista
```

### 10.3 Cuándo los Contratistas Ayudan vs Perjudican el Flujo

Los contratistas ayudan al flujo cuando:
- El compromiso es lo suficientemente largo para que la integración valga la pena (mínimo 3–4 semanas)
- El trabajo está bien definido y acotado (no requiere conocimiento profundo del codebase)
- El equipo tiene capacidad disponible para absorber la sobrecarga de onboarding
- El contratista ha sido informado sobre las prácticas GOAL y seguirá la DoD

Los contratistas perjudican el flujo cuando:
- El compromiso es demasiado corto (1–2 semanas: el costo de onboarding supera la contribución)
- El trabajo requiere conocimiento profundo del sistema que tarda semanas en transferirse
- El equipo ya está con capacidad reducida (agregar sobrecarga de onboarding a un equipo ya saturado acelera el problema)
- El contratista omite la DoD o no se le exige cumplir los estándares de calidad del equipo

**La paradoja del contratista:** Los equipos frecuentemente contratan contratistas cuando están sobrecargados. Pero un equipo sobrecargado tiene la menor capacidad para absorber la sobrecarga de onboarding del contratista. Por esto las primeras 1–2 semanas del compromiso de un contratista frecuentemente empeoran la sobrecarga antes de que mejore.

Recomendación: Planificar los inicios de contratistas para el comienzo de ciclos cuando la capacidad del equipo está en o cerca de lo normal. Evitar iniciar compromisos de contratistas a mitad de un ciclo de capacidad reducida.

---

## 11. Proyección Trimestral de Capacidad

### 11.1 Cómo Planificar la Capacidad para los Próximos 3–4 Ciclos

La proyección trimestral de capacidad extiende el cálculo de capacidad por ciclo hacia un horizonte móvil. Responde la pregunta: "Dado lo que sabemos sobre los próximos 3 meses, ¿a qué podemos comprometernos de manera realista?"

Esta proyección se usa como insumo para el roadmap del producto. Previene el modo de falla común donde el roadmap se construye sobre capacidad teórica del equipo y la entrega consistentemente cae por debajo de los compromisos del roadmap.

```
Proceso de proyección trimestral (realizado una vez por trimestre, actualizado mensualmente):

Paso 1: Listar las próximas 3–4 ventanas de ciclo
  Definir fechas aproximadas de inicio y fin para los próximos ciclos.
  Típico: 3 ciclos de 3 semanas cada uno = horizonte de 9 semanas

Paso 2: Para cada ventana de ciclo, catalogar las restricciones conocidas
  - Vacaciones confirmadas (ya agendadas)
  - Eventos de toda la empresa (offsite, conferencias)
  - Actividad de contratación conocida (cambios de dotación esperados)
  - Inicios/fines de contratistas planificados
  - Eventos de onboarding conocidos
  - Tasa histórica de días de enfermedad (desde datos de ciclos)

Paso 3: Calcular la capacidad efectiva aproximada por ciclo
  Usar la misma fórmula que la planificación por ciclo, con menos precisión
  a nivel trimestral. Las proyecciones trimestrales usan estimaciones aproximadas;
  la planificación por ciclo usa datos exactos.

Paso 4: Identificar ciclos de alta restricción
  Señalar cualquier ciclo donde la capacidad efectiva sea < 80% de la línea base.
  Estos ciclos necesitan compromisos de objetivos reducidos y comunicación temprana
  con stakeholders.

Paso 5: Producir un documento de perspectiva de capacidad
  Compartir con el Product Strategist y los stakeholders relevantes.
  Esta es la base para las conversaciones de compromisos del roadmap.
```

### 11.2 Plantilla de Proyección Trimestral de Capacidad

```
PROYECCIÓN TRIMESTRAL DE CAPACIDAD — T[N] [Año]
Equipo: [Nombre del Equipo]
Preparado por: [Nombre del Flow Master]
Fecha: [Fecha]
Capacidad efectiva base (equipo completo, ciclo normal): [X] días-persona por ciclo de 2 semanas

Ciclo   | Ventana          | Restricciones conocidas           | Cap. estim.  | Indicador
───────────────────────────────────────────────────────────────────────────────────────────
C-[N]   | 7 abr – 18 abr   | Ninguna conocida                  | ~X días      | Normal
C-[N+1] | 21 abr – 2 may   | Desarrollador A: vacaciones sem 2 | ~X–3 días    | Reducción menor
C-[N+2] | 5 may – 16 may   | Offsite empresa (8–9 may)         | ~X–5 días    | Reducción moderada
C-[N+3] | 19 may – 30 may  | Nuevo integrante inicia 19 may    | ~X–4 días    | Reducción moderada
───────────────────────────────────────────────────────────────────────────────────────────
Notas:
  - C-[N+2] offsite impacta a todos los miembros del equipo por 2 días
  - C-[N+3] nuevo integrante introduce 3–4 días de sobrecarga de onboarding
    para el buddy de onboarding
  - Tasa histórica de días de enfermedad: 0.4 días/persona/ciclo
    → agregar ~2 días de buffer en el equipo por ciclo

Implicación para el roadmap:
  Normal: [3 objetivos/ciclo × 4 ciclos] = 12 objetivos disponibles
  Ajustado por restricciones: ~10 objetivos en este trimestre
  Recomendación: Reservar 2 espacios de objetivos para ítems de alta prioridad
  que necesiten flexibilidad de programación
```

### 11.3 Manejo de Restricciones Futuras Conocidas

Algunas restricciones son conocidas con mucha anticipación: offsites de la empresa, licencias planificadas, asistencia a conferencias, calendarios de onboarding. Estas son las más fáciles de contabilizar porque son visibles en el calendario.

**Protocolo de comunicación pre-ciclo para restricciones conocidas:**

- Restricciones conocidas con > 4 semanas de anticipación: reflejadas en la proyección trimestral
- Restricciones conocidas con 1–4 semanas de anticipación: incorporadas en la próxima Smart Planning
- Restricciones descubiertas durante un ciclo: evaluación inmediata del impacto de capacidad (sigue el protocolo de salida si es grave)

### 11.4 La Planificación de Capacidad como Insumo para los Compromisos del Roadmap

El roadmap es el producto de dos insumos: lo que el negocio quiere (prioridad del Product Strategist) y lo que el equipo puede entregar (capacidad del trabajo de planificación del Flow Master). Cuando los roadmaps se construyen sin insumos de capacidad, son ficción.

```
Marco de compromisos del roadmap:

Para cada ítem del roadmap, el Product Strategist y el Flow Master evalúan conjuntamente:
  1. ¿Para qué ventana de ciclo está dirigido este ítem?
  2. ¿Cuál es el requisito estimado de capacidad (basado en dimensionamiento de tareas)?
  3. ¿Tiene el ciclo objetivo capacidad efectiva suficiente para este ítem?
  4. ¿Cuáles son las dependencias — requiere este ítem que un ítem precedente esté completo?

Tipos de compromiso:
  Comprometido:   El ítem cabe dentro de la capacidad confirmada para una ventana
                  de ciclo específica. El equipo lo entregará salvo eventos inesperados mayores.

  Proyectado:     El ítem está planificado para una ventana de ciclo pero la capacidad
                  aún no está confirmada. Sujeto a cambio basado en la capacidad real
                  en la Smart Planning.

  Aspiracional:   El ítem es deseado pero no ha sido vinculado a capacidad en un ciclo
                  específico. No es un compromiso — no debe comunicarse a stakeholders
                  externos como tal.
```

---

## 12. Anti-Patrones de Capacidad

Los anti-patrones son enfoques que parecen razonables pero consistentemente producen malos resultados. La planificación de capacidad tiene varios anti-patrones bien documentados que vale la pena nombrar explícitamente.

### 12.1 Planificación al 100% de Utilización

**Cómo se ve:**

La capacidad efectiva del equipo se calcula como X días-persona. El plan asigna X días-persona de trabajo. No hay buffer. A cada persona se le asigna algo para cada hora del ciclo.

**Por qué parece razonable:**

"Estamos pagando empleados a tiempo completo — deberíamos usar todo su tiempo." "Dejar capacidad sin usar es desperdicio." "Si no llenamos el plan, estamos rindiendo por debajo."

**Por qué falla:**

La planificación al 100% de utilización falla porque asume información perfecta. En cada ciclo real de software:
- Las tareas a veces son más grandes de lo estimado
- Surgen bugs inesperados desde Validación
- Las dependencias se revelan a mitad de la implementación
- Los colegas necesitan ayuda
- Un desarrollador se enferma

Cuando cualquiera de estos ocurre en un plan al 100% de utilización, algo se cae del borde. O una tarea se apresura (cae la calidad), o se pierde un objetivo (el Índice de Precisión de Ciclo se degrada), o el equipo trabaja horas extra (se viola la entrega sostenible).

**Respuesta de GOAL:**

El buffer del 20% está explícitamente protegido en el cálculo de capacidad antes de que se dimensionen los objetivos. Los equipos que consistentemente usan su buffer completo no deben eliminarlo — eso significa que están operando al nivel correcto de compromiso, no que tienen holgura para explotar.

### 12.2 Ignorar el Tiempo de Ceremonias

**Cómo se ve:**

El cálculo de capacidad cuenta 5 desarrolladores × 10 días = 50 días-equipo, y luego los objetivos se dimensionan para consumir 50 días-equipo de trabajo. Las ceremonias no se deducen.

**Por qué parece razonable:**

"Las ceremonias son parte del trabajo — no cuentan contra el tiempo de entrega." "Solo tenemos daily syncs de 30 minutos — no es tanto."

**Por qué falla:**

Las ceremonias de GOAL para un ciclo de 2 semanas con 5 personas consumen aproximadamente 8–9 días-equipo. Eso es aproximadamente el 17% de la capacidad bruta disponible. Si planificas contra 50 días-equipo pero solo tienes 41 para entrega, consistentemente llegarás un 17% corto de tus compromisos. En 4 ciclos, eso es el equivalente de un ciclo completo de trabajo no entregado.

**Respuesta de GOAL:**

El tiempo de ceremonias es una línea obligatoria en el cálculo de capacidad. No es desperdicio — las ceremonias entregan alineación, mejora y dirección. Pero consumen tiempo, y ese tiempo debe contabilizarse.

### 12.3 No Contabilizar el Onboarding

**Cómo se ve:**

Un nuevo desarrollador se une al equipo. El límite de WIP aumenta en 1 inmediatamente. El cálculo de capacidad trata al nuevo miembro como contribuyente completo desde el primer día. Los objetivos se establecen basándose en el "equipo expandido."

**Por qué parece razonable:**

"Los contratamos — deberían ser productivos inmediatamente." "Son desarrolladores experimentados — no necesitan mucha guía."

**Por qué falla:**

Incluso el desarrollador senior más experimentado tarda 4–8 semanas en alcanzar plena productividad en un nuevo codebase. Durante ese período, su contribución es parcial y el equipo absorbe una sobrecarga invisible en la tabla de capacidad. Planificar como si un nuevo integrante reemplaza inmediatamente la capacidad de un desarrollador completamente integrado lleva a ciclos sobrecomprometidos, nuevos integrantes frustrados y miembros senior agotados que simultáneamente intentan entregar y dar soporte.

**Respuesta de GOAL:**

La rampa de capacidad de onboarding en la Sección 7.1 es explícita. Los nuevos miembros se cuentan según su contribución efectiva real (comenzando en ~0.3 FTE en la semana 1). El aumento del límite de WIP se retrasa hasta que el rendimiento individual del nuevo miembro se demuestre en el Flow Metrics Dashboard.

### 12.4 Punto Único de Falla

**Cómo se ve:**

Todo el conocimiento significativo de un sistema crítico vive con un desarrollador. Si están enfermos, de vacaciones o se van, el equipo no puede avanzar en el trabajo que involucra ese sistema. La capacidad efectiva del equipo cae bruscamente cuando esa persona no está disponible.

**Por qué ocurre:**

El trabajo se concentra naturalmente. La persona que construyó un sistema tiende a recibir todo el trabajo que involucra ese sistema. El intercambio de conocimiento se posterga porque la persona que sabe está disponible. El riesgo es invisible mientras está disponible.

**Por qué falla:**

Cuando el punto único de falla no está disponible (y esto siempre ocurre eventualmente), puede ser catastrófico. El impacto de capacidad no es "un desarrollador menos" — es "cero capacidad efectiva en todo lo que toca este sistema."

**Respuesta de GOAL:**

- La transferencia de conocimiento es una actividad proactiva y regular — no solo desencadenada por salidas
- La asignación de deuda técnica incluye tareas de documentación y difusión de conocimiento
- El Block Register rastrea bloqueadores causados por dependencia de una sola persona; estos patrones se analizan en retrospectivas
- Un objetivo saludable: cualquier sistema crítico tiene al menos dos desarrolladores que pueden modificarlo de forma independiente

**Implementación práctica:**

En cada retrospectiva, el Flow Master pregunta: "¿Hay algún sistema o área de conocimiento donde tengamos dependencia de una sola persona?" Cualquier punto único de falla identificado se convierte en una tarea de deuda técnica en el siguiente ciclo. El objetivo no es redundancia perfecta de conocimiento — es eliminar la indisponibilidad catastrófica por la ausencia de cualquier persona.

---

## Resumen: Planificación de Capacidad en GOAL de un Vistazo

| Dimensión | Enfoque GOAL |
|-----------|-------------|
| Cuándo se calcula la capacidad | Antes de dimensionar los objetivos, en Smart Planning |
| Cálculo base | Miembros del equipo × días disponibles × factor de enfoque, menos deducciones |
| Deducciones clave | Ceremonias, 1:1s, costos operativos generales, ausencias |
| Factor de enfoque | 0.6–0.8 según estabilidad del equipo y frecuencia de interrupciones |
| Buffer | 20% de la capacidad efectiva, comprometido antes de dimensionar objetivos |
| Asignación de deuda técnica | 10–20% de la capacidad efectiva, comprometida antes de dimensionar objetivos |
| Umbral de capacidad reducida | &lt; 70% de la línea base activa ciclo de capacidad reducida formal |
| Impacto de nuevo integrante | Contado a 0.3–0.6 FTE durante semanas 1–4; aumento de WIP retrasado hasta que se prueba el rendimiento |
| Impacto de salida | Evaluación inmediata del impacto en el ciclo; transferencia de conocimiento como tarea formal GOAL |
| Miembros a tiempo parcial | Contados en su ratio FTE; límite de WIP usa tamaño efectivo del equipo |
| Contribución de contratistas | La integración completa tarda 3–4 semanas; la sobrecarga de onboarding debe planificarse |
| Proyección trimestral | Horizonte móvil de 3–4 ciclos; insumo para compromisos del roadmap |
| Anti-patrones a evitar | 100% de utilización, ignorar tiempo de ceremonias, ignorar onboarding, puntos únicos de falla |

---

*Este documento es parte del conjunto de documentación de la Metodología Ágil GOAL. Referirse a GOAL_Methodology_v0.2.md para el marco central. Referirse a GOAL_Gestion_Calidad_ES.md para cómo el trabajo de calidad influye en las decisiones de asignación de capacidad.*

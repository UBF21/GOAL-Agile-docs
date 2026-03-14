---
id: quality-management
title: Gestión de Calidad
sidebar_position: 13
description: Construyendo la calidad en el sistema de entrega GOAL — métricas, estrategia de testing, puertas de calidad, gestión de bugs y anti-patrones de calidad.
---

# GOAL Gestión de Calidad
## Construyendo la Calidad en el Sistema de Entrega

## Tabla de Contenidos

1. [Filosofía de Calidad en GOAL](#1-filosofía-de-calidad-en-goal)
2. [Métricas de Calidad que los Equipos GOAL Rastrean](#2-métricas-de-calidad-que-los-equipos-goal-rastrean)
3. [Estrategia de Testing Integrada al Goal Cycle](#3-estrategia-de-testing-integrada-al-goal-cycle)
4. [Definición de Listo para QA](#4-definición-de-listo-para-qa)
5. [Puertas de Calidad por Tipo de Tarea](#5-puertas-de-calidad-por-tipo-de-tarea)
6. [Gestión de Bugs en GOAL](#6-gestión-de-bugs-en-goal)
7. [Estándares de Calidad en Code Review](#7-estándares-de-calidad-en-code-review)
8. [Análisis de Calidad en la Retrospectiva](#8-análisis-de-calidad-en-la-retrospectiva)
9. [El Rol de QA en los Equipos GOAL](#9-el-rol-de-qa-en-los-equipos-goal)
10. [Anti-Patrones de Calidad](#10-anti-patrones-de-calidad)

---

## 1. Filosofía de Calidad en GOAL

### 1.1 El principio fundamental: la calidad se construye, no se agrega al final

La Definición de Hecho (DoD) de GOAL requiere que los tests pasen. Pero ese único criterio no constituye una estrategia de calidad — es el punto de control final de una. El principio más completo es:

> **La calidad es responsabilidad de quien escribe el código, en el momento en que lo escribe. El testing confirma la calidad que ya fue construida.**

Esta es la diferencia entre "calidad incorporada" y "calidad testeada a posteriori."

**Calidad testeada a posteriori** es el modelo tradicional: los desarrolladores escriben código, luego QA encuentra bugs, luego los desarrolladores corrigen bugs, luego QA vuelve a testear. En este modelo, la calidad es un filtro posterior. Es lento, costoso y crea dinámicas adversariales entre desarrollo y QA. También falla sistemáticamente: ningún equipo de QA puede encontrar todos los bugs, y los bugs que escapan a producción son usualmente los más costosos.

**Calidad incorporada** significa que cada miembro del equipo considera corrección, testeabilidad y mantenibilidad como parte de la decisión de implementación — no como una fase separada. El testing se convierte en confirmación, no en descubrimiento.

### 1.2 Por qué esto importa específicamente en GOAL

GOAL está construido alrededor de la entrega continua y la eficiencia del flujo. Un bug que escapa a producción no solo cuesta una corrección — cuesta:

- Tiempo para detectar el bug en producción (frecuentemente horas o días)
- Sobrecarga por cambio de contexto para el desarrollador que necesita re-involucrarse con código antiguo
- Interrupción del flujo: el bug típicamente entra como interrupción P1, consumiendo capacidad del carril Expedite
- Erosión de confianza con los stakeholders que ven fallas en producción
- Retrabajo: la tarea que "pasó la DoD" debe volver a In Progress, inflando las métricas de tiempo de ciclo

Todos estos son impactos medibles a nivel de flujo. La calidad no es un valor blando — es una variable de rendimiento.

### 1.3 La calidad como responsabilidad compartida del equipo

GOAL no tiene un departamento de QA separado que "posee" la calidad. La calidad está distribuida:

| Rol | Responsabilidad de calidad |
|-----|---------------------------|
| **Miembro del Delivery Team** | Escribir tests, revisar corrección, señalar riesgos de calidad en la planificación |
| **Ingenieros de QA (si están integrados)** | Definir tests de aceptación, validar en staging, identificar brechas en la estrategia de cobertura |
| **Flow Master** | Monitorear tasas de retorno de tareas a In Progress, señalar demoras relacionadas con calidad en el flujo |
| **Product Strategist** | Escribir criterios de aceptación claros que hagan la calidad inequívoca |

Cuando la calidad falla, es una falla del sistema — no una falla del equipo de QA.

### 1.4 La calidad como compromiso a nivel de ciclo

En la Smart Planning, el equipo no solo se compromete a entregar funcionalidades. Se comprometen implícitamente al nivel de calidad definido en la DoD. La DoD es el contrato mínimo de calidad. Si un ciclo produce funcionalidades que técnicamente pasan la DoD pero generan altas tasas de escape de bugs, la DoD necesita actualizarse.

Los compromisos de calidad evolucionan. La DoD Extendida (Nivel 2 en la metodología GOAL) es el mecanismo para esta evolución. Cada retrospectiva es una oportunidad para elevar el estándar de calidad basándose en lo que muestran los datos.

---

## 2. Métricas de Calidad que los Equipos GOAL Rastrean

GOAL usa datos para guiar decisiones. La calidad no es la excepción. Las siguientes métricas forman la capa de calidad del Flow Metrics Dashboard.

### 2.1 Tasa de Escape de Bugs

```
Definición:   Bugs encontrados en producción / Total de bugs encontrados
              (producción + pre-lanzamiento)
Fórmula:      Tasa de Escape = (Bugs en producción / Total de bugs) × 100
Unidad:       Porcentaje
Medición:     Por ciclo

Guía de interpretación:
  < 5%    Excelente. La detección pre-lanzamiento está funcionando.
  5–15%   Aceptable para equipos que aún maduran su estrategia de testing.
  15–30%  Preocupante. La estrategia de testing tiene brechas significativas.
  > 30%   Problema sistémico de calidad. La estrategia de testing requiere revisión fundamental.

Por qué importa esta métrica:
  Un equipo puede tener muchos bugs y aun así tener excelente calidad si todos
  se detectan antes de producción. Un equipo con pocos bugs pero alta tasa de
  escape tiene un problema de detección, no solo de bugs.
  La tasa de escape separa "escribimos bugs" de "dejamos pasar bugs antes de que
  los usuarios los vean."
```

**Cómo rastrearla:** Contar los bugs reportados desde monitoreo de producción, reportes de usuarios o descubrimiento post-lanzamiento como "escapados." Contar los bugs detectados en code review, entornos de QA o testing automatizado como "detectados pre-lanzamiento." Registrar ambos por ciclo.

### 2.2 Densidad de Defectos

```
Definición:   Número de bugs encontrados por unidad de producción
Fórmula A:    Bugs por funcionalidad entregada en el ciclo
Fórmula B:    Bugs por tarea completada en el ciclo
Unidad:       Ratio (bugs/funcionalidad o bugs/tarea)
Medición:     Por ciclo, rastreado como tendencia a lo largo del tiempo

Interpretación:
  No existe una densidad de defectos "buena" universal — los equipos y productos varían.
  El objetivo es una tendencia consistente a la baja durante 4–6 ciclos.
  Un pico en la densidad de defectos en un ciclo específico es señal de investigar:
    - ¿El ciclo fue apresurado?
    - ¿Las funcionalidades fueron más complejas de lo habitual?
    - ¿Hubo un miembro del equipo o área del código con bugs desproporcionados?

Nota sobre integridad:
  La densidad de defectos solo es útil si el rastreo de bugs es completo.
  Los bugs corregidos informalmente sin registrarse corrompen esta métrica.
  Cada corrección de bug debe ser una tarea rastreada en el Flow Board.
```

### 2.3 Cobertura de Tests

```
Definición:   Porcentaje de rutas de código o comportamientos cubiertos por tests automatizados
Estándar:     La cobertura de líneas es la más medida pero la menos significativa.
              Los equipos GOAL rastrean cobertura significativa en su lugar.

Marco de cobertura significativa:
  - Cobertura de ruta crítica: ¿los flujos de los que los usuarios más dependen
    están testeados de extremo a extremo?
  - Cobertura de ramas: ¿se testean ambos lados de la lógica condicional?
  - Cobertura de rutas de error: ¿se testean condiciones de error y casos límite,
    no solo caminos felices?
  - Cobertura de regresión: ¿cada bug que escapó anteriormente está ahora cubierto
    por un test de regresión?

Objetivos:
  GOAL no establece un objetivo de porcentaje universal (ej. "80% de cobertura de líneas").
  En cambio, los objetivos de cobertura se definen por módulo según su criticidad:

  | Criticidad del módulo | Expectativa de cobertura |
  |-----------------------|--------------------------|
  | Pagos / autenticación / integridad de datos | > 90% cobertura de ramas + E2E de ruta crítica |
  | Lógica de negocio principal | > 80% cobertura de ramas |
  | Componentes de UI | E2E de ruta crítica + snapshot tests para pantallas clave |
  | Configuración / herramientas | Tests de humo como mínimo |
  | Código legacy no modificado | No reducir; mejorar oportunísticamente |

La cobertura como puerta de calidad:
  El porcentaje de cobertura no es un criterio de DoD por defecto.
  Lo que SÍ es criterio de DoD: "No se agregó código nuevo sin los tests correspondientes."
  La regresión de cobertura (código nuevo que reduce la cobertura general) desencadena revisión.
```

### 2.4 Tiempo Medio de Detección (MTTD) y Tiempo Medio de Resolución (MTTR)

```
MTTD — Mean Time to Detect (Tiempo Medio de Detección)

Definición:   Tiempo promedio entre que un bug es introducido y cuando es descubierto
Fórmula:      Promedio de (fecha de detección - fecha estimada de introducción)
              para todos los bugs
Unidad:       Horas o días
Medición:     Por ciclo o ventana móvil de 30 días

Interpretación:
  MTTD bajo (< 4 horas) = bugs detectados en la misma sesión de desarrollo (ideal)
  MTTD medio (horas–días) = detectados en code review o validación QA (aceptable)
  MTTD alto (días–semanas) = detectados en producción o post-lanzamiento (costoso)

MTTR — Mean Time to Resolve (Tiempo Medio de Resolución)

Definición:   Tiempo promedio entre que un bug es detectado y cuando el arreglo es desplegado
Fórmula:      Promedio de (fecha de despliegue del arreglo - fecha de detección)
              para todos los bugs
Unidad:       Horas o días
Medición:     Por ciclo o ventana móvil de 30 días

Interpretación:
  MTTR para P1 (producción): objetivo < 4 horas
  MTTR para P2 (pre-lanzamiento): objetivo < 1 ciclo
  MTTR para P3 (problemas conocidos): rastreado, resuelto dentro del presupuesto de deuda técnica

Relación MTTD y MTTR:
  MTTD bajo + MTTR bajo = excelentes operaciones de calidad
  MTTD bajo + MTTR alto = buena detección, respuesta lenta (problema de proceso o capacidad)
  MTTD alto + MTTR bajo = correcciones rápidas pero detectando tarde (problema de estrategia de testing)
  MTTD alto + MTTR alto = crisis sistémica de calidad que requiere atención inmediata
```

### 2.5 Tasa de Fallas en Cambios (Métrica DORA)

```
Definición:   Porcentaje de despliegues que resultan en una falla en producción
              que requiere un hotfix, rollback o parche dentro de las 24 horas
Fórmula:      (Despliegues fallidos / Total de despliegues) × 100
Unidad:       Porcentaje
Medición:     Por ciclo, rastreado como tendencia

Niveles de referencia DORA:
  Performers de élite: 0–15% de tasa de fallas en cambios
  Performers altos:    16–30%
  Performers medios:   16–30% (mismo rango, diferenciados por velocidad de recuperación)
  Performers bajos:    > 45%

Por qué GOAL rastrea esto:
  La tasa de fallas en cambios conecta directamente la velocidad de entrega con la estabilidad.
  Los equipos que despliegan frecuentemente pero con alta tasa de fallas no son de alto rendimiento.
  El modelo de entrega orientado a objetivos de GOAL debería mejorar esta métrica con el tiempo
  porque los objetivos empujan hacia resultados bien definidos y testeados, no hacia volcados
  apresurados de funcionalidades.

Relación con la salud del ciclo GOAL:
  Un pico en la tasa de fallas en cambios en un ciclo determinado es un desencadenador
  automático de retrospectiva. Frecuentemente se correlaciona con: cierre apresurado del ciclo,
  criterios de aceptación poco claros, validación inadecuada en staging o violaciones del
  límite de WIP en la columna de Validación.
```

### 2.6 Tasa de Retrabajo

```
Definición:   Porcentaje de tareas que regresan a In Progress después de ser movidas a Done
              o después de ser consideradas completas por el desarrollador
Fórmula:      (Tareas que regresan a In Progress desde Done o Validación /
              Total de tareas) × 100
Unidad:       Porcentaje
Medición:     Por ciclo

Nota: En GOAL, "regresar desde Done" significa que la tarea no cumplía realmente la DoD
      y fue marcada incorrectamente. Esto es una falla de cumplimiento de la DoD.
      "Regresar desde Validación" es más común y esperado en equipos maduros
      pero debe rastrearse igualmente como señal de definición incompleta de la tarea.

Objetivos:
  < 5%   Saludable. Las definiciones de tarea son claras y la DoD se cumple.
  5–15%  Atención. Las definiciones de tarea carecen de claridad o el cumplimiento
         de la DoD es inconsistente.
  > 15%  Problema. El retrabajo está consumiendo capacidad planificada y ocultando
         el verdadero tiempo de ciclo.

Retrabajo y eficiencia del flujo:
  El retrabajo infla el tiempo de ciclo, reduce la tasa de entrega y oculta la
  verdadera capacidad. Un equipo con 20% de tasa de retrabajo tiene efectivamente
  un 20% menos de capacidad de la que asume su planificación. La tasa de retrabajo
  es por tanto también un insumo para la planificación de capacidad
  (ver GOAL_Planificacion_Capacidad_ES.md).
```

---

## 3. Estrategia de Testing Integrada al Goal Cycle

### 3.1 La Pirámide de Tests para Equipos GOAL

La pirámide de tests describe la ratio recomendada de tipos de tests en un conjunto de tests saludable. GOAL adopta la pirámide estándar con orientación específica sobre cómo se mapea al Flow Board.

```
                    /\
                   /  \
                  / E2E \         ~10% de la inversión en tests
                 /--------\
                /Integración\     ~20% de la inversión en tests
               /--------------\
              /   Tests Unitarios\ ~70% de la inversión en tests
             /--------------------\
```

**Tests unitarios (70%)**

- Testean funciones, métodos o componentes individuales de forma aislada
- Se ejecutan en milisegundos — deberían ejecutarse al guardar cada archivo durante el desarrollo
- Los escribe el desarrollador que implementa el código, en el momento de la implementación
- Un test unitario que pasa pero no verifica el comportamiento real es desperdicio (teatro de tests — ver Sección 10)
- Expectativa GOAL: cada nueva función con complejidad lógica no trivial tiene al menos un test unitario

**Tests de integración (20%)**

- Testean interacciones entre componentes, módulos o servicios
- Testean interacciones con bases de datos, contratos de API, comunicación entre servicios
- Se ejecutan en segundos — deberían ejecutarse en el pipeline de CI antes del merge
- Frecuentemente más valiosos que los tests unitarios para encontrar bugs reales porque testean el cableado real del sistema
- Expectativa GOAL: cada nuevo endpoint de API o integración de servicio tiene un test de integración

**Tests de extremo a extremo — E2E (10%)**

- Testean flujos de usuario completos a través de la UI real o la superficie de API
- Los más lentos, costosos de mantener y más frágiles
- Reservados solo para rutas críticas: login, pago, flujos principales del usuario
- Expectativa GOAL: cada objetivo primario que afecta un flujo orientado al usuario tiene al menos un test E2E cubriendo el camino feliz y uno cubriendo la ruta de error más crítica

**Ajustar la pirámide según el contexto:**

La ratio 70/20/10 es un punto de partida. Los equipos con:
- Trabajo intensivo en UI: pueden desplazar más inversión hacia tests de componentes y E2E
- Servicios de API / backend puros: pueden desplazar más hacia tests de integración
- Pipelines de datos: pueden necesitar tests especializados de integridad de datos fuera de la pirámide estándar

La forma de la pirámide (muchos tests rápidos y baratos, pocos tests lentos y costosos) permanece constante incluso cuando los ratios se ajustan.

### 3.2 Cuándo se Escriben los Tests — La Posición de GOAL sobre TDD

GOAL no manda el Desarrollo Guiado por Tests (TDD) como práctica estricta. Sí tiene una posición clara:

**Los tests se escriben como parte de la implementación, no después de que la implementación esté "hecha."**

La distinción:

| Enfoque | Cuándo se escriben los tests | Posición GOAL |
|---------|------------------------------|---------------|
| Test-Driven Development (TDD) | Antes del código de implementación | Alentado, no mandado |
| Desarrollo test-concurrente | Durante la implementación | Aceptable, práctica estándar |
| Desarrollo test-posterior | Después de completar la implementación, antes de la DoD | Marginalmente aceptable para cambios pequeños |
| Test-tardío | Después de mover la tarea a Done, en una tarea futura | No aceptable — viola la DoD |
| Nunca | No se escriben tests | Nunca aceptable bajo la DoD de GOAL |

**Por qué GOAL alienta TDD sin mandarlo:**

TDD produce código mejor diseñado de manera demostrable en la mayoría de los casos porque escribir el test primero obliga al desarrollador a definir el comportamiento esperado antes de pensar en la implementación. Sin embargo, mandar TDD en equipos no capacitados crea cumplimiento superficial (tests escritos para pasar, no para especificar comportamiento) en lugar de una mejora genuina de calidad.

El enfoque de GOAL: introducir conceptos de TDD en retrospectivas y sesiones de aprendizaje del equipo; dejar que el equipo lo adopte orgánicamente a medida que ven sus beneficios en los datos de densidad de defectos.

### 3.3 Los Tests como Parte de la Definición de la Tarea, No como Tarea Separada

Uno de los anti-patrones de calidad más comunes en equipos ágiles es crear una tarea separada de "escribir tests para X" que sigue a la tarea de implementación. Esto crea varios problemas:

- Los tests se escriben de memoria, no desde el momento de la implementación cuando el comportamiento está más fresco
- La tarea de "escribir tests" es siempre la primera en eliminarse cuando el ciclo se queda sin tiempo
- Crea la falsa sensación de que testear es opcional o separable del desarrollo
- Duplica el WIP sin duplicar el valor

**La regla de GOAL:**

> Una tarea no está completa hasta que sus tests estén escritos. Los tests son parte de la tarea, no una consecuencia de ella.

Esto significa que el dimensionamiento de tareas debe considerar el tiempo de escritura de tests. Cuando un desarrollador estima una tarea Media (2–3 días), esa estimación incluye escribir y verificar los tests. Si una tarea excedería el umbral Grande (más de 3 días) una vez incluido el testing, debe dividirse.

**Cómo se ven "los tests como parte de la tarea" en el Flow Board:**

La lista de verificación de la DoD para cualquier tarea que produzca código incluye: "Tests automatizados escritos y pasando." Cuando una tarea entra en Code Review, el revisor verifica que los tests existan, sean significativos y pasen. Cuando una tarea entra en Validación, QA (o el desarrollador mismo) verifica que los tests de aceptación pasen en el entorno de staging.

### 3.4 Definición de Tests de Aceptación durante la Smart Planning

El trabajo de calidad comienza en la Smart Planning, no en el Code Review. Los criterios de aceptación del Product Strategist (escritos antes de que comience el ciclo) son la especificación para los tests de aceptación.

**Durante la Smart Planning, el equipo debe:**

1. Revisar los criterios de aceptación para cada objetivo con una óptica de testing
2. Identificar qué criterios son testeables como tests automatizados vs requieren validación manual
3. Señalar cualquier criterio que sea ambiguo o no testeable y solicitar clarificación antes de que comience el ciclo
4. Identificar criterios que requieren un entorno de test específico, datos de prueba o configuración de cuenta de terceros

**El rol del ingeniero de QA en la Smart Planning (si está presente):**

El ingeniero de QA revisa los criterios de aceptación y redacta casos de test de aceptación antes de que comience la implementación. Estos casos de test se convierten en la especificación para la columna de Validación. Una tarea entra a Validación solo cuando existe un conjunto acordado de casos de test a ejecutar.

**El beneficio de la definición temprana de tests:**

Cuando los casos de test se escriben antes de la implementación, los desarrolladores saben exactamente qué comportamiento están construyendo. Esto elimina la conversación "pensé que se suponía que funcionara así" al final del ciclo. También habilita TDD: los casos de test de la Smart Planning se convierten en los tests fallidos que la implementación hace pasar.

---

## 4. Definición de Listo para QA

### 4.1 Qué Significa "Listo para QA" en GOAL

La columna de Validación en el Flow Board es para tareas que han pasado el code review y están listas para ser testeadas en un entorno de staging o QA. Mover una tarea a Validación prematuramente — antes de que esté verdaderamente lista — es una de las fallas más comunes en el proceso de calidad.

GOAL define una "Definición de Listo para QA" (DLpQA) que es separada y adicional a la Definición de Hecho estándar. Una tarea solo puede entrar a la columna de Validación cuando todos los criterios de la DLpQA se cumplan.

### 4.2 Criterios para Entrar a la Columna de Validación

```
Una tarea está Lista para QA cuando TODOS los siguientes son verdaderos:

□ El code review está completo y todos los comentarios de revisión están resueltos
□ Todos los tests automatizados pasan en el pipeline de CI (unitarios + integración)
□ La funcionalidad está desplegada en el entorno de staging/QA
  (no solo mergeada a main)
□ El entorno de staging refleja el estado actual de la funcionalidad
  (sin dependencias rotas)
□ Los criterios de aceptación de la tarea están documentados y accesibles para el validador
□ Los datos de prueba o cuentas de test necesarias para validar la funcionalidad están disponibles
□ Cualquier limitación conocida o prerequisito de testing está documentado en la tarjeta de tarea
□ El desarrollador que implementó la funcionalidad realizó una auto-revisión básica
  ("desk check") — verificó que la funcionalidad funciona como se espera en staging
  antes de entregarla a QA
```

El desk check es particularmente importante. Un desarrollador que nunca ha ejecutado su propia funcionalidad en un entorno real antes de pasarla a QA está trasladando riesgos hacia abajo en el flujo. Los desk checks detectan las fallas más obvias en minutos, ahorrando a QA horas.

### 4.3 Fallas Comunes de "No Listo para QA" y Cómo Prevenirlas

**Falla 1: "Funciona en mi máquina"**

La funcionalidad funciona localmente pero el despliegue en staging está roto o no se realizó.

Prevención: La DoD requiere validación en staging, no validación local. La DLpQA exige el despliegue en staging antes de entrar a Validación. Los pipelines de despliegue automatizados eliminan el paso manual.

**Falla 2: Criterios de aceptación faltantes o incompletos**

El validador no sabe qué testear o cómo se ve "pasar."

Prevención: Los criterios de aceptación son requeridos en la etapa de Backlog Grooming (antes del ciclo). Una tarea sin criterios de aceptación completos no puede entrar a la columna Ready, lo que significa que no puede entrar al ciclo en absoluto.

**Falla 3: Dependencias rotas en staging**

La funcionalidad funciona pero el entorno de staging tiene una dependencia rota (API, estado de base de datos, servicio de terceros) que impide un testing significativo.

Prevención: La salud del entorno se monitorea continuamente. Un entorno de staging roto es un bloqueador — obtiene su propia entrada en el Block Register y se escala inmediatamente (tipo de bloqueador: Infraestructura, SLA de resolución de 24 horas).

**Falla 4: Datos de prueba no disponibles**

La funcionalidad requiere datos de prueba específicos (cuentas de usuario, registros de productos, etc.) que no existen en staging.

Prevención: Los requisitos de datos de prueba se identifican en la Smart Planning durante la definición de tests de aceptación. La preparación de datos es una subtarea de la tarea de implementación, no un pensamiento tardío.

**Falla 5: Alcance de test ambiguo**

La tarea se dividió en subtareas y no está claro si QA está validando una subtarea, todas las subtareas o la funcionalidad integrada.

Prevención: Cuando una tarea se divide, el alcance de tests y validación se clarifica en el momento de la división. Cada subtarea tiene sus propios criterios de validación, y hay un paso adicional de validación de integración para la funcionalidad ensamblada.

---

## 5. Puertas de Calidad por Tipo de Tarea

Los diferentes tipos de tareas tienen diferentes perfiles de riesgo. Las puertas de calidad de GOAL reflejan estas diferencias.

### 5.1 Puertas para Funcionalidades

Las funcionalidades son nuevas capacidades agregadas al producto. Llevan la mayor obligación de testing porque introducen nuevas rutas de código, nuevas interacciones de usuario y nuevos puntos de integración.

```
Puertas de calidad para funcionalidades:

□ Tests unitarios cubriendo la nueva lógica de negocio
  (objetivo: cobertura de ramas para toda la lógica no trivial)
□ Tests de integración para nuevos endpoints de API, interacciones con base de datos
  o llamadas a servicios
□ Tests de aceptación coincidentes con cada criterio de aceptación
  (automatizados cuando sea factible)
□ Test E2E para la ruta crítica de la funcionalidad
  (mínimo: camino feliz)
□ Ejecución de tests de regresión: el conjunto de tests existente pasa sin degradación
□ Verificación de rendimiento: la funcionalidad no introduce regresiones de latencia
  (medición de línea base comparada con umbral, ej. tiempo de respuesta p95)
□ Revisión de seguridad si la funcionalidad maneja autenticación,
  autorización o datos de usuario
□ Aprobación del Product Strategist sobre la satisfacción de los criterios de aceptación
```

### 5.2 Puertas para Corrección de Bugs

Las correcciones de bugs reparan el comportamiento existente. El riesgo principal es la regresión: la corrección resuelve el bug pero rompe algo más.

```
Puertas de calidad para corrección de bugs:

□ Test de regresión escrito PRIMERO que reproduce el bug antes de aplicar la corrección
  (Este test debe fallar antes de la corrección y pasar después — probando que funciona)
□ Causa raíz documentada en la tarjeta de tarea
□ Evaluación de impacto: ¿qué otras áreas podría afectar este cambio?
□ El conjunto completo de tests automatizados pasa (sin regresiones introducidas)
□ Validación en staging: el escenario de bug original ya no ocurre
□ Test de humo en área relacionada: verificación puntual manual o automatizada
  de la funcionalidad adyacente
□ Para bugs P1 en producción: confirmación de monitoreo post-corrección
  (24 horas de métricas limpias)
```

El requisito de test de regresión no es negociable. Una corrección de bug sin test de regresión probablemente reaparecerá — ya sea el mismo bug reintroducido en un cambio futuro, o un bug relacionado en código adyacente que no fue comprendido.

### 5.3 Puertas para Refactorización

La refactorización cambia la estructura interna sin cambiar el comportamiento externo. El riesgo es el cambio de comportamiento no intencional — el código refactorizado hace algo sutilmente diferente al original.

```
Puertas de calidad para refactorización:

□ Los tests existentes pasan sin modificación (si los tests existentes necesitan cambiar,
  esto es expansión de alcance — la refactorización cambió el comportamiento, no solo
  la estructura, y necesita diferentes puertas)
□ La cobertura se mantiene o mejora (la refactorización es una oportunidad
  para agregar tests faltantes)
□ Las métricas de rendimiento no cambian (la refactorización no debería
  introducir cambios de latencia)
□ No se introduce nueva deuda técnica (el propósito de la refactorización es reducir deuda)
□ Decisión de arquitectura documentada si la refactorización involucra un cambio
  estructural que afecta el trabajo futuro de otros miembros del equipo
□ Revisión de pares enfocada en: ¿se cambió algún comportamiento?
  ¿Los tests siguen siendo significativos?
```

**Importante:** Si los tests existentes requieren modificación durante una refactorización, detener y reevaluar. O los tests estaban testeando la implementación en lugar del comportamiento (un problema de calidad del test) o la refactorización cambió comportamiento observable (lo que la convierte en un cambio de funcionalidad, no en una refactorización, y necesita puertas diferentes).

### 5.4 Puertas para Cambios de Infraestructura

Los cambios de infraestructura (configuraciones de despliegue, cambios en el pipeline de CI/CD, migraciones de esquema de base de datos, cambios de entorno) tienen un perfil de riesgo único: pueden causar fallas silenciosas que solo aparecen en condiciones de producción.

```
Puertas de calidad para cambios de infraestructura:

□ Cambio testeado en entorno de staging antes del despliegue a producción
□ Plan de rollback documentado y testeado
  (¿Puedes deshacer este cambio en < 30 minutos?)
□ Evaluación de impacto: ¿qué servicios o funcionalidades afecta este cambio?
□ Test de humo en staging después del cambio: las rutas principales de la aplicación
  siguen funcionando
□ Monitoreo y alertas verificados: si este cambio causa una falla, ¿lo sabrás?
□ Ventana de despliegue acordada: los cambios de infraestructura prefieren
  ventanas de bajo tráfico
□ Lista de verificación post-despliegue ejecutada
□ Ingeniero on-call notificado si el cambio afecta la disponibilidad de producción

Para migraciones de esquema de base de datos específicamente:
□ La migración es reversible (o el SQL de rollback está preparado)
□ Migración testeada con datos de escala de producción en staging
□ Impacto de rendimiento evaluado
  (¿bloquea tablas esta migración? ¿cuánto tiempo toma?)
□ El código de la aplicación es retrocompatible con el esquema antiguo y nuevo
  (para habilitar despliegue sin tiempo de inactividad)
```

---

## 6. Gestión de Bugs en GOAL

### 6.1 Clasificación de Bugs

GOAL usa un sistema de clasificación de bugs de tres niveles alineado con el Protocolo de Gestión de Interrupciones de la metodología principal.

**P1 — Bug de Producción**

```
Definición:   Un defecto que está causando daño medible a usuarios en producción en vivo
              o rompiendo una función crítica del sistema ahora mismo.

Características:
  - Los usuarios están siendo activamente afectados (no pueden completar una acción
    principal, ven errores, los datos son incorrectos)
  - Los ingresos o el cumplimiento están en riesgo
  - El problema no puede esperar al siguiente ciclo

Respuesta:
  - Entrada inmediata al carril Expedite (sigue el Protocolo de Gestión de
    Interrupciones, Clase P1)
  - Todo el demás trabajo se pausa mientras se resuelve el P1
  - Tiempo de resolución objetivo: < 4 horas para mitigación, < 24 horas para arreglo completo
  - El análisis de causa raíz es obligatorio — documentado en el Block Register
  - Análisis post-mortem en la próxima retrospectiva

Ejemplos:
  Login roto para todos los usuarios, procesamiento de pagos fallando,
  corrupción de datos ocurriendo, vulnerabilidad de seguridad explotada activamente
```

**P2 — Bug Pre-lanzamiento**

```
Definición:   Un defecto descubierto antes del lanzamiento a producción, en entorno
              de staging o QA, que causaría un problema significativo si se lanzara.

Características:
  - Encontrado durante el testing en la columna de Validación
  - Impide que la tarea cumpla sus criterios de aceptación
  - Severidad suficiente para que lanzar la funcionalidad como está dañaría a los usuarios

Respuesta:
  - La tarea regresa a In Progress con la descripción del bug documentada
  - Se contabiliza en la métrica de tasa de retrabajo
  - La corrección se prioriza dentro del ciclo actual si la capacidad lo permite
  - Si el ciclo está cerca del cierre y la corrección lo extendería, el Product Strategist
    decide: diferir la funcionalidad o extender el ciclo

Ejemplos:
  La funcionalidad no maneja un caso límite importante, validación de formulario incorrecta,
  la API devuelve datos incorrectos para entradas específicas
```

**P3 — Problema Conocido**

```
Definición:   Un defecto documentado pero no lo suficientemente crítico para bloquear
              el lanzamiento o interrumpir el trabajo del ciclo actual.

Características:
  - Bajo impacto en el usuario (caso límite, problema cosmético, flujo no crítico)
  - No afecta los flujos principales del usuario
  - Puede rastrearse y resolverse dentro del proceso normal del backlog

Respuesta:
  - Registrado como elemento del backlog con clasificación P3
  - Incluido en las discusiones de asignación del presupuesto de deuda técnica
  - Resuelto en un ciclo futuro según prioridad y capacidad

Ejemplos:
  Desalineación menor de UI en un navegador específico, mensaje de error que podría
  ser más claro, problema de rendimiento que afecta solo un pequeño porcentaje de usuarios
```

### 6.2 Flujo de Bugs en el Board

Los bugs son tareas. Siguen el mismo proceso del Flow Board que las funcionalidades, con una consideración adicional: su punto de entrada depende de su clasificación.

```
Flujo de bug P1:
  Detectado → Carril Expedite → In Progress (inmediato) → Code Review →
  Validación → Done
  En paralelo: entrada en Block Register, comunicación con stakeholders,
  alerta de monitoreo

Flujo de bug P2:
  Detectado en Validación → Tarjeta de tarea actualizada con detalles del bug →
  La tarea regresa a In Progress → Re-entra en Validación después del arreglo →
  Code Review del arreglo (o revisión inline para cambios pequeños) → Done

Flujo de bug P3:
  Detectado → Nueva tarea de bug creada en Backlog →
  Dimensionada y priorizada durante Backlog Grooming →
  Entra en Ready cuando se prioriza →
  Flujo normal: Ready → In Progress → Code Review → Validación → Done
```

**Requisitos de la tarjeta de tarea para bugs:**

Una tarjeta de tarea de bug debe incluir:
- Pasos para reproducir (exactos, verificables)
- Comportamiento esperado
- Comportamiento real
- Entorno donde se encontró el bug (staging / producción / navegador o dispositivo específico)
- Captura de pantalla o extracto de log si está disponible
- Clasificación (P1 / P2 / P3)
- Fuente de descubrimiento (monitoreo / reporte de usuario / testing QA / code review)

Las tarjetas de bug sin pasos de reproducción no están listas para ejecutarse. Permanecen en Backlog hasta que esta información esté disponible.

### 6.3 Presupuesto de Bugs por Ciclo

Los equipos GOAL deben establecer un presupuesto de bugs — el número máximo de bugs que pueden tomarse en un ciclo desde el backlog sin interrumpir el logro de objetivos.

```
Marco del presupuesto de bugs:

Paso 1: Revisar historial de P1
  ¿Cuántos bugs P1 aparecieron en los últimos 3 ciclos?
  Reservar capacidad del carril Expedite para la probabilidad de ocurrencia de P1.

Paso 2: Asignar resolución del backlog de P3
  Incluir bugs P3 en el presupuesto de deuda técnica (típicamente 10–20%
  de la capacidad del ciclo).
  No dejar que el backlog de P3 crezca sin límite — eventualmente se convierte
  en una señal de riesgo.

Paso 3: Establecer un umbral de entrada
  Si el número de bugs P3 entrando a un ciclo excede un umbral que consumiría
  más de la asignación de deuda técnica, los bugs excedentes se difieren.

  Ejemplo:
    Capacidad del equipo: 10 persona-días efectivos por ciclo
    Asignación de deuda técnica: 20% = 2 persona-días
    Tiempo promedio de corrección de bug P3: 0.5 días
    Presupuesto de bugs para el ciclo: máximo 4 bugs P3

Paso 4: Monitorear y ajustar
  Si el backlog de P3 crece a pesar de la asignación del presupuesto de bugs,
  esto es señal de aumentar la asignación de deuda técnica o mejorar
  la calidad upstream.
```

### 6.4 Bugs de Deuda Técnica vs Bugs de Funcionalidad

No todos los bugs son iguales en origen o ruta de resolución.

Los **bugs de funcionalidad** surgen de implementación incorrecta de un requisito conocido. Indican una brecha en la estrategia de testing, criterios de aceptación poco claros, o un error de implementación. Se resuelven corrigiendo el código específico.

Los **bugs de deuda técnica** surgen de la acumulación de atajos, código desactualizado, tests faltantes y decisiones arquitectónicas que fueron "suficientemente buenas en su momento." Estos bugs son sintomáticos — corregir el síntoma (el bug específico) sin abordar la deuda técnica subyacente significa que el mismo tipo de bug reaparecerá.

Los equipos GOAL deben distinguir entre estos dos tipos:

- Cuando se registra un bug, el desarrollador que lo evalúa debe notar si es un bug de funcionalidad (corregir la implementación) o un bug de deuda técnica (corregir la implementación Y crear una tarea de deuda técnica para abordar la causa raíz)
- Los bugs de deuda técnica deben vincularse a una tarea de deuda técnica en el backlog
- La ratio de bugs de deuda técnica a bugs de funcionalidad es una señal sobre la salud del codebase
- Si los bugs de deuda técnica son consistentemente > 40% del total de bugs, el codebase tiene un problema de calidad estructural que requiere trabajo dedicado de deuda técnica

---

## 7. Estándares de Calidad en Code Review

### 7.1 Cómo se Ve un Buen Code Review en GOAL

El code review no es una formalidad. Es la puerta de calidad principal antes de que el código llegue al entorno de staging. En GOAL, el code review es una de las dos columnas entre In Progress y Done (la otra es Validación). Una tarea puede pasar tiempo significativo aquí — y eso es aceptable cuando las revisiones son sustantivas.

Un buen code review en GOAL aborda estas dimensiones:

**Corrección**
- ¿El código hace lo que requieren los criterios de aceptación de la tarea?
- ¿Se manejan los casos límite?
- ¿Las condiciones de error se manejan con elegancia?
- ¿Hay bugs obvios (null dereference, errores off-by-one, condiciones de carrera)?

**Calidad de los tests**
- ¿Los tests realmente testean el comportamiento, o solo ejercitan rutas de código?
- ¿Los tests son legibles — puede otro desarrollador entender qué comportamiento verifican?
- ¿Los tests cubren los casos límite que maneja la implementación?
- ¿Un cambio futuro que rompa el comportamiento haría fallar estos tests?

**Mantenibilidad**
- ¿El código es comprensible sin comentarios extensos?
- ¿Sigue los patrones y convenciones establecidos del equipo?
- ¿Podrá un desarrollador no familiarizado con este código modificarlo en 6 meses?

**Seguridad y rendimiento** (según aplique)
- ¿El cambio introduce riesgos de seguridad (inyección, escalada de privilegios, exposición de datos)?
- ¿El cambio introduce riesgos de rendimiento (consultas N+1, bucles sin límite, índices faltantes)?

**Deuda técnica**
- ¿El cambio introduce nueva deuda técnica?
- Si es así, ¿hay un elemento correspondiente de deuda técnica en el backlog?

### 7.2 SLAs de Revisión — Cuánto Tiempo Puede Estar un PR Esperando Revisión

Un pull request en Code Review sin ser revisado es tiempo de espera puro. Infla el tiempo de flujo, bloquea al propietario de la tarea para comenzar nuevo trabajo y frecuentemente resulta en conflictos de merge a medida que el codebase cambia a su alrededor.

GOAL establece SLAs de revisión como parte de los estándares de calidad del equipo:

```
Objetivos de SLA de revisión:

PR de tarea pequeña (< 1 día de implementación):
  Tiempo de revisión objetivo: 4 horas desde la presentación
  Máximo: el mismo día hábil

PR de tarea media (2–3 días de implementación):
  Tiempo de revisión objetivo: siguiente día hábil
  Máximo: 48 horas desde la presentación

PR de tarea grande (requiere división — debería ocurrir raramente):
  Tiempo de revisión objetivo: 48 horas
  Máximo: 72 horas desde la presentación

Corrección de bug de emergencia / P1:
  Tiempo de revisión objetivo: 1 hora
  Esto es una obligación compartida del equipo — revisar un arreglo de emergencia
  tiene prioridad sobre todo el trabajo de In Progress no urgente

Si un PR excede su SLA:
  - El Flow Master lo identifica como elemento en envejecimiento durante el Daily Flow Sync
  - El revisor es contactado directamente (esta no es una observación pasiva)
  - Si el revisor está sobrecargado, otro miembro del equipo toma la revisión
  - Las violaciones de SLA de revisión se rastrean y se discuten en las retrospectivas
```

**Sobre la acumulación en la cola de revisión:**

Si la columna de Code Review se acumula consistentemente, es un problema de flujo. Causas comunes:
- Los límites de WIP no se están cumpliendo (demasiado trabajo nuevo comenzando antes de que el trabajo anterior sea revisado)
- El equipo no trata la revisión como trabajo principal (priorizan comenzar sobre terminar)
- Las revisiones toman demasiado tiempo porque los PRs son demasiado grandes (dividir mejor las tareas)

### 7.3 Responsabilidades del Autor y del Revisor

**Responsabilidades del autor:**

- Escribir una descripción clara del PR: ¿qué hace este cambio, por qué y cómo?
- Vincular el PR a la tarjeta de tarea en el Flow Board
- Destacar áreas donde el autor tiene incertidumbre y quiere retroalimentación específica
- Mantener PRs pequeños — un PR que implementa una tarea debería ser revisable en 30–60 minutos
- Responder a los comentarios de revisión prontamente (dentro del mismo día hábil)
- No mergear hasta que todos los comentarios de revisión estén resueltos (no solo reconocidos)

**Responsabilidades del revisor:**

- Revisar dentro del SLA — tratar como obligatorio, no como opcional
- Distinguir comentarios bloqueantes (deben corregirse antes del merge) de sugerencias (no bloqueantes)
- Explicar el "por qué" detrás de la retroalimentación bloqueante — comentarios como "cambia esto" sin justificación crean confusión y ralentizan la resolución
- Aprobar solo cuando genuinamente satisfecho — aprobar por cortesía socava la puerta de calidad
- Si la revisión revela un problema fundamental (enfoque incorrecto, requisitos faltantes), escalar a una discusión sincrónica en lugar de ejecutar un hilo de comentarios asincrónico

### 7.4 División entre Revisión Automatizada y Revisión Humana

La automatización maneja las verificaciones de calidad mecánicas. Los humanos se enfocan en las que requieren juicio.

```
Qué verifican las herramientas automatizadas (pipeline CI, linters, scanners automatizados):
  - Estilo y formato de código (linters)
  - Análisis estático (potenciales null dereferences, código inalcanzable, errores comunes)
  - Paso/fallo de tests
  - Detección de regresión de cobertura
  - Escaneo de vulnerabilidades en dependencias
  - Detección de secretos (asegurar que no se commiteen credenciales)

Estas verificaciones se ejecutan automáticamente en cada PR y deben pasar
antes de que comience la revisión humana. Si las verificaciones automatizadas fallan,
el PR no está listo para revisión humana.

Qué verifican los revisores humanos:
  - Corrección lógica
  - Significado de los tests
  - Decisiones de diseño y arquitectura
  - Claridad y mantenibilidad
  - Implementación de reglas de negocio
  - Implicaciones de seguridad que requieren comprensión del contexto
  - Todas las dimensiones descritas en la Sección 7.1

El objetivo de esta división:
  Los humanos deben dedicar su tiempo de revisión a cosas que requieren
  juicio humano. Verificar que una línea termina sin punto y coma al final
  no es un buen uso de la atención de un desarrollador. Las herramientas
  automatizadas lo hacen más rápido y de forma más consistente.
```

---

## 8. Análisis de Calidad en la Retrospectiva

### 8.1 Qué Métricas de Calidad van a la Retrospectiva

La Retrospectiva Basada en Datos de GOAL ya revisa métricas de flujo. Las métricas de calidad son una capa agregada a esa revisión. Cada retrospectiva debe incluir un breve resumen de métricas de calidad junto a las métricas de flujo.

**Métricas de calidad revisadas en cada retrospectiva:**

```
1. Tasa de escape de bugs (ciclo actual vs ciclo anterior vs tendencia de 3 ciclos)
2. Densidad de defectos (bugs por funcionalidad entregada en este ciclo)
3. Tasa de fallas en cambios (despliegues que causaron fallas en producción)
4. Tasa de retrabajo (tareas que regresaron a In Progress)
5. Incidentes P1 en este ciclo (cantidad, tiempo total de resolución, MTTR)
6. Cumplimiento de SLA de code review (porcentaje de PRs revisados dentro del SLA)
7. Tendencia de cobertura de tests (regresión o mejora desde el último ciclo)
```

**Formato para la sección de calidad de la retrospectiva:**

La sección de calidad no debería tomar más de 10 minutos en una retrospectiva estándar. Si una métrica de calidad muestra un cambio significativo (movimiento > 10% en tasa de escape, un incidente P1 o una regresión de cobertura), amerita una discusión dedicada de causa raíz (ver Sección 8.2).

### 8.2 Análisis de Causa Raíz para Defectos Escapados

Cuando un bug escapa a producción (P1 o P2 de alto impacto), se realiza un análisis de causa raíz (ACR). No es un ejercicio de culpas. Es un análisis del sistema.

**Marco de ACR de GOAL para defectos escapados:**

```
Desencadenador de ACR:
  - Cualquier bug P1 de producción
  - Cualquier bug P2 que habría llegado a producción sin ser detectado
  - Cualquier ciclo donde la tasa de escape de bugs supere el 15%

Preguntas del ACR:

1. ¿Dónde en el proceso fue introducido este bug?
   (Qué tarea, qué ciclo, qué cambio de código)

2. ¿Por qué no fue detectado en cada puerta de calidad?
   - ¿Había un test unitario que debería haberlo detectado? (Test faltante)
   - ¿Había un test de integración que debería haberlo detectado? (Test faltante)
   - ¿Fue revisado y el revisor lo pasó por alto? (Problema de calidad de revisión)
   - ¿Fue validado en staging y el validador lo pasó por alto? (Problema de proceso de validación)
   - ¿Era ambiguo el criterio de aceptación? (Problema de especificación)

3. ¿Es este tipo de bug específico de esta instancia o es una categoría?
   (Error de una vez vs brecha sistémica en la estrategia de testing)

4. ¿Qué cambio estructural prevendría esta categoría de bug?
   (Nuevo tipo de test, criterio adicional de DoD, cambio de proceso, capacitación)

5. ¿Cuál es el elemento de acción, quién es el responsable y cuándo se implementa?

Formato de salida del ACR:
  Resumen de un párrafo + un elemento de acción con responsable y fecha de vencimiento.
  Esto va en el registro de la retrospectiva y se revisa en la próxima retrospectiva.
```

### 8.3 Seguimiento de Tendencias de Calidad a lo Largo de los Ciclos

La calidad no mejora a partir del análisis de un solo ciclo. Las tendencias aparecen en 3–5 ciclos. Los equipos GOAL mantienen un registro simple de tendencias de calidad junto al Índice de Precisión de Ciclo.

```
Formato del Registro de Tendencias de Calidad (rastreado por ciclo):

| Ciclo | Tasa Escape | Densidad Defectos | Tasa Fallas Cambios | Retrabajo | P1 |
|-------|-------------|-------------------|---------------------|-----------|----|
| C-1   | 12%         | 1.2 bugs/func      | 8%                  | 7%        | 1  |
| C-2   | 9%          | 0.9 bugs/func      | 5%                  | 6%        | 0  |
| C-3   | 14%         | 1.5 bugs/func      | 10%                 | 9%        | 2  |
| C-4   | ...         | ...               | ...                 | ...       | ...|

Leyendo la tendencia:
  Una tendencia ascendente en densidad de defectos durante 2+ ciclos =
  la estrategia de testing no está al ritmo de la tasa de entrega de funcionalidades.
  Revisar la asignación de la pirámide de tests.

  Cantidad de P1 consistentemente > 0 = problema arquitectónico o de monitoreo.
  Las causas raíz deberían converger hacia correcciones estructurales,
  no solo correcciones de bugs individuales.

  Tasa de retrabajo en aumento = la calidad de definición de tareas se está degradando.
  Los criterios de aceptación pueden estar volviéndose menos precisos a medida que
  el equipo se mueve más rápido. Revisar la disciplina de Smart Planning.
```

---

## 9. El Rol de QA en los Equipos GOAL

### 9.1 Dónde Encajan los Ingenieros de QA en el Delivery Team

GOAL define el Delivery Team como ingenieros auto-organizados responsables de la ejecución. Los ingenieros de QA son miembros del Delivery Team, no una función downstream separada.

Este es un punto estructural importante. En muchas organizaciones, QA es un departamento separado que recibe trabajo del desarrollo y lo "testea." En GOAL, este modelo crea el anti-patrón de "calidad testeada a posteriori" — QA se convierte en un amortiguador para la calidad del desarrollo, y todo el flujo se desacelera porque una columna (Validación) es un cuello de botella controlado por un equipo separado.

**El modelo GOAL para QA:**

```
Los ingenieros de QA en GOAL:
  - Están integrados en el Delivery Team
  - Participan en Smart Planning, Backlog Grooming y Daily Flow Sync
  - Son dueños de la estrategia de tests de aceptación para cada objetivo
  - Colaboran con los desarrolladores durante la implementación, no solo al final
  - Se enfocan en la automatización de tests, no solo en testing manual
  - Son responsables de la salud del entorno de test
  - Aportan perspectiva de riesgo de calidad a las discusiones de factibilidad de objetivos

Lo que los ingenieros de QA NO hacen en GOAL:
  - Actuar como la única puerta de calidad (la calidad es responsabilidad de todos)
  - Recibir trabajo de los desarrolladores como una entrega (colaboran durante todo el proceso)
  - Ser dueños de la DoD solos (todo el equipo es dueño de ella)
  - Mantener un sistema separado de rastreo de bugs fuera del Flow Board
```

### 9.2 Integración del Testing Shift-Left

"Shift left" significa mover las actividades de testing más temprano en el proceso de desarrollo — hacia la izquierda de la línea de tiempo. La estructura de GOAL habilita naturalmente el testing shift-left porque QA está involucrado desde la planificación, no desde la validación.

**Cómo se ve el shift-left en un ciclo GOAL:**

```
Smart Planning (punto más a la izquierda):
  QA revisa los criterios de aceptación en busca de testeabilidad
  QA identifica requisitos del entorno de test
  QA redacta casos de test de aceptación a partir de los criterios de aceptación
  QA señala criterios ambiguos antes de que comience la implementación

In Progress (fase de desarrollo):
  QA está disponible para responder preguntas sobre el comportamiento esperado
  QA revisa el enfoque de test para nuevas funcionalidades
  QA puede hacer pair con desarrolladores en la configuración de tests de integración o E2E
  QA monitorea continuamente la salud de los tests en CI

Code Review:
  QA es uno de los revisores (en equipos donde esto es práctico)
  QA se enfoca en: ¿son significativos los tests?
  ¿Cubren los criterios de aceptación?

Validación:
  QA ejecuta los tests de aceptación preparados durante la Smart Planning
  QA realiza testing exploratorio alrededor de la funcionalidad
  QA confirma que se satisface la DoD
```

El efecto práctico: los bugs encontrados durante la Smart Planning no cuestan nada (el criterio de aceptación se clarifica). Los bugs encontrados durante el desarrollo cuestan la atención de un desarrollador. Los bugs encontrados en Validación cuestan retrabajo. Los bugs encontrados en producción cuestan retrabajo más impacto en el usuario más respuesta al incidente. El shift-left es puramente una optimización económica.

### 9.3 Participación de QA en Smart Planning y Backlog Grooming

**Smart Planning:**

QA debe asistir a todas las sesiones de Smart Planning. Sus contribuciones específicas:
- Señalar criterios de aceptación que no son testeables como están escritos ("La funcionalidad debe ser rápida" no es testeable; "La funcionalidad debe responder en &lt; 2 segundos en p95" sí lo es)
- Estimar el esfuerzo de testing requerido para cada objetivo (este insumo alimenta la planificación de capacidad)
- Identificar dependencias de entorno de test o de datos de prueba que podrían bloquear la columna de Validación
- Proponer si escenarios específicos requieren validación manual vs pueden automatizarse

**Backlog Grooming:**

QA participa en el Backlog Grooming para asegurar que los elementos en estado Ready tengan criterios de aceptación testeables. Un elemento del backlog con criterios que QA no puede traducir en casos de test concretos no está verdaderamente listo. Lista de verificación de QA para grooming:

```
Para cada elemento del backlog durante el grooming, QA confirma:
  □ ¿Puedo escribir al menos un caso de test concreto a partir de cada criterio de aceptación?
  □ ¿Sé cuál es el comportamiento esperado para casos de error comunes?
  □ ¿Hay datos de prueba disponibles (o puedo crearlos) para testear este elemento?
  □ ¿Hay un entorno de test donde pueda validar este elemento?
  □ ¿Entiendo el límite de alcance — qué está en esta tarea vs qué no?
```

---

## 10. Anti-Patrones de Calidad

Los anti-patrones son patrones que parecen razonables pero consistentemente producen malos resultados. Los anti-patrones de calidad en equipos GOAL vale la pena nombrarlos explícitamente porque es fácil caer en ellos, especialmente bajo presión de entrega.

### 10.1 "Lo Testeamos Después"

**Cómo se ve:**

"Vamos a lanzar esto ahora y agregar tests en el próximo ciclo." "Estamos apurados — saltemos los tests unitarios para este." "Agregaremos eso al backlog de deuda técnica y lo testeamos correctamente después."

**Por qué ocurre:**

Presión de entrega de corto plazo. Parece que saltarse los tests ahorra tiempo ahora. La DoD puede no estar siendo aplicada de forma consistente.

**Por qué falla:**

"Después" casi nunca ocurre. El siguiente ciclo tiene sus propios objetivos. El backlog de deuda técnica crece. Los tests nunca se escriben. El código sin tests se construye encima. Seis meses después, nadie sabe cómo funciona este código o cómo cambiarlo de forma segura. Cada bug en ese código ahora toma tres veces más tiempo en corregirse porque no hay arnés de tests.

**Respuesta de GOAL:**

La DoD se aplica sin excepciones. Una tarea sin tests no se mueve a Done. El Flow Master es responsable de detectar violaciones de la DoD en el Daily Flow Sync. Si saltarse los tests es consistentemente tentador, el problema es la planificación de capacidad — el equipo está comprometiendo más objetivos de los que puede lograr con calidad. Eso es una falla de Smart Planning, no una falla de testing.

### 10.2 Teatro de Tests

**Cómo se ve:**

Los tests existen. Pasan. Los reportes de cobertura se ven bien. Pero los tests en realidad no detectan bugs. Testean que el código se ejecuta, no que hace lo correcto. Nombres de tests como `test_funcion_ejecuta_sin_error` o tests que testean los internos de la implementación en lugar de su comportamiento observable.

**Por qué ocurre:**

Equipos bajo presión de porcentaje de cobertura escriben tests para satisfacer la métrica, no para verificar el comportamiento. Los desarrolladores a quienes se les dijo "escribe más tests" pero no por qué ni cómo escriben tests superficiales. La cobertura de tests se convierte en un objetivo en sí mismo en lugar de un medio para la calidad.

**Por qué falla:**

El teatro de tests es lo peor de los dos mundos. Proporciona falsa confianza (los tests pasan, así que creemos que estamos cubiertos), consume tiempo de mantenimiento (los tests que testean implementación se rompen cuando la implementación se refactoriza, incluso cuando el comportamiento no cambia), y aun así deja escapar bugs.

**Respuesta de GOAL:**

Las métricas de calidad se enfocan en la tasa de escape de bugs y la densidad de defectos, no solo en el porcentaje de cobertura. Durante el code review, los revisores evalúan si los tests son significativos — "¿Este test verifica comportamiento o solo ejercita código?" Cubrir el "qué" (comportamiento), no el "cómo" (implementación). La revisión de tests es una habilidad — desarrollarla a través de revisión en pares y discusión en retrospectiva de ejemplos de calidad de tests.

### 10.3 Testing Manual Exclusivo como Cuello de Botella

**Cómo se ve:**

La columna de Validación siempre está acumulada. QA es el paso más lento en el flujo. El equipo solo puede lanzar cuando QA ha terminado de testear manualmente cada funcionalidad. Cualquier cambio, incluso uno pequeño, requiere un ciclo completo de regresión. La tasa de entrega cae cuando QA no está disponible.

**Por qué ocurre:**

La estrategia de testing se basa principalmente en testing manual. Los tests automatizados no son de confianza (posiblemente porque son teatro de tests). El equipo no ha invertido en automatización de tests. El headcount de QA no ha escalado con la tasa de entrega de funcionalidades.

**Por qué falla:**

El testing manual es lineal — toma aproximadamente el mismo tiempo independientemente de qué tan rápido se mueva el lado del desarrollo. A medida que la velocidad de un equipo aumenta, el testing solo manual se convierte en un cuello de botella cada vez más severo. También hace imposible la entrega continua (un principio de GOAL) — no puedes desplegar continuamente si cada despliegue requiere horas de validación manual.

**Respuesta de GOAL:**

Los tests automatizados son obligatorios (DoD). La pirámide de tests determina qué tests automatizados existen en cada capa. El testing manual en la columna de Validación es para testing exploratorio y validación final de aceptación de brechas de cobertura de tests automatizados — no como sustituto completo de regresión. Si la columna de Validación es consistentemente el tiempo de espera más largo en el flujo (visible en métricas de eficiencia de flujo), este es el cuello de botella a abordar. Invertir en automatización de tests como prioridad de deuda técnica.

### 10.4 La Columna de Validación como Basurero

**Cómo se ve:**

Las tareas se mueven a Validación antes de que estén listas. QA las encuentra rotas, a medio construir o sin casos de test. QA pasa tiempo tratando de entender qué testear porque los criterios de aceptación no están claros. Las tareas rebotan entre Validación e In Progress repetidamente. El tiempo de QA se desperdicia en problemas ambientales que el desarrollador debería haber detectado antes de la entrega.

**Por qué ocurre:**

Los equipos tratan Validación como "el problema de QA." Los desarrolladores entregan trabajo demasiado temprano para limpiar su WIP. No hay Definición de Listo para QA. La DoD no se aplica en la etapa de Code Review.

**Por qué falla:**

Crea exactamente la dinámica adversarial desarrollo-QA que la filosofía de calidad de GOAL está diseñada para prevenir. El tiempo de QA se desperdicia, la tasa de retrabajo aumenta, el tiempo de ciclo se infla y los ingenieros de QA se desmoralizan al pasar su tiempo en trabajo que no estaba listo para ser testeado.

**Respuesta de GOAL:**

La Definición de Listo para QA (Sección 4) se aplica con la misma firmeza que la DoD. Una tarea que no cumple la DLpQA no entra en la columna de Validación — permanece en Code Review o regresa a In Progress. El Flow Master monitorea la salud de la columna de Validación durante el Daily Flow Sync. La alta tasa de retrabajo desde Validación se señala como anti-patrón de calidad en la retrospectiva, con análisis de causa raíz.

---

## Resumen: Calidad en GOAL de un Vistazo

| Dimensión | Enfoque GOAL |
|-----------|-------------|
| Propiedad de la calidad | Todo el equipo — no solo QA |
| Cuándo comienza el trabajo de calidad | Smart Planning — no después de la implementación |
| Momento de escritura de tests | Durante la implementación — no después de Done |
| Posición de QA | Integrado en el Delivery Team — no una puerta separada |
| Medición de calidad | Tasa de escape de bugs, densidad de defectos, MTTD/MTTR, tasa de fallas en cambios, tasa de retrabajo |
| Estrategia de testing | Basada en pirámide: principalmente unitarios, algunos de integración, pocos E2E |
| Clasificación de bugs | P1 (producción) / P2 (pre-lanzamiento) / P3 (problema conocido) |
| Code review | SLAs con límite de tiempo + responsabilidades definidas de autor/revisor |
| Insumo para retrospectiva | Registro de tendencias de calidad revisado cada ciclo |
| Anti-patrones a evitar | Testear después, teatro de tests, cuello de botella manual, basurero de Validación |

---

*Este documento es parte del conjunto de documentación de la Metodología Ágil GOAL. Referirse a GOAL_Methodology_v0.2.md para las definiciones del marco central. Referirse a GOAL_Planificacion_Capacidad_ES.md para cómo el trabajo de calidad encaja en los cálculos de capacidad.*

---
id: anti-patterns
title: Anti-Patrones de GOAL
sidebar_position: 2
description: Catálogo completo de anti-patrones de equipo individual y multi-equipo de GOAL — síntomas, causas raíz y enfoques de corrección.
---

# Anti-Patrones de GOAL

Los anti-patrones son formas reconocibles en que la metodología se aplica incorrectamente. Parecen adaptaciones legítimas pero consistentemente producen resultados negativos. Conocerlos da a los equipos un vocabulario compartido para diagnosticar y corregir su propio comportamiento.

---

## Anti-Patrones de Equipo Individual

### 1. Scrum-Washing de GOAL

**Síntoma:** El equipo usa Ciclos de Objetivos pero los llena con una lista de tareas fija desde el inicio. No se añaden ni eliminan tareas durante el ciclo. Los objetivos son esencialmente compromisos de sprint con un nombre diferente.

**Por qué ocurre:** Los equipos que adoptan GOAL desde Scrum revierten a patrones familiares bajo presión.

**Corrección:** En la próxima Smart Planning Session, definir explícitamente solo objetivos y una lista inicial de no más de 3 tareas. Añadir más tareas a medida que avanza el ciclo. Revisar la Regla de Flexibilidad de Alcance con el equipo.

**Detección:** La lista de tareas al final del ciclo coincide casi exactamente con la lista de la Smart Planning.

---

### 2. Ignorar los Límites de WIP bajo Presión

**Síntoma:** El límite de WIP es 4 pero el tablero muestra consistentemente 6–8 tareas activas. El Flow Master deja de aplicarlo porque "todo es urgente."

**Por qué ocurre:** La presión a corto plazo anula la salud del sistema a largo plazo.

**Corrección:** Aplicar el límite estrictamente durante un ciclo completo. Presentar los datos de eficiencia del flujo y tiempo de ciclo del período de violación vs el período de cumplimiento. Los datos generalmente hacen el argumento.

**Detección:** Focus Ratio consistentemente por encima de 1,0 en el Flow Metrics Dashboard.

---

### 3. Retrospectivas sin Datos

**Síntoma:** Las retrospectivas se convierten en sesiones de quejas o elogios. Las mejoras identificadas son vagas ("comunicar mejor", "estar más organizados"). Nada cambia de forma medible entre ciclos.

**Por qué ocurre:** Los equipos omiten la preparación del Flow Metrics Dashboard antes de la retrospectiva.

**Corrección:** Hacer una regla que ningún tema de retrospectiva sea válido a menos que pueda señalarse en las métricas. Preparar el dashboard antes de la retrospectiva, no durante.

**Detección:** La retrospectiva produce elementos de acción no conectados a ninguna métrica medible.

---

### 4. Inflación del Carril Expedite

**Síntoma:** Siempre hay 2–3 tareas en el carril Expedite. Todo es "urgente." El flujo regular es perpetuamente interrumpido.

**Por qué ocurre:** La clasificación de interrupciones no se está aplicando. Las solicitudes P3 se tratan como P1/P2.

**Corrección:** Revisar el log de interrupciones del Block Register. Presentar datos sobre cuántas interrupciones entraron en el ciclo y su clasificación. Requerir documentación del impacto empresarial antes de cualquier clasificación P2.

**Detección:** Más de una tarjeta en el carril Expedite simultáneamente.

---

### 5. Negociación de la Definition of Done

**Síntoma:** Las tareas se mueven a Done antes de cumplir la DoD completa. "Añadiremos los tests en el próximo ciclo." "La revisión de código se hizo verbalmente."

**Por qué ocurre:** Presión de plazos al final del ciclo. La DoD comienza como un piso y deriva hacia un techo.

**Corrección:** El Flow Master debe negarse a contar tareas hacia la completación del objetivo si no cumplen la DoD. Rastrear las violaciones de DoD en el Block Register como categoría separada.

**Detección:** Tareas en la columna Done con ítems de DoD sin marcar, o tareas marcadas Done sin registro de revisión de código.

---

### 6. Trabajo Invisible

**Síntoma:** Los miembros del equipo realizan trabajo que no aparece en el Flow Board — solicitudes de soporte, depuración, reuniones no programadas. El tablero muestra 4 tareas activas pero el equipo maneja realmente 8 ítems de trabajo.

**Por qué ocurre:** La gente siente que las tareas pequeñas son demasiado triviales para ponerlas en el tablero.

**Corrección:** Todo el trabajo va en el tablero. No existe un umbral mínimo de tamaño para una tarjeta de tarea. El trabajo invisible distorsiona el WIP, el tiempo de ciclo y las métricas de tasa de entrega.

**Detección:** Delivery Rate significativamente inferior a la esperada dados los niveles de WIP.

---

### 7. Deriva de Objetivos

**Síntoma:** Los objetivos primarios al final de un ciclo no son los mismos que los definidos en la planificación, pero nadie notó que el cambio estaba ocurriendo.

**Por qué ocurre:** Las pequeñas expansiones de alcance se acumulan sin que nadie note un cambio de dirección.

**Corrección:** El Goal Cycle Plan es un documento, no un recuerdo. Referirse a él explícitamente en cada Daily Flow Sync. El Flow Master desafía cualquier tarea que parezca servir a un objetivo fuera del plan.

**Detección:** Los objetivos primarios al final del ciclo difieren de lo documentado en el Goal Cycle Plan sin un registro formal de cambio.

---

## Anti-Patrones Multi-Equipo

### 8. Ocultamiento de Dependencias

**Síntoma:** Los equipos son conscientes de las dependencias entre equipos pero no las registran en el Dependency Register porque "esperan resolverlas informalmente."

**Corrección:** El Program Flow Master debe convertir activamente las conversaciones informales de dependencias en entradas del Dependency Register. Las dependencias que se convierten en bloqueantes sin ninguna entrada previa son la señal principal.

---

### 9. Teatro del Program Sync

**Síntoma:** El Program Sync se ejecuta durante 60–90 minutos. Los equipos reportan estado pero no se toman decisiones. Los mismos problemas de dependencias se discuten en cada sync sin resolución.

**Corrección:** El Program Flow Master debe preparar un informe pre-sync del Dependency Register mostrando cambios de estado desde el último sync. El sync se enfoca solo en ítems que requieren decisiones o acciones entre equipos.

---

### 10. Equipo de Plataforma como Cola de Tickets

**Síntoma:** El equipo de plataforma recibe solicitudes de múltiples equipos de producto sin un proceso de ingesta estructurado. Su WIP es consistentemente excedido porque cada solicitud es "urgente."

**Corrección:** Los equipos de plataforma deben usar un Focus Factor modificado de 0,5–0,6. Todas las solicitudes entrantes deben clasificarse usando el protocolo de interrupciones antes de entrar en el tablero.

---

### 11. Normalización de la Tasa de Dependencias

**Síntoma:** La Tasa de Dependencias del programa ha estado por encima del 20% durante múltiples ciclos, pero no se ha activado ninguna revisión arquitectónica.

**Corrección:** Por encima del 20% durante dos o más ciclos consecutivos debe activar una revisión arquitectónica obligatoria con líderes técnicos de todos los equipos afectados.

---

### 12. Objetivos de Programa Desalineados

**Síntoma:** Los equipos operan exitosamente hacia sus propios objetivos de equipo pero los Objetivos de Programa no se están alcanzando.

**Corrección:** El Program Strategist debe trazar explícitamente los objetivos primarios de cada equipo a al menos un Objetivo de Programa antes de que comience el ciclo.

---

### 13. Dependencias Ocultas

**Síntoma:** Los equipos descubren a mitad del ciclo que dependen del trabajo realizado por otro equipo que no estaba capturado en el Dependency Register.

**Corrección:** Antes de cada ciclo, requerir que todos los equipos realicen una revisión de dependencias de 30 minutos donde cada equipo lista todo el trabajo en su ciclo que depende del output de otro equipo.

---

## Referencia Rápida de Anti-Patrones

| Anti-Patrón | Síntoma Principal | Señal de Violación |
|---|---|---|
| Scrum-Washing | Listas de tareas fijas en ciclos | Lista de tareas al final = lista al inicio |
| Ignorar WIP | Focus Ratio consistentemente > 1,0 | Tablero siempre sobre el límite |
| Retros sin Datos | Elementos de acción vagos | Sin métricas en el output de la retrospectiva |
| Inflación Expedite | Múltiples tareas Expedite | > 1 tarjeta en el carril Expedite |
| Negociación DoD | Tareas Done con ítems sin marcar | Columna Done con lagunas de DoD |
| Trabajo Invisible | Las métricas no coinciden con la experiencia | El equipo se siente más ocupado de lo que muestra el tablero |
| Deriva de Objetivos | Objetivos cambiados sin registros | Objetivos al final del ciclo difieren del plan |

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

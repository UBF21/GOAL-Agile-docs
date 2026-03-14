---
id: quick-start
title: Inicio Rápido
sidebar_position: 3
description: Cómo implementar GOAL en tu equipo en 9 pasos — guía de implementación de Fase 1.
---

# Inicio Rápido — Implementando GOAL

Esta guía cubre la Fase 1 de la implementación de GOAL: los pasos esenciales para lanzar GOAL con tu equipo. La Fase 1 está diseñada para completarse en las primeras 1–3 semanas.

---

## Fase 1 — Foundation (Semanas 1–3)

El objetivo de la Fase 1 es establecer la infraestructura básica de flujo de trabajo sin abrumar al equipo con nuevas prácticas.

### Lo que implementar

- Crear el Flow Board con columnas estándar
- Definir y comunicar el límite de WIP
- Iniciar el Daily Flow Sync (reemplazar el standup existente)
- Definir la Definition of Done de Línea Base
- Definir los criterios de sizing S/M/L para el contexto del equipo
- Ejecutar la primera Smart Planning Session

### Lo que NO implementar todavía

- Flow Metrics Dashboard (recopilar datos, no analizar aún)
- Protocolo formal de Gestión de Interrupciones (discutir informalmente por ahora)
- Retrospectiva Basada en Datos (ejecutar una híbrida: algunas opiniones, algunos datos)

**Criterio de éxito:** El equipo ha completado un Ciclo de Objetivos completo con un Flow Board, límites de WIP y una DoD.

---

## Los 9 Pasos de la Fase 1

### Paso 1 — Definir el tamaño del equipo y el Focus Factor

Antes de calcular el límite de WIP, determina:
- El tamaño actual del equipo (incluye solo miembros activos)
- El Focus Factor apropiado (0,6 para equipos nuevos o con interrupciones frecuentes; 0,7 estándar; 0,8 para equipos estables y experimentados)

Fórmula: **Límite de WIP = Tamaño del Equipo × Focus Factor**

---

### Paso 2 — Configurar el Flow Board

Crea un tablero con estas columnas en orden de izquierda a derecha:

1. **Backlog** — Items listos para el ciclo
2. **Ready** — Listos para comenzar
3. **In Progress** — Trabajo activo
4. **Code Review** — En revisión
5. **Validation** — En staging/QA
6. **Done** — Completado y cumpliendo la DoD

Añade dos carriles especiales:
- **Blocked** — Para tareas que no pueden avanzar
- **Expedite** — Para trabajo urgente aprobado (máximo 1 tarea)

Y un carril adicional:
- **Technical Debt** — Para trabajo de reducción de deuda

---

### Paso 3 — Definir la Definition of Done de Línea Base

Antes de comenzar el primer ciclo, el equipo debe acordar su DoD. La DoD de Nivel 1 mínima obligatoria incluye:

- [ ] Código fusionado a la rama principal
- [ ] Todos los tests automatizados pasan
- [ ] Al menos una revisión de código por pares aprobada
- [ ] Validado en staging/QA (no solo localmente)
- [ ] Sin nueva deuda técnica sin una entrada correspondiente en el backlog
- [ ] Documentación relevante actualizada

---

### Paso 4 — Definir criterios S/M/L para tu equipo

Adapta el sizing a tu contexto:

| Tamaño | Duración de Entrega | Regla |
|--------|---------------------|-------|
| S (Small) | 1 día | Lista para ejecutar tal cual |
| M (Medium) | 2–3 días | Puede comenzar con los criterios de aceptación definidos |
| L (Large) | Más de 3 días | **Debe dividirse antes de entrar en In Progress** |

---

### Paso 5 — Nombrar el Flow Master y el Product Strategist

GOAL requiere que estos roles estén claramente asignados antes de comenzar:

**Flow Master:** Responsable de hacer cumplir los límites de WIP, ejecutar el Daily Flow Sync, gestionar bloqueantes y facilitar retrospectivas.

**Product Strategist:** Responsable de definir objetivos, mantener el backlog y medir el valor entregado.

---

### Paso 6 — Ejecutar la primera Smart Planning Session

La Smart Planning Session inicia el primer Ciclo de Objetivos. Duración: 30–60 minutos.

Agenda:
1. Revisar el estado del backlog (¿hay suficientes items listos?)
2. Definir 1–3 objetivos primarios (resultados que deben alcanzarse)
3. Definir objetivos secundarios (valiosos pero no bloqueantes)
4. Establecer el límite de WIP para este ciclo
5. Confirmar la asignación de deuda técnica (15% del estándar)
6. Estimar la duración del ciclo (1–3 semanas)

---

### Paso 7 — Ejecutar el primer Daily Flow Sync

El Daily Flow Sync es el reemplazo del standup diario. Reglas:

- Duración exacta: 10–12 minutos. No más.
- Dirigido por el Flow Master, revisando el tablero de derecha a izquierda
- No reemplazable por un mensaje asíncrono o chat

Las tres preguntas:
1. ¿Qué avanzó desde ayer? (transiciones de columna, no actividad)
2. ¿Qué está bloqueado o en riesgo de bloquearse?
3. ¿Qué está ralentizando el flujo?

---

### Paso 8 — Registrar bloqueantes inmediatamente

Cuando una tarea no puede avanzar:
1. Mover la tarea a la columna Blocked
2. Crear una entrada en el Block Register dentro de la hora
3. Asignar un responsable de resolución
4. El Flow Master monitorea diariamente

Un bloqueante retenido privadamente es una violación del proceso.

---

### Paso 9 — Ejecutar la primera Goal Review y Retrospectiva

Al final del primer ciclo, ejecuta:

**Goal Review (30–45 min):**
- Revisar cada objetivo primario: ¿Completado? ¿Cumple la DoD?
- Revisar objetivos secundarios
- Registrar la duración real vs estimada en el Cycle Accuracy Index

**Retrospectiva (45–60 min):**
- Revisar las métricas de flujo disponibles
- Identificar 1–3 mejoras con propietarios y métricas de éxito
- Planear el próximo ciclo

---

## Lista de Verificación de Fase 1

- [ ] Flow Board creado con todas las columnas y carriles
- [ ] Límite de WIP calculado y publicado (Tamaño del Equipo × Focus Factor)
- [ ] Definition of Done de Nivel 1 acordada y publicada
- [ ] Criterios de sizing S/M/L definidos para el contexto del equipo
- [ ] Flow Master y Product Strategist nombrados
- [ ] Primera Smart Planning Session ejecutada
- [ ] Goal Cycle Plan creado con objetivos primarios/secundarios
- [ ] Daily Flow Sync iniciado (reemplazando el standup)
- [ ] Block Register configurado
- [ ] Primer ciclo completado, Goal Review ejecutada
- [ ] Primera retrospectiva ejecutada con al menos 1 mejora identificada

---

## Progresión de Fases

| Fase | Duración | Enfoque |
|------|----------|---------|
| Fase 1 — Foundation | Semanas 1–3 | Flow Board, WIP, DoD, primer ciclo |
| Fase 2 — Métricas y Objetivos | Semanas 4–8 | Dashboard de métricas, eliminación de story points, retrospectivas basadas en datos |
| Fase 3 — Protocolos | Semanas 9–14 | Protocolo de interrupción, escalación de bloqueantes, framework de valor |
| Fase 4 — Optimización | Semanas 15+ | Predicción de flujo, métricas DORA, análisis avanzado |

---

## Errores Comunes de la Semana 1

**Error:** Intentar implementar todo GOAL a la vez.
**Corrección:** Implementa solo la Fase 1. Los protocolos adicionales se agregan en las Fases 2–3.

**Error:** Tratar el Ciclo de Objetivos como un sprint con lista de tareas fija.
**Corrección:** Define objetivos (resultados), no listas de tareas. Las tareas emergen durante el ciclo.

**Error:** No hacer cumplir los límites de WIP "solo por esta vez".
**Corrección:** Hacer cumplir el límite estrictamente desde el inicio. El primer ciclo establece el patrón.

**Error:** Usar el Daily Flow Sync para resolución de problemas técnicos.
**Corrección:** El sync identifica problemas. La resolución ocurre en conversaciones separadas.

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

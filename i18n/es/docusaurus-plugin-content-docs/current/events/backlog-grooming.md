---
id: backlog-grooming
title: Backlog Grooming Session
sidebar_position: 3
description: La Backlog Grooming Session de GOAL — agenda, estándar de salud del backlog, formato de criterios de aceptación y función del Backlog Curator.
---

# Backlog Grooming Session

La Backlog Grooming Session es un evento recurrente de GOAL — celebrado semanalmente, independiente del timing del ciclo — dedicado a mantener la salud del backlog. Su propósito es garantizar que la Smart Planning Session nunca sea bloqueada por ítems del backlog no listos.

---

## Descripción General del Evento

| Elemento | Detalle |
|---------|---------|
| Duración | 30–45 minutos |
| Facilitador | Product Strategist |
| Participantes obligatorios | Product Strategist, Flow Master |
| Participantes opcionales | 1–2 miembros rotativos del Delivery Team (para input técnico) |
| Frecuencia | Semanal, independiente del timing del ciclo |

---

## Agenda (4 Pasos)

### Paso 1 — Revisar nuevos ítems (10 min)

Revisar los ítems añadidos al backlog desde el último grooming:
- ¿Están claros? ¿Están dimensionados?
- ¿Necesitan criterios de aceptación?
- ¿Hay alguno que debería ser archivado de inmediato?

### Paso 2 — Revisar ítems próximos (15 min)

Para los ítems que entrarán en el próximo ciclo o en el siguiente:
- Confirmar criterios de aceptación completos
- Confirmar sizing (S/M/L)
- Identificar dependencias
- Dividir tareas Large en tareas S/M

### Paso 3 — Archivar ítems obsoletos (5 min)

Eliminar o archivar ítems que ya no son relevantes. Un backlog limpio es más fácil de priorizar.

### Paso 4 — Confirmar salud del backlog (5 min)

Verificar el estándar de salud: ¿Hay al menos dos Ciclos de Objetivos de ítems listos para ejecutar?

---

## Estándar de Salud del Backlog

Un backlog es saludable cuando contiene:
- Al menos dos Ciclos de Objetivos de ítems listos para ejecutar
- Todos los ítems listos tienen criterios de aceptación
- Todos los ítems listos tienen una estimación de tamaño (S/M/L)
- Ningún ítem listo tiene dependencias no resueltas que bloqueen su inicio

---

## Criterios de Aceptación: Formato Dado/Cuando/Entonces

GOAL recomienda el formato Dado/Cuando/Entonces (Given/When/Then) para los criterios de aceptación:

**Dado** [contexto inicial/condición previa]
**Cuando** [acción o evento]
**Entonces** [resultado esperado]

**Ejemplos:**

```
Ítem: Formulario de login con validación de errores

Dado que un usuario está en la página de login
Cuando introduce una dirección de email inválida y hace clic en Enviar
Entonces ve un mensaje de error "Por favor introduce un email válido" bajo el campo

Dado que un usuario introduce credenciales incorrectas
Cuando hace clic en Enviar
Entonces ve "Email o contraseña incorrectos" y el formulario no se limpia

Dado que un usuario introduce credenciales correctas
Cuando hace clic en Enviar
Entonces es redirigido al dashboard en menos de 2 segundos
```

---

## Lo que el Backlog NO es

- Una lista de deseos permanente de todas las ideas jamás planteadas
- Un repositorio de decisiones que nadie tomará nunca
- Un lugar para "parcar" trabajo que es demasiado vago para ser planificado

El backlog es una lista viva mantenida de trabajo priorizado. Los ítems que no van a ser ejecutados dentro de los próximos 3–4 ciclos deberían ser archivados, no acumulados.

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

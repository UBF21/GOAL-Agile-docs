---
id: technical-debt
title: Deuda Técnica
sidebar_position: 9
description: La gestión de deuda técnica en GOAL — trabajo de primera clase con asignación de capacidad, visibilidad y reglas de priorización.
---

# Deuda Técnica como Trabajo de Primera Clase

La deuda técnica — el coste acumulado de atajos pasados, dependencias desactualizadas y decisiones subóptimas — es un lastre real y medible en la velocidad de entrega. GOAL trata la reducción de deuda técnica como un tipo de trabajo de primera clase, no como una preocupación secundaria que se aborda solo cuando se convierte en una crisis.

---

## Asignación de Capacidad para Deuda Técnica

```
Asignación recomendada por ciclo:

  Mínimo:  10% de la capacidad del equipo
  Estándar: 15%
  Máximo:  20%

  Ejemplo para un ciclo de 2 semanas con un equipo de 5:
    Capacidad total: ~50 developer-days
    Asignación de deuda técnica al 15%: ~7,5 developer-days
    Aproximadamente 2 tareas Medium dedicadas a reducción de deuda por ciclo
```

La asignación está protegida durante el ciclo — no se puede consumir para el trabajo de características bajo presión de entrega.

---

## Requisitos de Visibilidad

Todo el trabajo de deuda técnica es:
- Rastreado en el carril dedicado de Deuda Técnica en el Flow Board
- Añadido al backlog con descripciones explícitas del problema y la mejora propuesta
- Dimensionado usando S/M/L como cualquier otra tarea
- Sujeto a la Definition of Done completa

---

## Cuándo Superar la Asignación Estándar

El equipo puede proponer superar la asignación estándar de deuda cuando:
- Un elemento de deuda específico está bloqueando directamente la entrega de un objetivo de negocio
- Las métricas de flujo muestran que un módulo específico está causando tasas de bloqueo desproporcionadas
- Un cambio arquitectónico es necesario para apoyar los próximos elementos del roadmap

Las decisiones para superar la asignación se toman en la Smart Planning Session con el acuerdo del Product Strategist.

---

## Conexión con el Block Register y la DoD

Cuando se completa una tarea que introduce nueva deuda técnica:
- La DoD requiere que una nueva entrada del backlog exista para esa deuda **antes de que la tarea pueda moverse a Done**
- Esto convierte la deuda en visible e inevitablemente planificada, en lugar de invisible y olvidada
- El Block Register registra cuando la deuda técnica es la causa raíz de un bloqueante

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

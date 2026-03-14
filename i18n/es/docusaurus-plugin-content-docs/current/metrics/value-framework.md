---
id: value-framework
title: Framework de Valor de 3 Capas
sidebar_position: 2
description: El Framework de Valor de 3 Capas de GOAL — Valor de Negocio, Valor de Usuario y Valor Técnico, con aplicación en Smart Planning y Goal Review.
---

# Framework de Valor de 3 Capas

El Framework de Valor de 3 Capas es el modelo de GOAL para definir y medir el valor entregado de forma concreta. Resuelve el problema de definición que acecha al principio "entregar valor" en los frameworks ágiles: si el valor no está definido, no puede medirse, mejorarse ni comunicarse a los stakeholders.

---

## Las Tres Capas

### Capa 1 — Valor de Negocio

Trabajo que afecta directamente a los KPIs empresariales.

Indicadores:
- [ ] Impacto en revenue (nuevo revenue, retención, expansión)
- [ ] Impacto en churn (reducción de cancelaciones de clientes)
- [ ] Reducción de costes operativos
- [ ] Cumplimiento regulatorio o mitigación de riesgo legal
- [ ] Time-to-market (acelerar el lanzamiento de un producto o función clave)

---

### Capa 2 — Valor de Usuario

Trabajo que mejora la experiencia del usuario.

Indicadores:
- [ ] Reducción de la fricción (hacer que tareas comunes sean más rápidas o fáciles)
- [ ] Nueva capacidad para el usuario (algo que los usuarios no podían hacer antes)
- [ ] Mejora del rendimiento (tiempos de carga, capacidad de respuesta del sistema)
- [ ] Corrección de un defecto de experiencia de usuario conocido
- [ ] Mejora de accesibilidad

---

### Capa 3 — Valor Técnico

Trabajo que mejora la capacidad de entrega futura.

Indicadores:
- [ ] Cobertura de tests (reducir la probabilidad de regresiones)
- [ ] Reducción de deuda técnica (hacer que el trabajo futuro sea más rápido)
- [ ] Mejora de la observabilidad (hacer que los problemas sean más rápidos de diagnosticar)
- [ ] Reducción de la probabilidad de incidentes
- [ ] Reducción del tiempo de incorporación de desarrolladores

---

## Cómo Aplicar el Framework

### En la Smart Planning Session

El Product Strategist etiqueta cada objetivo propuesto con las capas de valor que entrega:

```
Objetivo: "Migrar el servicio de autenticación a la nueva pila de identidad"

Capa 1 (Valor de Negocio):
  ✓ Eliminación del riesgo de cumplimiento — la pila antigua no cumple con GDPR

Capa 3 (Valor Técnico):
  ✓ Reducción del riesgo de incidentes — la pila antigua tiene 3 CVEs abiertos
  ✓ Reducción de la deuda técnica — elimina ~2,000 líneas de código heredado
```

Si un objetivo no puede etiquetarse con ninguna capa, es una señal para cuestionar si debería priorizarse.

### En la Goal Review

El Product Strategist presenta evidencia del valor entregado:

```
Objetivo: "Lanzar características del plan premium"

Entrega de valor:
  Capa 1: 15 clientes han actualizado al premium en 48h post-lanzamiento
           → Impacto de revenue proyectado: $X/mes
  Capa 2: La funcionalidad de exportación solicitada por 43 usuarios en el período de feedback
           → Feedback positivo de usuarios en 3 canales
```

---

## Priorización del Backlog usando el Framework de Valor

| Regla | Descripción |
|-------|-------------|
| La Capa 1 tiene prioridad por defecto | El trabajo que afecta directamente a los KPIs generalmente va primero |
| La Capa 3 tiene urgencia oculta | La deuda técnica y la reducción de riesgos se vuelven más costosas con el tiempo; priorizar proactivamente |
| La Capa 2 sin Capa 1 necesita justificación | Las mejoras de UX sin impacto de negocio medible deben estar justificadas |
| Sin etiqueta = cuestionar el ítem | Los ítems que no pueden etiquetarse con ninguna capa merecen escrutinio antes de priorizarlos |

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

---
id: continuous-delivery
title: Entrega Continua
sidebar_position: 8
description: El modelo de entrega continua de GOAL — las cuatro reglas, integración trunk-based y su conexión con las métricas de flujo.
---

# Entrega Continua

GOAL aplica un modelo de entrega continua a través de cuatro reglas que mantienen pequeño el tamaño de los lotes y frecuente la integración.

---

## Las Cuatro Reglas de Entrega Continua

### Regla 1 — Sin Fusiones Grandes

Los pull requests deben ser revisables en menos de 30 minutos. Un PR que toma más de 30 minutos en revisarse es una violación del principio de entrega continua y crea acumulación en la cola de Code Review.

### Regla 2 — Sin Ramas de Larga Duración

Las ramas de características no deberían existir por más de 3 días. Si una característica requiere más de 3 días para completarse, se debe dividir en commits diarios que se integran con seguridad a main, usando feature flags para ocultar la funcionalidad incompleta de los usuarios.

### Regla 3 — Integración Frecuente

Las tareas completadas se integran y ponen a disposición de los usuarios (o se despliegan a staging) tan pronto como cumplen la Definition of Done, sin esperar un día de release.

### Regla 4 — Desarrollo Trunk-Based (Preferido)

Los desarrolladores integran a una única rama principal (main/trunk) al menos una vez por día. Los feature flags se usan para ocultar la funcionalidad incompleta de los usuarios.

---

## Conexión con las Métricas de Flujo

| Práctica de CD | Métrica de flujo afectada | Impacto |
|----------------|--------------------------|---------|
| PRs pequeños | Flow Efficiency | Reduce el tiempo de espera en Code Review |
| Ramas de corta duración | Cycle Time | Previene el "desastre del día de fusión" |
| Integración frecuente | Block Rate | Reduce los bloqueantes relacionados con integración |
| Desarrollo trunk-based | Delivery Rate | Mejora la estabilidad del throughput |

---

## Feature Flags

Los feature flags (también llamados feature toggles) permiten a los equipos fusionar funcionalidad incompleta a la rama principal mientras la mantienen oculta para los usuarios finales. GOAL recomienda feature flags como el mecanismo para cumplir con la regla de ramas de corta duración.

Los feature flags tienen un costo: añaden complejidad al codebase y deben eliminarse eventualmente ("deuda de flags"). La Definition of Done debe incluir la verificación del estado habilitado y deshabilitado del feature flag para las tareas relevantes.

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

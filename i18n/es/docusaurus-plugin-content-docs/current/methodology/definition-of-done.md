---
id: definition-of-done
title: Definition of Done
sidebar_position: 7
description: La Definition of Done de dos niveles de GOAL — DoD de Línea Base, DoD Extendida y gestión del estándar de calidad.
---

# Definition of Done (DoD)

La Definition of Done es un checklist definido por el equipo que cada tarea debe satisfacer completamente antes de poder ser movida a la columna Done. Sin una DoD compartida, "hecho" significa algo diferente para cada miembro del equipo, lo que lleva a calidad inconsistente, acumulación de deuda técnica y decepción de los stakeholders.

---

## Estructura de Dos Niveles

### Nivel 1 — DoD de Línea Base (Obligatoria para todos los equipos GOAL)

- [ ] Código fusionado a la rama principal
- [ ] Todos los tests automatizados pasan
- [ ] Al menos una revisión de código por pares aprobada
- [ ] Validado en entorno staging/QA (no solo localmente)
- [ ] Sin nueva deuda técnica sin una entrada correspondiente en el backlog
- [ ] Documentación relevante actualizada

### Nivel 2 — DoD Extendida (Definida por el equipo)

Criterios adicionales específicos del contexto del equipo. Revisados y actualizados en cada retrospectiva. Pueden incluir:

- [ ] Verificación de accesibilidad completada (si aplica)
- [ ] Benchmarks de rendimiento verificados
- [ ] Revisión de seguridad completada (si aplica)
- [ ] Verificación de feature flag (estados habilitado y deshabilitado)
- [ ] Cobertura de tests por encima del umbral definido
- [ ] Revisión de compatibilidad entre navegadores (si aplica)
- [ ] Criterios de aceptación verificados en entorno de staging

---

## Plantilla de Checklist Completo

```markdown
## Checklist Definition of Done

### Nivel 1 — Línea Base (obligatorio para todas las tareas)
- [ ] Código fusionado a la rama principal / rama de release
- [ ] Pipeline de CI completado sin errores
- [ ] Todos los tests existentes pasan
- [ ] Nuevos tests escritos para el código nuevo
- [ ] Revisión de código completada y aprobada por al menos un par
- [ ] Cambios validados en entorno staging (no solo localmente)
- [ ] Sin nueva deuda técnica sin una entrada correspondiente en el backlog
- [ ] README / documentación actualizada si se han cambiado APIs o procesos

### Nivel 2 — Extendida (definida por el equipo; actualizar en retrospectiva)
- [ ] [Criterio específico del equipo 1]
- [ ] [Criterio específico del equipo 2]
- [ ] [Criterio específico del equipo 3]
```

---

## Reglas de Gestión de la DoD

1. **La DoD es universal** — se aplica a cada tarea, sin excepciones bajo presión de plazos
2. **La DoD es responsabilidad del equipo** — el Delivery Team la mantiene, el Flow Master monitorea el cumplimiento
3. **La DoD evoluciona** — revisada en cada retrospectiva; los nuevos criterios se añaden basándose en los problemas de calidad que emergen
4. **La DoD no es negociable bajo presión de plazos** — ese es exactamente el momento en que importa más
5. **La violación de la DoD es rastreada** — el Flow Master registra las violaciones para el análisis de retrospectiva

---

## DoD vs Criterios de Aceptación

| | Definition of Done | Criterios de Aceptación |
|--|-------------------|------------------------|
| **Alcance** | Se aplica a cada tarea universalmente | Único para cada item del backlog |
| **Propietario** | El equipo define y mantiene | El Product Strategist escribe con input del equipo |
| **Contenido** | Estándares de calidad del proceso (tests, revisión, staging) | Comportamiento funcional del resultado (Dado/Cuando/Entonces) |
| **Cuándo cambia** | En la retrospectiva del ciclo | Cuando el backlog item es refinado |
| **Propósito** | Garantiza la calidad consistente de cada entrega | Define el éxito para esta entrega específica |

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

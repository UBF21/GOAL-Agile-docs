---
id: interrupt-management
title: Protocolo de Gestión de Interrupciones
sidebar_position: 1
description: El Protocolo de Gestión de Interrupciones de GOAL — clasificaciones P1/P2/P3, árbol de decisión, reglas del carril Expedite y negociación con stakeholders.
---

# Protocolo de Gestión de Interrupciones

El Protocolo de Gestión de Interrupciones es el sistema formal de GOAL para manejar todas las solicitudes entrantes que no están ya en el backlog. Clasifica el trabajo entrante en tres niveles de prioridad y enruta cada clase a un camino de manejo definido.

---

## Las Tres Clasificaciones

### P1 — Incidente en Producción

```
Criterio:    El sistema en vivo está fallando activamente para usuarios reales en este momento
Ejemplos:    Tiempo de inactividad del servicio, pérdida de datos en progreso,
             autenticación rota para todos los usuarios, procesamiento de pagos fallando
Acción:      Entrada inmediata al carril Expedite
Aprobación:  Verbal del Flow Master (documentación formal dentro de 2 horas)
Límite:      Máximo 24 horas antes de escalar al incident commander
```

### P2 — Solicitud Urgente de Negocio

```
Criterio:    Sin fallo en producción pero impacto de negocio concreto y documentado
             si no se aborda en 1–5 días
Ejemplos:    Demo crítica para un cliente clave que necesita una corrección,
             plazo legal para una función de cumplimiento, integración con partner
             bloqueada en un output específico
Acción:      Evaluado conjuntamente por Product Strategist y Flow Master
Aprobación:  Joint Flow Master + Product Strategist, justificación documentada
Test:        "¿Es el coste de esperar hasta el próximo ciclo mayor que el coste
             de interrumpir el ciclo actual?"
```

### P3 — Solicitud Normal Disfrazada

```
Criterio:    Solicitud enmarcada como urgente pero sin impacto de negocio documentado
Señales:     Lenguaje de urgencia del stakeholder sin evidencia,
             "solo tomará 5 minutos", solicitudes repetidas de items depriorizados
Acción:      Placement en backlog con prioridad normal
Comunicación: El stakeholder recibe respuesta formal con línea de tiempo del próximo ciclo
```

---

## Árbol de Decisión de Interrupciones

```
¿El sistema en vivo está fallando para usuarios reales AHORA MISMO?
├── SÍ → P1: Entrada inmediata al carril Expedite (aprobación verbal del FM)
└── NO
    ↓
¿Hay impacto de negocio documentado y concreto dentro de 1–5 días si no se aborda?
├── SÍ → P2: Evaluado por PS + FM; puede entrar en Expedite si el coste de esperar > coste de interrumpir
└── NO → P3: Añadir al backlog con prioridad normal; comunicar línea de tiempo al stakeholder
```

---

## Reglas del Carril Expedite

1. Máximo **una** tarea activa en el carril Expedite en cualquier momento — sin excepciones
2. La aprobación conjunta (Flow Master + Product Strategist) es obligatoria para cada entrada al Expedite
3. La justificación empresarial debe estar documentada antes de que comience el trabajo
4. Los límites de WIP normales siguen aplicando al resto del tablero
5. El miembro del equipo asignado pausa su tarea actual — no la abandona
6. Una tarea Expedite que tome más de 3 días sin resolución desencadena una reclasificación y evaluación del impacto en el ciclo

---

## El Modelo de Negociación con Stakeholders

Cuando se recibe una solicitud urgente, la respuesta estructurada es:

1. **Acuse de recibo:** "Hemos recibido tu solicitud y la estamos evaluando ahora mismo."
2. **Clasificación:** "Basándonos en nuestros criterios, esto es [P1/P2/P3]."
3. **Plan de acción:** "Esto se manejará [de esta manera específica]."
4. **Línea de tiempo:** "Puedes esperar [esta respuesta] para [esta fecha]."

---

## Cuándo Romper un Ciclo

Tres situaciones justifican invocar el Protocolo de Ciclo de Emergencia:
1. El negocio ha cambiado tan fundamentalmente que los objetivos actuales ya no son relevantes
2. Los incidentes P1 acumulados han consumido más del 50% de la capacidad del ciclo
3. Un bloqueante externo resuelve todos los objetivos del ciclo (la dependencia es oficialmente cancelada)

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

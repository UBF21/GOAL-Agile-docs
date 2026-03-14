---
id: dependency-management
title: Gestión de Dependencias
sidebar_position: 4
description: Gestión de dependencias entre equipos en GOAL — el Dependency Register, estados, línea de tiempo de escalación y la métrica de Tasa de Dependencias.
---

# Gestión de Dependencias

Las dependencias entre equipos son uno de los elementos de mayor riesgo en el modelo de escalado de GOAL porque propagan retrasos a través de los límites del equipo. La gestión proactiva de dependencias — identificarlas antes de que se conviertan en bloqueantes — es la competencia central del Program Flow Master.

---

## El Dependency Register

El Dependency Register es el artefacto central de multi-equipo de GOAL. Sirve como única fuente de verdad para todas las dependencias entre equipos.

### Campos requeridos por entrada

```
Entrada del Dependency Register:
  ID:                     [ID único auto-generado, por ejemplo, DEP-042]
  Fecha identificada:     [fecha]
  Equipo solicitante:     [equipo que necesita el entregable]
  Equipo proveedor:       [equipo que debe producir el entregable]
  Descripción:            [qué necesita entregarse]
  Tareas vinculadas:      [IDs de tareas en los tableros de ambos equipos]
  Entrega esperada:       [fecha en que el equipo proveedor se compromete a entregar]
  Impacto si se retrasa:  [consecuencia para el equipo solicitante — ¿qué objetivo se ve afectado?]
  Propietario de escalación: [quién es responsable si esto se convierte en bloqueante]
  Estado:                 [Identificada / Activa / En Riesgo / Bloqueada / Resuelta]
  Fecha de resolución:    [fecha real de resolución, si aplica]
  Tiempo bloqueado:       [días totales que esta dependencia estuvo en estado Bloqueada]
```

---

## Definiciones de Estado

| Estado | Significado |
|--------|-------------|
| **Identificada** | Dependencia registrada, equipo proveedor la ha reconocido |
| **Activa** | Equipo proveedor está trabajando en ella, fecha de entrega esperada confirmada |
| **En Riesgo** | Equipo proveedor señaló que la fecha de entrega esperada está en duda |
| **Bloqueada** | La dependencia no puede cumplirse — se requiere escalación inmediata |
| **Resuelta** | El equipo proveedor entregó; el equipo solicitante confirmó la recepción |

---

## Línea de Tiempo de Identificación

Las dependencias deben identificarse y registrarse antes de que comience el ciclo cuando sea posible. La identificación tardía (mid-ciclo) es un anti-patrón que indica una planificación inter-equipo insuficiente.

```
Al planificar el ciclo:
  → El Program Flow Master facilita una revisión de dependencias con todos los equipos
  → Cada equipo lista el trabajo que depende de otro equipo
  → Las dependencias se ingresan en el Dependency Register con estado Identificada
  → El Cross-Team Cycle Plan se actualiza con el camino crítico

Durante el ciclo:
  → El Program Flow Master revisa el registro diariamente
  → Las dependencias activas se verifican en el Program Sync
  → Las dependencias que se ponen en riesgo son escaladas inmediatamente

Estado En Riesgo:
  → El equipo proveedor notifica al Program Flow Master
  → El Program Flow Master evalúa el impacto en el equipo solicitante
  → Si el objetivo solicitante está afectado, el Program Strategist es notificado

Día 1 Bloqueada:
  → Escalación formal al Program Strategist
  → El Program Flow Master identifica caminos alternativos
  → El equipo proveedor asigna a su miembro más disponible

Día 2+ Bloqueada:
  → Revisión de objetivos de programa — ¿puede alcanzarse el objetivo del programa sin esta dependencia?
  → Considerar si se necesita el Protocolo de Ciclo de Emergencia
```

---

## Métrica de Tasa de Dependencias

```
Tasa de Dependencias = (Nuevas dependencias abiertas en el ciclo ÷
                        Total de tareas completadas en todos los equipos) × 100

Objetivo:       < 10% para un programa saludable
Zona de alerta: > 20% — el programa está demasiado acoplado; se recomienda revisión arquitectónica
```

Una Tasa de Dependencias por encima del 20% durante dos o más ciclos consecutivos desencadena una revisión arquitectónica obligatoria. Una Tasa de Dependencias en aumento señala que la arquitectura del producto está creando más overhead de coordinación con el tiempo.

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

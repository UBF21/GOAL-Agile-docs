---
id: backlog-management
title: Gestión del Backlog
sidebar_position: 3
description: La gestión del backlog de GOAL — ciclo de vida de los ítems, criterios de listo para ejecutar, formato de criterios de aceptación y anti-patrones del backlog.
---

# Gestión del Backlog

El backlog es una lista viva y priorizada de trabajo que no es todavía parte de un Ciclo de Objetivos activo. GOAL distingue entre un backlog saludable (priorizado, todos los ítems listos con criterios de aceptación y estimaciones de tamaño, al menos dos ciclos de trabajo listo) y un backlog no saludable.

---

## Ciclo de Vida de los Ítems del Backlog

```
Discovery → Refinement → Ready → Cycle → Done → Archive
```

| Estado | Descripción |
|--------|-------------|
| **Discovery** | Existe pero no está suficientemente definido para dimensionarse |
| **Refinement** | En análisis; criterios de aceptación siendo escritos |
| **Ready** | Cumple la definición de listo para ejecutar |
| **Cycle** | Parte de un Ciclo de Objetivos activo |
| **Done** | Completado y cumple la DoD |
| **Archive** | Eliminado como ya no relevante |

---

## Definición de Listo para Ejecutar

Un ítem del backlog está listo para ejecutar cuando tiene:
1. **Descripción clara** del resultado esperado
2. **Criterios de Aceptación** en formato Dado/Cuando/Entonces completo
3. **Estimación de tamaño** (S, M o L)
4. **Sin dependencias no resueltas** que bloqueen su inicio

---

## Formato Dado/Cuando/Entonces — Ejemplos

**Ejemplo 1 — Sistema de autenticación:**
```
Dado que un usuario registrado está en la página de login
Cuando introduce sus credenciales correctas y hace clic en "Iniciar sesión"
Entonces es redirigido a su dashboard y ve sus proyectos activos

Dado que un usuario introduce una contraseña incorrecta
Cuando hace clic en "Iniciar sesión"
Entonces ve "Credenciales inválidas" y puede intentarlo de nuevo
```

**Ejemplo 2 — Función de exportación:**
```
Dado que un usuario tiene al menos un informe en su cuenta
Cuando hace clic en "Exportar a CSV"
Entonces se descarga un archivo CSV con todos los campos de datos del informe

Dado que un usuario no tiene informes
Cuando hace clic en "Exportar a CSV"
Entonces ve "No hay datos para exportar" y el botón está deshabilitado
```

---

## Estándar de Salud del Backlog

Un backlog es saludable cuando:
- Contiene al menos **dos Ciclos de Objetivos** de ítems listos para ejecutar
- Todos los ítems listos tienen criterios de aceptación
- Todos los ítems listos tienen estimación de tamaño S/M/L
- Ningún ítem listo tiene dependencias no resueltas

Si el backlog cae por debajo de este estándar, el Product Strategist prioriza el grooming sobre otro trabajo hasta que se restaure la salud.

---

## Anti-Patrones del Backlog

**Backlog como lista de deseos infinita:** Ítems que no se ejecutarán en los próximos 4+ ciclos deben ser archivados, no acumulados. Los backlogs de 200+ ítems son inútiles para la planificación.

**Ítems sin criterios de aceptación:** Un ítem sin criterios de aceptación no puede dimensionarse de forma confiable ni validarse. Permanece en Refinement hasta que se completen.

**Priorización sin marco:** GOAL usa el Framework de Valor de 3 Capas para priorización: Valor de Negocio (Capa 1) > Valor de Usuario (Capa 2) > Valor Técnico (Capa 3). La priorización basada puramente en "lo que el stakeholder grita más fuerte" es un anti-patrón.

**Ítems Large en Ready sin dividir:** Los ítems Large deben dividirse en ítems S/M antes de entrar en Ready. Un ítem Large en Ready que llega a la Smart Planning Session retrasa la planificación.

---

*Metodología GOAL Agile v0.2 | Autor: Felipe Montenegro*

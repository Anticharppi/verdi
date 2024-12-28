# Contexto de Desarrollo

## Stack Tecnológico
- Next.js
- TypeScript
- TailwindCSS
- Prisma (ORM)

## Estructura del Proyecto
- Proyecto base de Next.js con configuración TypeScript
- Sistema de módulos ES
- Configuración de PostCSS presente
- ESLint configurado
- Sistema de control de versiones Git implementado

## Directorios Principales
- `/src`: Código fuente principal
  - `/components`: Componentes de React
    - `/forms`: Formularios de la aplicación
      - `/company`: Componentes modulares para el formulario de empresas
  - `/lib`: Utilidades y tipos
    - `/mocks`: Datos mock para desarrollo
    - `/types`: Definiciones de tipos TypeScript
- `/prisma`: Configuración y modelos de Prisma
- `/public`: Archivos estáticos
- `/.next`: Directorio de construcción de Next.js

## Funcionalidades Implementadas
- Formulario de empresas con:
  - Información básica
  - Información de contacto
  - Gestión de ciudades de operación
  - Selección de departamentos y ciudades

## Archivos de Configuración
- `next.config.ts`: Configuración de Next.js
- `tailwind.config.ts`: Configuración de TailwindCSS
- `tsconfig.json`: Configuración de TypeScript
- `postcss.config.mjs`: Configuración de PostCSS
- `eslint.config.mjs`: Configuración de ESLint

## Variables de Entorno
- Archivo `.env` presente en la raíz del proyecto

## Estructura de Datos
### Relaciones Empresas-Ciudades
- Una empresa puede operar en múltiples estados
- Por cada estado, puede operar en múltiples ciudades
- Relación jerárquica: Estado -> Ciudad
- Tablas involucradas:
  - Company (empresas)
  - CompanyState (relación empresa-estado)
  - CompanyCity (relación empresa-ciudad)
  - State (estados/departamentos)
  - City (ciudades)
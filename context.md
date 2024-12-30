# Project Context

## Project Overview
- Next.js 15.1.3
- Turbopack
- TypeScript
- shadcn/ui components

## Design System
- Colors:
  - Primary: Emerald (500, 600)
  - Text: Gray (900, 600, 500)
  - Borders: Gray (300, 200)
  - Hover: Gray (50)
- Spacing:
  - Table cell padding: px-6 py-4
  - Section spacing: mb-6, mb-8
  - Input padding: px-4 py-2
- Typography:
  - Headers: text-2xl font-bold
  - Table headers: text-xs uppercase tracking-wider
  - Table content: text-sm
- Components styling:
  - Rounded corners: rounded-lg
  - Shadows: shadow
  - Focus rings: ring-2 ring-emerald-500

## Components
- DataTable: Reusable table component with sorting, filtering, and pagination
  - Location: src/components/ui/data-table.tsx
  - Dependencies: @tanstack/react-table, lucide-react
  - Styling: Matches dashboard/companies design system

## Architecture
- Following Next.js 13+ app directory structure
- Client components marked with "use client"
- UI components organized in src/components/ui/

## Stack Details
- Next.js
- TypeScript
- shadcn/ui
- TanStack Table
- Lucide Icons

## Notes
- DataTable component is set up to handle generic data types (TData, TValue)
- Includes built-in search functionality with customizable placeholder
- Implements pagination, sorting, and filtering features
- All text is in Spanish for consistency
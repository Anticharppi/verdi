# Project Context

## Project Overview
- Next.js 15
- React 19
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

## UI Guidelines
- All text in Spanish
- Custom error messages for forms
- Consistent spacing between sections
- Loading states for data fetching
- Mobile-first responsive design
- Accessible focus states
- Form validation with visual feedback
- Toast notifications for actions

## Components
- DataTable: Reusable table component with sorting, filtering, and pagination
  - Location: src/components/ui/data-table.tsx
  - Dependencies: @tanstack/react-table, lucide-react
  - Styling: Matches dashboard/companies design system

## Architecture
- Next.js app directory structure
- Client components marked with "use client"
- UI components in src/components/ui/
- Page layouts in src/app/(dashboard)/layout.tsx

## Stack Details
- Next.js 15
- React 19
- TypeScript 5
- shadcn/ui
- TanStack Table v8
- Lucide Icons
- Tailwind CSS
- Prisma ORM

## Notes
- DataTable handles generic data types (TData, TValue)
- Search functionality with customizable placeholder
- Pagination, sorting, and filtering features
# Project Context

## Project Overview
- Name: Verdi
- Version: 0.1.0
- Type: Next.js Application
- Status: In Development

## Tech Stack
- Frontend Framework: Next.js 15.1.3
- React Version: 19.0.0
- TypeScript: ^5
- Styling: TailwindCSS 3.4.1
- Authentication: Kinde Auth (@kinde-oss/kinde-auth-nextjs)
- Database ORM: Prisma 6.1.0
- UI Libraries:
  - Framer Motion (animations)
  - Lucide React (icons)
  - clsx & tailwind-merge (utility classes)

## Project Structure
```
verdi/
├── src/
│   ├── app/         # Next.js application routes
│   ├── components/  # Reusable React components
│   └── lib/         # Utility functions and shared code
├── prisma/          # Database schema and migrations
├── public/          # Static assets
└── config files     # Various configuration files
```

## Build Tools
- Package Manager: npm
- Development Server: Next.js with Turbopack
- Linting: ESLint
- Type Checking: TypeScript

## Development Guidelines
1. TypeScript is mandatory for all new code
2. Use TailwindCSS for styling
3. Follow Next.js 13+ App Router conventions
4. Implement proper error handling and loading states
5. Maintain type safety across the application

## Authentication
- Using Kinde Auth for authentication
- Implementation should follow Kinde Auth Next.js best practices
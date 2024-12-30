import { Button } from "./button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

interface Action {
  label: string
  href: string
}

interface PageHeaderProps {
  title: string
  description?: string
  actions?: Action[]
  backButton?: boolean
}

export function PageHeader({
  title,
  description,
  actions,
  backButton,
}: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="space-y-2">
        {backButton && (
          <Button
            variant="link"
            className="pl-0 text-muted-foreground"
            asChild
          >
            <Link href=".." className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Volver
            </Link>
          </Button>
        )}
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground">{description}</p>
        )}
      </div>
      {actions && actions.length > 0 && (
        <div className="flex items-center gap-2">
          {actions.map((action) => (
            <Button key={action.label} asChild>
              <Link href={action.href}>{action.label}</Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
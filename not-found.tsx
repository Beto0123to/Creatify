import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="text-center space-y-6 max-w-md">
        <div>
          <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
          <h2 className="text-2xl font-bold mb-2">Página Não Encontrada</h2>
          <p className="text-muted-foreground">A página que você está procurando não existe ou foi removida.</p>
        </div>
        <div className="space-y-3">
          <Link href="/">
            <Button className="w-full">Voltar para Home</Button>
          </Link>
          <Link href="/catalogo">
            <Button variant="outline" className="w-full bg-transparent">
              Ver Catálogo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="text-center space-y-6 max-w-md">
        <div>
          <h1 className="text-3xl font-bold mb-2">Algo deu errado!</h1>
          <p className="text-muted-foreground">Ocorreu um erro inesperado. Por favor, tente novamente.</p>
        </div>
        <div className="space-y-3">
          <Button onClick={() => reset()} className="w-full">
            Tentar Novamente
          </Button>
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <a href="/">Voltar para Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { registerSeller } from "@/lib/marketplace"
import { Mail, Store, User, Lock } from "lucide-react"

export default function SellerRegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    storeUrl: "",
    password: "",
    confirmPassword: "",
    bio: "",
  })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (!formData.name || !formData.email || !formData.storeUrl) {
        setError("Preencha todos os campos obrigatórios")
        setLoading(false)
        return
      }

      if (formData.password !== formData.confirmPassword) {
        setError("As senhas não coincidem")
        setLoading(false)
        return
      }

      if (formData.password.length < 6) {
        setError("A senha deve ter pelo menos 6 caracteres")
        setLoading(false)
        return
      }

      const newSeller = registerSeller({
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name,
        email: formData.email,
        storeUrl: formData.storeUrl,
        commission: 30, // 30% default commission
        totalEarnings: 0,
        totalSales: 0,
        affiliateLink: Math.random().toString(36).substr(2, 9),
        isActive: true,
        createdAt: new Date(),
        bio: formData.bio,
      })

      // Save to localStorage
      const sellers = JSON.parse(localStorage.getItem("marketplace_sellers") || "[]")
      sellers.push(newSeller)
      localStorage.setItem("marketplace_sellers", JSON.stringify(sellers))

      // Redirect to seller dashboard
      router.push("/vendedor-dashboard")
    } catch (err) {
      setError("Erro ao registrar vendedor")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-12 px-4">
      <div className="max-w-md mx-auto bg-card border border-border rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2 text-center">Se Registre como Vendedor</h1>
        <p className="text-muted-foreground text-center mb-6">
          Venda seus e-books em nossa plataforma e ganhe comissões
        </p>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nome Completo *</label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Seu nome"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">URL da Loja *</label>
            <div className="relative">
              <Store className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                name="storeUrl"
                value={formData.storeUrl}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="minhaloja.com.br"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bio (Opcional)</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Conte sobre você e seus e-books"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Senha *</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Mínimo 6 caracteres"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Confirme a Senha *</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Confirme sua senha"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-2 rounded-md font-semibold hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "Registrando..." : "Criar Conta de Vendedor"}
          </button>
        </form>

        <p className="text-center text-muted-foreground text-sm mt-4">
          Já tem conta?{" "}
          <a href="/login" className="text-primary hover:underline">
            Faça login
          </a>
        </p>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm font-semibold mb-2">Benefícios:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>✓ Comissão de até 30%</li>
            <li>✓ Link de afiliado único</li>
            <li>✓ Dashboard com estatísticas</li>
            <li>✓ Ferramentas de marketing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

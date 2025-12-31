"use client"

import type React from "react"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Upload, Send, CheckCircle2, Globe, Server, FileCode } from "lucide-react"
import FadeContent from "@/components/reactbits/fade-content"
import SplitText from "@/components/reactbits/split-text"
import { createClient } from "@/lib/supabase/client"

const plans = [
  {
    id: "basico",
    name: "Básico",
    price: "99",
    specs: "250MB RAM • 0.5 Core • 1 Thread",
    description: "Para empezar con tu primer proyecto",
  },
  {
    id: "intermedio",
    name: "Intermedio",
    price: "199",
    specs: "1GB RAM • 1 Core • 2 Threads",
    description: "Ideal para proyectos en crecimiento",
  },
  {
    id: "avanzado",
    name: "Avanzado",
    price: "349",
    specs: "2GB RAM • 2 Cores • 4 Threads",
    description: "Para proyectos que necesitan potencia",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Personalizado",
    specs: "Recursos a tu medida",
    description: "Solución completamente personalizada",
  },
]

const projectTypes = [
  { value: "static", label: "Sitio estático (HTML/CSS/JS)" },
  { value: "react", label: "React / Next.js" },
  { value: "vue", label: "Vue / Nuxt" },
  { value: "node", label: "Node.js / Express" },
  { value: "python", label: "Python / Django / Flask" },
  { value: "php", label: "PHP / Laravel" },
  { value: "wordpress", label: "WordPress" },
  { value: "otro", label: "Otro" },
]

export function OrderForm() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get("plan")

  const [selectedPlan, setSelectedPlan] = useState(planParam || "intermedio")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectName: "",
    projectType: "",
    projectUrl: "",
    description: "",
    hasDatabase: "no",
    domainPreference: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const supabase = createClient()

      const { error: insertError } = await supabase.from("hosting_requests").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        project_name: formData.projectName,
        project_type: formData.projectType,
        project_url: formData.projectUrl || null,
        description: formData.description || null,
        has_database: formData.hasDatabase === "si",
        domain_preference: formData.domainPreference || null,
        plan: selectedPlan,
      })

      if (insertError) throw insertError

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar la solicitud")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <FadeContent blur duration={600}>
          <Card className="max-w-lg mx-auto text-center">
            <CardContent className="pt-12 pb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Solicitud enviada</h2>
              <p className="text-muted-foreground mb-6">
                Hemos recibido tu solicitud. Te contactaremos en menos de 24 horas para coordinar el despliegue de tu
                proyecto.
              </p>
              <Button asChild>
                <a href="/">Volver al inicio</a>
              </Button>
            </CardContent>
          </Card>
        </FadeContent>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            <SplitText
              text="Solicitar Hosting"
              className="text-3xl md:text-4xl font-bold"
              delay={50}
              duration={0.4}
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Completa el formulario con los datos de tu proyecto. Nos encargamos de ponerlo online.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Plan Selection */}
          <FadeContent blur duration={500} delay={100}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-primary" />
                  Selecciona tu plan
                </CardTitle>
                <CardDescription>Elige el plan que mejor se adapte a tu proyecto</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedPlan}
                  onValueChange={setSelectedPlan}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {plans.map((plan) => (
                    <div key={plan.id}>
                      <RadioGroupItem value={plan.id} id={plan.id} className="peer sr-only" />
                      <Label
                        htmlFor={plan.id}
                        className="flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{plan.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {plan.price === "Personalizado" ? "Contactar" : `RD$ ${plan.price}/sem`}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground mb-1">{plan.specs}</span>
                        <span className="text-xs text-muted-foreground">{plan.description}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          </FadeContent>

          {/* Personal Info */}
          <FadeContent blur duration={500} delay={200}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-primary" />
                  Tus datos
                </CardTitle>
                <CardDescription>Información de contacto para coordinar el despliegue</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 829-000-0000"
                  />
                </div>
              </CardContent>
            </Card>
          </FadeContent>

          {/* Project Info */}
          <FadeContent blur duration={500} delay={300}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-primary" />
                  Tu proyecto
                </CardTitle>
                <CardDescription>Cuéntanos sobre el proyecto que quieres desplegar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectName">Nombre del proyecto *</Label>
                    <Input
                      id="projectName"
                      required
                      value={formData.projectName}
                      onChange={(e) => handleInputChange("projectName", e.target.value)}
                      placeholder="Mi App Web"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Tipo de proyecto *</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => handleInputChange("projectType", value)}
                      required
                    >
                      <SelectTrigger id="projectType">
                        <SelectValue placeholder="Selecciona el tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectUrl">Link al código (GitHub, ZIP, Drive, etc.)</Label>
                  <Input
                    id="projectUrl"
                    value={formData.projectUrl}
                    onChange={(e) => handleInputChange("projectUrl", e.target.value)}
                    placeholder="https://github.com/usuario/proyecto o link a ZIP"
                  />
                  <p className="text-xs text-muted-foreground">
                    Puedes compartir el link después por WhatsApp si prefieres
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descripción del proyecto</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Cuéntanos brevemente qué hace tu proyecto, requisitos especiales, etc."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label>¿Tu proyecto usa base de datos?</Label>
                  <RadioGroup
                    value={formData.hasDatabase}
                    onValueChange={(value) => handleInputChange("hasDatabase", value)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="db-no" />
                      <Label htmlFor="db-no" className="cursor-pointer">
                        No
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="si" id="db-si" />
                      <Label htmlFor="db-si" className="cursor-pointer">
                        Sí
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </FadeContent>

          {/* Domain Preference */}
          <FadeContent blur duration={500} delay={400}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Dominio
                </CardTitle>
                <CardDescription>¿Tienes alguna preferencia para el subdominio?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="domainPreference">Subdominio preferido</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="domainPreference"
                      value={formData.domainPreference}
                      onChange={(e) => handleInputChange("domainPreference", e.target.value)}
                      placeholder="mi-proyecto"
                      className="max-w-[200px]"
                    />
                    <span className="text-muted-foreground">.uploadify.com</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Solo aplica para planes Intermedio o superior. Plan Básico recibe dominio aleatorio.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeContent>

          {/* Submit */}
          <FadeContent blur duration={500} delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-6 bg-secondary/50 rounded-lg">
              <div>
                <p className="font-medium">
                  Plan seleccionado:{" "}
                  <span className="text-primary">{plans.find((p) => p.id === selectedPlan)?.name}</span>
                </p>
                <p className="text-sm text-muted-foreground">Te contactaremos en menos de 24 horas</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar solicitud
                    </>
                  )}
                </Button>
              </div>
            </div>
          </FadeContent>
        </form>
      </div>
    </div>
  )
}

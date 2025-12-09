"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HostingLogo } from "@/components/hosting-logo"
import { createClient } from "@/lib/supabase/client"
import { useRouter, useSearchParams } from "next/navigation"
import {
  LogOut,
  Server,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Phone,
  Database,
  FileText,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react"
import type { User } from "@supabase/supabase-js"
import Link from "next/link"

interface HostingRequest {
  id: string
  created_at: string
  status: string
  name: string
  email: string
  phone: string | null
  project_name: string
  project_type: string
  project_url: string | null
  description: string | null
  has_database: boolean
  domain_preference: string | null
  plan: string
  admin_notes: string | null
}

interface ContactMessage {
  id: string
  created_at: string
  is_read: boolean
  name: string
  email: string
  subject: string
  message: string
}

interface BlogPost {
  id: string
  created_at: string
  updated_at: string
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image: string | null
  category: string
  author: string
  published: boolean
  lang: string
}

interface AdminDashboardProps {
  user: User
  requests: HostingRequest[]
  messages: ContactMessage[]
  blogPosts: BlogPost[]
}

const statusColors: Record<string, string> = {
  pendiente: "bg-yellow-500/20 text-yellow-600",
  en_progreso: "bg-blue-500/20 text-blue-600",
  completado: "bg-green-500/20 text-green-600",
  cancelado: "bg-red-500/20 text-red-600",
}

const statusLabels: Record<string, string> = {
  pendiente: "Pendiente",
  en_progreso: "En Progreso",
  completado: "Completado",
  cancelado: "Cancelado",
}

const planLabels: Record<string, string> = {
  basico: "Básico",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
  enterprise: "Enterprise",
}

export function AdminDashboard({ user, requests, messages, blogPosts }: AdminDashboardProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultTab = searchParams.get("tab") || "requests"
  const [localRequests, setLocalRequests] = useState(requests)
  const [localMessages, setLocalMessages] = useState(messages)
  const [localPosts, setLocalPosts] = useState(blogPosts)

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/auth/login")
  }

  const updateRequestStatus = async (id: string, status: string) => {
    const supabase = createClient()
    const { error } = await supabase.from("hosting_requests").update({ status }).eq("id", id)

    if (!error) {
      setLocalRequests((prev) => prev.map((req) => (req.id === id ? { ...req, status } : req)))
    }
  }

  const markMessageAsRead = async (id: string) => {
    const supabase = createClient()
    const { error } = await supabase.from("contact_messages").update({ is_read: true }).eq("id", id)

    if (!error) {
      setLocalMessages((prev) => prev.map((msg) => (msg.id === id ? { ...msg, is_read: true } : msg)))
    }
  }

  const deletePost = async (id: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este post?")) return

    const supabase = createClient()
    const { error } = await supabase.from("blog_posts").delete().eq("id", id)

    if (!error) {
      setLocalPosts((prev) => prev.filter((post) => post.id !== id))
    }
  }

  const togglePublish = async (id: string, published: boolean) => {
    const supabase = createClient()
    const { error } = await supabase.from("blog_posts").update({ published: !published }).eq("id", id)

    if (!error) {
      setLocalPosts((prev) => prev.map((post) => (post.id === id ? { ...post, published: !published } : post)))
    }
  }

  const pendingRequests = localRequests.filter((r) => r.status === "pendiente").length
  const unreadMessages = localMessages.filter((m) => !m.is_read).length
  const draftPosts = localPosts.filter((p) => !p.published).length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HostingLogo className="h-8 w-8" />
            <div>
              <h1 className="font-bold text-lg">Panel de Admin</h1>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Salir
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Server className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{localRequests.length}</p>
                  <p className="text-xs text-muted-foreground">Solicitudes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/10">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{pendingRequests}</p>
                  <p className="text-xs text-muted-foreground">Pendientes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{localRequests.filter((r) => r.status === "completado").length}</p>
                  <p className="text-xs text-muted-foreground">Completadas</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{unreadMessages}</p>
                  <p className="text-xs text-muted-foreground">Mensajes nuevos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{localPosts.length}</p>
                  <p className="text-xs text-muted-foreground">Blog Posts</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue={defaultTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="requests" className="gap-2">
              <Server className="w-4 h-4" />
              Solicitudes
              {pendingRequests > 0 && (
                <Badge variant="destructive" className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {pendingRequests}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="messages" className="gap-2">
              <Mail className="w-4 h-4" />
              Mensajes
              {unreadMessages > 0 && (
                <Badge variant="destructive" className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {unreadMessages}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="blog" className="gap-2">
              <FileText className="w-4 h-4" />
              Blog
              {draftPosts > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {draftPosts}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="space-y-4">
            {localRequests.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No hay solicitudes aún</p>
                </CardContent>
              </Card>
            ) : (
              localRequests.map((request) => (
                <Card key={request.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {request.project_name}
                          <Badge className={statusColors[request.status]}>{statusLabels[request.status]}</Badge>
                          <Badge variant="outline">{planLabels[request.plan]}</Badge>
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {request.name} • {request.email}
                          {request.phone && ` • ${request.phone}`}
                        </CardDescription>
                      </div>
                      <Select value={request.status} onValueChange={(value) => updateRequestStatus(request.id, value)}>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pendiente">Pendiente</SelectItem>
                          <SelectItem value="en_progreso">En Progreso</SelectItem>
                          <SelectItem value="completado">Completado</SelectItem>
                          <SelectItem value="cancelado">Cancelado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2 text-sm">
                      <Badge variant="secondary">{request.project_type}</Badge>
                      {request.has_database && (
                        <Badge variant="secondary" className="gap-1">
                          <Database className="w-3 h-3" />
                          Base de datos
                        </Badge>
                      )}
                      {request.domain_preference && (
                        <Badge variant="outline">{request.domain_preference}.uploadify.com</Badge>
                      )}
                    </div>
                    {request.description && <p className="text-sm text-muted-foreground">{request.description}</p>}
                    <div className="flex gap-2 pt-2">
                      {request.project_url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={request.project_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Ver código
                          </a>
                        </Button>
                      )}
                      {request.phone && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={`https://wa.me/${request.phone.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Phone className="w-4 h-4 mr-1" />
                            WhatsApp
                          </a>
                        </Button>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground pt-2">
                      {new Date(request.created_at).toLocaleString("es-DO")}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            {localMessages.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No hay mensajes aún</p>
                </CardContent>
              </Card>
            ) : (
              localMessages.map((message) => (
                <Card key={message.id} className={!message.is_read ? "border-primary/50 bg-primary/5" : ""}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {message.subject}
                          {!message.is_read && (
                            <Badge variant="default" className="text-xs">
                              Nuevo
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription>
                          {message.name} • {message.email}
                        </CardDescription>
                      </div>
                      {!message.is_read && (
                        <Button variant="outline" size="sm" onClick={() => markMessageAsRead(message.id)}>
                          Marcar como leído
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${message.email}`}>
                          <Mail className="w-4 h-4 mr-1" />
                          Responder
                        </a>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      {new Date(message.created_at).toLocaleString("es-DO")}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="blog" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Gestión de Blog</h2>
              <Button asChild>
                <Link href="/admin/blog/new">
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo Post
                </Link>
              </Button>
            </div>

            {localPosts.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">No hay posts aún</p>
                  <Button asChild>
                    <Link href="/admin/blog/new">
                      <Plus className="w-4 h-4 mr-2" />
                      Crear primer post
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              localPosts.map((post) => (
                <Card key={post.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {post.title}
                          <Badge variant={post.published ? "default" : "secondary"}>
                            {post.published ? "Publicado" : "Borrador"}
                          </Badge>
                          <Badge variant="outline">{post.lang.toUpperCase()}</Badge>
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {post.category} • {post.author} • {new Date(post.created_at).toLocaleDateString("es-DO")}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" onClick={() => togglePublish(post.id, post.published)}>
                          {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/blog/${post.id}`}>
                            <Edit className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => deletePost(post.id)}>
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Slug: /{post.lang}/blog/{post.slug}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

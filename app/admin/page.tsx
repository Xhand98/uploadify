import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export default async function AdminPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  // Fetch hosting requests
  const { data: requests } = await supabase
    .from("hosting_requests")
    .select("*")
    .order("created_at", { ascending: false })

  // Fetch contact messages
  const { data: messages } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false })

  const { data: blogPosts } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })

  return (
    <AdminDashboard user={data.user} requests={requests || []} messages={messages || []} blogPosts={blogPosts || []} />
  )
}

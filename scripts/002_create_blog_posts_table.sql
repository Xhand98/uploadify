-- Create blog_posts table for admin-managed blog content
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  category TEXT NOT NULL,
  author TEXT DEFAULT 'Hendrick Herrera',
  published BOOLEAN DEFAULT false,
  lang TEXT DEFAULT 'es'
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Only authenticated users can manage blog posts
CREATE POLICY "Allow authenticated select on blog_posts" ON blog_posts
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated insert on blog_posts" ON blog_posts
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow authenticated update on blog_posts" ON blog_posts
  FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Allow authenticated delete on blog_posts" ON blog_posts
  FOR DELETE TO authenticated USING (true);

-- Allow public to read only published posts
CREATE POLICY "Allow public select published blog_posts" ON blog_posts
  FOR SELECT TO anon USING (published = true);

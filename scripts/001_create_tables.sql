-- Tabla para solicitudes de hosting
CREATE TABLE IF NOT EXISTS hosting_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pendiente' CHECK (status IN ('pendiente', 'en_progreso', 'completado', 'cancelado')),
  
  -- Datos del cliente
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  
  -- Datos del proyecto
  project_name TEXT NOT NULL,
  project_type TEXT NOT NULL,
  project_url TEXT,
  description TEXT,
  has_database BOOLEAN DEFAULT FALSE,
  domain_preference TEXT,
  
  -- Plan seleccionado
  plan TEXT NOT NULL CHECK (plan IN ('basico', 'intermedio', 'avanzado', 'enterprise')),
  
  -- Notas del admin
  admin_notes TEXT
);

-- Tabla para mensajes de contacto
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_read BOOLEAN DEFAULT FALSE,
  
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL
);

-- Habilitar RLS
ALTER TABLE hosting_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Políticas públicas para INSERT (cualquiera puede enviar solicitudes)
CREATE POLICY "Allow public insert on hosting_requests" 
  ON hosting_requests FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow public insert on contact_messages" 
  ON contact_messages FOR INSERT 
  WITH CHECK (true);

-- Políticas para usuarios autenticados (admin) para ver y modificar
CREATE POLICY "Allow authenticated select on hosting_requests" 
  ON hosting_requests FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on hosting_requests" 
  ON hosting_requests FOR UPDATE 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete on hosting_requests" 
  ON hosting_requests FOR DELETE 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated select on contact_messages" 
  ON contact_messages FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on contact_messages" 
  ON contact_messages FOR UPDATE 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete on contact_messages" 
  ON contact_messages FOR DELETE 
  USING (auth.role() = 'authenticated');

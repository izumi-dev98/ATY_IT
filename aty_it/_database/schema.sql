-- Supabase SQL Schema for KPI Details Table
-- Generated: 2026-03-28

-- ============================================
-- Table: Kpi Details
-- Description: Stores KPI (Key Performance Indicator) records
-- ============================================

CREATE TABLE IF NOT EXISTS "Kpi Details" (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE,
  status TEXT,
  "issueType" TEXT,
  department TEXT,
  description TEXT,
  "confirmBy" TEXT,
  "doneBy" TEXT,
  "startTime" TEXT,    -- ISO 8601 datetime string (e.g., "2026-03-28T09:00:00.000Z")
  "endTime" TEXT,      -- ISO 8601 datetime string
  duration TEXT,       -- Human-readable duration (e.g., "2 hours 30 minutes")
  "check" TEXT DEFAULT 'Not yet',
  solution TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Indexes for better query performance
-- ============================================

CREATE INDEX IF NOT EXISTS idx_kpi_details_status ON "Kpi Details"(status);
CREATE INDEX IF NOT EXISTS idx_kpi_details_department ON "Kpi Details"(department);
CREATE INDEX IF NOT EXISTS idx_kpi_details_issue_type ON "Kpi Details"("issueType");
CREATE INDEX IF NOT EXISTS idx_kpi_details_date ON "Kpi Details"(date);
CREATE INDEX IF NOT EXISTS idx_kpi_details_check ON "Kpi Details"("check");
CREATE INDEX IF NOT EXISTS idx_kpi_details_created_at ON "Kpi Details"(created_at);

-- ============================================
-- Row Level Security (RLS) Policies
-- ============================================

-- Enable RLS on the table
ALTER TABLE "Kpi Details" ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read all records
CREATE POLICY "Authenticated users can view all KPI records"
  ON "Kpi Details"
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to insert new records
CREATE POLICY "Authenticated users can create KPI records"
  ON "Kpi Details"
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update records
CREATE POLICY "Authenticated users can update KPI records"
  ON "Kpi Details"
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete records
CREATE POLICY "Authenticated users can delete KPI records"
  ON "Kpi Details"
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================
-- Trigger to auto-update updated_at timestamp
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_kpi_details_updated_at
  BEFORE UPDATE ON "Kpi Details"
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Sample Data (Optional - uncomment to insert)
-- ============================================

-- INSERT INTO "Kpi Details" (date, status, "issueType", department, description, "confirmBy", "doneBy", "startTime", "endTime", duration, "check", solution)
-- VALUES
--   (CURRENT_DATE, 'Not Strated', 'Network', 'IT', 'Network connectivity issue', 'Chit Ko Ko', 'Nay Myo Maung', '2026-03-28T09:00:00', '2026-03-28T10:30:00', '1 hour 30 minutes', 'Not yet', ''),
--   (CURRENT_DATE - 1, 'Completed', 'Software', 'HR', 'HR system login problem', 'It Teams', 'Chit Ko Ko', '2026-03-27T14:00:00', '2026-03-27T15:00:00', '1 hour', 'Checked', 'Reset password'),
--   (CURRENT_DATE - 2, 'Not Strated', 'Hardware', 'Finance', 'Printer not responding', 'Nay Myo Maung', 'It Teams', NULL, NULL, '', 'Not yet', '');

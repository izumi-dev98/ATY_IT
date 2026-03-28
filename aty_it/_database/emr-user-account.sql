-- Supabase SQL Schema for EMR User Account Table
-- Generated: 2026-03-28

-- ============================================
-- Table: EMR User Account
-- Description: Stores EMR system user account records
-- ============================================

CREATE TABLE IF NOT EXISTS "EMR User Account" (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE,
  user_id TEXT,
  first_name TEXT,
  last_name TEXT,
  position TEXT,
  department TEXT,
  created_by TEXT,
  status TEXT,
  remark TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Indexes for better query performance
-- ============================================

CREATE INDEX IF NOT EXISTS idx_emr_user_account_user_id ON "EMR User Account"(user_id);
CREATE INDEX IF NOT EXISTS idx_emr_user_account_department ON "EMR User Account"(department);
CREATE INDEX IF NOT EXISTS idx_emr_user_account_status ON "EMR User Account"(status);
CREATE INDEX IF NOT EXISTS idx_emr_user_account_created_at ON "EMR User Account"(created_at);

-- ============================================
-- Row Level Security (RLS) Policies
-- ============================================

-- Enable RLS on the table
ALTER TABLE "EMR User Account" ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read all records
CREATE POLICY "Authenticated users can view all EMR user accounts"
  ON "EMR User Account"
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to insert new records
CREATE POLICY "Authenticated users can create EMR user accounts"
  ON "EMR User Account"
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update records
CREATE POLICY "Authenticated users can update EMR user accounts"
  ON "EMR User Account"
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete records
CREATE POLICY "Authenticated users can delete EMR user accounts"
  ON "EMR User Account"
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================
-- Trigger to auto-update updated_at timestamp
-- ============================================

CREATE TRIGGER update_emr_user_account_updated_at
  BEFORE UPDATE ON "EMR User Account"
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Sample Data (Optional - uncomment to insert)
-- ============================================

-- INSERT INTO "EMR User Account" (date, user_id, first_name, last_name, position, department, created_by, status, remark)
-- VALUES
--   (CURRENT_DATE, 'USR001', 'John', 'Doe', 'Doctor', 'IT', 'Chit Ko Ko', 'Active', 'Initial admin account'),
--   (CURRENT_DATE, 'USR002', 'Jane', 'Smith', 'Nurse', 'HR', 'Nay Myo Maung', 'Active', ''),
--   (CURRENT_DATE - 1, 'USR003', 'Bob', 'Wilson', 'Admin', 'Finance', 'It Teams', 'Inactive', 'Account temporarily disabled');

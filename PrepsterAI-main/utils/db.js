import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Safety check: Agar ENV nahi mila toh build crash nahi hoga
const sql = neon(process.env.DATABASE_URL || 'FALLBACK_URL_FOR_BUILD');
export const db = drizzle(sql);
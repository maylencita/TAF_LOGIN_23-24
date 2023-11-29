import * as db from 'zapatos/db'
import pool from '../db/pgPool'

export const initDB = async () => {
  console.log('Initializing database...')
  db.sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name	TEXT NOT NULL,
      score   INTEGER DEFAULT 0
  )`.run(pool)
}
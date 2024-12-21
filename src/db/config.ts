import { config } from 'dotenv';
import sql from 'mssql';

config();

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER || 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

export async function getConnection() {
  try {
    const pool = await sql.connect(sqlConfig);
    return pool;
  } catch (err) {
    console.error('Database connection failed:', err);
    throw err;
  }
}
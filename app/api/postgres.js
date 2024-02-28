import { Pool } from 'pg';
import sql, { SQLStatement } from 'sql-template-strings';

const conn = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  //port: process.env.POSTGRES_PORT,
  port: 5432,
  database: process.env.POSTGRES_DATABASE,
});

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  //port: process.env.POSTGRES_PORT,
  port: 5432,
  database: process.env.POSTGRES_DATABASE,
});

const query = async (statement) => {
  try {
    return (await conn.query(statement)).rows;
  } catch (error) {
    throw new Error(`\DB error: ${error.message}`);
  }
};

export default { conn, pool, query, sql, SQLStatement };

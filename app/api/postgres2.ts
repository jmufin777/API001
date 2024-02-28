import sql, { SQLStatement } from 'sql-template-strings';
import { Pool } from 'pg';



export const conn = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  //port: process.env.POSTGRES_PORT,
  port: 5432,
  database: process.env.POSTGRES_DATABASE,
});

export const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  //port: process.env.POSTGRES_PORT,
  port: 5432,
  database: process.env.POSTGRES_DATABASE,
});

//export const sql = SQL ;
export async function queryk(statement: string) {
    console.log("SSS ", statement);
    
    let squery = sql`${statement}`;
    console.log("TTT", sql`${statement}`,"  ", squery );
    try {
        const vals = await conn.query(statement);
        //const vals = await conn.query(squery);
        //const vals = await conn.query(sql `SELECT * FROM users WHERE email='jarda@gmail.com' `);

        return vals;
    //return (await conn.query(statement)).rows;
  } catch (error) {
      return {
          message: error
      }
    //throw new Error(`\DB error: ${error.message}`);
  }
};

//export default { conn, pool, query, sql, SQLStatement };

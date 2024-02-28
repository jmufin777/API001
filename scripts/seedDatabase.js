const { Pool } = require('pg');
const sql = require('sql-template-strings');

const connx = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT) || 5432,
  database: process.env.POSTGRES_DB,
});

const conn = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT) || 5435,
  database: process.env.POSTGRES_DATABASE,
});

/*
const conn = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'apireg',
  password: 'postgres',
  port: 5435,
});
*/

const query = async (statement) => {
  try {
    return (await conn.query(statement)).rows;
  } catch (error) {
    throw new Error(`\DB error: ${error.message}`);
  }
};

(async () => {
  console.log(
    'kousim ',
    process.env.POSTGRES_USER,
    process.env.POSTGRES_HOST,
    conn,
  );
  try {
    let exists = false;
    try {
      exists =
        (await query(sql`SELECT to_regclass('public.todo') as exists`))[0]
          .exists == 'todo';
    } catch (e) {}
    if (!exists) {
      console.log(new Date().toISOString(), 'Initializing database');
      await query(
        sql`CREATE TABLE todo (id SERIAL PRIMARY KEY, name TEXT NOT NULL, checked BOOLEAN NOT NULL)`,
      );
      await query(
        sql`INSERT INTO todo (name, checked) VALUES ('Bananas', TRUE), ('Milk', FALSE), ('Noodles', FALSE)`,
      );
      const row = await query(sql`select * from source.areszem`);
      console.log(row);
    }
  } catch (createError) {
    console.log(
      new Date().toISOString(),
      'Error initializing database',
      createError,
    );
  }
  process.exit();
})();

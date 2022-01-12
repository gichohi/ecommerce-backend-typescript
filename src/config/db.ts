import pgPromise from 'pg-promise';

/*
const pgp = pgPromise({});
const dbname = "tshirtshop_dev";
const username = "shopuser";
const password = "shopuser2021";
const port = "5432";
const host = "localhost"
const url = `postgres://${username}:${password}@${host}:${port}/${dbname}`;

const db = pgp(url);
*/

const pgp = pgPromise({/* Initialization Options */ });
const dbname = process.env.POSTGRES_DB || "postgres";
const username = process.env.POSTGRES_USER || "postgres";
const password = process.env.POSTGRES_PASSWORD || "postgres";
const port = process.env.POSTGRES_PORT || "5432";
const host = process.env.POSTGRES_HOST || "localhost"
const url = `postgres://${username}:${password}@${host}:${port}/${dbname}`;
const db = pgp(url);

export default db;
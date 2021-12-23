import pgPromise from 'pg-promise';

    const pgp = pgPromise({/* Initialization Options */});
    const dbname = "tshirtshop_dev";
    const username = "shopuser";
    const password = "shopuser2021";
    const port = "5432";
    const host = "localhost"
    const url = `postgres://${username}:${password}@${host}:${port}/${dbname}`;

const db = pgp(url);

export default db;
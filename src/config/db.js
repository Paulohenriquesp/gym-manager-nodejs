const { Pool } = require("pg");
const dev = {
  user: "postgres",
  password: "31101990",
  host: "localhost",
  port: "5432",
  database: "gymmanager",
};
const prod = {
  connectionString: process.env.URL_DB,
  ssl: { rejectUnauthorized: false },
};
module.exports =
  process.env.ENV_PROD === "prod" ? new Pool(prod) : new Pool(dev);

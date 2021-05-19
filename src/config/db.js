const { Pool } = require("pg");

module.exports = new Pool({
  user: "postgres",
  password: "31101990",
  host: "localhost",
  port: "5432",
  database: "gymmanager",
});

require("dotenv-safe").config();

const express = require(`express`);
const nunjucks = require(`nunjucks`);
const routes = require(`./routes`);
const methodOverride = require(`method-override`);

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(methodOverride("_method"));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("./app/views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.listen(process.env.PORT || 5000, function () {
  console.log(`Server is running`);
});

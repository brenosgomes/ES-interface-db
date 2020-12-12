const config = require("../knexfile");
const knex = require("knex")(config);

//Faz configuração do bd utiizando dados do knexfile.js
knex.migrate.latest([config]);
module.exports = knex;

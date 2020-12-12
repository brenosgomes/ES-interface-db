//Cria tabela "projeto" no bd
exports.up = function(knex) {
    return knex.schema.createTable("projeto", table => {
        table.increments("projeto_id").primary();
        table.string("projeto_descricao", "200").notNull();
        table.date("projeto_dataTeste").notNull();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("projeto")
};


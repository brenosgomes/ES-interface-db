//Cria tabela "mutante" no bd
exports.up = function(knex) {
    return knex.schema.createTable("mutante", table => {
        table.increments("mutante_id").primary();
        table.integer("programa_id").unsigned().notNull();
        table.foreign("programa_id").references("programa_id").inTable("programa").onDelete('CASCADE');
        table.text("mutante_programaP", "longtext").notNull();
        table.string("mutante_nome", "10").notNull();    
        table.string("mutante_ateP", "100").notNull();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("mutante")
};



exports.up = function(knex) {
    return knex.schema.createTable("programa", table => {
        table.increments("programa_id").primary();
        table.integer("projeto_id").unsigned().notNull();
        table.foreign("projeto_id").references("projeto_id").inTable("projeto").onDelete('CASCADE');
        table.text("programa_programaO", "longtext").notNull();
        table.string("programa_casoTeste", "200").notNull();    
        table.string("programa_ateO", "100").notNull();
        table.string("programa_arestas", "200").nuabble();
        table.string("programa_nodo", "200").nuabble();
        table.string("programa_caminho", "200").notNull();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("programa")
};


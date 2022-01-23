exports.up = knex => {
  return knex.schema.createTable('ongs', table => {
    table.string('id').primary();
    table.string('name', 255).notNullable();
    table.string('email', 255).notNullable();
    table.string('whatsapp', 255).notNullable();
    table.string('city', 255).notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable('ongs');
};

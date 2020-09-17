
exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
        tbl.increments("id")
        tbl.text("username").unique().notNull()
        tbl.text("password").notNull()
    })
    .createTable("user-profiles", tbl => {
        tbl.integer("userId").notNull().references("id").inTable("users")
        tbl.text("username").notNull().unique().references("username").inTable("users")
        tbl.text("name")
        tbl.text("location")
        tbl.text("skills")
        tbl.text("listings")
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("user-profiles")
        .dropTableIfExists("users")
};

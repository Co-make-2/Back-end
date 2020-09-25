
exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
        tbl.increments("id")
        tbl.text("username").unique().notNull()
        tbl.text("password").notNull()
    })

    .createTable("listings",tbl => {
        tbl.increments("listingsId")
        tbl.integer("userId").notNull().references("id").inTable("users")
        tbl.text("username").notNull().references("username").inTable("users")
        tbl.text("listingsName").notNull()
        tbl.text("description").notNull()
        tbl.text("location").notNull()
        tbl.text("city").notNull()
        tbl.text("state").notNull()
        tbl.text("zipCode").notNull()
        tbl.integer("upVotes").defaultTo(0)
    })

    .createTable("user-profiles", tbl => {
        tbl.integer("userId").notNull().references("id").inTable("users")
        tbl.text("username").notNull().unique().references("username").inTable("users")
        tbl.text("name")
        tbl.text("city").notNull()
        tbl.text("state").notNull()
        tbl.text("zipCode").notNull()
        tbl.text("skills")
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("user-profiles_listings")
        .dropTableIfExists("listings")
        .dropTableIfExists("user-profiles")
        .dropTableIfExists("users")
        
};


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
        tbl.text("city").notNull()
        tbl.text("state").notNull()
        tbl.text("zipCode").notNull()
        tbl.text("skills")
        tbl.text("listings").references("listingsName").inTable("listings")
    })
    /*******************adding the listings table ****************************************/
    .createTable("listings",tbl => {
        tbl.increments("listingsId")
        tbl.integer("userId").notNull().references("id").inTable("users")
        tbl.text("username").notNull().references("username").inTable("users")
        tbl.text("listingsName").notNull()
        tbl.text("description").notNull()
        tbl.text("location").notNull()
        tbl.text("city").notNull()
        tbl.text("state").notNull()
        tbl.integer("zipCode").notNull()
        tbl.integer("upVotes").notNull().defaultTo(0)
    })
    /************user-profiles_listings  **************************************************/
    .createTable("user-profiles_listings", tbl => {
        tbl.integer("userId").notNull().references("id").inTable("users")
        tbl.integer("listingsId").notNull().references("listingsId").inTable("listings")
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("user-profiles_listings")
        .dropTableIfExists("listings")
        .dropTableIfExists("user-profiles")
        .dropTableIfExists("users")
        
};

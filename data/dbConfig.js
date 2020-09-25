const knex = require("knex")
const knexfile = require("../knexfile")

const env = process.env.ENV_VARIABLE

module.exports = knex(knexfile[env])
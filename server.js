const express = require("express");
const cors = require("cors");
const restrict = require('./router/restrictMiddleware')

const login = require("./router/login-router");
const signup = require("./router/signup-router.js")
const listings = require("./router/listingsRouter");
const users = require("./router/users-router");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api/login", login)
server.use("/api/register", signup)
server.use("/api/listings", listings)
<<<<<<< HEAD
// server.use("/api/users", users)
=======
//server.use("/api/users", users)
>>>>>>> 25c950fc051bccff2c3232a0b3763b54581af42c

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to your API!</h2>`)
  })

module.exports = server;
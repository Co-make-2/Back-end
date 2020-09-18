const express = require("express");
const cors = require("cors");
const login = require("./router/login-router");
const userRouter = require("./router/signup-router.js")

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api/login",login)

server.use(userRouter)


module.exports = server;
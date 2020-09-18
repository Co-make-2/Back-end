const express = require("express");
const cors = require("cors");
const login = require("./router/login-router");

const server=express();

server.use(cors());
server.use(express.json());
server.use("/api/login",login)


module.exports = server;
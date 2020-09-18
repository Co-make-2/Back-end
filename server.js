const express = require("express");
const cors = require("cors");
const userRouter = require("./router/signup-router.js")

const server = express();

server.use(cors());
server.use(express.json());

server.use(userRouter)


module.exports = server;
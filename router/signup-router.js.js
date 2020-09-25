const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../model/user-model");
const jwt = require("jsonwebtoken");

const users = express.Router();

users.post("/", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await db.findBy({ username }).first();

    if (user) {
      return res.status(409).json({
        message: "Username is already taken",
      });
    }

    const [userId] = await db.addUser({
      username,
      password: await bcrypt.hash(password, 15),
    });

    console.log(newUser);
    const token = jwt.sign(
      {
        userId,
      },
      process.env.JWT_SECRET || "it can't rain all the time"
    );
    res.cookie("token", token);
    res.status(200).json({ token, message: `Welcome new user` });
  } catch (err) {
    console.log(err)
res.status(500).json({ message: "Something unexpected happened" });;
  }
});

module.exports = users;

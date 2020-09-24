const express = require('express')
const bcrypt = require('bcryptjs')
const db = require('../model/user-model')
const jwt = require("jsonwebtoken");

const users = express.Router()

users.post('/', async (req, res, next) => {
    try {
        const { username, password } = req.body
		const user = await db.findBy({ username }).first()

		if (user) {
			return res.status(409).json({
				message: "Username is already taken",
			})
		}

		const newUser = await db.addUser({
			username,
			password: await bcrypt.hash(password, 15),
		})

		const token = jwt.sign({
            userId: newUser.id
        },process.env.JWT_SECRET||"it can't rain all the time");
        res.cookie("token",token)
        res.status(200).json({token , message:`Welcome ${newUser.username}`})

	} catch (err) {
        next(err)
    }
})

module.exports = users;

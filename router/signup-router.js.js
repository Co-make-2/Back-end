const express = require('express')
const bcrypt = require('bcryptjs')
const db = require('../model/user-model')

const user = express.Router()

user.post('/', async (req, res, next) => {
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

		res.status(201).json(newUser)
    } catch (err) {
        next(err)
    }
})

module.exports = user;

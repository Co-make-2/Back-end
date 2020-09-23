const express = require('express')
const db = require('../model/user-model')

const user = express.Router()

//POST /api/users
user.post('/', async (req, res, next) => {
    try {
        
    } catch (err) {
        next(err)
    }
})

//GET /api/users/:id
user.get('/', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

//PUT /api/users/:id
user.put('/', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

//DELETE /api/users/:id
user.delete('/', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

module.exports = {
    user
}
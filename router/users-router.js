const express = require('express')
const db = require('../model/user-model')

const users = express.Router()

//POST /api/users
users.post('/', async (req, res, next) => {
    try {
        const newUserProfile = await db.createProfile(req.body)
        
        if(!newUserProfile){
            res.status(409).json({
                message: "Something went wrong"
            })
        }
    
        res.status(201).json({
            message: "Profile created successfully"
        })

    } catch (err) {
        res.status(500).json({ message: "Could not add user's profile to the database"})
        next(err)
    }
})

//GET /api/users/:id
users.get('/:id', async (req, res, next) => {
    try {
        const userProfile = await db.getUserProfile(req.params.id)

        if (!userProfile) {
            res.status(404).json({
                error: "User could not be found"
            })
        } else {
            res.status(200).json(userProfile)
        }
    } catch (err) {
        next(err)
    }
})

//PUT /api/users/:id
users.put('/:id', async (req, res, next) => {
    try {
        const userProfile = await db.editProfile(req.params.id, req.body)

        if(!userProfile) {
            res.status(409).json({
                error: "Missing inputs"
            })
        } else {
            res.status(200).json(userProfile)
        }
    } catch (err) {
        next(err)
    }
})

//DELETE /api/users/:id
users.delete('/:id', async (req, res, next) => {
    try {
        const userProfile = await db.deleteProfile(req.params.id)

        if(!userProfile){
            res.status(404).json({
                message: "User does not exist or has already been deleted"
            })
        } else {
            res.status(200).end()
        }
    } catch (err) {
        next(err)
    }
})

module.exports = users
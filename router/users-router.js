const express = require('express')
const db = require('../model/user-model')
const Listings = require("../model/listings-model")
const { validateUserId, restrict, validateUserProfile } = require("./restrictMiddleware")

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
        console.log(err)
res.status(500).json({ message: "Something unexpected happened" });
    }
})

//GET /api/users/:id
users.get('/:id', validateUserId(), validateUserProfile(), async (req, res, next) => {
    try {
        const userProfile = await db.getUserProfile(req.params.id)
        const userListings = await Listings.findByUserId(req.params.id)

        res.status(200).json({
            userProfile,
            userListings
        })
        
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Something unexpected happened" });
    }
})

//PUT /api/users/:id
users.put('/:id', validateUserId(), async (req, res, next) => {
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
        console.log(err)
res.status(500).json({ message: "Something unexpected happened" });
    }
})

//DELETE /api/users/:id
users.delete('/:id', validateUserId(), async (req, res, next) => {
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
        console.log(err)
res.status(500).json({ message: "Something unexpected happened" });
    }
})

module.exports = users
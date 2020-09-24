const db = require('../data/dbConfig')

// filters the users by username
function findBy(username) {
	return db("users")
		.select("id", "username", "password")
		.where(username)
}

// Registers a new user
function addUser(userCredentials){
    return db("users")
        .insert(userCredentials)
}

// Creates a profile for the user
function createProfile(userCredentials){
    return db("user-profiles")
        .insert(userCredentials)
}

// Retrieves a user's profile when you click on that username
function getUserProfile(userId) {
    return db("user-profiles")
        .where({ userId })
}

// Gives ability to edit your own user profile
function editProfile(userId, changes) {
    return db("user-profiles")
        .where({ userId })
        .update(changes)
}

// Deletes profile
function deleteProfile(userId) {
    return db("user-profiles")
        .where({ userId })
        .del()
}

module.exports = {
    addUser,
    findBy,
    createProfile,
    getUserProfile,
    editProfile,
    deleteProfile
}
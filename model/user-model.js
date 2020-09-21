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


module.exports = {
    addUser,
    findBy
}
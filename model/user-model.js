const db = require('../data/dbConfig')

// Registers a new user
function addUser(userCredentials){
    return db("users")
        .insert(userCredentials)
}

module.exports = {
    addUser
}
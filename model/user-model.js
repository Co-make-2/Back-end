const db = require('../data/dbConfig')

// Registers a new user
function addUser(userCredentials){
    return db("users")
        .insert(userCredentials)
}

/****************findBy ******************************/
function findBy(filter){
    return db("users")
    .select("id","username","password")
    .where(filter)
};

module.exports = {
    addUser,
    findBy
}
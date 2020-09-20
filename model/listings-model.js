const db = require("../data/dbConfig");

module.exports = {
    addListing,
    findBy,
    findById,
    findByUserId,
    editListingById,
    deleteListingById,
};

/**********************add a listing  ***********************************/
function addListing(listing, user_id){
    return db("listings")
    .insert({listing, user_id})
};

/**************find by search will find by anything you search for in the listings table and return all matching your search **********/
function findBy(filter){
    return db("listings")
        .where(filter)
};

/**************find by listing id ***********************************************************************/
function findById(id){
    return db("listings")
        .where({ id })
        .first()
};

/*******find by the userId of the the user that created the listing ************************************************/
function findByUserId(userId){
    return db("listings")
            .where({ userId })
};

/****************edit listing by listing id *******************************************************************/
function editListingById(id,changes){
    return db("listings")
        .where({ id })
        .update(changes)
}

/********delete listing by it's id  ***********************************************************************/
function deleteListingById(id){
    return db("listings").where({ id }).del()
};


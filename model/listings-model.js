const db = require("../data/dbConfig");

module.exports = {
    addListing,
    findBy,
    findById,
    findByUserId,
    editListingById,
    deleteListingById,
    incrementVote,
    decrementVote,
    getAllListings,
};

function getAllListings(){
    return db("listings")
};

/**********************add a listing  ***********************************/
function addListing(listing){
    return db("listings")
    .insert(listing, 'id')
};

/**************find by search will find by anything you search for in the listings table and return all matching your search **********/
function findBy(filter){
    return db("listings")
        .where(filter)
};

/**************find by listings id ***********************************************************************/
function findById(listingsId){
    return db("listings")
        .where({ listingsId })
        .first()
};

/*******find by the userId of the the user that created the listing ************************************************/
function findByUserId(userId){
    return db("listings")
            .where({ userId })
};

/****************edit listing by listing id *******************************************************************/
function editListingById(listingsId,changes){
    return db("listings")
        .where({ listingsId })
        .update(changes)
        
}

/********delete listing by it's id  ***********************************************************************/
function deleteListingById(listingsId){
    return db("listings").where({ listingsId }).del()
};

/************increment vote *******************/
function incrementVote(listingsId){
    return db("listings")
        .where({ listingsId })
        .increment("upVotes",1)
};

/******decrement vote *******************************/
function decrementVote(listingsId){
    return db("listings")
        .where({ listingsId })
        .decrement("upVotes",1)
};


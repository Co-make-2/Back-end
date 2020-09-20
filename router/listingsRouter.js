const router = require("express").Router();
const dbConfig = require("../data/dbConfig");
const listModel = require("../model/listings-model");


/*************add new listing return listing id if created successfully************************/
router.post("/", async(req,res) => {
    try{
        const listing = req.body
        const listingId = await listModel.addListing(listing)

        res.status(201).json(listingId)

    }catch(err){
        res.status(500).json({ message: "Could not add listing"})
    }
});

module.exports = router;
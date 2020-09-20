const router = require("express").Router();
const listModel = require("../model/listings-model");


/*************add new listing return listing id if created successfully************************/
router.post("/", async(req,res) => {
    try{
        const newListing = await listModel.addListing(req.body)
        if(!newListing){
            res.status(409).json({message: "listing data missing"})
        }

        res.status(201).json({ message: "Task created successfully"})

    }catch(err){
        console.log(err)
        res.status(500).json({ message: "Could not add listing"})
    }
});

module.exports = router;
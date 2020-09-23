const router = require("express").Router();
const listModel = require("../model/listings-model");
const db = require("../data/dbConfig");
const restrict = require("./restrictMiddleware");


/*************get all listings  *****************************************************************/

router.get("/",restrict, async(req,res) => {
    try{
        const listings = await listModel.

    }catch(err){
        console.log(err)
        res.status(500).json({ })
    }
});

/*************add new listing return listing id if created successfully************************/
router.post("/",restrict , async(req,res) => {
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

/*************get listings by userId *************************/
router.get("/users/:id", restrict,validateUserId(), async(req,res)=> {
    try{
        const listings = await listModel.findByUserId(req.params.id)
        if(!listings){
            res.status(401).json({ message:"The user has not created any listings"})
        }
        res.json(listings)

    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Could not retrieve user's listings"})
    }
});

/*************get listings by city  ************************/
router.post("/city",restrict, async (req,res) => {
    try{
        const { city } = req.body
        const listings = await listModel.findBy({ city })
        if(!city){
            return res.status(400).json({message:"City must be included"})
        }
        if(listings.length > 0){
             res.status(201).json(listings)
        }else{
            res.status(401).json({message:"There are no listings for that specified area currently"})
        }   

    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Error getting posts by city"})
    }
});

/********search by zipcode  ******************************************/
router.post("/zipcode", restrict,async (req,res) => {
    try{
        const { zipCode } = req.body
        const listings = await listModel.findBy({ zipCode })
        if(!zipCode){
            return res.status(400).json({message:"Zipcode must be included"})
        }
        if(listings.length > 0){
             res.status(201).json(listings)
        }else{
            res.status(401).json({message:"There are no listings for that specified area currently"})
        }   

    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Error getting posts by zipcode"})
    }
});

/*********edit listing by listingId return message of successful edit***********************************************/
router.put("/:id", restrict ,async (req,res)=> {
    try{
      const upDatedListing = await listModel.editListingById(req.params.id, req.body)
      res.status(201).json({ message:"Listing edited successfully"})

    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Failed to update listing"})
    }
});

/************delete listing by listingId ****************************************************************/
router.delete("/:id",restrict, async(req, res) => {
    try{
        const deletedListing = await listModel.deleteListingById(req.params.id)
        res.status(202).json({message:"Listing deleted successfully"})

    }catch(err){
        console.log(err)
        res.status(500).json({ message: "Could not delete task"})
    }
});

/***************increment or decrement votes on listing by id *************************************/
router.post("/:id",restrict, async (req,res) => {
    try{
        const listingsId = req.params.id
        let listing = await listModel.findById(listingsId)
        if(req.body.upVotes === -1){
            listing = await listModel.decrementVote(listingsId)
        }else if (req.body.upVotes === 1){
            listing = await listModel.incrementVote(listingsId)
        }else{
             res.status(401).json({ message: "no vote indicated"})
        }
          res.status(201).json({ message:"Vote recorded"})

    }catch(err){
        console.log(err)
        res.status(501).json({ message:"Could not commit vote"})
    }
})

function validateUserId(){
    return async (req, res, next) => {
        try{
            const { id } = req.params
            const user = await db("users").where({ id }).first()

            if(!user){
                return res.status(404).json({ mesage:"User not found"})
            }
            req.user = user
            next()

        }catch(err){

        }
    }
}

module.exports = router;
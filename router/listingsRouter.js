const router = require("express").Router();
const listModel = require("../model/listings-model");
const db = require("../data/dbConfig");
const listingsModel = require("../model/listings-model");


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

/*************get listings by userId *************************/
router.get("/users/:id", validateUserId(), async(req,res)=> {
    try{
        const listings = await listModel.findByUserId(req.params.id)
        res.json(listings)

    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Could not retrieve user's listings"})
    }
});

/*************get listings by city  ************************/
router.post("/city", async (req,res) => {
    try{
        const { city } = req.body.body
        const listings = await listModel.findBy({ city })
        if(!city){
            return res.status(400).json({message:"City must be included"})
        }
        if(listings.length > 0){
             res.status(201).json(listings)
        }else{
            res.status(401).json({message:"There are no posts for that specified area currently"})
        }   

    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Error getting posts by city"})
    }
});

/********search by zipcode  ******************************************/
router.post("/zipcode", async (req,res) => {
    try{
        const { zipCode } = req.body
        const listings = await listModel.findBy({ zipCode })
        if(!zipCode){
            return res.status(400).json({message:"Zipcode must be included"})
        }
        if(listings.length > 0){
             res.status(201).json(listings)
        }else{
            res.status(401).json({message:"There are no posts for that specified area currently"})
        }   

    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Error getting posts by zipcode"})
    }
});

/*********edit listing by listingId return edited listing***********************************************/
router.put("/:id", async (req,res)=> {
    try{
      const upDatedListing = await listModel.editListingById(req.params.id, req.body)
      res.status(201).json({ message:"Task editted successfully"})

    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Failed to update listing"})
    }
});

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
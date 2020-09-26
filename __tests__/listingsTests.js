const supertest = require("supertest");
const server = require("../server");
const db = require("../data/dbConfig");


beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
});

afterAll(async () => {
    await db.destroy()
});
jest.setTimeout(9000);
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYwMDczNzgxOX0.OAo3aF2aoL6EQJeRtPiG3QOK05RyASnHze7577gxric';


describe("listings endpoints testing", () => {
    it("POST /api/listings", async() => {
        const res = await supertest(server)
        .post("/api/listings")
        .set("authorization", token)
        .send({
            "userId":1, 
            "username":"justaduck", 
            "listingsName":"stuff", 
            "description":"stuff", 
            "location":"5th and main street", 
            "city":"Athens",
            "state": "PA",
            "zipCode":"18810"
        })
       // console.log(res)
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body.message).toBe("Task created successfully")
    })  
    it("POST /api/listings/city  get all listings by city", async () => {
        const res = await supertest(server)
        .post("/api/listings/city")
        .set("authorization", token)
        .send({ "city": "Athens"})
       // console.log(res)
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveLength(1)
       // expect(res.body.username).toBe("justaduck")
    })
    it("POST /api/listings/zipcode  get all listings by zipcode", async () => {
        const res = await supertest(server)
        .post("/api/listings/zipcode")
        .set("authorization", token)
        .send({ "zipCode": "18810"})
       // console.log(res)
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe('application/json')
       // expect(res.body.username).toBe("justaduck")
        //expect(res.body.userId).toBe(1)
    })
    it("PUT  /api/listings/id   edit listing by listingsId", async () => {
        const res = await supertest(server)
        .put("/api/listings/1")
        .set("authorization", token)
        .send({
            "userId":1, 
            "username":"justaduck", 
            "listingsName":"stuff edited", 
            "description":"stuff edited", 
            "location":"5th and main street", 
            "city":"Athens",
            "state": "PA",
            "zipCode":"18810"
        })
       // console.log(res)
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body.message).toBe('Listing edited successfully')
    })
    it("PUTS /api/listings/:id/upvote  increment vote by 1", async () => {
        const res = await supertest(server)
        .post("/api/listings/1/upvote")
        .set("authorization", token)
        .send({ "upVotes": 1})
        //console.log(res)
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("Vote recorded")
    })
    it("DELETE /api/listings/:id   deletes a listing", async () => {
        const res = await supertest(server)
        .delete("/api/listings/1")
        .set("authorization", token)
        expect(res.statusCode).toBe(202)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("Listing deleted successfully")
    })
});
const supertest = require("supertest");
const server = require("../server");
const db = require("../data/dbConfig");
const { JsonWebTokenError } = require("jsonwebtoken");
const { isMainThread } = require("worker_threads");

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
});

afterAll(async () => {
    await db.destroy()
});
jest.setTimeout(9000);
const token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYwMDczNzgxOX0.OAo3aF2aoL6EQJeRtPiG3QOK05RyASnHze7577gxric;
const username = "justaduck";
const password = "whatup"

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
            "zipCode":"18840"
        })
        console.log(res)
    })  
});
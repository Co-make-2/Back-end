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

jest.setTimeout(8000);

describe("user testing", () => {
    it("POST /api/register", async() => {
        const res = await supertest(server)
                .post("/api/register")
                .send({ username:"justaduck", password:"whatup"})
                //console.log(res)
                expect(res.statusCode).toBe(201)
                expect(res.type).toBe("application/json")
    })
    it("POST /api/login", async() => {
        const res = await supertest(server)
                .post("/api/login")
                .send({ username:"justaduck", password:"whatup"})
               // console.log(res)
                expect(res.statusCode).toBe(200)
                expect(res.type).toBe('application/json')
                expect(res.body.message).toBe("Welcome justaduck")
    })
    it("POST /api/listings", async() => {
        const res = await supertest(server)
                .post("/api/listings")
                .send({userId:4, username:"justaduck", listingsName:"stray dog", description:"stray friendly pitbull", 
            location:"5th and main street", city:"Athens"})
            console.log(res)
    })
});



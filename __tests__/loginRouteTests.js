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

describe("user testing", () => {
    it("POST /api/register", async() => {
        const res = await supertest(server)
                .post("/api/register")
                .send({ 
                    username:"justaduck", 
                    password:"whatup"
                })
               // console.log(res.body)
                expect(res.statusCode).toBe(200)
                expect(res.type).toBe("application/json")
    })
    it("POST /api/login", async() => {
        const res = await supertest(server)
                .post("/api/login")
                .send({ 
                    username:"justaduck", 
                    password:"whatup"
                })
               // console.log(res)
                expect(res.statusCode).toBe(200)
                expect(res.type).toBe('application/json')
                expect(res.body.message).toBe("Welcome justaduck")
    })
   /* it("POST /api/listings", async() => {
        const login = await supertest(server)
            .post("api/login")
            .send({username:"justaduck", password:"whatup"})
            const { token } = await login.body.token;
           // const token = '$2a$15$QK25Hw8Iaobco/7l8aYAdOD/IsesIVmYhGE5SBzk88lT7kynHSkAm';
        const res = await supertest(server)
                .post("/api/listings")
              //  .set("authorization",token)
                .send({
                    userId:1, 
                    username:"justaduck",
                    listingsName:"stray dog", 
                    description:"stray friendly pitbull", 
                    location:"5th and main street", 
                    city:"Athens",
                    state: "GA",
                    zipCode: "45609",
                    upVotes: 0
                })
            //console.log(res.header)
                expect(res.statusCode).toBe(201)
                expect(res.type).toBe("application/json")
                expect(res.body.message).toBe("Task created successfully")
    })*/

    it("POST /api/users", async() => {
        const res = await supertest(server)
                .post("/api/users")
                .send({
                    userId:1, 
                    username:"justaduck", 
                    name:"Daffy", 
                    city: "Englewood", 
                    state: "CA", 
                    zipCode: "13450", 
                    skills: "Impressions"
                })
            //console.log(res)
                expect(res.statusCode).toBe(201)
                expect(res.type).toBe("application/json")
                expect(res.body.message).toBe("Profile created successfully")
    })
});



const {test,expect} = require("@playwright/test");
const { request } = require("node:http");

test('Get Request-fetch user',async({request})=>{
    const response=await request.get("https://jsonplaceholder.typicode.com/users")
    expect(response.ok()).toBeTruthy()
    const body=await response.json()
    expect(body.length).toBeGreaterThan(0)
    console.log(body[0].name)
})

//post method
test('Post Request-create user',async({request})=>{
    const response=await request.post("https://jsonplaceholder.typicode.com/users",{
        data:{
            name:"John Doe",
            username:"John",
            email:"john@example.com"
        }
    });
    expect(response.status()).toBe(201)
    const responseBody=await response.json()
    expect(responseBody.name).toBe("John Doe")
})
//requests : Get , Post ,Put , Delete , Patch
//response codes : 200 OK ,201 Created , 202 Accepted , 204 No content
//400 Bad Request ,401 Unauthorized ,403 Forbidden ,404 Not found 
//500 Internal server error , 503 service not available

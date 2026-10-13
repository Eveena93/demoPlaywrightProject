//requests : Get , Post ,Put , Delete , Patch
//response codes : 200 OK ,201 Created , 202 Accepted , 204 No content
//400 Bad Request ,401 Unauthorized ,403 Forbidden ,404 Not found 
//500 Internal server error , 503 service not available

import{test,expect} from '@playwright/test'
import { request } from 'node:http'
//get : to fetch users
test('Get request : API in playwright',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/users/1')
    expect(response.status()).toBe(200)
    const responsebody=await response.json()
    console.log(responsebody)
})

//post : to create user
test('Post request : API in playwright',async({request})=>{
     const response=await request.post('https://jsonplaceholder.typicode.com/users',{
     data:{
        name:'Eveena Edison',
        email:'eveenaedison@gmail.com',
        id:'11'
     }})
     expect(response.status()).toBe(201)
     const responsebody=await response.json()
     console.log(responsebody)


})

//patch : for partial updation (eg : to update email of a user)
test('Patch request : API in playwright',async({request})=>{
    const response=await request.patch('https://jsonplaceholder.typicode.com/users/1',
        {
            data:{
                email:'updatedemail@gmail.com'
            }
        }
    )
    expect(response.status()).toBe(200)

})

//put : to update entire data 
test('Put request : API in playwright',async({request})=>{
    const response=await request.put('https://jsonplaceholder.typicode.com/users/1',
        {
            data:{
                "id": 13,
  "name": "Leanne Bell",
  "username": "BretBell",
  "email": "SincereBell@april.biz",
  "address": {
    "street": "Kulas Light Bell",
    "suite": "Apt. 556",
    "city": "Gwenborough Bell",
    "zipcode": "92998-3974",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegardBell.org",
  "company": {
    "name": "Romaguera-CronaBell",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
            }
        }
    )
    expect(response.status()).toBe(200)

})

//delete : to delete a user
test('Delete request : API in playwright',async({request})=>{
    const response=await request.delete('https://jsonplaceholder.typicode.com/users/9')

    expect(response.status()).toBe(200)

})


//create spec file : login.spec.js
//sauce demo : https://www.saucedemo.com/
//both user name /password > valid
//invalid username , valid password
//valid username , invalid password
//invalid username , invalid password
//4 testcases
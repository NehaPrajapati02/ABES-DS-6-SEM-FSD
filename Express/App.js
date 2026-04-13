// server ke liye script likhega app.js file me

const express = require('express');
const app = express();
const  port = 8000; 

const student = [
 {id:1,name:"satyarth",age:22},
{id:2,name:"satyarth",age:22}
]

app.get("/",(req,res)=>{
 res.send("hello world this is my first express server");
})

app.get("/about",(req,res)=>{
    res.send("This is about page");
   })

app.get("/image", (req, res) => {
    console.log("image page is requested");
    res.send("<img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VydmVyfGVufDB8fDB8fHww&w=1000&q=80' alt='server image' width='500' height='300' />");
});

app.get("/student", (req, res) => {
    console.log("student page is requested");
    res.json(student);
});



app.listen(port,()=>{
console.log(`server is run at :http://localhost:${port}`);
})






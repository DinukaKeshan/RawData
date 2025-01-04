const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get('/msg', (req, res)=>{
    const uname = req.body.username;
    const message = {username : uname, userMsg : "Hello world"}
    res.json(message);
})



app.get('/', (req, res)=> {
    const user = {name: 'John', age: 16, school: 'abc'}
    res.json(user);
});

app.listen(3000, () => {
  console.log("Server is running on : http://localhost:3000/");
});

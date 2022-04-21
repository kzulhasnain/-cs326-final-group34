const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbconnection = require('./dbconnection');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));



//login
app.get('/login', (request,response)=> {
    response.send("login request");
});

//register
app.get('/register', (request,response)=> {
    response.send("register request");
    


});

//create post
app.get('/createPost', (request,response)=> {
    response.send("new post");


});

//new comment
app.get('/comment', (request,response)=> {
    response.send("create comment");


});

//like
app.get('/like', (request,response)=> {
    response.send("like post");


});


const port = process.env.PORT;
app.listen(port, ()=> console.log(`Listening on port ${port}`));

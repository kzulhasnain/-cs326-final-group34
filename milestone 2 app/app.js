const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbconnection = require('./dbconnection');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//loads css and png files as static for displaying
app.use(express.static(__dirname + '/public'));

//app sends register as first page
app.get('/',function(request,response) {
    response.sendFile(path.join(__dirname+'/register.html'));
  });


//login
app.get('/login', (request,response)=> {
    //response.send("login request");
    response.sendFile(path.join(__dirname+'/milestone2.html'));
});

//register
app.get('/register', (request,response)=> {
    //response.send("register request");
    response.sendFile(path.join(__dirname+'/login.html'));
    


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

//router
app.use('/', router);


const port = process.env.PORT;
app.listen(port, ()=> console.log(`Listening on port ${port}`));

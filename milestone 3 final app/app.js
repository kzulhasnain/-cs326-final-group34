const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
//const cookieParser = require('cookie-parser');
const PORT = process.env.PORT||5000;
const { db } = require('./dbconnection');
const { find,findUser,insert,remove } = require('./database');
const {StringDecoder} = require('string_decoder');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const {isEmptyObject,hash,createJWT,verifyJWT} = require('./utility');
dotenv.config();

app.set('view engine', 'ejs')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//app.use(cookieParser);

app.use(express.static(__dirname + '/public'));

app.get('/',async function(request,response){
    if(!verifyJWT(request)){
        return response.redirect('/login');
    }
    var posts = await find(db);
    //console.log(posts);
    response.render('home',{
        posts : posts,
        userId : request.userInfo.id
    });
});

/// Login
app.post('/login', async function(request,response){
    var email = request.body.email;
    var password = request.body.password;

    var user = await findUser(db,email);
    if(isEmptyObject(user)){
        console.log("Invalid Email");
        response.render('login',{
            error : 'Invalid Email'
        })
    }
    else{
        var isValid = await bcrypt.compare(password,user[0].password);
        console.log('Is This Valid Password? ',isValid);
        if(!isValid){
            response.render('login',{
                error : 'Invalid Password'
            });
        }
        else{
            var jsonWebToken = createJWT({
                id   : user[0].id,
                name : user[0].name,
                email: user[0].email
            })
            response.cookie('jwt',jsonWebToken);
            response.redirect('/');
        }
    }    
});

app.get('/login', function(request,response){
    if(verifyJWT(request)){
        return response.redirect('/');
    }
     response.render('login');
});

/// Registration
app.post('/register',async function(request,response){
    var name = request.body.name;
    var email = request.body.email;
    var password = await hash(request.body.password);

    var user = await findUser(db,email);
    if(isEmptyObject(user)){
        let credentials = {
            name,
            email,
            password
        };
        var result = await insert(db,'INSERT INTO users SET ?',credentials);
        response.redirect('/login');
    }
    else{
        response.render('register',{
            error : 'An User Already Registered With This Email'
        });
    }
});

app.get('/register', function(request,response){
    if(verifyJWT(request)){
        return response.redirect('/');
    }
    response.render('register');
});

/// Logout
app.post('/logout', function(request,response){
    response.clearCookie('jwt');
    response.redirect('/login');
    console.log("Logged Out");
    response.end();
});

/// Create Post
app.post('/create-post', async function(request,response){
    if(!verifyJWT(request)){
        return response.redirect('/login');
    }
    let queryData = {
        title  : request.body.title,
        body   : request.body.body,
        user_id : request.userInfo.id
    }
    // INSERT INTO posts(title,body,user_id) VALUES (?,?,?)
    var result = await insert(db,'INSERT INTO posts SET ?',queryData);
    response.redirect('/');
});
app.get('/create-post', function(request,response){
    if(!verifyJWT(request)){
        return response.redirect('/login');
    }
    response.render('create-post-form');
});

app.post('/delete', async function(request,response){
    if(!verifyJWT(request)){
        return response.redirect('/login');
    }
    var postId = request.body.postId;
    var result = await remove(db,'DELETE FROM posts WHERE id=?',postId);
    response.redirect('/');
});


app.use('/', router);

app.listen(PORT, ()=> console.log(`Listening on port http://localhost:${PORT}`));

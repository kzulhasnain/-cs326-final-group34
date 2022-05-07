var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function  isEmptyObject(object) {  
    return Object.keys(object).length === 0;
}
function hash(string) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (error, salt) => {
            if (error) reject(error)
            bcrypt.hash(string, salt, (err, hash) => err ? reject(err) : resolve(hash) );
        });
    });
}
function createJWT(userInfo){
    return jwt.sign(userInfo, process.env.JWT_SECRET_KEY);
}
function verifyJWT(request){
    var result = false;
    var cookie = request.headers.cookie;
    if(typeof cookie === 'undefined')return result;
    var token = cookie.split('=')[1];
    jwt.verify(token,process.env.JWT_SECRET_KEY, (err, userInfo)=>{
        if(err){
            return;
        }
        request.userInfo = userInfo;
        //console.log(userInfo);
        result = true;
        return;
    });
    return result;
}
module.exports = {
    isEmptyObject,
    hash,
    createJWT,
    verifyJWT
}
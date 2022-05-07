//var bcrypt = require('bcrypt');
const {isEmptyObject} = require('./utility');

function find(db,model){
    return new Promise(function(resolve,reject){
        const sql = 'SELECT posts.*,users.name AS user_name,users.email AS user_email FROM posts INNER JOIN users ON posts.user_id=users.id ORDER BY updated_at DESC'
        db.query(sql,function(err, result, fields){
            if (err)
                reject(new Error("Error in DB query"))
            else{
                resolve(result);
            }    
        })
    })
}

async function findUser(db, email){
    return new Promise(function(resolve,reject){
        const sql = 'SELECT * FROM `users` WHERE `email` = ?';
        db.query(sql,email,async function(error,result,fields){
            try {
                resolve(result);
            } catch (error) {
                reject(error);
            }
        })
    }) 
}

async function insert(db,sql,queryData){
    return new Promise(function(resolve,reject){
        db.query(sql,queryData,function(error, result){
            try {
                resolve(result);
            } catch (error) {
                reject(error);
            }
        })
    })
}

async function remove(db,sql,queryData){
    return new Promise(function(resolve,reject){
        db.query(sql,queryData,function(error, result){
            try {
                resolve(result);
            } catch (error) {
                reject(error);
            }
        })
    })
}
module.exports = {
    find,
    findUser,
    insert,
    remove
}

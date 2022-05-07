const mysql = require('mysql')

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

db.connect(function(err) {
    if (err) throw err
    console.log("Database Connected");
  });

setInterval(function () {
    db.query('SELECT 1');
}, 6000);

module.exports = {
    db
}




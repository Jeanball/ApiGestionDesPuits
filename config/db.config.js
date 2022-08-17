const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'admin',
    password: '4444',
    database: 'puit'
});

db.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Connexion à la base de données réussie');
    }
})

module.exports = db;


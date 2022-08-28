const mysql = require('mysql2');
require('dotenv').config();

// const db = mysql.createConnection({
//     host: process.env.DB_LOCAL_HOST,
//     port: process.env.DB_LOCAL_PORT,
//     user: process.env.DB_LOCAL_USER,
//     password: process.env.DB_LOCAL_PASS,
//     database: process.env.DB_LOCAL_NAME
// });

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log(
            'Connexion à la base de données réussie.'
            +"\nHost: "+ db.config.host
            +"\nPort: "+ db.config.port
            +"\nUser: "+ db.config.user
            +"\nDatabase: "+ db.config.database
         );
    }
})

module.exports = db;


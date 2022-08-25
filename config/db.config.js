const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'admin',
    password: '4444',
    database: 'puit'
});

// const db = mysql.createConnection({
//     host: 'y6aj3qju8efqj0w1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     port: 3306,
//     user: 'bol4qxgkh2d6994l',
//     password: 'wvxvigxoobmu471u',
//     database: 'ij99rrdgppktzwso'
// });

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


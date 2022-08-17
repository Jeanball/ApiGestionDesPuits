//https://medium.com/codechef-vit/a-better-project-structure-with-express-and-node-js-c23abc2d736f

// Importing the packages required for the project.  
const mysql = require('mysql2');  
const express = require('express');  
var app = express();  
const bodyparser = require('body-parser');  
  
// Used for sending the Json Data to Node API  
app.use(bodyparser.json());  
  
// Connection String to Database  
var mysqlConnection = mysql.createConnection({  
    host: 'localhost',
    port : 3307,  
    user : 'admin',  
    password : '4444',   
    database : 'puit',
    multipleStatements: true
});  

// To check whether the connection is succeed for Failed while running the project in console.  
mysqlConnection.connect((err) => {  
    if(!err) {  
        console.log("Connexion à la base de données réussie!");  
    }  
    else{  
        console.log("Erreur lors de la connexion: " + JSON.stringify(err,undefined,2));  
    }  
});  
  
// To Run the server with Port Number  
app.listen(3000,()=> console.log("Serveur Express écoute sur le port 3000."));  
  
// CRUD Methods  

//Get: Recevoir les données de la table donnees
app.get('/api/donnees',(req,res)=>{
    mysqlConnection.query('SELECT * FROM donnees',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    }
    );

});

//Post: Ajouter une donnee avec ses colonnes profondeur, pression, volume, created_at
app.post('/api/donnees',(req,res)=>{
    console.log(req.body);
    var data = {
        profondeur: req.body.profondeur,
        pression: req.body.pression,
        volume: req.body.volume,
        //created_at est la date actuelle avec l'heure
        created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }
    mysqlConnection.query('INSERT INTO donnees SET ?',data,(err,rows,fields)=>{
        if(!err){
            res.send(rows);


        }else{
            console.log(err);
        }
    });
});
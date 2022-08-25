var dbConnection = require('../../config/db.config');

var Donnee = function(donnee){
    this.volume = donnee.volume;
    this.pression = donnee.pression; 
    this.profondeur = donnee.profondeur;
    this.created_at = new Date(); 
}

//Get: Toutes les donnees
Donnee.getAllDonnees = (result) => {
    dbConnection.query('SELECT * FROM donnees', (err, res) => {
        if (err) {
            console.log("Erreur lors de la récuperation des données: ", err);
            result(err, null);
        } else {
            console.log('Les données ont été récupérées avec succès! ', res);
            result(null, res);
        }
    })
}

//Post: Ajouter une donnee
Donnee.addDonnee = (newDonnee, result) => {
    dbConnection.query('INSERT INTO donnees SET ?', newDonnee, (err, res) => {
        if (err) {
            console.log("Erreur lors de l'ajout de la donnee: ", err);
            result(err, null);
        } else {
            console.log('La donnée a été envoyée à la BD avec succès.');
            result(null, res);
        }
    })
}


module.exports = Donnee;
const DonneModel = require('../models/donnee.model');


exports.getDonnees = (req, res) => {
    DonneModel.getAllDonnees((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Erreur pendant le fetch des donnees"
            });
        } else {
            res.json(data);
        }
    })
}

exports.addDonnee = (req, res) => {
    console.log("Requête du body:", req.body);
    const donneeReqData = new DonneModel(req.body);

    if(req.body.volume == null){
        res.status(400).send({
            message: "Le volume est requis"
        });
    }
    else if(req.body.pression == null){
        res.status(400).send({
            message: "La pression est requise"
        });
    }
    else if(req.body.profondeur == null){
        res.status(400).send({
            message: "La profondeur est requise"
        });
    }
    else{
        DonneModel.addDonnee(donneeReqData, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Erreur pendant l'ajout de la donnee"
                });
            } else {
                console.log("ID: " + data.insertId + " --> " + JSON.stringify(donneeReqData));
                res.status(201).send("Nouvelle ligne entree: " + data.insertId + "\n" + JSON.stringify(donneeReqData));
            }
        })
    }

}
const DonneModel = require('../models/donnee.model');


exports.getDonnees = (req, res) => {
    DonneModel.getAllDonnees((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Erreur pendant le fetch des donnees"
            });
        } else {
            res.send(data);
        }
    })
}

exports.addDonnee = (req, res) => {
    console.log(req.body);
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
        console.log("Ok");
        DonneModel.addDonnee(donneeReqData, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Erreur pendant l'ajout de la donnee"
                });
            } else {
                //Envoyer message de succes en json
                res.status(201).send(data);
            }
        })
    }

}
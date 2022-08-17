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
    if(req.body.volume == null || req.body.pression == null || req.body.profondeur == null){
        res.status(400).send({
            message: "Les champs ne sont pas remplis"
        });
    }else{
        console.log("Ok");
        DonneModel.addDonnee(donneeReqData, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Erreur pendant l'ajout de la donnee"
                });
            } else {
                res.send(data);
            }
        })
    }

}
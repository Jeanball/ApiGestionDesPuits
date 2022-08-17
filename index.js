const express = require("express");
const bodyParser = require("body-parser");

const app = express();


const port = process.env.PORT || 3000;

//Parser pour les requetes JSON de type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//Par pour autoriser les requetes de type application/json
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("Le serveur Express écoute sur le port:",port);
    }
);

app.get("/", (req, res) => {
    res.send("Bienvenue sur l'API de la Gestion du puit!");
}
);

const donneesRoutes = require("./app/routes/donnee.route");
app.use("/api/v1/donnees", donneesRoutes);

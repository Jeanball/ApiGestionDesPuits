const express = require("express");

const app = express();


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Le serveur Express écoute sur le port:",port);
    }
);

app.get("/", (req, res) => {
    res.send("Bienvenue sur l'API de la Gestion du puit!");
}
);

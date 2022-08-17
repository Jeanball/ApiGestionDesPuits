const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');

//

const getDonnees = async (req, res) => {
    const donnees = await Donnees.findAll();
    res.json(donnees);
} 
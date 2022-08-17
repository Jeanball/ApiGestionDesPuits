const express = require('express');
const router = express.Router();

const donneeController = require('../controllers/donnee.controller');

// GET: Toutes les donnees
router.get('/', donneeController.getDonnees);

// POST: Ajouter une donnee
router.post('/', donneeController.addDonnee);

module.exports = router;
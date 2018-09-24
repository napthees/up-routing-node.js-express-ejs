const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Demande de la page Accueil reçue')
  res.render('index');
});

router.get('/about', (req, res) => {
  console.log('Demande de la page À Propos reçue')
  res.render('about');
});

router.get('/contact', (req, res) => {
  console.log('Demande de la page Contact reçue')
  res.render('contact');
});

module.exports = router;
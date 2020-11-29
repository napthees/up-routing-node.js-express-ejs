const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Demande de la page Accueil relue');
  res.render('index');
});

router.get('/about', (req, res) => {
  console.log('Demande de la page À Propos relue');
  res.render('about');
});

router.get('/contact', (req, res) => {
  console.log('Demande de la page Contact relue');
  res.render('contact');
});

module.exports = router;

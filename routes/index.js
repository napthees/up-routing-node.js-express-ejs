const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Demande de la page Accueil re?ue');
  res.render('index');
});

router.get('/about', (req, res) => {
  console.log('Demande de la page �� Propos re?ue');
  res.render('about');
});

router.get('/contact', (req, res) => {
  console.log('Demande de la page Contact re?ue');
  res.render('contact');
});

module.exports = router;

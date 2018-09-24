const express = require("express");
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
const path = require("path");
const routes = require('./routes');

const app = express()
// Réglage de la vue par défaut dans le répertoire "views"
app.set('views', path.join(__dirname, 'views'));

// Réglage du répertoire du css & du javascripts
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Réglage du modèle de vue avec "ejs"
app.set('view engine', 'ejs');

/* On utilise les sessions */
app.use(session({
    secret: 'todotopsecret'
  }))

/* S'il n'y a pas d'array dans la session,
on en crée un vide avant la suite */
app.use(function (req, res, next) {
  if (typeof (req.session.arraylist) == 'undefined') {
    req.session.arraylist = [];
  }
  next();
})

app.use('/', routes);

app.listen(8080, () => {
  console.log("Le serveur écoute sur localhost:8080");
});
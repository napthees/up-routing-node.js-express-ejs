const express = require("express");

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

app.use('/', routes);

app.listen(8080, () => {
  console.log("Le serveur écoute sur localhost:8080");
});
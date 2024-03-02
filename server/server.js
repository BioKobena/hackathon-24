const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const cors = require('cors');
const bodyParser = require("body-parser")
const Electeur = require('./controller/electeurController')
const Site = require('./controller/siteController')

// Mes middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.json());

//Routes pour les Electeurs
app.post('/createElecteur', Electeur.createElecteur);
app.get('/electeurs', Electeur.getAllElecteurs)


//Routes pour les Sites
app.post('/createSite', Site.createSite)
app.post('/authSite', Site.siteAuth)


app.get('/', (req, res) => {
    res.
        send
        ('<h1>Bienvenue sur le serveur</h1>')
})


app.listen(port, () => {
    console.log(`Bienvenue sur le port : ${port}`)
})
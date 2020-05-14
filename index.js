const express = require("express");
const db = require('./db/baza');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('.'));


app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/gradovi', (req, res) => db.gradovi.findAll().then(gradovi => res.json(gradovi)));
app.get('/gradovi/:ID' , (req, res) =>  db.gradovi.findOne({
    where: {   ID: req.params.ID }}).then( data => { res.send(data) })
);

app.delete('/gradovi/:ID' , (req, res) => db.gradovi.destroy({
    where: { ID: req.params.ID }}).then( () => { res.json({ status : 'Deleted!'}) })
);
app.post('/gradovi/:ID' , function(req, res)  {
    if ( !req.body)
        res.json({ error: 'Greska' })
    db.gradovi.create(req.body)
        .then( data => { res.send(data) }).catch( function (err) {res.sendStatus(500)});
});

app.put('/gradovi/:ID' , function(req, res)  {
    if ( !req.body )
        res.json({ error: 'Greska' })
    var v = req.body;
    db.gradovi.update({
        Naziv: v.Naziv ,
        brojStanovnika:v.brojStanovnika,}, { where: { ID: req.params.ID } }
    ).then( () => { res.json({ status : 'Zavrseno!'}) });
});

app.listen(8080);
console.log("port je 8080...");
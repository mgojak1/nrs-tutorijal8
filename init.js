const db = require('./db/baza.js');

db.sequelize.sync({ force: true }).then(function () {
    dataInit().then(() => {
        console.log("baza popunjenja");
        process.exit();
    });
});

function dataInit() {
    const listaGradova = [
        db.gradovi.create({ID: 1, Naziv: 'Sarajevo',brojStanovnika: 300}),
        db.gradovi.create({ID: 2, Naziv: 'Banja Luka',brojStanovnika: 200}),
        db.gradovi.create({ID: 3, Naziv: 'Mostar',brojStanovnika: 100}),
        db.gradovi.create({ID: 4, Naziv: 'Zenica',brojStanovnika: 80}),
        db.gradovi.create({ID: 5, Naziv: 'Zenica',brojStanovnika: 123}),
        db.gradovi.create({ID: 6, Naziv: 'Bihac',brojStanovnika: 321})
    ];

    return new Promise((resolve, reject) => {
        Promise.all(listaGradova)
            .catch(reason => reject(reason));
    });
}
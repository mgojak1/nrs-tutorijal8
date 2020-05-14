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
        db.gradovi.create({ID: 3, Naziv: 'Mostar',brojStanovnika: 100})
    ];

    return new Promise((resolve, reject) => {
        Promise.all(listaGradova)
            .catch(reason => reject(reason));
    });
}
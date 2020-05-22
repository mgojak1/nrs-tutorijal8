const db = require('./db/baza.js');

db.sequelize.sync({ force: true }).then(function () {
    dataInit().then(() => {
        console.log("baza popunjenja");
        process.exit();
    });
});

function dataInit() {
    const listaGradova = [
        db.gradovi.create({id: 1, naziv: 'Sarajevo',brojStanovnika: 300}),
        db.gradovi.create({id: 2, naziv: 'Banja Luka',brojStanovnika: 200}),
        db.gradovi.create({id: 3, naziv: 'Mostar',brojStanovnika: 100}),
        db.gradovi.create({id: 4, naziv: 'Zenica',brojStanovnika: 80}),
        db.gradovi.create({id: 5, naziv: 'Bihac',brojStanovnika: 321})
    ];

    return new Promise((resolve, reject) => {
        Promise.all(listaGradova)
            .catch(reason => reject(reason));
    });
}
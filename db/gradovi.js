const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('gradovi', {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        Naziv: DataTypes.STRING,
        brojStanovnika: DataTypes.INTEGER
    }, {
        sequelize,
        tableName: 'gradovi',
        timestamps: false,
        underscored: true
    });
};
const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('gradovi', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        naziv: DataTypes.STRING,
        brojStanovnika: DataTypes.INTEGER
    }, {
        sequelize,
        tableName: 'gradovi',
        timestamps: false,
        underscored: true
    });
};
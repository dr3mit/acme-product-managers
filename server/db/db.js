Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/acme-product-managers', {logging: false});

module.exports = db;
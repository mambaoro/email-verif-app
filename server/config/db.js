/* eslint-disable prettier/prettier */
const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_CONNECTION, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;

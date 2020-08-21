const Sequelize = require('sequelize');

const db = require("../config/database");
const Movies = require('./movies');

const movies = Movies(db, Sequelize);

module.exports = {
    movies
}
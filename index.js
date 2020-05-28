const dbConfig = require("../dbconfig/db.config.js")

const Sequelize = require("sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST, dialect: dbConfig.dialect
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.data = require("./data.model.js")(sequelize, Sequelize);

db.sequelize.sync();
module.exports = db;
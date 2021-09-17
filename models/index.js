"use strict"

var fs = require("fs")
var path = require("path")
var Sequelize = require("sequelize")
var basename = path.basename(__filename)
var env = process.env.NODE_ENV || "development"
var config = require(__dirname + "/../config/config.json")[env]
var db = {}

var sequelize = new Sequelize("example", "root", "", {
    host: "localhost",
    dialect: "sqlite",
    operatorsAliases: false,
    // SQLite database path
    storage: "127.0.0.1",
    transactionType: 'IMMEDIATE'
})

fs.readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
        )
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize
        )
        db[model.name] = model
    })

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

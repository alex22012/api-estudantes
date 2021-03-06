const Sequelize = require('sequelize')
const config = require("config")

const DBConnection = new Sequelize(config.get("mysql.db"), config.get("mysql.user"), config.get("mysql.pass"), {
    host:config.get("mysql.host"),
    dialect:config.get("mysql.dialect")
})

module.exports = DBConnection
const Sequelize = require("sequelize")
const connection = require("../connection/MySQLConnection")

const UserModel = connection.define("users", {
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.TEXT,
        allowNull:false
    }
})

//Sync the model to create and use the table in the database
UserModel.sync({force:false})

module.exports = UserModel
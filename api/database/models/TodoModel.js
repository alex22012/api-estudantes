const Sequelize = require("sequelize")
const connection = require("../connection/MySQLConnection")

const TodoModel = connection.define("tarefas", {
    userId: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    conteudo: {
        type:Sequelize.STRING,
        allowNull:false
    },
    status:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
})

TodoModel.sync({force:false}).catch(err => console.log(err))
module.exports = TodoModel
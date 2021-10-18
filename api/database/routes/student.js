const Sequelize = require("sequelize")
const connection = require("../Sequelize")

const Student = connection.define("alunos", {
    nome:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    matricula:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

Student.sync({force:false})

module.exports = Student
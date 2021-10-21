const express = require("express")
const userRouter = require("../routers/users/userRouter")
const todoRouter = require("../routers/tarefas/todoRouter")
const MySQLConnection = require("../database/connection/MySQLConnection")
const cors = require("cors")

module.exports = () => {
    const app = express() 
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
    app.use(cors())
    app.use(userRouter)
    app.use(todoRouter)
    MySQLConnection.authenticate()
    .then(() => console.log("OK"))
    .catch(err => console.log("Erro no mysql"))
    //Returns the app instance
    return app
}
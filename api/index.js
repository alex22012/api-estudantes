const express = require("express")
const config = require("config")
const connection = require("./database/Sequelize")
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const routerAlunos = require("../api/router/alunos/index")

connection.authenticate()
.then(() => console.log("Sucesso"))
.catch(err => console.log(err))

app.use(routerAlunos)

app.listen(config.get("api.port"), () => {console.log("Conectado")})
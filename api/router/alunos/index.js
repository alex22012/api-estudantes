const routerAlunos = require("express").Router()
const handler = require("./handlerAlunos")

routerAlunos.get("/alunos", async (req, res) => {
    let students = await handler.getAllStudents()
    res.status(200).json(students)
})
routerAlunos.post("/aluno", async (req, res) => {
    let {nome, matricula} = req.body
    if(isNaN(matricula))
        res.status(400).json("matricula invalida")
    let response = await handler.postStudent({nome, matricula})
    res.status(200).json("Inserido com sucesso")
})
routerAlunos.get("/aluno/:id", async (req, res) => {
    let {id} = req.params
    if(isNaN(id))
        res.status(400).json("Id inválido")
    let student = await handler.getOneStudent(id)
    res.status(200).json(student)
})
routerAlunos.put("/aluno/:id", async (req, res) => {
    let {id} = req.params
    let {nome} = req.body
    if(isNaN(id))
        res.status(400).json("Id invalido")
    let response = await handler.putStudent(id, nome)
    console.log(response)
})
routerAlunos.delete("/aluno/:id", async(req, res) => {
    let {id} = req.params
    if(isNaN(id))
        res.status(400).json("Id invalido")
    let response = await handler.deleteStudent(id)
    res.status(200).json("Removido com sucesso")
})
module.exports = routerAlunos
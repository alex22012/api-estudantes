const todoHandler = require("../../handlers/tarefas/todoHandler")
const todoRouter = require("express").Router()

todoRouter.get("/todos", async(req, res) => {
    try {
        let response = await todoHandler.getAllTodo()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

todoRouter.post("/todo", async (req, res) => {
    let {userId, conteudo, status} = req.body
    //Verify the data
    if(conteudo === undefined || typeof conteudo !== "string")
        res.status(400).json("O conteúdo da tarefa é inválido")
    try {
        let response = await todoHandler.postTodo({userId, conteudo, status})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

todoRouter.get("/todo/:id", async(req, res) => {
    //Verify the id
    let {id} = req.params
    if(id === undefined || isNaN(id))
        res.status(400).json("O id informado está em formato inválido")
    try {
        let response = await todoHandler.getOneTodo(id)
        res.status(200).json(response)
    } catch (error) {   
        res.status(500).json(error)
    }
})

todoRouter.get("/todos/user/:id", async(req, res) => {
    let {id} = req.params
    if(id === undefined || isNaN(id)){
        res.status(400).json("O id informado está em formato inválido")
    }
    try {
        let response = await todoHandler.getAllOneUserTodo(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

todoRouter.put("/todo/:id", async(req, res) => {
    let {id} = req.params
    let {conteudo, status} = req.body
    if(id === undefined || isNaN(id))
        res.status(400).json("O id informado está em formato inválido")
    if(conteudo === undefined || typeof conteudo !== "string")
        res.status(400).json("O conteúdo da tarefa é inválido")
    if(status === undefined || typeof status !== "number")
        res.status(400).json("O status da tarefa é inválido")
    try {
        let response = await todoHandler.putTodo(id, {conteudo, status})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

todoRouter.delete("/todo/:id", async (req, res) => {
    let {id} = req.params
    if(id === undefined || isNaN(id))
        res.status(400).json("O id informado está inválido")
    try {
        let response = await todoHandler.deleteTodo(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = todoRouter
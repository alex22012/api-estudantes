const todoModel = require("../../database/models/TodoModel")

const todoHandler = {
    getAllTodo() {
        return todoModel.findAll({raw:true})
    },
    postTodo(todo) {
        //todo - {conteudo, status(0, 1)}
        return todoModel.create(todo)
    },
    getOneTodo(id) {
        return todoModel.findOne({raw:true, where:{id}})
    },
    putTodo(id, todo) {
        return todoModel.update(todo, {where:{id}})
    },
    deleteTodo(id) {
        return todoModel.destroy({where:{id}})
    }
}

module.exports = todoHandler
const userModel = require("../../database/models/UserModel")

const userHandler = {
    getAllUsers() {
        return userModel.findAll({raw:true})
    },
    postUser(user) {
        //user -> {email, password}
        return userModel.create(user)
    },
    getOneUser(email, password) {
        return userModel.findOne({raw:true, where:{email, password}})
    },
    putUser(id, password){
        return userModel.update({password}, {where:{id}})
    },
    deleteUser(id) {
        return userModel.destroy({where:{id}})
    }
}

module.exports = userHandler
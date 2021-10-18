const Student = require("../../database/routes/student")

const handler = {
    getAllStudents() {
        return Student.findAll({raw:true})
    },
    postStudent(student) {
        return Student.create(student)
    },
    getOneStudent(id){
        return Student.findOne({raw:true, where:{id}})
    },
    putStudent(id, nome){
        return Student.update({nome}, {where:{id}})
    },
    deleteStudent(id){
        return Student.destroy({where:{id}})

    }
}

module.exports = handler
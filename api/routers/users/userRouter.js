const userRouter = require("express").Router()
const { application } = require("express")
const userHandler = require("../../handlers/users/userHandler")

userRouter.get("/users", async (req, res) => {
    try {
        let response = await userHandler.getAllUsers()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
})

userRouter.post("/user", async (req, res) => {
    let {email, password} = req.body
    //Validating the data
    if((email.length > 9 && typeof email === "string") && (password.length >= 8 && typeof password === "string")){
        try {
            let response = await userHandler.postUser({email, password})
            res.status(200).json(response.id)
        } catch (error) {
            res.status(500).json(error)
        }
    }else 
        res.status(400).json("Os dados informados são inválidos")
})

userRouter.post("/user/login", async (req, res) => {
    let {email, password} = req.body
    if(email.length > 10 && typeof email === "string" && password.length >= 8 && typeof password === "string"){
        try {
            let response = await userHandler.getOneUser(email, password)
            if(response !== null){
                res.status(200).json(response.id)
            }else {
                res.status(404).json("Usuário não existe")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }else
        res.status(400).json("O email informado está em formato inválido")
})

userRouter.put("/user/:id", async (req, res) => {
    //The user can update the password
    let {id} = req.params
    let {password} = req.body
    //verify if the id is valid or not
    if(id === undefined || isNaN(id))
        res.status(400).json("O id informado está em formato inválido")
    //Then, verify the password
    if(password.length < 8 && typeof password !== "string")
        res.status(400).json("A senha informada é inválida")
    //Lets make the update
    try {
        let response = await userHandler.putUser(id, password)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

userRouter.delete("/user/:id", async(req, res) => {
    let {id} = req.params
    //Verify if the id is valid or not
    if(id === undefined || isNaN(id))
        res.status(400).json("O id informado está em formato inválido")
    //Lets delete the user
    try {
        let response = await userHandler.deleteUser(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = userRouter
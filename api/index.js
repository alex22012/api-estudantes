const app = require("./config/express")()
const config = require("config")

app.listen(config.get("api.port"), () => console.log("Conectado"))
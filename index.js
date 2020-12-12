const app = require("express")();//Chama express na variavel app
const consign  = require("consign");

//Chama arquivos do programa
consign()
    .include("./config/middleware.js")
    .then("./api/validator.js")
    .then("./api")
    .then("./config/routes.js")
    .into(app);

//Inicia servidor
app.listen(5000, () =>{
    console.log("Backend executando -> 5000");
})
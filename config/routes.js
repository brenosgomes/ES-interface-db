//Define rotas que serão chamadas no front
module.exports = app => {
    
    //Define "/mutante" como url para fazer get e post
    app.route("/mutante")
        //Chama função de get no arquivo mutante.js
        .get(app.api.mutante.get)
        //Chama função de post no arquivo mutante.js
        .post(app.api.mutante.post)

    //Define "/mutante" como url para fazer get, post e put utilizando id
    app.route("/mutante/:id")
        //Chama função de get por id no arquivo mutante.js
        .get(app.api.mutante.get)
        //Chama função que deleta dados do tabela utilizando id no arquivo mutante.js
        .delete(app.api.mutante.remove)
        //Chama função que atualiza dados passando id no arquivo mutante.js
        .put(app.api.mutante.put)
    
    //Define "/programa" como url para fazer get e post
    app.route("/programa")
        //Chama função de get no arquivo programa.js
        .get(app.api.programa.get)
        //Chama função de post no arquivo programa.js
        .post(app.api.programa.post)

    //Define "/programa" como url para fazer get, post e put utilizando id
    app.route("/programa/:id")
        //Chama função de get por id no arquivo programa.js
        .get(app.api.programa.get)
        //Chama função que deleta dados do tabela utilizando id no arquivo programa.js
        .delete(app.api.programa.remove)
        //Chama função que atualiza dados passando id no arquivo programa.js
        .put(app.api.programa.put)
    
    //Define "/projeto" como url para fazer get e post
    app.route("/projeto")
        //Chama função de get no arquivo projeto.js
        .get(app.api.projeto.get)
        //Chama função de post no arquivo projeto.js
        .post(app.api.projeto.post)

    //Define "/projeto" como url para fazer get, post e put utilizando id
    app.route("/projeto/:id")
        //Chama função de get por id no arquivo projeto.js
        .get(app.api.projeto.get)
        //Chama função que deleta dados do tabela utilizando id no arquivo projeto.js
        .delete(app.api.projeto.remove)
        //Chama função que atualiza dados passando id no arquivo projeto.js
        .put(app.api.projeto.put)

}
module.exports = app => {
    app.route("/mutante")
        .get(app.api.mutante.get)
        .post(app.api.mutante.post)

    app.route("/mutante/:id")
        .get(app.api.mutante.get)
        .delete(app.api.mutante.remove)
        .put(app.api.mutante.put)

    app.route("/programa")
        .get(app.api.programa.get)
        .post(app.api.programa.post)

    app.route("/programa/:id")
        .get(app.api.programa.get)
        .delete(app.api.programa.remove)
        .put(app.api.programa.put)

    app.route("/projeto")
        .get(app.api.projeto.get)
        .post(app.api.projeto.post)

    app.route("/projeto/:id")
        .get(app.api.projeto.get)
        .delete(app.api.projeto.remove)
        .put(app.api.projeto.put)
        
}
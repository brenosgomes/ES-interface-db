const knex = require('../config/db')

module.exports = app => {
    const { existsOrError } = app.api.validator

    //Faz busca de todas variaveis na tabela 
    const get = async (req, res) => {
        //Faz chamada do get na tabela 
        const projeto = await knex("projeto").select("*");
        //Retorna id do campo requerido como json
        return res.json(projeto)
    }

    //Faz busca de variaveis por id na tabela
    const getById = async (req, res) => {
        try {
            //Verifica se o id existe no corpo da requisição 
            existsOrError(req.params.id, 'projeto does not exist!')
    
            //Faz chamada na tabela passando id como parametro no where
            const getIdProjeto = await knex('projeto')
                .where({ projeto_id: req.params.id }).first()

            //Verifica se a requisição retornou com sucesso
            existsOrError(getIdProjeto, 'projeto not found')

            //Retorna valores requeridos como json
            res.json(getIdProjeto)
        } catch (msg) {
            //Retorna erro do bd
            return res.status(400).send(msg)
        }
    }

    //Remove linha no bd
    const remove = async (req, res) => {
        try {
            //Verifica se o id existe no corpo da requisição 
            existsOrError(req.params.id, 'projeto does not exist!')

            //Remove linha da tabela buscando id no where
            const removeProjeto = await knex('projeto').del()
                .where({ projeto_id: req.params.id })
            
             //Verifica se a requisição retornou com sucesso
            existsOrError(removeProjeto, 'projeto not found')

            //Retorna resposta positiva se valor for removido
            res.status(204).send()
        }
        catch (msg) {
            //Retorna erro do bd
            return res.status(400).send(msg)
        }
    }

    //Cria nova linha na tabela
    const post = async (req, res) => {
        //Guarda corpo da requisição em json na variavel
        const projeto = req.body;
        try {
            //Cria valor no bd passando o json como parametro
            const newProjeto = await knex("projeto").insert(projeto)
            //Retorna id do novo campo criado
            res.json(newProjeto);
        }catch (err) {
            //Retorna erro do bd
            return res.status(500).send(err);
        }
    }

    //Faz update de dados no bd
    const put = async (req, res) => {
        //Guarda corpo da requisição em json na variavel
        const projeto = req.body;
        //Guarda valor do id passado na url em uma variavel
        const projeto_id = req.params.id;
        try{
            //Verifica se o id existe no corpo da requisição 
            existsOrError(projeto_id, 'projeto does not exist!')
            
            //Verifica se o id existe no corpo da requisição 
            const attProjeto = await knex("projeto")
                .update(projeto)
                .where({ projeto_id: projeto_id })
    
            //Verifica se a requisição retornou com sucesso    
            existsOrError(attProjeto, 'projeto not found')
            
            //Retorna resposta positiva se valor for removido
            res.status(200).send();
        } catch(msg) {
            //Retorna erro do bd
            return res.status(400).send(msg);   
        }
    }
    
    //Retorna as cinco funções criadas para o arquivo routes.js
    return { get, getById, post, put, remove }
}
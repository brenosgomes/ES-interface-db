const knex = require('../config/db')

module.exports = app => {
    const { existsOrError } = app.api.validator

    //Faz busca de todas variaveis na tabela 
    const get = async (req, res) => {
        //Faz chamada do get na tabela 
        const programa = await knex("programa").select("*");
        //Retorna id do campo requerido como json
        return res.json(programa)
    }

    //Faz busca de variaveis por id na tabela
    const getById = async (req, res) => {
        try {
            //Verifica se o id existe no corpo da requisição 
            existsOrError(req.params.id, 'programa does not exist!')
    
            //Faz chamada na tabela passando id como parametro no where
            const getIdPrograma = await knex('programa')
                .where({ programa_id: req.params.id }).first()

            //Verifica se a requisição retornou com sucesso
            existsOrError(getIdPrograma, 'programa not found')

            //Retorna valores requeridos como json
            res.json(getIdPrograma)
        } catch (msg) {
            //Retorna erro do bd
            return res.status(400).send(msg)
        }
    }

    //Remove linha no bd
    const remove = async (req, res) => {
        try {
            //Verifica se o id existe no corpo da requisição 
            existsOrError(req.params.id, 'programa does not exist!')

            //Remove linha da tabela buscando id no where
            const removePrograma = await knex('programa').del()
                .where({ programa_id: req.params.id })
            
             //Verifica se a requisição retornou com sucesso
            existsOrError(removePrograma, 'programa not found')

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
        const programa = req.body;
        try {
            //Cria valor no bd passando o json como parametro
            const newPrograma = await knex("programa").insert(programa)
            //Retorna id do novo campo criado
            res.json(newPrograma);
        }catch (err) {
            //Retorna erro do bd
            return res.status(500).send(err);
        }
    }

    //Faz update de dados no bd
    const put = async (req, res) => {
        //Guarda corpo da requisição em json na variavel
        const programa = req.body;
        //Guarda valor do id passado na url em uma variavel
        const programa_id = req.params.id;
        try{
            //Verifica se o id existe no corpo da requisição 
            existsOrError(programa_id, 'programa does not exist!')
            
            //Verifica se o id existe no corpo da requisição 
            const attPrograma = await knex("programa")
                .update(programa)
                .where({ programa_id: programa_id })
    
            //Verifica se a requisição retornou com sucesso    
            existsOrError(attPrograma, 'programa not found')
            
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
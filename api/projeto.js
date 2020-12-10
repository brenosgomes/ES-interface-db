const knex = require('../config/db')

module.exports = app => {
    const { existsOrError } = app.api.validator

    const get = async (req, res) => {
        const projeto = await knex("projeto").select("*");
        return res.json(projeto)
    }

    const getById = async (req, res) => {
        try {
            existsOrError(req.params.id, 'projeto does not exist!')
    
            const getIdProjeto = await knex('projeto')
                .where({ projeto_id: req.params.id }).first()
            existsOrError(getIdProjeto, 'projeto not found')

            res.json(getIdProjeto)
        } catch (msg) {
            return res.status(400).send(msg)
        }
    }

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'projeto does not exist!')

            const removeProjeto = await knex('projeto').del()
                .where({ projeto_id: req.params.id })
            existsOrError(removeProjeto, 'projeto not found')

            res.status(204).send()
        }
        catch (msg) {
            return res.status(400).send(msg)
        }
    }

    const post = async (req, res) => {
        const projeto = req.body;
        try {
            const newProjeto = await knex("projeto").insert(projeto)
            res.json(newProjeto);
        }catch (err) {
            console.log(res);
            return res.status(500).send(err);
        }
    }

    const put = async (req, res) => {
        const projeto = req.body;
        const projeto_id = req.params.id;
        try{
            existsOrError(projeto_id, 'projeto does not exist!')
            
            const attProjeto = await knex("projeto")
                .update(projeto)
                .where({ projeto_id: projeto_id })
            existsOrError(attProjeto, 'projeto not found')
            
            res.status(200).send();
        } catch(msg) {
            return res.status(400).send(msg);   
        }
    }
    

    return { get, getById, post, put, remove }
}
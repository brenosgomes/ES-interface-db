const knex = require('../config/db')

module.exports = app => {
    const { existsOrError } = app.api.validator

    const get = async (req, res) => {
        const mutante = await knex("mutante").select("*");
        return res.json(mutante)
    }

    const getById = async (req, res) => {
        try {
            existsOrError(req.params.id, 'mutante does not exist!')
    
            const getIdMutante = await knex('mutante')
                .where({ mutante_id: req.params.id }).first()
            existsOrError(getIdMutante, 'mutante not found')

            res.json(getIdMutante)
        } catch (msg) {
            return res.status(400).send(msg)
        }
    }

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'mutante does not exist!')

            const removeMutante = await knex('mutante').del()
                .where({ mutante_id: req.params.id })
            existsOrError(removeMutante, 'mutante not found')

            res.status(204).send()
        }
        catch (msg) {
            return res.status(400).send(msg)
        }
    }

    const post = async (req, res) => {
        const mutante = req.body;
        try {
            const newMutante = await knex("mutante").insert(mutante)
            res.json(newMutante);
        }catch (err) {
            console.log(res);
            return res.status(500).send(err);
        }
    }

    const put = async (req, res) => {
        const mutante = req.body;
        const mutante_id = req.params.id;
        try{
            existsOrError(mutante_id, 'mutante does not exist!')
            
            const attMutante = await knex("mutante")
                .update(mutante)
                .where({ mutante_id: mutante_id })
            existsOrError(attMutante, 'mutante not found')
            
            res.status(200).send();
        } catch(msg) {
            return res.status(400).send(msg);   
        }
    }
    

    return { get, getById, post, put, remove }
}
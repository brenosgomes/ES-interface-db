const knex = require('../config/db')

module.exports = app => {
    const { existsOrError } = app.api.validator

    const get = async (req, res) => {
        const programa = await knex("programa").select("*");
        return res.json(programa)
    }

    const getById = async (req, res) => {
        try {
            existsOrError(req.params.id, 'programa does not exist!')
    
            const getIdPrograma = await knex('programa')
                .where({ programa_id: req.params.id }).first()
            existsOrError(getIdPrograma, 'programa not found')

            res.json(getIdPrograma)
        } catch (msg) {
            return res.status(400).send(msg)
        }
    }

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'programa does not exist!')

            const removePrograma = await knex('programa').del()
                .where({ programa_id: req.params.id })
            existsOrError(removePrograma, 'programa not found')

            res.status(204).send()
        }
        catch (msg) {
            return res.status(400).send(msg)
        }
    }

    const post = async (req, res) => {
        const programa = req.body;
        try {
            const newPrograma = await knex("programa").insert(programa)
            res.json(newPrograma);
        }catch (err) {
            console.log(res);
            return res.status(500).send(err);
        }
    }

    const put = async (req, res) => {
        const programa = req.body;
        const programa_id = req.params.id;
        try{
            existsOrError(programa_id, 'programa does not exist!')
            
            const attPrograma = await knex("programa")
                .update(programa)
                .where({ programa_id: programa_id })
            existsOrError(attPrograma, 'programa not found')
            
            res.status(200).send();
        } catch(msg) {
            return res.status(400).send(msg);   
        }
    }
    

    return { get, getById, post, put, remove }
}
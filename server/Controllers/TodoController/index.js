//db
const pool = require('../../database');

const CreateTodoAction = async (request, response) => {
    try {
        const { description } = request.body;
        const newTodo = await pool.query('INSERT INTO todo (description) VALUES($1)', [description]);
        response.status(201).json(newTodo.rows[0]);
    } catch (error) {
        console.error(error);
    }
}

const GetAllTodos = async (request, response) => {
    try {
        const getAll = await pool.query('SELECT * FROM todo');
        response.status(200).json(getAll.rows);
    } catch (error) {
        console.error(error);
    }
}

const GetTodo = async (request, response) => {
    try {
        const { id } = request.params;
        const getTodo = await pool.query('SELECT * FROM todo WHERE id = $1', [id]);
        response.status(200).json(getTodo.rows[0]);
    } catch (error) {
        console.error(error);
    }
}

const UpdateTodo = async (request, response) => {
    try {
        const { id } = request.params;
        const { description } = request.body;
        await pool.query('UPDATE todo SET description = $2 WHERE id = $1', [id, description]);
        response.status(200).json("Todo was updated");
    } catch (error) {
        console.error(error);
    }
}

const DeleteTodo = async (request, response) => {
    try {
        const { id } = request.params;
        await pool.query('DELETE FROM todo WHERE id = $1', [id]);
        response.status(200).json("Todo was deleted");
    } catch (error) {
        console.error(error);
    }
}

module.exports = { CreateTodoAction, GetAllTodos, UpdateTodo, GetTodo, DeleteTodo };
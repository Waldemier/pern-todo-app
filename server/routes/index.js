
//Controller
const controller = require('../Controllers/TodoController')
//Express Router connecting
const router = require('express').Router();

router.get('/', controller.GetAllTodos).post('/', controller.CreateTodoAction);

router.get('/:id', controller.GetTodo).put('/:id', controller.UpdateTodo).delete('/:id', controller.DeleteTodo);

module.exports = router;
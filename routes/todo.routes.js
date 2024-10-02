import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.controllers.js";

// Create a router
const todoRouter = Router();

// Use Routes
todoRouter.post('/todos', addTodo);

todoRouter.get('/todos', getTodos);

todoRouter.patch('/todos/:id', updateTodo);

todoRouter.delete('/todos/:id', deleteTodo)

// Export router
export default todoRouter;
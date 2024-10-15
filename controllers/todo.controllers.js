
import {  request } from "express";
import { TodoModel } from "../models/todo.models.js";
import { addTodovalidator, updateTodovalidator } from "../validators/todo.validator.js";


// Validate user input
// Write todo to database

//  const newTodo = await TodoModel.create(req.body);

export const addTodo = async (req, res, next) => {
  try {
    console.log(req.file)
    const { error, value } = addTodovalidator.validate({
      ...req.body,
      icon: req.file?.filename
    });
    if (error) {
      return res.status(422).json(error);
    }
    await TodoModel.create(
      value
    )

    // Respond to request
    res.status(201).json("You have posted to todo");
  } catch (error) {
    next(error);

  }
};

export const getTodos = async (req, res, next) => {
  try {
    const { filter = "{}", limit = 10, skip = 0 } = req.query;
    console.log(req.query)
    // fetch todos from database
    const todos = await TodoModel
      .find(JSON.parse(filter))
      .limit(limit)
      .skip(skip);
    // return response
    res.status(200).json(todos);
  } catch (error) {
    next(error);

  }
};

export const updateTodo = (req, res, next) => {
  res.json('Todo updated');
};

export const deleteTodo = (req, res, next) => {
  res.json('Todo deleted');
}


// const express = require('express');
import express from 'express';
import mongoose from 'mongoose';
import todoRouter from './routes/todo.routes.js';
import userRouter from './routes/user.routes.js';

// connect to database
await mongoose.connect('mongodb+srv://todo-api:todo-api@parentfoldercluster0.upygg.mongodb.net/todo-db?retryWrites=true&w=majority&appName=ParentFolderCluster0');

// create an express app
const app = express();

//  Use routes
app.use(todoRouter);
app.use(userRouter);



// difference between old function without arrow and with arrow
// // function sum (a, b) {
// //     return a + b
// // }

// // const sum = (a, b) => {
// //     return a + b
// }

// define route
// using arrow as a fuction, get rid of the function key word and put the arrow between the brackets(parenthesis and curly)
// app.get('/hello', (req, res, next) => {
// console.log(req.headers);
// res.json('you visited the hello endpoint!');
// });

// // Define route example
// app.get('/goodbye', (req, res, next) => {
//     console.log(req.query);
// res.json('see you later!')
// }); now you delete all the define routes her because it has now been seperated in the toDos

// Listen for incoming request
app.listen(3000, () => {
    console.log('app is listening on port 3000')
});


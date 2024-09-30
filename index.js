// const express = require('express');
import express from 'express';

// create an express app
const app = express();

// difference between old function without arrow and with arrow
// // function sum (a, b) {
// //     return a + b
// // }

// // const sum = (a, b) => {
// //     return a + b
// }

// define route
// using arrow as a fuction, get rid of the function key word and put the arrow between the brackets(parenthesis and curly)
app.get('/hello', (req, res, next) => {
console.log(req.headers);
res.json('you visited the hello endpoint!');
});

// Define route example
app.get('/goodbye', function(req, res, next){
    console.log(req.query);
res.json('see you later!')
});

// Listen for incoming request
app.listen(3000, function () {
    console.log('app is listening on port 3000')
});
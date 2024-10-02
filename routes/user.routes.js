// import Router from express
import { Router } from "express";

// declare the routes
const userRouter = Router()

// import the routes from the controller
import { register, logIn, logOut } from "../controllers/user.controller.js";


// create the routes
userRouter.post('/users/register', register),

userRouter.post('/users/logIn', logIn),

userRouter.post('/users/logOut', logOut)


// Export router
export default userRouter;
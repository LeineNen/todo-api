// import Router from express
import { Router } from "express";

// declare the routes
const userRouter = Router()

// import the routes from the controller
import { registerUser, loginUser, logoutUser, updateProfile, getProfile } from "../controllers/user.controller.js";
import { userAvatarUpload } from "../middlewares/upload.js";

// create the routes
userRouter.post('/users/register', registerUser),

userRouter.post('/users/logIn', loginUser),

userRouter.get('/users/me', getProfile);

userRouter.post('/users/logOut', logoutUser)

userRouter.post('/users/me', userAvatarUpload.single('userAvatar'), updateProfile);

// Export router
export default userRouter;
// import Router from express
import { Router } from "express";

// declare the routes
const userRouter = Router()

// import the routes from the controller
import { registerUser, loginUser, logoutUser, updateProfile, getProfile } from "../controllers/user.controller.js";
import { userAvatarUpload } from "../middlewares/upload.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";

// create the routes
userRouter.post('/users/register', registerUser);

userRouter.post('/users/logIn', loginUser);

userRouter.get('/users/me', isAuthenticated,hasPermission('get_profile'), getProfile);

userRouter.post('/users/logOut', isAuthenticated, logoutUser);

userRouter.patch('/users/me', isAuthenticated, hasPermission('update_profile'),userAvatarUpload.single('avatar'), updateProfile);

// Export router
export default userRouter;
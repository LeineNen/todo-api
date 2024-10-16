
import { registerUserValidator, loginUserValidator } from "../validators/user.validator.js";
import { UserModel } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// this is how to write a function
export const registerUser = async (req, res, next) => {
    try {
        // validate user input
        const { error, value } = registerUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }
        // check if user does not exist
        const user = await UserModel.findOne({ email: value.email })
        if (user) {
            return res.status(409), json('user already exist!');
        }
        // Hash their passwork
        const hashedPassword = bcrypt.hashSync(value.password, 10);
        // save user into database
        await UserModel.create({
            ...value,
            //  or name:value.name, 
            //  email:value.email,
            password: hashedPassword
        });
        // send user confirmation email
        // respond to request
        res.json('user registered');
    } catch (error) {

    }
}

export const loginUser = async (req, res, next) => {
    try {
        // validate user input
        const { error, value } = loginUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // Find one user with identifier
        const user = await UserModel.findOne({ email: value.email });
        if (!user) {
            return res.status(404).json('User does not exist!')
        }
        // Compare their passwords
        const correctPassword = bcrypt.compareSync(value.password, user.password);
        if (!correctPassword) {
            return res.status(401).json('Invalid credentials!')
        }
        // Sing a token for user
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_PRIVATE_KEY,
            {expiresIn: '24h'}
        )
        // Respond to request
        res.json({
            message: "User logged in successfully!",
            accessToken: token
        });
    } catch (error) {
        next(error)
    }
}

export const getProfile = (req, res, next) => {
    res.json('User profile')
}


export const logoutUser = (req, res, next) => {
    try {
        res.json('user logged out');
    } catch (error) {
        next(error)
    }
}

export const updateProfile = (req, res, next) => {
    try {
        res.json('user profile updated')
    } catch (error) {
        next(error)
    }
}














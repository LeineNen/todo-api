

import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";
// import { string } from "joi";
// import { string } from "joi";

const userSchema = new Schema({

    name: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar:{type: String},
    role: {type: String,
         default: 'user', 
         enum: ['user', 'admin', 'superadmin']}

}, {
    timestamps: true
});

userSchema.plugin(toJSON);

export const UserModel = model('User', userSchema)
import { json } from "express";
import mongoose from "mongoose";

const recipesModel = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        Validate: {
            validator: (val) => myvalidate.checkNameRacipy(val)
        }
    },
    level: {
        type: String,
        required: false,
        Validate: {
            validator: (val) => myvalidate.checklevel(val)
        }
    },
    duration: {
        type: Number,
        required: false,
    },
    type: {
        type: String,
        required: true,
        Validate: {
            validator: (val) => myvalidate.checktype(val)
        }
    },
    codeUserEnter: {
        type: String,
        ref: 'userscolection',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ingredients: [{
        _id:
        {
            type: String,
            required: true
        },
        ingredientName:
        {
            type: String,
            required: true,
        },
        ingredientAmount:
        {
            type: String,
            required: true,
        }
    }
    ]
}
)
export default mongoose.model('recipescolection', recipesModel)
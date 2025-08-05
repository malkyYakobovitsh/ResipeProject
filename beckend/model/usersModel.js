import mongoose from "mongoose";

const usersMode = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        Validate: {
            validator: (val) => myvalidate.checkName(val)
        }
    },
    pass: {
        type: String,
        required: true,
        Validate: {
            validator: (val) => myvalidate.checkPass(val)
        }
    },
    address: {
        type: String,
        required: false,
    },
    phone: {
        type: Number,
        required: true,
        Validate: {
            validator: (val) => myvalidate.checkPhone(val)
        }
    },
    manager: {
        type: Boolean,
        required: false,
        default: false,
    },
    FavoriteRecipes: [{
        _id:
        {
            type: String,
            required: false
        }, FavoriteRecipe:
        {
            type: String,
            ref: 'recipescolection'
        }
    },
    ]
})
export default mongoose.model('userscolection', usersMode)
import usersModel from "../model/usersModel.js"
import recipesModel from '../model/recipesModel.js';
import recipyControler from "./recipyControler.js";

const userController = {
    getAll: (req, res) => {
        try {
            usersModel.find().
                then((data) => {
                    res.status(200).json(data)
                }).
                catch((err) => {
                    res.status(500).json(err.message)
                })
        }
        catch (e) {
            res.status(500).json(e)
        }
    },
    getById: (req, res) => {
        try {
            const query = {
                name: req.params.name,
                pass: req.params.pass
            };
            usersModel.findOne(query)
                .then(r => {
                    if (r) {
                        res.status(200).send(r);
                    } else {
                        res.status(404).send("User not found");
                    }
                })
                .catch(err => {
                    res.status(500).send(err.message);
                });
        } catch (e) {
            res.status(500).send(e.message);
        }
    },
    add: (req, res, next) => {
        try {
            const r = new usersModel(req.body)
            r.save().then(
                c => res.status(200).send(c),
                next()
            ).
                catch(err => res.status(500).send(err.message))
        }
        catch (err) {
            res.status(404).send(err)
        }
    },
    updateFavoriteRecipe: async (req, res) => {
        const recipeId = req.body.FavoriteRecipe;
        const userId = req.params.id;
        try {
            const user = await usersModel.findById(userId);
            if (!user) {
                return res.status(404).send('User not found');
            }
            if (!user.FavoriteRecipes.some(fav => fav.FavoriteRecipe === recipeId)) {
                user.FavoriteRecipes.push({ FavoriteRecipe: recipeId });
            }
            const updatedUser = await user.save();
            return res.status(200).send(updatedUser);
        } catch (err) {
            console.error(err);
            if (!res.headersSent) {
                return res.status(500).send(err.message);
            }
        }
    },
   getFavoriteRecipeNames: async (req, res) => {
    const userId = req.params.id;
    
    try {
        const user = await usersModel.findById(userId); 
        if (!user) {
            return res.status(404).send('User not found');
        }
        const favoriteRecipeNames = await Promise.all(user.FavoriteRecipes.map(async (fav) => {
            const recipe = await recipesModel.findById(fav.FavoriteRecipe);
            return recipe ? recipe.name : null; 
        }));
        const filteredNames = favoriteRecipeNames.filter(name =>name !== null);
        return res.status(200).json(filteredNames);
    } catch (err) {
        console.error(err);
        return res.status(500).send(err.message);
    }
}
}
export default userController

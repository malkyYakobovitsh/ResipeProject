import bodyParser from "body-parser";
import { Router } from "express";
import userController from "../controlers/userController.js";
import logUserInfo from "../middleWare.js";


const userRout=Router()
userRout.use(bodyParser.json())
userRout.get('/getAll',userController.getAll)
userRout.get('/getById/:name/:pass',userController.getById)
userRout.post('/add',userController.add,logUserInfo)
userRout.put('/updateFavoriteRecipe/:id',userController.updateFavoriteRecipe);
userRout.get('/getFavoriteRecipeNames/:id',userController.getFavoriteRecipeNames);
export default userRout
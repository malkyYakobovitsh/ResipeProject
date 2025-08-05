import bodyParser from "body-parser";
import { Router } from "express";
import recipyControler from "../controlers/recipyControler.js";
import multer from "multer";
import { myImage } from "../upload.js";
const recipyRout=Router()
recipyRout.use(bodyParser.json({ limit: '20mb' })); 
recipyRout.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
recipyRout.get('/getAll',recipyControler.getAll)
recipyRout.get('/getByCode/:id',recipyControler.getByCode)
recipyRout.delete('/dell/:id/:codeUserEnter',recipyControler.dell)
recipyRout.post('/add',myImage.single('image'),recipyControler.add)
recipyRout.put('/update/:id',myImage.single('image'),recipyControler.update)
export default recipyRout
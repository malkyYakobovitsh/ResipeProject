import recipesModel from "../model/recipesModel.js"
import usersModel from "../model/usersModel.js"
const recipyControler = {
    getAll: (req, res) => {
        try {
            recipesModel.find().
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
    getByCode: async (req, res) => {
    try {
        const recipe = await recipesModel.findById(req.params.id);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.status(200).send(recipe);
    } catch (error) {
        res.status(500).send(error.message);
    }
},
    dell:(req,res)=>{
        try{
            if(req.params.codeUserEntry== recipesModel.findById(req.params.id).codeUserEnter || usersModel.findById(req.params.codeUserEntry).manager==true){
                recipesModel.findByIdAndDelete(req.params.id).
                then(d=>res.status(200).send(d)).
                catch(err=>res.status(500).send(err))
            }
            
        }
        catch(e){
           res.status(404).send(e)
        }
    },
    add:(req,res)=>{
        try{
            const r=new recipesModel(req.body)
            r.save().then(
                c=>res.status(200).send(c)
            ).
            catch(err=>res.status(500).send(err.message))
        }
        catch(err){
            res.status(404).send(err)
        }
    },
    update:(req,res)=>{
        try{
            recipesModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            .then(u=>res.status(200).send(u))
            .catch(err=>res.status(500).send(err))
        }
        catch(err){
         consol.log("not good")
        }
    }
}
export default recipyControler
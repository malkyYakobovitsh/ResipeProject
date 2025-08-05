import  express  from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import recipyRout from './routs/recipyRout.js'
import cors from 'cors'
import userRout from './routs/userRout.js'
const app=express()
dotenv.config()
mongoose.connect('mongodb://0.0.0.0:27017/malkyCollection').then(()=>{
    console.log("connect");
}).catch((err)=>{
    console.log(err.mongoose)
})
app.use(express.static('public'))
app.use(express.static('upload'))
app.use(cors())
app.use('/user',userRout)
app.use('/recipy',recipyRout)
app.listen(1234,()=>{
    console.log("roning 🏃‍♂️🏃‍♀️🏃")
}
)
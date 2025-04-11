import express from 'express'
import cors from 'cors'
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
let data = []


app.get('/',(req,res)=>{
    res.send(data)
})


app.post('/',(req,res)=> {
    let datos = req.body
    console.log(datos)
    data.push(datos)
    res.send('exitoso!',data)
})


app.listen((3036),()=> console.log('server is running'))
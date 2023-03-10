const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/userdata").then(()=>console.log("MongoDb Server connected")).catch(()=>console.log("not connected"))
const express = require("express")
const app = express()
const path = require('path')
const session = require('express-session')
const bodyParser =require('body-parser');

const userRoute = require('./Routes/userRoute')
const adminRoute = require('./Routes/adminRoute')


app.use(express.json())
app.use(express.static(path.join(__dirname,'./Public')))
app.use(express.urlencoded({extended:true}))
app.set('view engine' , 'ejs')


app.use(session({secret:'rizin',saveUninitialized:true,resave:false,cookie:({maxAge:120000})}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req,res,next)=>{
    res.set('Cache-control','no-store,no-cache')
    next()
})


app.use('/',userRoute)
app.use('/admin',adminRoute)
app.use((req,res)=>{
    res.status(404).render("404")
})


app.listen(3000,()=>console.log('Server Running'))
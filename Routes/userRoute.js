const express= require('express')
const userRoute = express()
const usercontroller = require('../Controller/userController')
const session = require('../middleware/userSession')



// Login routes
userRoute.get('/',session.notlogged,usercontroller.loginHome)
userRoute.post('/login',session.notlogged,usercontroller.postLogin)

// LogOut
userRoute.get('/logout',session.logged,usercontroller.LogOut)

// home Route
userRoute.get('/home',session.logged,usercontroller.loadHome)

//REgister Routes
userRoute.get('/register',session.notlogged,usercontroller.registerHome)
userRoute.post('/register',session.notlogged,usercontroller.postRegister)

module.exports = userRoute
const express = require('express')
const adminRoute = express()
const adminController = require('../Controller/adminController')

adminRoute.get('/',adminController.loadLogin)
adminRoute.post('/home',adminController.loadhome)


module.exports = adminRoute
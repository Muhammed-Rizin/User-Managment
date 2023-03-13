const express = require('express')
const adminRoute = express()
const adminController = require('../Controller/adminController')
const session = require('../middleware/adminSession')
const randomstring = require('randomstring')


// Login Route
adminRoute.get('/',session.notLogged,adminController.loadLogin)
adminRoute.post('/',session.notLogged,adminController.postLogin)

// Log Out
adminRoute.get('/Log_out',session.logged,adminController.LogOut)

// Home Route
adminRoute.get('/home',session.logged,adminController.loadhome)

//New User Route
adminRoute.get('/new',session.logged,adminController.loadNewUser)
adminRoute.post('/new',session.logged,adminController.postNewUser)

// Edit User Route
adminRoute.get('/edit',session.logged,adminController.loadEdit)
adminRoute.post('/edit',session.logged,adminController.postEdit)

// Delete User Route
adminRoute.get('/delete',session.logged,adminController.deleteUser)

// Search User Route
adminRoute.post('/search',session.logged,adminController.userSearch)

module.exports = adminRoute
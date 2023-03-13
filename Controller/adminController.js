const User = require('../Model/userModel')
const bcrypt = require('bcrypt')
const randomstring = require('randomstring')

// Home Method
const loadhome = async (req, res) => {
    try {
        const usersData = await User.find({})
        res.render('adminHome', { users: usersData })
    } catch (error) {
        console.log(error.message);
    }
}


// Login Methods
const loadLogin = (req, res) => {
    res.render('adminLogin')
}

const postLogin = (req, res) => {
    try {
        const adminEmail = 'admin@gmail.com'
        const adminPassword = '123456'
        const email = req.body.email
        const password = req.body.password
        if (adminEmail == email) {
            if (adminPassword == password) {
                req.session.adminLogin = true;
                res.redirect('/admin/home')
            } else {
                res.render('adminLogin', { message: " Email or Password is incorrect" })
            }
        } else {
            res.render('adminLogin', { message: " Email or Password is incorrect" })
        }
    } catch (error) {
        console.log(error.messege);
    }

}


// Log Out
const LogOut = (req, res) => {
    req.session.adminLogin = false
    res.redirect('/admin')
}


// New User
const loadNewUser = (req, res) => {
    res.render('newUser')
}


const postNewUser = async (req, res) => {
    try {
        const name = req.body.name
        const email = req.body.email
        const password = randomstring.generate(8)
        const spassword = await securePassword(password)
        const data = new User({
            name: name,
            email: email,
            password: spassword
        })
        const result = await data.save()
        if (result) {
            res.redirect('/admin/home')
        } else {
            res.render('newUser', { messege: 'Something Wrong' })
        }
    } catch (error) {
        console.log(error.message);
    }
}
const securePassword = async (password) => {
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        return passwordHash;
    } catch (error) {
        console.log(error.message);
    }
}


//Edit User

const loadEdit = async (req, res) => {
    try {
        const id = req.query.id;
        const userData = await User.findById({ _id: id })
        if (userData) {
            res.render('editUser', { user: userData })
        }
    } catch (error) {
        console.log(error.message);
    }

}

const postEdit = async (req, res) => {
    try {
        await User.findByIdAndUpdate({ _id: req.body.id }, { $set: { name: req.body.name, email: req.body.email } })
        res.redirect('/admin/home')
    } catch (error) {
        console.log(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.query.id
        await User.deleteOne({ _id: id })
        res.redirect('/admin/home')
    } catch (error) {
        console.log(error.message);
    }
}

const userSearch = async (req, res) => {
    try {
        const searchValue = req.body.search
        const search = searchValue.trim()
        if (search != "") {
            let users = await User.find({ name: { $regex: `^${search}`, $options: 'i' } })
            res.render("adminHome", { users:users })
        }else{
            res.redirect('/admin/home')
        }
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    loadhome,
    loadLogin,
    postLogin,
    LogOut,
    loadNewUser,
    postNewUser,
    loadEdit,
    postEdit,
    deleteUser,
    userSearch
}
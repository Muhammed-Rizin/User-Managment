const User = require('../Model/userModel')

const loadHome = (req,res)=>{
    res.render('home')
}


// Login Methods

const loginHome = (req,res) => {
    res.render('login')
}

const postLogin = async(req,res) =>{
    try {
        const {email,password} = req.body
        const result  = await User.findOne({email:email})
        if(result){
            if(password==result.password){
                req.session.login = true
                res.redirect('/home')
            }else{
                res.redirect('/')
            }
        }else{
            res.redirect('/')
        }
    } catch (error) {
        console.log(error.message);
    }
}

// Register Methods

const registerHome = (req,res) => {
    res.render('sign up')
}

const postRegister = async(req,res) =>{
    try {
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const data = new User({
            name : name,
            email : email,
            password : password
        })
        const result = await data.save()
        if(result){
            res.redirect('/')
        }else{
            res.redirect('/register')
        }
    } catch (error) {
        console.log(error.message);
    }
}

// LogOut methods
const LogOut = (req,res) => {
    req.session.login = false
    res.redirect('/')
}

module.exports = {
    loadHome,
    loginHome,
    registerHome,
    postRegister,
    postLogin,
    LogOut
}
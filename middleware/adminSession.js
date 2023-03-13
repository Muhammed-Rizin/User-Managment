const logged = (req,res,next) => {
    if(req.session.adminLogin){
        next()
    }else{
        res.redirect('/admin')
    }
}

const notLogged = (req,res,next) => {
    if(req.session.adminLogin){
        res.redirect('/admin/home')
    }else{
        next()
    }
}

module.exports = {
    logged,
    notLogged
}
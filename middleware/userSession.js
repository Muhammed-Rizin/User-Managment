const logged = (req,res,next) =>{
    if(req.session.login){
        next()
    }else{
        res.redirect('/')
    }
}

const notlogged = (req,res,next) =>{
    if(req.session.login){
        res.redirect('/home')
    }else{
        next()
    }
}

module.exports ={
    logged,
    notlogged
}
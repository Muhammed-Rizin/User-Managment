const loadhome = (req,res) => {
    res.render('adminHome')
}

const loadLogin = (req,res) => {
    res.render('adminLogin')
}

module.exports = {
    loadhome,
    loadLogin
}
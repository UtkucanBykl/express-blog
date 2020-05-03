const authControl = (req, res, next) => {
    const token = req.header('authorization')
    if(token == '123'){
        next()
    }
    else{
        res.status(403).json('İzin verilmedi')
    }
}

module.exports = authControl;

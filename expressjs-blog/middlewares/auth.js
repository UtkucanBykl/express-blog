const authControl = (req, res, next) => {
    const token = req.header('authorization')
    const token_env = process.env.TOKEN
    if(token === token_env){
        next()
    }
    else{
        res.status(403).json('İzin verilmedi')
    }
}

module.exports = authControl;

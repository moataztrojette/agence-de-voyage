const jwt = require("jsonwebtoken")


module.exports.isLogin = async (req,res,next)=>{
    const token = req.session.token
    jwt.verify(token,process.env.SECURITE,(error,decoded)=>{
      if(error){
        return res.status(403).send('invalid token')
      }
      req.info_compte = decoded
      next()
    })
}


const admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();




module.exports.se_connecter = (req,res)=>{
    let identifiant = req.body.identifiant;
    let mdp = req.body.mdp;
   
    if(identifiant ==="admin" && mdp ==="admin123"){
        
      const tokenAdmin = jwt.sign({
        identifiant: identifiant,
        mdp : mdp
    },process.env.SECURITE,{
        expiresIn : '15d'
      });
      req.session.token  = tokenAdmin
      res.status(200).send("is Admin");
    }else{
      return res.status(404).send("Identifiant ou mot de passe incorrect")
    }
}

module.exports.se_deconnecter = (req,res)=>{
    req.session = null
    res.send('logout')
}
module.exports.verife = (req, res) => {
  const token = req.session.token;
  jwt.verify(token, process.env.SECURITE, (error, decoded) => {
    if (error) {
      return res.status(403).send("invalid token");
    }
    res.json(decoded);
  });
};





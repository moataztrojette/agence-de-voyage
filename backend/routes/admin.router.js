const express = require("express")
const router = express.Router()
const {se_connecter,se_deconnecter,verife} = require("../controllers/admin")
const { isLogin } = require("../middleware/auth")


router.post('/connexion',se_connecter)
router.post('/deconnexion',se_deconnecter)
router.get('/verife',verife)

module.exports = router;



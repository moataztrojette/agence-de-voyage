const mongoose = require("mongoose")

const admin = new mongoose.Schema({
   
    mdp :{type:String,required:true},
    login:{type:String,required:true},

})
const admins = mongoose.model("admins",admin);
module.exports = admins;


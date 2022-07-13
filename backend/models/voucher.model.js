const mongoose = require("mongoose")

const voucher = new mongoose.Schema({
   
    nom_client :{type:String,required:true},
    prenom_client:{type:String,required:true},
    nom_hotel:{type:String,required:true},
    adresse_hotel:{type:String,required:true},
    tel_hotel:{type:Number,required:true},
    date_arriver:{type:String,required:true},
    nuits:{type:Number,required:true},
    chambres:{type:String,required:true},
    adultes:{type:Number,required:true},
    enfants:{type:Number,required:true},
    bebes:{type:Number,required:true},
    formule:{type:String,required:true},
    montant:{type:Number,required:true},
    date_emission:{type:String,required:true},
    heure_emission : {type:String,required:true},
    date:{
        jour:{type:Number, required:true},
        mois:{type:Number, required:true},
        année:{type:Number, required:true}
    }
})
const vouchers = mongoose.model("vouchers",voucher);
module.exports = vouchers;


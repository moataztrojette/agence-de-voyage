const mongoose = require("mongoose")

module.exports = ()=>{
    mongoose.connect("mongodb+srv://pms:2kGwgseLsO3YgU4J@cluster0.i2mrpqs.mongodb.net/agence-de-voyage?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },(err)=>{
        if(err) throw err
        console.log("connected to db")
    })
}
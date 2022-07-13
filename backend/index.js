const express = require("express")
const app = express();
const cors = require("cors")

const env = require('dotenv')
const cookieSession = require('cookie-session')
const expressfileupload = require("express-fileupload")


const admin = require("./routes/admin.router");
const voucher = require("./routes/voucher.router");




env.config()
app.use(cors({ origin: "http://localhost:3000",credentials:true }));
app.use(express.json())
app.use(cookieSession({
  name : 'EB',
  keys : ['EB_key'],
}))
app.use(expressfileupload({

}))



require("./DB/setup")()
app.use("/api/admin",admin)
app.use("/api/voucher",voucher)





app.listen(4000,()=>{
  console.log("Listening on port 4000");
})
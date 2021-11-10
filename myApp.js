const express = require("express")
const app = express()

let dateObj={}

app.get("/api/:date",(req,res)=>{
  res.json({unix:req.params.date}
    //dateObj['unix']=req.params.date
    )
})
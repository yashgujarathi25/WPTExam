const express = require('express')
const app = express();
const bodyparser = require("body-parser")
const cors = require('cors')
const db = require('./db')
const util = require('./util')
app.use(cors('*'))
app.use(bodyparser.json())

app.get("/",(req,resp)=>{
    resp.send("hii")
})
app.post('/register',(req,resp)=>{
    const {prn , pass, cpass } = req.body
    const query = `insert into auth values(${prn},'${pass}','${cpass}')`

    db.query(query, (error,result)=>{
        resp.send(util.createResult(error,result))
    })
})
app.listen(4000,'0.0.0.0', () => {
    console.log("Server running on port 3000")
})
const express = require('express')
const app = express()
const path = require('path')
const port = 3000;
const mailerRoute = require('./route.controller')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('server')
})
app.use('/sendMail',mailerRoute)
app.listen(port,()=>{
    console.log(`server listening ${port}`)
})
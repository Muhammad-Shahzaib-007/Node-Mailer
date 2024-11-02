const express = require('express')
const router = express.Router();
const nodemailer = require('nodemailer')
const transport = nodemailer.createTransport({
    service:'gmail',
    secure:true,
    port:465,
    auth:{
        user:'mshizzi141@gmail.com',
        pass:"trub qypq bpei rsig",
    }
})
router.post('/',(req,res)=>{
    // const {text,subject,to}=req.body;
    console.log('Post request')
    const reciever ={
        from:"mshizzi141@gmail.com",
        to:"mshizzi007@gmail.com",
        subject:"Nodemailer",
        text:"Mailed Success",}
    transport.sendMail(reciever,(err,success)=>{
        if(err){
           return  false
        }
        return res.status(200).send(success)
    })

})


module.exports = router;
const router =require('express').Router();
const bcrypt = require('bcrypt');
const user =require('../model/users')
const {verifytoken ,verifytokenAndauthorization }=require('./verifytoken');


router.patch('/:id',verifytokenAndauthorization ,async(req,res)=>{

    const password =req.body;
    if(password){
        password = await bcrypt.hash(password,12)
    }
    const updateuser = await user.findByIdAndUpdate(req.params.id,
        {
            $set:req.body,
        },
        {new:true}
    )
})


module.exports =router
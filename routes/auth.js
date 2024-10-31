const router =require('express').Router();
const bcrypt =require('bcrypt');
const user = require('../model/users');
const jwt =require('jsonwebtoken');


//REGISTER

router.post('/register', async(req,res,next)=>{
    try {
        const {username ,email,password,conformPassword}=req.body;

    if(!(username && email && password && conformPassword)){
        return res.status(400).send('Fields is missing');
    }

    if(password !==conformPassword){
        return res.status(200).send('Password not match');
    }

    const newuser = await user.findOne({email});


    if(newuser) return res.status(200).send('User already existing in DB');


    const haspassword1 = await bcrypt.hash(password ,12);
    const hashpassword2 = await bcrypt.hash(conformPassword ,12);
    
    const saveuser = await user.create({
        username,
        email,
        password:haspassword1,
        conformPassword:hashpassword2
    })


    res.status(200).send('New user registered ');
    } catch (error) {
        res.send(error);        
    }

})


//LOGIN EXISTING USER

router.post('/login',async(req,res,next)=>{
    try {

        const {email,password} =req.body;

        if(!(email && password)) return res.send('Email and password required');

        const userexist = await user.findOne({email});
        if(!userexist){
            return res.status(200).send('Email or password incorrected !');
        }
        if((password && (await bcrypt.compare(password ,userexist.password)))){

            const {password,conformPassword, ...other} =userexist._doc;

            const token =jwt.sign(
                {
                    id:userexist._id,
                    isadmin:userexist.isAdmin
                },
                    process.env.JWT_SECURITY,
                {
                    expiresIn:'10m'
                }

            )
            return res.status(200).json({...other,token});
        }

        res.status(200).send('Email or password incorrected !');
        
    } catch (error) {
        console.log(error);
    }
})


module.exports =router
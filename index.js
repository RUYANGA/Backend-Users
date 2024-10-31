require('dotenv').config();
const express= require('express');
const app=express();
const mongoose =require('mongoose');
const userRouter =require('./routes/users');
const authRouter =require('./routes/auth');

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('DB connection successfuly');
})
.catch((e)=>{
    console.log('Error to connect DB');
    console.log(e);
})


app.use(express.json())
app.use('/api/auth',authRouter);
app.use('/api/users',userRouter);


app.listen(process.env.PORT || 3000,()=>{
    console.log('E-commerce server is running at 3000 ports')
})
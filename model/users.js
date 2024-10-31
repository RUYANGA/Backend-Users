const mongoose =require('mongoose')

const UserSChem = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    conformPassword:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
} ,
{timestamps:true}
)


module.exports = mongoose.model('Users',UserSChem);
const mongoose =require('mongoose')

const ProductSChem = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        discription:{
            type:String,
            required:true,
        },
        category:{
            type:Array,
            required:true
    
        },
        img:{
            type:String,
            required:true
        },
        color:{
            type:String,
            },
        size:{
            type:String
        },
        price:{
            type:Number,
            required:true
        },
    },
    {timestamps:true}
)


module.exports = mongoose.model('Product',ProductSChem);
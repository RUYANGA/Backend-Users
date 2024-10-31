const mongoose =require('mongoose')

const OrderSChem = new mongoose.Schema(
    {
        userid:{type:String,required:true},
        products:[
            {
                productid:{
                    type:String,
                    required:true
                },
                quantity:{
                    type:Number,
                    required:true,
                    default:1
                }
            }
        ],
        amount:{type:Number,required:true},
        address:{type:Object ,required:true},
        atatus:{type:String,required:true,default:"Pedding"}
    },
    {timestamps:true}
)


module.exports = mongoose.model('Order',ProductSChem);
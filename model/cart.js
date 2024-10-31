const mongoose =require('mongoose')

const CartSChem = new mongoose.Schema(
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
        ]
    },
    {timestamps:true}
)


module.exports = mongoose.model('Cart',ProductSChem);
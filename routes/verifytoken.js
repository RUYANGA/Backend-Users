const jwt = require('jsonwebtoken');

const verifytoken = (req,res,next)=>{
    const authheander = req.headers.token;

    if (authheander) {
        const token =authheander.split(" ")[1]
        jwt.verify(token ,process.env.JWT_SECURITY,(error ,user)=>{
            if(error){
                return res.status(403).json("token is not valid !")
            }
            req.user=user;
            next();
        })
        
    } else {
        return res.status(401).json("Your are not authenticated !")
    }
}

const verifytokenAndauthorization = (req,res,next)=>{
    verifytoken(req,res,()=>{
        if(req.user.id === req.parmas || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("your are not allowed to do that !")
        }
    })

}

module.exports={verifytoken,verifytokenAndauthorization  }
const jwt = require("jsonwebtoken")
const asyncHandler =require("express-async-handler")
const User = require("../models/user.model")

const protect = asyncHandler(async(req,res,next)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
        try{
            token= req.headers.authorization.split(' ')[1]

            if(token === 'null')
                res.status(401).json({message:"invalid token in auth middleware"})

            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')

            next()

        }catch(err){
            res.status(401)
            throw new Error("Not Authorized")
        }
    }

    if(!token){
        res.status(401)
        throw new Error("Not Authorized, No token")
    }
})

module.exports= {protect}
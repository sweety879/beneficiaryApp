const mongoose = require("mongoose")

const connectDB= async()=>{
    try{
        const conn = await mongoose.connect("mongodb://localhost/beneficiaryDB",{
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log(`DB connected: ${conn.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB
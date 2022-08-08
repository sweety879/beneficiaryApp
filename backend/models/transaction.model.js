const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
    amount:{
        type:Number,
        required:[true,"Please add amount"]
    },
    receiver_id:{
        type:mongoose.Schema.Types.ObjectId,
         required:true,
        ref:'BankAccount'
    },
    sender_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'BankAccount'
    },
    date: { type: Date, default: Date.now }
}, {
        timestamps:true
         
})

module.exports= mongoose.model('Transaction',transactionSchema)
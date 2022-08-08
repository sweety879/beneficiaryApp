const mongoose = require('mongoose')

const bankAccountSchema = mongoose.Schema({
    bankAccountNumber:{
        type:String,
        required:[true,'Please add a bank account number']
    },
    accountType:{
        type:String,
        required:[true,'Please add a account Type'],
    },
    balance:{
        type:Number,
        required:[true,'Please add a amount']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
})

module.exports=mongoose.model('BankAccount',bankAccountSchema)
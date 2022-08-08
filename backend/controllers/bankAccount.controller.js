const asyncHandler = require("express-async-handler")
const  BankAccount = require('../models/bankAccount.model')

const getBankAccount = (asyncHandler(async (req,res)=>{
    const accounts = await BankAccount.find({user:req.user.id})
    res.status(200).json(accounts)
}))

const verifyBankAccount = (asyncHandler(async (req,res)=>{
    const account = await BankAccount.findOne({bankAccountNumber:req.params.id})
    res.status(200).json(account)
}))

const setBankAccount = (asyncHandler(async (req,res)=>{
    if(!req.body.bankAccountNumber || !req.body.accountType || !req.body.balance || !req.user){
        req.status(400)
        throw new Error('Please add a text field')
    }
    const account = await BankAccount.create({
        bankAccountNumber:req.body.bankAccountNumber,
        balance:req.body.balance, 
        accountType:req.body.accountType,
        user:req.user.id
    })
    res.status(200).json(account)
}))



module.exports={getBankAccount,setBankAccount,verifyBankAccount}

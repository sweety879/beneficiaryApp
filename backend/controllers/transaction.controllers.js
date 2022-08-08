const asyncHandler = require("express-async-handler")
const Transaction = require("../models/transaction.model")
const BankAccount =  require('../models/bankAccount.model')

const getTransactions = asyncHandler(async (req,res)=>{
    const transactions = await Transaction.find()
    res.status(200).json(transactions)
})

const setTransactions = asyncHandler(async (req,res)=>{
    console.log(req.body)
    if(!req.body.sender_id || !req.body.receiver_id || !req.body.amount){
        req.status(400)
        throw new Error('Please fill sender,receiver,amount details')
    }
    const sender = await BankAccount.updateOne({_id:req.body.sender_id},{$inc: { balance: -parseInt(req.body.amount)}},{new:true})
    // console.log("sender @@@@@@@@@@@@@@@@ ",sender)
    const receiver = await BankAccount.updateOne({_id:req.body.receiver_id},{$inc: { balance: parseInt(req.body.amount)}},{new:true}) 
    // console.log("receiver @@@@@@@@@@@@@@@@ ",receiver)   

    const transaction = await Transaction.create({
        sender_id:req.body.sender_id,
        receiver_id:req.body.receiver_id,
        amount:req.body.amount
    })
    console.log(transaction)
    res.status(200).json(transaction)
})

const getTransactionsById = asyncHandler(async (req,res)=>{
    const transactions = await Transaction.find({$or:[{sender_id:req.params.id},{receiver_id:req.params.id}]})
    // console.log(transactions)
    res.status(200).json(transactions)
})


module.exports={getTransactions,setTransactions,getTransactionsById}
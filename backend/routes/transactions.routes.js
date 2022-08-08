const express = require("express")
const router = express.Router()
const {getTransactions,setTransactions,getTransactionsById} = require("../controllers/transaction.controllers")
const {protect} = require('../middleware/authMiddleware')

router.route('/')
                .get(protect,getTransactions)
                .post(protect,setTransactions)    

router.route('/:id')
                    .get(protect,getTransactionsById)


module.exports = router
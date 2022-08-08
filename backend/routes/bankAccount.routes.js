const express = require("express")
const router = express.Router()
const {getBankAccount,setBankAccount,verifyBankAccount} = require('../controllers/bankAccount.controller')
const {protect} = require('../middleware/authMiddleware')

router.route('/')
                .get(protect,getBankAccount)
                .post(protect,setBankAccount)  

router.route('/verify/:id') 
                .get(protect,verifyBankAccount)                 

module.exports = router
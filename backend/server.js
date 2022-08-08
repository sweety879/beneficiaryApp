const express = require("express")
const dotenv = require("dotenv").config()
const cors = require('cors')
const port= process.env.PORT || 5000 
const {errorHandler} = require("./middleware/error.middleware")
const connectDB = require('./config/db')

const app=express()

connectDB()

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/goals',require('./routes/goal.routes'))
app.use('/api/users',require('./routes/user.routes'))
app.use('/api/users/bankAccounts',require('./routes/bankAccount.routes'))
app.use('/api/users/bankAccounts/transactions',require('./routes/transactions.routes'))


app.use(errorHandler)

app.listen(port,()=>{console.log(`listening to the port ${port}`)})

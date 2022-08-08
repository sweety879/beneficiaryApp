const asyncHandler = require("express-async-handler")
const Goal = require('../models/goals.model')

const getGoals = asyncHandler(async (req,res)=>{
    const goals = await Goal.find()
    // console.log(goals)
    res.status(200).json(goals)
})

const setGoals = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        req.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text:req.body.text,
        user:req.user.id
    })
    res.status(200).json(goal)
})

const updateGoals = asyncHandler(async (req,res)=>{
    const goal =  await Goal.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    if(!goal){
        req.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json(goal)
})

const deleteGoals = asyncHandler(async (req,res)=>{
   const goal= await Goal.findById(req.params.id)
   if(!goal){
        req.status(400)
        throw new Error('Please add a text field')
    }
    await goal.remove()
    res.status(200).json({message:`delete goals ${req.params.id} `})
})

module.exports={getGoals,setGoals,updateGoals,deleteGoals}
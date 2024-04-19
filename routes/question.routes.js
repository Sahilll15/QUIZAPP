const express=require('express')

const router=express.Router()

const {createQuestions,getQuestions}=require('../controllers/questions.controllers')


router.post('/create/:quizId',createQuestions)
router.get('/get/:quizId',getQuestions)


module.exports=router
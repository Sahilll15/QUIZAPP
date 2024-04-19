const {createQuiz,getQuiz}=require('../controllers/quiz.controllers')
const {verifyJWT}=require('../middlewares/verify.middleware')

const express=require('express')

const router=express.Router()

router.post('/create',verifyJWT,createQuiz)
router.get('/get',getQuiz)


module.exports=router
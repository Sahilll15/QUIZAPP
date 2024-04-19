const {TakeQuiz,sumbitQuiz}=require('../controllers/takeQuiz.cotrollers')
const { verifyJWT } = require('../middlewares/verify.middleware')


const express=require('express')
const router=express.Router()

router.post('/start/:quizId',verifyJWT,TakeQuiz)
router.post('/submit/:quizId',verifyJWT,sumbitQuiz)


module.exports=router

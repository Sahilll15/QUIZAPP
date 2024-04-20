const {QuizModel}=require('../models/quiz.models')

const createQuiz=async(req,res)=>{
    console.log(req.user)
    try{
        const {name}=req.body;
        const quiz=new QuizModel({
            name,
            userId:req.user.id
        })
        await quiz.save()
        res.status(201).send({
            quiz:quiz
        })
    }
    catch(e){
        res.status(400).send(e)
    }
}

const getQuiz=async(req,res)=>{
    try{
        const quiz=await QuizModel.find().populate('questions')
        if(!quiz){
            return res.status(404).send('Quiz not found')
        }
        res.status(200).send(quiz)
    }
    catch(error){
        res.status(500).json({error:error})
    }}



const startQuiz=async(req,res)=>{
    try{
        const {quizId}=req.params;
        const quiz=await QuizModel.findById(quizId)
        if(!quiz){
            return res.status(404).send('Quiz not found')
        }
        res.status(200).send(quiz)
    }
    catch(e){
        res.status(400).send(e)
    }
}


    module.exports={createQuiz,getQuiz}
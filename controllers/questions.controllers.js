const {QuestionModel}=require('../models/question.models');
const { QuizModel } = require('../models/quiz.models');


const createQuestions=async(req,res)=>{
    const {quizId}=req.params;
    try{
        const {question,options,answer}=req.body;
        const quizExists=await QuizModel.findById(
            quizId
        )

        if(!quizExists){
            return res.status(404).send('Quiz not found')
        }


        const questionModel=new QuestionModel({
            Quiz:quizId,
            question,
            options,
            answer
        })

        
        await quizExists.questions.push(questionModel._id)
        await quizExists.save()

        await questionModel.save()
        res.status(201).send({
            message:"Question created successfully",
            question:questionModel
        })
    }
    catch(e){
        console.log(e)
        res.status(400).json({
            error:e
        })
    }
}

const getQuestions=async(req,res)=>{
    const {quizId}=req.params;
    try {

        const quiz=await QuizModel.findById
        (quizId).populate('questions')

        if(!quiz){
            return res.status(404).send('Quiz not found')
        }

        res.status(200).send({
            questions:quiz.questions
        })
    } catch (error) {
        res.status(500).json({error:error})
    }
}




module.exports={createQuestions
    ,
    getQuestions
}
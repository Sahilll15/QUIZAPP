const {TakeQuizModel}=require('../models/takeQuiz.model')
const {QuizModel}=require('../models/quiz.models')


const TakeQuiz=async(req,res)=>{
    const {quizId}=req.params;
    try {

        const quiz=await QuizModel.findById
        (quizId).populate('questions')
        const takeQuiz=await TakeQuizModel.create
        ({
            quizId:quizId,
            userId:req.user.id
        })

        if(!quiz){
            return res.status(404).send('Quiz not found')
        }

        const questions=quiz.questions;


       

        res.status(200).send({
            message:"Quiz started",
            quiz:quiz,
            questions:questions,
            takeQuiz:takeQuiz
        })

    }
    catch (error) {
        console.log(error)
            res.status(500).json({
                        message:error.message
                    })
    }

}

const sumbitQuiz=async(req,res)=>{
    const {quizId}=req.params;
    const {solution}=req.body;
    try {
        const quiz=await QuizModel.findById(quizId).populate('questions')

        let marks=0;
        for(let i=0;i<quiz.questions.length;i++){
            console.log(solution[i],quiz.questions[i].answer)
            if(solution[i]===quiz.questions[i].answer){
                marks++;
            }
        }

        if(!quiz){
            return res.status(404).send('Quiz not found')
        }
       
        const takeQuiz=await TakeQuizModel.findOneAndUpdate({
            quizId:quizId,
            userId:req.user.id
        },{
            marks:marks,
            status:'completed'
        },{
            new:true
        })

            if(!takeQuiz){
                return res.status(404).send('Quiz not found')
            }

        res.status(200).send({
            message:"Quiz submitted successfully",
            takeQuiz:takeQuiz
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


module.exports={
    TakeQuiz,
    sumbitQuiz
}
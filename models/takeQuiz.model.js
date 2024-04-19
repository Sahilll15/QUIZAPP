const mongoose=require('mongoose')


// const TakeQuiz=async(req,res)=>{
//     const {quizId}=req.params;
//     try {

//         const quiz=await QuizModel.findById(quizId);

//         if(!quiz){
//             return res.status(404).send('Quiz not found')
//         }


        
        
//     } catch (error) {
        
//     }
// }   

const takeQuizModel=new mongoose.Schema({
    quizId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Quiz',
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    marks:{
        type:Number,
        
    },
    status:{
        emum:['completed','incomplete'],
       
    }
})

const TakeQuizModel=mongoose.model('TakeQuiz',takeQuizModel)

module.exports={TakeQuizModel}

const mongoose=require('mongoose')

const Quiz=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    questions:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Question',
            
        }
    ]
    
});

const QuizModel=mongoose.model('Quiz',Quiz)


module.exports={QuizModel}


const mongoose=require('mongoose')


const Questions=new mongoose.Schema({
    Quiz:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Quiz',
        required:true},

    question:{
        type:String,
        required:true
    },
    options:[
        {
            type:String,
            required:true
        }
    ],
    answer:{
        type:String,
        required:true
    }
    
});


const QuestionModel=mongoose.model('Question',Questions)

module.exports={QuestionModel}
const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const userRoutes=require('./routes/user.routes')
const quizRoutes=require('./routes/quiz.routes')
const questionRoutes=require('./routes/question.routes')
const takeQuizRoutes=require('./routes/takeQuiz.routes')
const cors=require('cors')

const url=process.env.mongo_url

const app=express()

mongoose.connect(url).then(()=>{
    console.log('connected to database')
})

app.use(express.json())
app.use(cors())

app.use('/user',userRoutes)
app.use('/quiz',quizRoutes)
app.use('/question',questionRoutes)
app.use('/takeQuiz',takeQuizRoutes)


app.listen(4000,()=>{
    console.log('server is running on port 4000')
}
)
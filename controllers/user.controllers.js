const {User} =require('../models/user.models')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')


const createUser=async(req,res)=>{
    try{

        const {email,password,name,type}=req.body;

        const existingUser=await User.findOne({email:email})

        if(existingUser){
            return res.status(400).send('User already exists')
        }

        const hashsedpassword=await bcrypt.hash(password,8)

        const user=new User({
            name,
            email,
            password:hashsedpassword,
            type
        })

        
        
        await user.save()
        res.status(201).send(user)
    }
    catch(e){
        res.status
    }
}



const login=async(req,res)=>{
    const {email,password}=req.body
    try {

        const user=await User.findOne({
            email:email
        })

        if(!user){
            return res.status(400).send('User not found')
        }

        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).send('Invalid credentials')
        }

        const token=jwt.sign({
            user:{
                id:user.id,
                email:user.email,
                name:user.name,
                type:user.type
            }
        },process.env.JWT_SECRET)

        res.send({user,token})

    } catch (error) {
        res.status(500).send(error)
        
    }
}

const getUsers=async(req,res)=>{
    try{
        const users=await User.find()
        res.send(users)
    }
    catch(e){
        res.status(500).send(e)
    }
}


module.exports={createUser,getUsers,login}

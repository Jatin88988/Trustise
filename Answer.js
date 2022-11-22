const express = require('express')
const router = express.Router()

const answerDB = require('../models/Answers')


router.post('/', async(req,res)=>{
    try{
        await answerDB.create({
            answer: req.body.answer,
            questionId: req.body.questionId,
            user: req.body.user
        }).then(()=>{
            res.status(200).send({
                status: true,
                message:"Answer added with success"
            })
        }).catch((e)=>{
            res.status(400).send({
                status:false,
                message:"Bad req"
            })
        })
    }
    catch(e){
        res.status(500).send({
            status: false,
            message:"Error while adding answer"
        })
    }
})


module.exports = router
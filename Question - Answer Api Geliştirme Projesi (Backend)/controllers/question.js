const Question = require("../models/Question")

const CustomError  = require("../helpers/error/CustomError")
const asyncErrorWrapper = require("express-async-handler")
const {questionQueryMiddleware} =require("../middlewares/query/questionQueryMiddleware")

const getAllQuestions = asyncErrorWrapper(async (req,res,next) => {
    return res.status(200).json(res.queryResults)
})

const askNewQuestion = asyncErrorWrapper(async (req,res,next) => {
    const information = req.body;
    const question = await Question.create({
        title : information.title,
        content : information.content,
        // Veya
        // ...information
        user : req.user.id
    });
    res.status(200)
    .json({
        success : true,
        data : question
    })
});

const getSingleQuestion = asyncErrorWrapper(async (req,res,next) => {
    return res.status(200).json(res.queryResults);

});


const editQuestion = asyncErrorWrapper(async (req,res,next) => {
    const {id} =req.params;
    
    const {title, content} = req.body;

    let question  = await Question.findById(id);

    question.title = title;
    question.content = content;

    question = await (question).save();
    return res.status(200)
    .json({
        success : true,
        data : question
    });
    
});

const deleteQuestion = asyncErrorWrapper(async (req,res,next) => {
    const {id} =req.params;

    await Question.findByIdAndDelete(id);

    return res.status(200)
    .json({
        success : true,
        message : "Question Detele Operation is Successfull"
    });

});

const likeQuestion = asyncErrorWrapper(async (req,res,next) => {
    const {id} =req.params;

    const question = await Question.findById(id);

    // Like etmişse
    if(question.likes.includes(req.user.id)){
        return next(new CustomError("You already liked this question", 400))
    }

    question.likes.push(req.user.id);
    question.likeCount = question.likes.length
    
    await question.save();

    return res.status(200)
    .json({
        success : true,
        data : question
    });

});

const undoLikeQuestion = asyncErrorWrapper(async (req,res,next) => {
    const {id} =req.params;

    const question = await Question.findById(id);

    // Like etmemişse
    if(!question.likes.includes(req.user.id)){
        return next(new CustomError("You didn't like this question", 400))
    }

    const index = question.likes.indexOf(req.user.id);
    question.likes.splice(index, 1);
    question.likeCount = question.likes.length

    await question.save();
    
    
    return res.status(200)
    .json({
        success : true,
        data : question
    });

});


module.exports = {
    // Birçok fonksiyonumuz olduğu için bu şekilde oluşturduk
    askNewQuestion,
    getAllQuestions,
    getSingleQuestion,
    editQuestion,
    deleteQuestion,
    likeQuestion,
    undoLikeQuestion
}
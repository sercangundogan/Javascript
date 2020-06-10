const express = require('express');
// api/question router'ları buraya gelmeli
const router = express.Router();
const Question = require("../models/Question")

const { getAccessToRoute, getQuestionOwnerAccess, } = require("../middlewares/authorization/auth")
const { askNewQuestion, getAllQuestions, getSingleQuestion, editQuestion, deleteQuestion, likeQuestion, undoLikeQuestion } = require("../controllers/question")
const { checkQuestionExist } = require("../middlewares/database/databaseErrorHelpers")
const { questionQueryMiddleware } = require("../middlewares/query/questionQueryMiddleware")
const { answerQueryMiddleware } = require("../middlewares/query/answerQueryMiddleware")
const answer = require("./answer")

router.get("/", questionQueryMiddleware(Question, {
    population: {
        path: "user",
        select: "name profile_image",
    }
}), getAllQuestions);
router.post("/ask", getAccessToRoute, askNewQuestion);
router.get("/:id", [checkQuestionExist, answerQueryMiddleware(Question, {
    population : [
        {
            path : "user",
            select : "name profile_image"
        },
        {
            path : "answers",
            select : "content"
        }
    ]
})], getSingleQuestion);
router.put("/:id/edit", [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess], editQuestion)
router.delete("/:id/delete", [getAccessToRoute, checkQuestionExist], deleteQuestion)
router.get("/:id/like", [getAccessToRoute, checkQuestionExist], likeQuestion)
router.get("/:id/undo_like", [getAccessToRoute, checkQuestionExist], undoLikeQuestion)

router.use("/:question_id/answers", checkQuestionExist, answer)
// Dışarı aktarıyoruz - Server.js 'de kullanabilmek için.
module.exports = router;
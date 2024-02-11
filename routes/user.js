const express = require('express');
const userRouter = express.Router();


const { handleCreateNewUser } = require('../controllers/user');
userRouter.route('/')
    .post(handleCreateNewUser)


module.exports = {
    userRouter
}
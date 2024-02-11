const express = require('express');
const userRouter = express.Router();


const { handleUserLogin, handleUserSignup } = require('../controllers/user');
userRouter.post("/",handleUserSignup);
userRouter.post("/login", handleUserLogin);

    


module.exports = {
    userRouter
}
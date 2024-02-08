const express = require('express');
const expenseRouter = express.Router();

const { handleCreateNewExpense, handleGetAllExpense, handleGetExpenseById, handleUpdateExpenseById, handleDeleteExpenseById } = require("../controllers/expense");

expenseRouter.route("/")
    .get(handleGetAllExpense)
    .post(handleCreateNewExpense)

expenseRouter.route("/:id")
    .get(handleGetExpenseById)
    .patch(handleUpdateExpenseById)
    .delete(handleDeleteExpenseById)



module.exports = {
    expenseRouter,
}
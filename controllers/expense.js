const { expenseModel } = require("../models/expense");

const handleGetAllExpense = (req, res) => {
    expenseModel.find({})
        .then((expenseList) => { return res.send(expenseList) })
}

const handleCreateNewExpense = (req, res) => {
    expenseModel.create({
        title: req.body.title,
        amount: req.body.amount,
        category: req.body.category,
        payment_method: req.body.payment_method,
        note: req.body.note
    }).then((result) => {
        return res.sendStatus(201);
    })
}

const handleGetExpenseById = (req, res) => {
    expenseModel.findById(req.params.id)
        .then((result) => {
            if (!result)
                return res.sendStatus(404);
            else
                return res.send(result);
        })
}

const handleUpdateExpenseById = (req, res) => {
    expenseModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        amount: req.body.amount,
        category: req.body.category,
        payment_method: req.body.payment_method,
        note: req.body.note
    })
        .then((result) => {
            if (!result)
                return res.sendStatus(404);
            else
            return res.sendStatus(200);
        })
}

const handleDeleteExpenseById = (req, res) => {
    expenseModel.findByIdAndDelete(req.params.id)
        .then((result) => {
            if (!result)
                return res.sendStatus(404);
            else
                return res.sendStatus(200);
        });
}
module.exports = {
    handleCreateNewExpense,
    handleGetAllExpense,
    handleGetExpenseById,
    handleUpdateExpenseById,
    handleDeleteExpenseById,
}
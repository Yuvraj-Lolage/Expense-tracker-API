const express = require('express');
const categoryRouter = express.Router();

const { handleGetAllCategories, handleCreateNewCategory, handleGetCategoryById, handleUpdateCategory, handleDeleteCategory } = require("../controllers/categories");
categoryRouter.route("/")
    .get(handleGetAllCategories)
    .post(handleCreateNewCategory)

categoryRouter.route("/:id")
    .get(handleGetCategoryById)
    .patch(handleUpdateCategory)
    .delete(handleDeleteCategory)

module.exports = {
    categoryRouter
}
const { category } = require("../models/categories");

const handleGetAllCategories = async (req, res) => {
    await category.find({}).then((categoryList) => {
        res.send(categoryList);
    })
}

const handleCreateNewCategory = async(req, res) => {
    await category.create({
        category_name: req.body.category_name
    })
    res.sendStatus(201);
}

const handleGetCategoryById = async (req, res) => {
    await category.findById(req.params.id).then((result) => {
        res.send(result);
    })
}

const handleUpdateCategory = async (req, res)=> {
    await category.findByIdAndUpdate(req.params.id, { category_name: req.body.category_name }).then(
        () => {
            res.send(200);
        }
    )
}

const handleDeleteCategory = async (req, res)=> {
    await category.findByIdAndDelete(req.params.id).then(() => {
        res.send(200);
    })
}

module.exports = {
    handleGetAllCategories,
    handleCreateNewCategory,
    handleGetCategoryById,
    handleUpdateCategory,
    handleDeleteCategory
}

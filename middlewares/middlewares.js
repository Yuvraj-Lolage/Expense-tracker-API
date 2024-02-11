const fs = require('fs');
const { category } = require('../models/categories');


const handleReqResLog = (fileName) => {
    return (req, res, next) => {
        fs.appendFile(fileName,`\n${ Date.now() } ${ req.method } ${ req.ip } ${ req.path }\n`,
        (err, data) => {
            next();
        });
    }
}

const handleGetCategoryName = async (categoryId) => {
    try {
        const result = await category.findOne({ _id: categoryId });
        if (result) {
            return result.category_name;
        } else {
            throw new Error("Category not found"); // Throw an error if category is not found
        }
    } catch (error) {
        console.error("Error occurred while fetching category name:", error);
        return null; // or handle the error as appropriate
    }
};

module.exports = {
    handleReqResLog,
    handleGetCategoryName,
}
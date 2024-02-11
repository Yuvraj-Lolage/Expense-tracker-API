const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    category_name:{
        type:String,
        required:true
    },
    payment_method:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:false 
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }

}, { timestamps:true });

const expenseModel = mongoose.model("expense", expenseSchema);

module.exports = {
    expenseModel,
}
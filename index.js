const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const DATABASE_URL = "mongodb+srv://yuvraj:yuvraj@cluster0.mamoiv2.mongodb.net/Expence_Tracker";
const { handleDatabaseConnection } = require('./connection');
const { handleReqResLog } = require("./middlewares/middlewares"); 

const {categoryRouter} = require('./routes/categories');
const { expenseRouter } = require("./routes/expense");
 
//connection
handleDatabaseConnection(DATABASE_URL) ? console.log("MongoDB connected"):console.log("Error Connecting MongoDB");

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
app.use(handleReqResLog("log.txt"));  

//routes
app.use('/category', categoryRouter);
app.use('/expense', expenseRouter);


app.listen(PORT, () => console.log(`Server Listening on ${ PORT }`))
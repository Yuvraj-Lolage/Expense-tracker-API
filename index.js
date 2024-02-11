const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const DATABASE_URL = "mongodb+srv://yuvraj:yuvraj@cluster0.mamoiv2.mongodb.net/Expence_Tracker";
const DATABASE_URL = "mongodb://127.0.0.1:27017/Expence_Tracker";

const db = process.env.DATABASE_URL;
const { handleDatabaseConnection } = require('./connection');
const { handleReqResLog } = require("./middlewares/middlewares"); 
const { restrictedToLoggedInUsersOnly } = require('./middlewares/auth');

const {categoryRouter} = require('./routes/categories');
const { expenseRouter } = require("./routes/expense");
const { userRouter } = require('./routes/user');
 
//connection
handleDatabaseConnection(DATABASE_URL) ? console.log("MongoDB connected"):console.log("Error Connecting MongoDB");

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
app.use(handleReqResLog("log.txt"));  

//routes
app.use('/category', categoryRouter);
app.use('/expense', restrictedToLoggedInUsersOnly ,expenseRouter);
app.use('/users', userRouter);


app.listen(PORT, () => console.log(`Server Listening on ${ PORT }`))
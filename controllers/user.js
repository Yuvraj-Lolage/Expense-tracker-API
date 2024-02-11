const { User } = require('../models/user');
const { v4: uuidv4  } = require('uuid');


const { setUser } = require('../services/auth');
const handleUserSignup = async(req, res) => {
    await User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
        .then(() => { return res.sendStatus(201) })
        .catch(() => { return res.sendStatus(404) })
}

const handleUserLogin = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if(!user){ 
        return res.send("User is Empty");
    }

    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie('uid', sessionId);
    // res.setHeaders(sessionId);  set headers
    return res.sendStatus(200);
}

module.exports = {
    handleUserSignup,
    handleUserLogin
}
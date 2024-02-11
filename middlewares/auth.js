const { getUser } = require('../services/auth');

async function restrictedToLoggedInUsersOnly(req, res, next){
    const userUid = req.cookies?.uid;
    //if no UID is presrent for that user in cookie
    if(!userUid) return res.send("No SessionId");
    
    const user = getUser(userUid);
    //if User is not present
    if(!user) return res.send("No SessionId");

    req.user = user;
    next();
}


module.exports = { restrictedToLoggedInUsersOnly }
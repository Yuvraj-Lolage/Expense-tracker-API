const { user } = require('../models/user');

const handleCreateNewUser = (req, res) => {
    user.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
        .then(() => { return res.sendStatus(201) })
        .catch(() => { return res.sendStatus(404) })
}


module.exports = {
    handleCreateNewUser,
}
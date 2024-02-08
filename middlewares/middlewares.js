const fs = require('fs');

const handleReqResLog = (fileName) => {
    return (req, res, next) => {
        fs.appendFile(fileName,`\n${ Date.now() } ${ req.method } ${ req.ip } ${ req.path }\n`,
        (err, data) => {
            next();
        });
    }
}

module.exports = {
    handleReqResLog
}
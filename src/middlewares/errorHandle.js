const logErrors = (err, req, res, next) => {
    console.log('logErrors');
    console.log(err)
    next(err)
}

const errorHandle = (err, req, res, next) => {
    console.log('errorHandle');
    res.status(500).json({
        message: err.message, 
        stack: err.stack
    })
}

module.exports = {
    logErrors,
    errorHandle
}
const logErrors = (err, req, res, next) => {
    console.log('logErrors');
    console.log(err)
    next(err)
}

const errorHandler = (err, req, res, next) => {
    console.log('errorHandle');
    res.status(500).json({
        message: err.message, 
        stack: err.stack
    })
}
/**
 * Middleware function to handle Boom errors
 * @param {object} err - The error object
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next middleware function
 */
const boomErrorHandler = (err, req, res, next) => {
    if(err.isBoom){
        const {output} = err
        res.status(output.statusCode).json(output.payload)
    }
    next(err)
}

function ormErrorHandler(err, req, res, next) {
    if (err instanceof ValidationError) {
      res.status(409).json({
        statusCode: 409,
        message: err.name,
        errors: err.errors
      });
    }
    next(err);
  }

module.exports = {
    logErrors,
    errorHandler,
    boomErrorHandler,
    ormErrorHandler
}
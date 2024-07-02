const ErrorWrapper = function (cb) {
    return async function (req, res, next) {
        try{
            await cb(req, res, next);
        }
        catch(error){
            res.status(error.statusCode).json({
                status: error.statusCode,
                message: error.message,
                success: false
            })
        }
    }
}


export default ErrorWrapper;
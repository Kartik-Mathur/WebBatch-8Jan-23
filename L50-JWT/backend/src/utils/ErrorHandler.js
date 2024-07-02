class ErrorHandler extends Error {
    constructor(statusCode,message) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 400 ? 'Failed' : 'Success';
        this.message = message;
        this.success = false
    }
}

export { ErrorHandler };

// let object = new ErrorHandler();
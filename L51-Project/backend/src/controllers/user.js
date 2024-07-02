import User from "../models/user.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import ErrorWrapper from "../utils/ErrorWrapper.js";

export const postSignup = ErrorWrapper(async function (req, res, next) {
    const { username, password, email, name } = req.body;
    const incomingFields = Object.keys(req.body);
    // How to identify the missingFields?
    const requiredFields = ["username", "password", "email", "name"];
    const missingFields = requiredFields.filter((field) => !incomingFields.includes(field));
    // To read image we need to use multer
    if (missingFields.length > 0) {
        // Status codes are necessary to throw errors
        throw new ErrorHandler(401, `Provide missing fields ${missingFields.join(',')} to signup`);
    }

    res.send("Done");
})
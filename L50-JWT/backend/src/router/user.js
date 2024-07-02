import express from "express";
import { getHome, postLogin, postSignup } from "../controller/user.js";

const router = express.Router();

router.post('/signup', postSignup);

// router.post('/login', postLogin)
router.route('/login').post(postLogin);

// home route
router.get('/', getHome);

router.get('/logout', (req, res, next) => {
    res.
    status(200)
    .cookie("jwt","",{
        maxAge: 0
    })
    .json({
        message: "Logged out successfully"
    })

})


export default router;

// function helloWorld(){
//     console.log("Hello World");
// }
// export {helloWorld};
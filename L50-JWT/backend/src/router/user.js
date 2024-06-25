import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { postLogin, postSignup } from "../controller/user.js";

const router = express.Router();

router.post('/signup', postSignup);

// router.post('/login', postLogin)
router.route('/login').post(postLogin);

router.get('/logout', (req, res, next) => {

})


export default router;

// function helloWorld(){
//     console.log("Hello World");
// }
// export {helloWorld};
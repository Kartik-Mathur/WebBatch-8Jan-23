import express from "express";
import { postLogin, postSignup } from "../controllers/auth.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.post('/signup', upload.single("image"), postSignup);
router.post('/login', postLogin);

// HOMEWORK ROUTES
// CRUD user
    // - email
    // - password Implement Forget password
    // 



export default router;
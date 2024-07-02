import express from "express";
import { postLogin, postSignup } from "../controllers/user.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.post('/signup', upload.single("image"), postSignup);
router.post('/login', postLogin);


export default router;
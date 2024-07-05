import express from "express";
import { postRestaurant } from "../controllers/restaurant.js";
import upload from "../utils/multer.js";;

const router = express.Router();

router.post('/add', upload.single("coverImage"), postRestaurant);


export default router;
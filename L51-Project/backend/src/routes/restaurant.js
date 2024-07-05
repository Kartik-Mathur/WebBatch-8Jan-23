import express from "express";
import { postRestaurant,postCusineCategoryAdd } from "../controllers/restaurant.js";
import upload from "../utils/multer.js";;

const router = express.Router();

router.post('/add', upload.single("coverImage"), postRestaurant);
router.post('/cusine-category-add',postCusineCategoryAdd);


export default router;
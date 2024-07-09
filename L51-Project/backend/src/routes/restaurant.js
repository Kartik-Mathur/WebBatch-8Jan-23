import express from "express";
import { postRestaurant,postCusineCategoryAdd, postAddFoodItem } from "../controllers/restaurant.js";
import upload from "../utils/multer.js";;

const router = express.Router();

router.post('/register', upload.single("coverImage"), postRestaurant);
router.post('/add-cusine-category',postCusineCategoryAdd);
router.post('/add-food-item', upload.single('image'), postAddFoodItem);

// HOMEWORK
// CRUD
// Food
// Food -> images
// restaurant->Menu
// reviews


export default router;
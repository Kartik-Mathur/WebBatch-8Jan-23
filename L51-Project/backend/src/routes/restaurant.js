import express from "express";
import {
    postRestaurant,
    postCusineCategoryAdd,
    postAddFoodItem,
    postUpdateFoodItem,
    getDeleteFoodItem,
    getFoodItems,
    getFoodItem,
    getAllCusines
} from "../controllers/restaurant.js";
import upload from "../utils/multer.js";;

const router = express.Router();

router.post('/register', upload.single("coverImage"), postRestaurant);
router.post('/add-cusine-category', postCusineCategoryAdd);
router.post('/add-food-item', upload.single('image'), postAddFoodItem);

// HOMEWORK
// CRUD
// Food
router.post('/update-food-item/:id', upload.single('image'), postUpdateFoodItem);
router.get('/delete-food-item/:id', getDeleteFoodItem);
router.get('/get-food-items', getFoodItems);
router.get('/get-food-item/:id', getFoodItem);
router.get('/get-all-cusines', getAllCusines);

// Food -> images
// restaurant->Menu
// reviews


export default router;
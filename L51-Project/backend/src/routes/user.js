import express from "express";
import upload from "../utils/multer.js";;
import {
	getAddCart,
	getCartItemDelete,
	getCartItemIncrease,
	getCartItemDecrease,
	getCartItems,
} from "../controller/cart.js";

const router = express.Router();

// CART OPERATIONS
router.get("/view-cart", getCartItems)
router.get("/add-cart/:id", getAddCart);
router.get("/increase-cart/:id", getCartItemIncrease);
router.get("/decrease-cart/:id", getCartItemDecrease);
router.get("/delete-cart-item/:id", getCartItemDelete);


// CRUD DETAILS

// RAZORPAY API DUMMY INTEGRATION

// CR - ORDER HISTORY


export default router;
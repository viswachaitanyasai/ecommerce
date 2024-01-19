import express from "express"
import {requireSignIn, isAdmin} from "../middlewares/authmiddleware.js"
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController} from "../controller/productController.js";
import formidable from "express-formidable";

const router = express.Router();

// to add a product in db
router.post("/create-product",requireSignIn, isAdmin, formidable(), createProductController);

router.put("/update-product/:pid",requireSignIn, isAdmin, formidable(), updateProductController);

// to get all product(12) in db
router.get("/get-product", getProductController);

// to get only one product from db
router.get("/get-product/:slug", getSingleProductController);


router.get("/product-photo/:pid", productPhotoController);

router.get("/product/:pid", deleteProductController);


export default router
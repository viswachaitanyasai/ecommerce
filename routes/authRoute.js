import express from "express";
import { registerController, loginController, testController, forgotPasswordController, updateProfileController, getOrdersContoller, getAllOrdersContoller, orderStatusController } from "../controller/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";

const router = express.Router()

//Register || post
router.post("/register", registerController);

//Log in // post
router.post("/login", loginController);

//forgot password
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

router.put("/profile", requireSignIn, updateProfileController);

//all orders placed by single user
router.get("/orders", requireSignIn, getOrdersContoller);

//all orders placed by all users
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersContoller);


router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController);

export default router
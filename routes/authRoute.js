import express from "express";

import { registerController, loginController,testController,forgotPasswordController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


//router object
const router = express.Router();

//routing
//=============REGISTER ||METHOD POST=======
router.post("/register", registerController); 
//This where you use on POSTMAN each of them have their own [purpose]

// //===========LOGIN || POST
router.post("/login", loginController);
// //This where you use on POSTMAN

// //=========TEST Route
router.get('/test',requireSignIn,isAdmin, testController);
// //To run test remember to check at the API function 

// ====== PROTECTED ROUTE auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

// =======FFORGOT PASSWORD || POST
router.post("/forgot-password", forgotPasswordController);

//========Protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//=======protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;

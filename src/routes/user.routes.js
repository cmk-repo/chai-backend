import { Router } from "express";
import {
	registerUserTest,
	registerUser,
	loginUser,
	logoutUser,
	refreshAccessToken,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/register").post(
	upload.fields([
		{
			name: "avatar",
			maxCount: 1
		},
		{
			name: "coverImage",
			maxCount: 1
		}
	]), registerUser) // accept 2 files

router.route("/registerTest").post(registerUserTest) // example

router.route("/login").post(loginUser)

//secured routes

router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken) // doing the verify in controller

export default router
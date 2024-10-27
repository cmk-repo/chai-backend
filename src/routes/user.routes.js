import { Router } from "express";
import {
	registerUserTest,
	registerUser
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"


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

export default router
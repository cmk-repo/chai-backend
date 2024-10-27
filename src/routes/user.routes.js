import { Router } from "express";
import {
	registerUserTest,
} from "../controllers/user.controller.js";



const router = Router()

router.route("/registerTest").post(registerUserTest) // example


export default router
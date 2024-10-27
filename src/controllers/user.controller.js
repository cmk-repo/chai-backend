import { asyncHandler } from "../utils/asyncHandler.js";



const registerUserTest = asyncHandler(async (res, req) => {
	res.status(500).json({
		message: "chai aya maze"
	})
})

export {
	registerUserTest,

}
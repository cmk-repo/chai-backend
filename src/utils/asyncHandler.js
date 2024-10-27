// All funcitons will be async

// const asyncHandler = () => { }
// const asyncHandler = (fn) => { () => { } }
// const asyncHandler = (fn) => async () => { }


// promise type
const asyncHandler = (requestHandler) => {
	return (req, res, next) => {
		Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
	}
}

// // try catch type
// // higher orderfunction - can accept variable or return function
// const asyncHandler = (fn) => async (req, res, next) => {
// 	try {
// 		await fn(req, res, next)
// 	} catch (error) {
// 		res.status(err.code || 500).json(
// 			{
// 				sucess: false,
// 				message: err.message
// 			}
// 		) // custom response code if nohing came from function
// 	}
// }
export { asyncHandler }



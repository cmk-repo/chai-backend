// all error responses will have this error sent and it can be modified o what we want
class ApiError extends Error {
	constructor(
		statuscode,
		message = "Something went wrong",
		errors = [],
		stack = ""
	) {
		//  overwriting node error api
		super(message)
		this.statuscode = statuscode
		this.data = null
		this.message = message
		this.success = false
		this.errors = errors

		if (stack) {
			this.stack = stack
		} else {
			Error.captureStackTrace(this, this.constuctor)
		}
	}
}

export { ApiError }
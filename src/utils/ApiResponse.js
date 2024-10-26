// all responses will have this as standard

class ApiRespose {
	constructor(statusCode, data, message = "Success") {
		this.statusCode = statusCode
		this.data = data
		this.message = message
		this.success = statusCode < 400
	}
}
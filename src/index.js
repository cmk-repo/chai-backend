// require('dotenv').config({ path: './env' }) // bad code 
// improved code
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
	path: './env'
}) // to use this way we are adding experimental feature to package.json


connectDB()









// Below style is also okay, Above style is to better
// import mongoose, { connect } from "mongoose";
// import { DB_Name } from "./constant";
// import express from "express"
// const app = express()


// 	// semi for iffy immeditly execute
// 	; (async () => {
// 		try {
// 			await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_Name}`)
// 			// after connection do something
// 			// using listener
// 			app.on("error", (error) => {
// 				console.log("err:", error);
// 				throw error
// 			})
// 			// if no error then listen to port
// 			app.listen(process.env.PORT, () => {
// 				console.log(`App is listing on port ${process.env.PORT}`)
// 			})
// 		} catch (error) {
// 			console.log("error", error)
// 			throw err
// 		}

// 	})()

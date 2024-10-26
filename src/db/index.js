import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

const connectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
		console.log(`\n MongoDB connection !! DB HOST:${connectionInstance.connection.host}`); // this is to extract which one is DB Connected to Dev, prod etc

	} catch (error) {
		console.log("DB connection error", error);
		process.exit(1)
	}
}

export default connectDB
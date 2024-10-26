import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
	origin: process.env.CORS_ORIGIN,
	credentials: true
}))


// for handling json basic security 

app.use(express.json({ limit: "16kb" }))// limit json file
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // encode urls
app.use(express.static("public")) // assests public folder
app.use(cookieParser()) // has some option used later


export { app }
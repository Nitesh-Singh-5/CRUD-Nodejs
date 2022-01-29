import express from 'express';
import connectDB from './db/connectdb.js';
import { join } from 'path';
import web from './routes/web.js'

const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";


// Database connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({ extended: false }))
 
// Static Files
app.use(express.static(join(process.cwd(), "public")))

// set Template Engine
app.set("view engine", "ejs");

// Load Routes
app.use("/student", web);
    

app.listen(port, () => {
    console.log(`server listening at ${port}`);
})
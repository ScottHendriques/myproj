import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import { app } from "./app.js";
import {User} from "./models/user.model.js"
import userregistration from './routes/user.routes.js'
dotenv.config(
    {
        path: './env',
    }
);


app.use('/api/users',userregistration)

// calling database connection

connectDB()

//Routes


//server

//server connection
.then(()=>{
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server is Running on PORT: ${process.env.PORT}`);
    });
    app.on("error", (err)=>{
        console.log(`Got an error while connecting to server : ${err}`);
        throw err;
    })
})
.catch(err=>{
    console.log("MongoDB connection Failed: ", err);
})
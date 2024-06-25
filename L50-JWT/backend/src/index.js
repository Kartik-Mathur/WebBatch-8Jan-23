import express from "express";
import userRouter from "./router/user.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";


const app = express();
const PORT = process.env.PORT;
app.use(cookieParser());

app.use(express.json({ limit: "4kb" }));
app.use(express.urlencoded({ extended: true, limit: "4kb" }));
app.use(express.static('public')); // To store the information that front end might provide

app.use('/', userRouter);

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)
    .then(() => {
        app.listen(PORT, () => {
            console.log("http://localhost:" + PORT);
        })
    })
    .catch(err => {
        console.log(err);
    })
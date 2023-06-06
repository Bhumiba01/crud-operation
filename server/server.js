import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRoutes from './src/routes/user.js';
import cors from 'cors';
const app = express();
dotenv.config();
const port  = process.env.PORT;
const connect = () => {
    mongoose.connect(process.env.MONGO).
    then(()=>{
        console.log("connected to server");
    }).catch((error)=>{
        throw error;
    });
}
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(cookieParser());
app.use(express.json());
app.use("/api/crud",userRoutes);
app.listen(port, () => {
    connect();
    console.log("connected!!");
})
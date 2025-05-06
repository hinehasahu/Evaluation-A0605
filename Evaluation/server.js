import express from "express";
import dotenv from 'dotenv';
import { userRouter } from "./routes/user.js";
import colors from 'colors';
import { systemRouter } from "./routes/system.js";
import { primeLimitCheck } from "./middlewares/primeLimitChecker.js";
// import { loggerMiddleware } from "./middlewares/loggerMiddleware.js";
dotenv.config();

const app = express();
app.use(express.json());
// app.use(loggerMiddleware())

//test route
app.get('/test', (req,res)=>{
    res.json({message:'Test route is working.'})
})

app.use('/users', userRouter)
app.use('/system', primeLimitCheck ,systemRouter)

const PORT = process.env.PORT;

app.listen(PORT, (req,res)=>{
    console.log(`Server running on http://localhost:${PORT}`.rainbow)
})
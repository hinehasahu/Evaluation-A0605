import express from 'express';
import { generatePrime } from '../utils/randomPrime.js';


export const systemRouter = express.Router();

systemRouter.get('/randomPrime/:num', (req,res)=>{
    const {num} = req.params;
    let randomPrimenum = generatePrime(num)
    res.json({message:'Prime num is: ', randomPrimenum})
})

// userRouter.get('/:id')

// userRouter.delete('/:id')
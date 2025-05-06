import fs from 'fs'
import { getData } from '../model/userModel.js'

export const getUsers=(req,res)=>{
    let data = getData().data;
    let users = data.users;
    res.json({message:'Users list', users})
}

export const addUser = (req,res) =>{
    let data = getData().data;
    let users = data.users;
    let id = users.length+1;
    let addUser = {...req.body, id};
    users.push(addUser)
    res.json({message:'User Added'})
}
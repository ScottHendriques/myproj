import express from 'express';
import registerUser from '../controllers/registerUser.controller.js';
import loginUser from '../controllers/registerUser.controller.js';
import {User} from '../models/user.model.js';
// import { useResolvedPath } from 'react-router';

const router = express.Router();
// router.post("/register",registerUser)
router.post("/register",async(req,res)=>{
    try{
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        // const createUser = new useResolvedPath({
        //     name : name,
        //     email : email,
        //     password : password
        // })
        // const created = await createUser.save();
        const user = await User.create({name, email, password});
        console.log(user);
        user.save();
        res.status(200).send("Registered")
    }catch(err){
        res.status(400).send(err)
    }
})
router.post("/login",loginUser)
export default router;

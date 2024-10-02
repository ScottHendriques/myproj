import { User } from "../models/user.model.js"; 

const registerUser = async (req,res)=>{
    const {name, email, password}=req.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser ){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        const newUser = new User({
            name,
            email,
            password
        })
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "user registered successfully"
        })
    
    }
    catch(err){
        console.log("Error while registering",err)
        res.status(500).json({
            message:"Server error"
        })
    }
}

export default registerUser;
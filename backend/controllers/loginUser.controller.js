import { User } from "../models/user.model.js"; 

const loginUser = async (req,res)=>{
    const {name, email, password}=req.body;
    try{
        const existingUser = await User.findOne({email});
        if(!existingUser ){
            return res.status(400).json({
                success: false,
                message: "Please register first"
            })
        }
        const newUser = new User({
            email,
            password
        })
        await newUser.findOne();
        res.status(201).json({
            success: true,
            message: "user login successfully"
        })
    
    }
    catch(err){
        console.log("Error while registering",err)
        res.status(500).json({
            message:"Server error"
        })
    }
}

export default loginUser;
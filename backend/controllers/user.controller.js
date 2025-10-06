import User from "../models/user.model.js";


export const getUsersForSidebars = async(req,res)=>{


    try {
        
        const loggedInUserId = req.user._id ;
        console.log(loggedInUserId)

        const getAllUsers =  await User.find({_id: {$ne :loggedInUserId}})

        res.status(200).json(getAllUsers)


    } catch (error) {
        console.log("error in getUsersForSidebars controller,",error.message);

        res.status(500).json({message:error.message})
    }
}
import UserModel from "../models/user.model.js"

const getCurrentUser = async (req,res)=>{
    try {
        let userId = req.userId;
        const user = await UserModel.findById(userId);
        if(!user)
        {
            return res.status(404).json({
                message:"current user doesn't exist"
            })
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
                message:`getCurrentUser error ${error}`
            })
    }
}
export default getCurrentUser;
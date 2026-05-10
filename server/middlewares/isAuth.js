import jwt from "jsonwebtoken"

const isAuth = async (req,res,next)=>{
    try {
        let {token} = req.cookies;
        if(!token)
        {
            return res.status(400).json({
                message:"token not found"
            })
        }
        let verifiedToken = jwt.verify(token,process.env.JWT_SECRET);
        if(!verifiedToken)
        {
            return res.status(400).json({
                message:"user doesn't have valid token"
            })
        }
        req.userId = verifiedToken.userId;
        next();
    } catch (error) {
        return res.status(500).json({
                message:`isAuth Error ${error}`
            })
    }
}
export default isAuth;
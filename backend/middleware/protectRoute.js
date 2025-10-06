import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {

    const token = req.cookies.token

    if (!token) res.status(401).json({ message: "Unauthorized User - no User provided" })

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded) res.status(401).json({ message: "wrong Token provided" })

    const user = await User.findById(decoded.userID).select('-password');

    if (!user) res.status(401).json({ message: "user not found" })

    req.user = user
    next()


}


export default protectRoute
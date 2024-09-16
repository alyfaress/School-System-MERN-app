import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];

		if (!token) {
			return res.status(401).json({success:false, error: "Unauthorized - No Token Provided" });
		}
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		if (!decoded) {
			return res.status(401).json({success:false, error: "Unauthorized - Invalid Token" });
		}
		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({success:false, error: "User not found" });
		}

		req.user = user;
		next();
	} catch (error) {
		res.status(500).json({success: false, message: "Internal server error "+error.message });
	}
};

export default authMiddleware;
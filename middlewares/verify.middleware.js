
const jwt = require("jsonwebtoken")
require('dotenv').config();

const verifyJWT = async (req, res, next) => {

    try {
        const token = req.header("Authorization")?.replace("Bearer ", "")
        if (!token) {
            return res.status(401).json({ msg: "No token, authorization denied" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded.user;
        next()
    }
    catch (error) {
        res.status(401).json({ msg: "Token is not valid", error: error.message })
        console.log(error)
    }

}

module.exports = {verifyJWT}
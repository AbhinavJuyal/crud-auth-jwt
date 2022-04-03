const asyncHandler = require('express-async-handler');
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const roles = require("../config/roles");
const permissions = require('../config/roles');

const auth = asyncHandler(async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({ message: 'No token, authorization rejected' });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        // if (user) {
        //     console.log(permissions[user.role][req.method].includes(req.path));
        // }
        console.log(req.path, req.method, req.originalUrl, "routes");
        console.log(req.route)
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
})

module.exports = { auth };
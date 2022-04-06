const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const { verifyJWT } = require('../utils/jwt');

const auth = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) res.status(401).json({ message: 'Token undefined' });
    try {
        const decoded = await verifyJWT(token);
        const user = await User.findById(decoded.id);
        res.locals.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
})

module.exports = { auth };
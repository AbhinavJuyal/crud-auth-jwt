const jwt = require("jsonwebtoken")

const generateJWT = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' })
}

const verifyJWT = (token) => {
    return new Promise((resolve, reject) => {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            resolve(decoded);
        } catch (error) {
            reject(error)
        }
    })
}

// const verifyJWT = (token) => {
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         return (decoded);
//     } catch (error) {
//         throw error
//     }
// }

module.exports = {
    generateJWT,
    verifyJWT
}
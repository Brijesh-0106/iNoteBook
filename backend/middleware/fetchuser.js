// middleware is a function called every time when request is sent to path.
// It is second parameter passed for that route.

var jwt = require('jsonwebtoken');
const jwt_secret = "phenomenal1isking"

const fetchuser = (req, res, next) => {
    // get the user from jwt token and add id to req object
    const token = req.header('auth-token')
    if (!token) {
        // IF TOKEN IS NOT SENT.
        res.status(401).send({ error: "Please send valid token" })
    }
    try {
        // varify token using secret key.
        const data = jwt.verify(token, jwt_secret)//returns decoded token.
        req.user = data.user
        next()
        // next function is async function after middleware is called.
    }
    catch (error) {
        res.status(401).send({ error: "Please authenticate with valid token" })
    }
}
module.exports = fetchuser
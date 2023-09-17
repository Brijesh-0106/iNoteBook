const express = require('express')
// router = localhost:5000/api/auth
const router = express.Router();
// FOR EXPRESS VALIDATOR ==> to validate information entered.
const { body, validationResult } = require('express-validator');
// TO USE USER FORMAT.
const User = require('../models/Users');
// var fetchuser = require('../middleware/fetchuser');
var fetchuser = require("../middleware/fetchuser")


// FOR PASSWORD ENCRYPTION, TO ADD SALT
var bcrypt = require('bcryptjs');
// TOKEN AUTHENTICATION
var jwt = require('jsonwebtoken');


const jwt_secret = "phenomenal1isking"



//ROUTE 1 :- CREATE A NEW USER => POST = router/createuser :- NO LOGIN REQUIRED
router.post('/createuser',
    [
        // VALIDATIONS FOR NAME, EMAIL, PASSWORD.
        body('email').isEmail(),
        body('name', 'minimum 3 characters').isLength({ min: 3 }),
        body('password', 'minimum 3 characters').isLength({ min: 3 })
    ],
    async (req, res) => {
        let success = false;
        // IF ERROR RETURN WITH BAD REQUEST AND ERROR MESSAGE.2
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() })
        }
        try {
            // CHECK WAETHER USER EXIST WITH SAME EMAIL.
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({ success, error: "Sorry user already exists" })
            }
            const salt = await bcrypt.genSalt(10)//WAIT TO CREATE A SALT TO ADD.
            //WAIT SECPASS = PASSWORD + SALT
            const secpass = await bcrypt.hash(req.body.password, salt)
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secpass,//CREATED A PROTECTED PASSWORD WITH SALT ADDED.
            })
            const data = {
                user: {
                    id: user.id,
                }
            }
            const jwtToken = jwt.sign(data, jwt_secret)
            success = true
            res.json({ success, jwtToken: jwtToken })
        }
        catch (error) {
            console.error(error.message)
            res.status(500).send("Server se galti se INTERNAL Mistake ho gai!!")
        }
    }
)



//ROUTE 2 :- AUTHENTICATE A USER => POST = router/login  :- NO LOGIN REUIRED
router.post('/login',
    [
        // VALIDATIONS FOR NAME, EMAIL, PASSWORD.
        body('email').isEmail(),
        body('password', 'Password cannot be empty').exists()
    ],
    async (req, res) => {
        let success = false
        // IF ERROR RETURN WITH BAD REQUEST AND ERROR MESSAGE.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { email, password } = req.body
        try {
            let user = await User.findOne({ email })
            if (!user) {
                res.status(400).json({ success, errors: "Please login with valid credentials." })
                return
            }
            const passwordCompare = await bcrypt.compare(password, user.password)
            if (!passwordCompare) {
                return res.status(400).json({ success, errors: "Please login with valid credentials." })
            }
            const data = {
                user: {
                    id: user.id,
                }
            }
            success = true
            const jwtToken = jwt.sign(data, jwt_secret)
            res.json({ success, jwtToken: jwtToken })
        }
        catch (error) {
            console.error(error.message)
            res.status(500).send("Server se galti se INTERNAL Mistake ho gai!!")
        }
    }
)



//ROUTE 3 :- GET USER DETAILES => POST = router/getuser  :- LOGIN REUIRED
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Server se galti se INTERNAL Mistake ho gai!!")
    }
})
module.exports = router
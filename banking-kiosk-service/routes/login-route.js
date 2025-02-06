const { Router } = require('express')

let router = Router()

const { LoginService } = require('../services/login-service')

let loginSvc = new LoginService()

router.post("/authenticate", async (req, res) => {
    console.log(req.body);
    
    try {
        let inputUserData = req.body
        let result = await loginSvc.authenticate(inputUserData)
        if (!result || result.length === 0) {
            console.log(result);
            
            res.status(200).json({ Status: true, Message: "User doesn't exist" })
        }
        else {
            res.status(200).json({ Status: true, Message: "User successfully logged in" })
        }
    } catch (error) {
        res.status(500).json({ Status: false, Message: "Unable to process request" })
    }
})

router.post("/adduser", async (req, res) => {
    try {
        let inputUserData = req.body
        let result = await loginSvc.addUser(inputUserData)
        if (result) {
            res.status(200).json({ Message: "You have added user successfully" })
        }
    } catch (error) {
        res.status(500).json({ Status: false, Message: "Unable to process request" })
    }
})

module.exports = { router }
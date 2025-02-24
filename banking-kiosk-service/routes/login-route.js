const { Router } = require('express')

let router = Router()
const { LoginService } = require('../services/login-service')

let loginSvc = new LoginService()

router.post("/authenticate", async (req, res) => {
    console.log("Received Request:", req.body);

    try {
        let inputUserData = req.body;
        let result = await loginSvc.authenticate(inputUserData);
        // console.log(req.body);

        console.log("Authentication Result:", result);

        if (!result || result.length === 0) {
            res.status(401).json({ Status: true, Message: "User doesn't exist" });
        } else {
            res.status(200).json({ Status: true, Message: "User successfully logged in" });
        }
    } catch (error) {
        console.error("Error in authentication:", error);
        res.status(500).json({ Status: false, Message: "Server error" });
    }
});

router.post("/adduser", async (req, res) => {
    try {
        let inputUserData = req.body;
        let result = await loginSvc.addUser(inputUserData);

        if (result) {
            return res.status(200).json({ Message: "User successfully added" });
        }
    } catch (error) {
        return res.status(400).json({ Status: false, Message: error.message });
    }
});

module.exports = { router };

const { LoginHelper } = require('../helpers/login-helper')

let loginHlpr = new LoginHelper()

class LoginService {
    async authenticate(inputUserData) {
        let userData = await loginHlpr.getUser(inputUserData)
        return userData
    }

    async addUser(inputBody) {
        inputBody.Status = "Active"
        let userData = await loginHlpr.addUser(inputBody)
        return userData
    }
}

module.exports = { LoginService }
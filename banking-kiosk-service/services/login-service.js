const { LoginHelper } = require('../helpers/login-helper')

let loginHlpr = new LoginHelper()

class LoginService {
    async authenticate(inputUserData) {
        const { EmailId, Password } = inputUserData;

        // Regular expressions for validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // At least 8 chars, 1 uppercase, 1 number

        // Validate email and password format
        if (!emailRegex.test(EmailId)) {
            throw new Error("Invalid email format.");
        }
        if (!passwordRegex.test(Password)) {
            throw new Error("Password must be at least 8 characters long, contain one uppercase letter and one number.");
        }

        // Fetch user from the database after validation
        let userData = await loginHlpr.getUser(inputUserData);

        return userData;
    }

    async addUser(inputBody) {
        // Validate email and password before adding user
        const { EmailId, Password } = inputBody;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!emailRegex.test(EmailId)) {
            throw new Error("Invalid email format.");
        }
        if (!passwordRegex.test(Password)) {
            throw new Error("Password must be at least 8 characters long, contain one uppercase letter and one number.");
        }

        inputBody.Status = "Active";
        let userData = await loginHlpr.addUser(inputBody);
        return userData;
    }
}

module.exports = { LoginService };

const { pool } = require("./db-client");
const bcrypt = require("bcrypt");

class LoginHelper {
    async getUser(userBody) {
        try {
            const query = 'SELECT * FROM login_table WHERE user_name = $1 and user_pass= $2';
            const params = [userBody.EmailId, userBody.Password];

            const result = await pool.query(query, params);

            return result.rows;
        } catch (error) {
            console.error("Error fetching user:", error);
            throw error; // Handle errors as needed
        }
    }

    async addUser(userBody) {
        try {
            // Hash the password before inserting into the database
            const hashedPassword = await bcrypt.hash(userBody.Password, 10);

            // Use parameterized queries to safely insert user data
            const query = 'INSERT INTO login_table (user_name, user_pass) VALUES ($1, $2)';
            const params = [userBody.EmailId, hashedPassword, "Active"];

            const result = await pool.query(query, params);

            return result.rows[0]; // Return inserted user data
        } catch (error) {
            console.error("Error adding user:", error);
            throw error;
        }
    }
}

module.exports = { LoginHelper };

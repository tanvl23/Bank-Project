const { pool } = require("./db-client");

class LoginHelper {
    async getUser(userBody) {
        try {
            const query = 'SELECT * FROM login_table WHERE user_name = $1';
            const params = [userBody.EmailId]

            const result = await pool.query(query, params)

            return result.rows
        }
        catch (error) {
            console.error('Error fetching user:', error);
            throw error; // Handle errors as needed
        }
    }

    async addUser(userBody) {
        try {
            // Use parameterized queries to safely insert user data
            const [result] = await this.db.query(
                'INSERT INTO login_table values userbody'
            );
        }
        catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }

    }

}

module.exports = { LoginHelper }
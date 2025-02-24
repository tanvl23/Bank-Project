const { pool } = require("./db-client");

class FAQHelper {
    async getFaqCategories() {
        try {
            const query = "SELECT * FROM faqs"; // Fetch unique categories
            const result = await pool.query(query);
            return result.rows;
        } catch (error) {
            console.error("Error fetching FAQ categories:", error);
            throw error;
        }
    }

    async getFaqsByCategory(category) {
        try {
            const query = "SELECT id, question, answer FROM faqs WHERE category = $1";
            const result = await pool.query(query, [category]);
            return result.rows;
        } catch (error) {
            console.error(`Error fetching FAQs for category ${category}:`, error);
            throw error;
        }
    }
}

module.exports = { FAQHelper };

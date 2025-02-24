const pool = require("../helpers/db-client");

const getFAQs = async () => {
    try {
        const result = await pool.query("SELECT * FROM faqs");
        return result.rows;
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        throw error;
    }
};

module.exports = { getFAQs };

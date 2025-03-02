const db = require("../config/database"); // Import your DB connection

class BannerHelper {
    async saveBannerClick(userId, bannerId) {
        try {
            const query = `
                UPDATE banner_clicks
                SET click_count = click_count + 1, last_clicked_at = NOW()
                WHERE banner_id = ? AND user_id = ?;
            `;
            const [result] = await db.execute(query, [bannerId, userId]);

            if (result.affectedRows === 0) {
                throw new Error("No record found to update.");
            }

            return { success: true, message: "Banner click updated successfully" };
        } catch (error) {
            console.error("Error updating banner click:", error);
            throw new Error("Database error while updating banner click.");
        }
    }
}

module.exports = new BannerHelper();

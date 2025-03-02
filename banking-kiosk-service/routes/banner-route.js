const express = require("express");
const router = express.Router();
const dbClient = require("../helpers/db-client");

// API to log banner click
router.post("/log-banner-click", async (req, res) => {
  try {
    const query = "INSERT INTO banner_clicks (timestamp) VALUES (CURRENT_TIMESTAMP)";
    await dbClient.query(query);
    res.status(200).json({ success: true, message: "Banner click logged successfully" });
  } catch (error) {
    console.error("Error logging banner click:", error);
    res.status(500).json({ success: false, error: "Database error" });
  }
});

module.exports = router;

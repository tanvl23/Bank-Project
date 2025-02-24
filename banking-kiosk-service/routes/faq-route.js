const express = require("express");
const { getFAQs } = require("../services/faq-service");

const router = express.Router();

router.get("/faqs", async (req, res) => {
    try {
        const faqs = await getFAQs();
        res.json(faqs);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;

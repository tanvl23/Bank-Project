const { Router } = require("express");

let router = Router();
const { FAQService } = require("../services/faq-service");

let faqSvc = new FAQService();

// Fetch FAQ Categories
router.get("/faq-categories", async (req, res) => {
    try {
        let result = await faqSvc.getFaqCategories();
        console.log("Fetched Categories:", result);

        if (!result || result.length === 0) {
            return res.status(404).json({ status: false, message: "No categories found" });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching FAQ categories:", error);
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});

// Fetch FAQs by category
router.get("/faqs", async (req, res) => {
    const category = req.query.category;
    console.log(`Received request for FAQs in category: ${category}`);

    try {
        let result = await faqSvc.getFaqsByCategory(category);
        console.log(`Fetched FAQs for category ${category}:`, result);

        if (!result || result.length === 0) {
            return res.status(404).json({ status: false, message: "No FAQs found for this category" });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error(`Error fetching FAQs for category ${category}:`, error);
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});

module.exports = { router };

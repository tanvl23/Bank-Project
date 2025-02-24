 
const { Router } = require("express");

let router = Router();
const { FAQService } = require("../services/faq-service"); // Adjust path if needed

let faqSvc = new FAQService();

// Fetch all FAQs
router.get("/faqs", async (req, res) => {
    console.log("Received request to fetch FAQs",res.body);

    try {
        let result = await faqSvc.getFaqCategories();
        console.log("Fetched FAQs:", result);

        if (!result || result.length === 0) {
            return res.status(404).json({ Status: false, Message: "No FAQs found" });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        res.status(500).json({ Status: false, Message: "Internal Server Error" });
    }
});

// Fetch FAQs by category
router.get("/faqs/:category", async (req, res) => {
    const { category } = req.params;
    console.log(Received request for FAQs in category: ${category});

    try {
        let result = await faqSvc.getFaqsByCategory(category);
        console.log(Fetched FAQs for category ${category}:, result);

        if (!result || result.length === 0) {
            return res.status(404).json({ Status: false, Message: "No FAQs found for this category" });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error(Error fetching FAQs for category ${category}:, error);
        res.status(500).json({ Status: false, Message: "Internal Server Error" });
    }
});

module.exports = { router };
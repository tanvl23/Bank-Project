const { FAQHelper } = require("../helpers/faq-helper");

let faqHlpr = new FAQHelper();

class FAQService {
    async getFaqCategories() {
        try {
            let categories = await faqHlpr.getFaqCategories();
            return categories;
        } catch (error) {
            console.error("Error fetching FAQ categories:", error);
            throw new Error("Error fetching FAQ categories.");
        }
    }

    async getFaqsByCategory(category) {
        // Validate category input to prevent SQL injection or errors
        if (!category || typeof category !== "string" || category.trim() === "") {
            throw new Error("Invalid category format.");
        }

        try {
            let faqs = await faqHlpr.getFaqsByCategory(category);
            return faqs;
        } catch (error) {
            console.error(`Error fetching FAQs for category ${category}:`, error);
            throw new Error("Error fetching FAQs.");
        }
    }
}

module.exports = { FAQService };

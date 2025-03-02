import axios from "axios";

const URL = process.env.REACT_APP_MASTER_API;
console.log("Loaded API URL:", URL);

// Fetch categories
export async function getFaqCategories() {
    try {
        let url = `${URL}/faq-categories`;
        console.log("Fetching categories from API:", url);

        let response = await axios.get(url, { timeout: 10000 });
        return response.data;
    } catch (error) {
        console.error("Error fetching FAQ categories:", error);
        return [];
    }
}

// Fetch FAQs by category
export async function getFAQs(category) {
    try {
        let url = `${URL}/faqs?category=${encodeURIComponent(category)}`;
        console.log("Fetching FAQs from API:", url);

        let response = await axios.get(url, { timeout: 10000 });
        return response.data;
    } catch (error) {
        console.error(`Error fetching FAQs for category ${category}:`, error);
        return [];
    }
}

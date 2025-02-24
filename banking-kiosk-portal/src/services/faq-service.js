import axios from "axios";

// Debug: Print the API URL to check if it's loaded correctly
const URL = process.env.REACT_APP_MASTER_API;
console.log("Loaded API URL:", URL);

// export async function getFAQs() {
//     try {
//         let url = `${URL}/faqs`;
//         console.log("Fetching FAQs from API:", url); // Debugging API request

//         let response = await axios.get(url, { timeout: 10000 });
//         return response.data;

//     } catch (error) {
//         console.error("FAQ Fetching Error:", error);

//         if (error.response) {
//             return { success: false, message: `Error: ${error.response?.data?.message || "Failed to fetch FAQs"}` };
//         } else if (error.request) {
//             return { success: false, message: "Network Error: No response from server. Please try again later." };
//         } else {
//             return { success: false, message: "Unexpected Error: " + error.message };
//         }
//     }
// }

export async function getFAQs() {
    let url = `${URL}/faqs`;
    let response = await axios.get(url, { timeout: 10000 });
    return response.data;
}

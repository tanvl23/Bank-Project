import axios from 'axios';

// Debug: Print the API URL to check if it's loaded correctly
console.log("Loaded API URL:", process.env.REACT_APP_MASTER_API);

const URL = process.env.REACT_APP_MASTER_API;

export async function authenticate(userBody) {
    try {
        if (!URL) {
            throw new Error("API base URL is not defined. Please check your environment variables.");
        }

        let url = `${URL}/authenticate`;
        console.log("Calling API:", url);  // Debugging API request

        let response = await axios.post(url, userBody, { timeout: 10000 });
        return response.data;

    } catch (error) {
        console.error("Authentication Error:", error);

        if (error.response) {
            return { success: false, message: `Error: ${error.response.data.message || "Invalid Credentials"}` };
        } else if (error.request) {
            return { success: false, message: "Network Error: No response from server. Please try again later." };
        } else {
            return { success: false, message: "Unexpected Error: " + error.message };
        }
    }
}

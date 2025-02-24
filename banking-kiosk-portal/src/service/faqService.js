import axios from 'axios'
const URL = process.env.API_URL;

export const fetchFAQs = async () => {
    try {
        const response = await axios.get(`${API_URL}/faq`);
        return response.data;
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        return [];
    }
};

// import axios from 'axios'
// const URL = process.env.REACT_APP_MASTER_API

// export async function authenticate(userBody) {
//     console.log("URL",URL);
    
//     let url = URL + "/authenticate"
//     let result = await axios.post(url, userBody, {timeout: 10000})
//     return result.data
    
// }
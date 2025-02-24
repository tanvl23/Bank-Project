import axios from 'axios'
const URL = process.env.REACT_APP_MASTER_API

export async function authenticate(userBody) {
    console.log("URL",URL);
    
    let url = URL + "/authenticate"
    let result = await axios.post(url, userBody, {timeout: 10000})
    return result.data
    
}
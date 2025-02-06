import axios from "axios"

export async function addUser (userBody) {
    let url = "http//localhost:5005/master/login"
    let response = await axios.post(url, userBody)
    return response.data
}
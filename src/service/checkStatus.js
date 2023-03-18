import axios from "axios";

export async function userStatus(){
    try {
        let response = await axios.get('http://localhost:8080/auth/status',{
            withCredentials: true
        })
        if(!response.data) response.data = {success: false, message: 'Token missing!'}
        console.log("🚀 ~ file: checkStatus.js:9 ~ userStatus ~ response.data:", response.data)
        return response.data;
    } catch (error) {
        if(!error.response.data) error.response.data = {success: false, message: 'Token missing!'}
        return error.response.data
    }
}
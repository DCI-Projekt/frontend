import axios from "axios";

export async function userStatus(){
    try {
        let response = await axios.get('http://localhost:8080/auth/status',{
            withCredentials: true
        })
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}
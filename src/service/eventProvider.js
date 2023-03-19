import axios from "axios";



export async function getAllEvents(){

    try {
        let response = await axios.get('http://localhost:8080/auth/events/all',{
            withCredentials: true
        })
        return response.data;
    } catch (error) {
        console.log(error)
        
    }

}


export async function getEventById(id){

    try {
        let response = await axios.get(`http://localhost:8080/auth/eventdetails/${id}`,{
            withCredentials: true
        });
        console.log("🚀 ~ file: eventProvider.js:25 ~ getEventById ~ response:", response)

        return response.data;
    } catch (error) {
        console.log(error)
        
    }

}
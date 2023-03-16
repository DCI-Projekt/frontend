import axios from "axios";

export async function getEventsByDay(tag){

    try {
        let response = await axios.get('http://localhost:8080/auth/events/all',{
            withCredentials: true
        })

        return response.data;


    } catch (error) {
        console.log(error)
        
    }

}

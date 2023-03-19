import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../service/eventProvider";


function EventDetailView(){

    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [beginning, setBeginning] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [participants, setParticipants] = useState([]);
    const [amountOfParticipants, setAmountOfParticipants] = useState('');

    useEffect(() => {
        (async function(){
            let event = await getEventById(id);
            
            setTitle(event.title);
            setBeginning(event.beginning);
            setDuration(event.duration);
            setDescription(event.description);
            setLocation(event.location);
            setParticipants(event.participants);
            setAmountOfParticipants(event.participants.length)

        }());
    },[id]);
    
    return(
        <>
            <button>Teilnehmen</button>
        
            <h1>Hallo</h1>
        
        </>
    );
}
    
export default EventDetailView;
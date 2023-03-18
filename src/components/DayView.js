import { useNavigate } from "react-router-dom";


function DayView({events}){
    console.log("🚀 ~ file: TagesAnsicht.js:4 ~ Tagesansicht ~ date:", events)



    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/events/${id}`, {})
    }





    return(
        <a key={events.id} onClick={() => handleClick(events.id)}>
            
            {/* <button onClick={popUpClose}>X</button> */}
        </a>
    );

}

export default DayView;
import { useNavigate } from "react-router-dom";


function DayView({events}){
    console.log("🚀 ~ file: TagesAnsicht.js:4 ~ Tagesansicht ~ date:", events)

    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/events/${id}`, {})
    }

    let temp = events.map((event) => {
        return (
            <a key={event._id} onClick={() => handleClick(event._id)} >
                <h3>{event.title}</h3>
            </a>
        )
    })


    return(
        <>{temp}</>
    );

}

export default DayView;
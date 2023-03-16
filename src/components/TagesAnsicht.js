

function Tagesansicht({date}){
    console.log("🚀 ~ file: TagesAnsicht.js:4 ~ Tagesansicht ~ date:", date)



//     //todo hier wird durch die events gemappt, die an selbem Tag

    let temp = date.map((evt) => {
        return <p>{evt.title}</p>
    })


    return(
        <>{temp}</>
    );

}

export default Tagesansicht;
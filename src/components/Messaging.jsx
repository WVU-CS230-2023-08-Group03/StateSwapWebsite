import './Messaging.css'

const Messaging = (props)=>{

    console.log("messaging initialised")
    return (
        <div class = "Messaging">
            <p>{props.messages}</p>
        </div>
    )
}

export default Messaging;
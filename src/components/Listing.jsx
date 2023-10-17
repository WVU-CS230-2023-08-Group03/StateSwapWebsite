import './Listing.css'

const Listing = (props)=>{
    return (
        
        <div class = "Listing">
            <img src = {props.image} class = "image"></img>
            <body class = "title">{props.title}</body>
            <body class = "description">{props.description}</body>
        </div>
    )
}

export default Listing;
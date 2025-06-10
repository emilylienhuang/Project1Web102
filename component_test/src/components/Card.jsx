const Card = (props) => {
    return (
        <div className="card">
            <h3 className="card-title" >{props.title}</h3>
            <img src={`/images/${props.image}`} alt="photo" className="card-image"/>
            <p className="card-desc"> {props.description}</p>
            <a  className = "cardButton" href={props.link} target="_blank"
        rel="noopener noreferrer">Visit Repo</a>
            
            </div>
            
    )
}
export default Card;
const Card = (props) => {
    return (
        <div className="card">
            <h3 className="card-title" >{props.title}</h3>
            <p className="card-desc"> {props.description}</p>
            </div>
    )
}
export default Card;
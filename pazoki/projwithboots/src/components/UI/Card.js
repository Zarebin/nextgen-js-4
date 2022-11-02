import "./Card.css";


const Card = (props)=> {
    let classname = "card "+ `${props.className}`;
    return <div className={classname}>{props.children}</div>
}

export default Card;
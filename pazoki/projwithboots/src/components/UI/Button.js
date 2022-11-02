import "./Button.css";

const Button = (props)=> {
    let classname = "button "+ `${props.className}`;
    return (<button type={props.type || "button"}
        onClick={props.onClick}
        className={classname}>
        {props.children}
        </button>)
}

export default Button;
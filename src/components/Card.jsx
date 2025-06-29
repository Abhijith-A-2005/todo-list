import { use } from "react";

const Card = (props) => {

    const Delete = () => {
        console.log("Task completed");
        props.onCompleteTask(props.id);
    }
                               

    return (
            
        <div className="card">
        <p>{props.text}</p>
        <button onClick={Delete}>Completed</button>
        </div>

          )
}

export default Card;
import { useState,useEffect } from "react";
const Input = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(false);

    const Change = (e) => {
        console.log(e.target.value);
        setEnteredValue(e.target.value);
    }   

    const Submit = (e) => {
        e.preventDefault();
        if (enteredValue.trim() === "") {
            return; 
        }
        props.onAddTask(enteredValue);
        setEnteredValue("");
    }

    useEffect(() => {
        if (enteredValue.trim().length > 3){
            setIsValid(true);
        }
        else{
            setIsValid(false);
        }
    }, [enteredValue]);

    return (
        <>
            <form onSubmit={Submit}>
                <input type="text" placeholder="Add a new task" value={enteredValue} onChange={Change}/>
                <button type="submit" disabled={!isValid}>Add</button>
            </form>
        </>
    )
}

export default Input;
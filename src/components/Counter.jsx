import { useState, useEffect} from "react";

 const Counter = () => {
    const [count, setCount] = useState(0);
    const [valid, setValid] = useState(false);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    useEffect(() => {

        if (count > 0) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [count]);

    return(
        <div id="counter">
            <h1>{count}</h1>
            <div>
                <button onClick={increment}>Increment</button>
            </div>
            <div>
                <button disabled={!valid} onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;
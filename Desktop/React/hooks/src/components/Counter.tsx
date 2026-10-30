import { useState } from "react";


const Counter = () => {
    const [count,setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount((previousCount) => previousCount + 1);
    };

    const handleDecrement = () => {
        setCount((previousCount) => previousCount - 1);
    };

    const handleReset = () => {
        setCount(0)
    };

return (
    <div>
        <h2>Counter Application</h2>
        <h3>Count : {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>

    </div>
    
    )
};

export default Counter;


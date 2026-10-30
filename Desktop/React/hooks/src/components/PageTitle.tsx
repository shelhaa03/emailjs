import { useState, useEffect } from "react";

const PageTitle = () => {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        document.title = 'Count: ${count}';
        console.log(count);
    }, [count]);
    
    // [count] tells that this effect depends on the count

    const handle = () => {
        setCount((prev) => prev + 1)
    }
    return (
            <div>
                <h2>Page Title Example</h2>
                <p>Count : {count}</p>
                <button onClick={handle}>Increment Count</button>
            </div>
    );
};
export default PageTitle
import { useState } from "react";

export default SimpleCounter = () => {
    console.log("SimpleCounter component rendered!")
    const [count, setCount] = useState(0);

    return <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
}
import { useState } from "react";

export const Counter = () => {

    const [count, setCount] = useState(0); // Array destructing
    // currentValue, setterFunction = useState(initialValue)

    console.log("Counter component rendered with count", count)

    const handleClick = () => {
        setCount(count + 1)
    }

    return <button onClick={handleClick}>Count: {count}</button>;
}
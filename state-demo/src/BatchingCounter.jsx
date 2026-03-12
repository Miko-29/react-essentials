import { useState } from "react";

export const BatchingCounter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [isActive, setIsActive] = useState(false);

    console.log("Render phase: Component rendering");
    
    const handleClick = () => {
        setCount((prev) => {
            return prev + 1
        });
        
        setCount((prev) => {
            return prev + 5;
        });
        
        setCount((prev) => {
            return prev + 10;
        });

        setName("Updated");

        setIsActive(true);
    }

    return <div>
        <h2>Count: {count}</h2>
        <h2>Name: {name}</h2>
        <h2>Active: {isActive ? "Yes" : "No"}</h2>
        <button onClick={handleClick}>Update all three</button>
    </div>
}
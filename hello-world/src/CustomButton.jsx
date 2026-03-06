export const CustomButton = () => {

    const handleClick = (e) => {
        console.log("Clicked element", e.target)
        console.log("Click coordinates", e.clientX, e.clientY)
        console.log("Which mouse button?", e.button);
        
        alert("Thanks for liking!")
    } 

    return <button onClick={handleClick}>Like</button> //don't write parenthesis here cuz it means we want to call component when the component renders

    // return <button onClick={()=> alert("Thanks for liking!!")}>Like</button>;  //inline function
};


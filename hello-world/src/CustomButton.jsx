export const CustomButton = ({text}) => {
    const name = "Codevolution";

    const handleClick = () => {
        console.log(`Hey ${name}, you clicked ${text}`)
    } 

    return <button onClick={handleClick}>{text}</button> //don't write parenthesis here cuz it means we want to call component when the component renders

    // return <button onClick={()=> alert("Thanks for liking!!")}>Like</button>;  //inline function
};


import { useState } from "react";

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Bruce Wayne",
        age: 30,
        email: "batman@justiceleague.com",
        address: {
            city: "Gotham city",
            country: "USA"
        }
    });

    console.log("component rendering. user:", user);

    // This will updating the whole object and new user will only contain name: "Clark Kent", no age or email
    // const updateName = () => {
    //     setUser({
    //             name: "Clark Kent"
    //     })
    // }

    const updateName = () => {
        setUser({
            ...user, //spread operator
            name: "Clark Kent"
        })
    }
    
    const updateAge = () => {
        setUser({
            ...user,
            age: user.age + 1
        })
    }

    const updateMultiple = () => {
        setUser({
            ...user,
            name: "Clark Kent",
            age: "31"
        })
    }

    const updateCity = () => {
        setUser({
            ...user,
            address: {
                ...user.address,
                city: "Metropolis",
            }
        })
    }

    return <div>
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <p>City: {user.address.city}</p>
        <p>Country: {user.address.country}</p>
        <button onClick={updateName}>Change name to Clark Kent</button>
        <button onClick={updateAge}>Increase age by 1</button>
        <button onClick={updateMultiple}>Update name and age</button>
        <button onClick={updateCity}>Update to Metropolis</button>
    </div>
}
export const UserDetails = ({ name, isOnline, hideOffline, isPremium, isNewUser}) => {
    if(hideOffline && !isOnline){
        return null;
    }
   
    // ternary operators

    return (
        <div>
            <h3>
                {name}
                
            </h3>
            <span>{isOnline ? "🟢 Online" : "Offline"}</span>
            <p>{isOnline ? "Available for chat" : "Not available"}</p>
            {
                isOnline ? (
                    <button>Send Message</button>
                ) : (
                    <small>Check back later</small>
                )
            }
        </div>
    )


    // If conditions

//     if(isOnline){
//     return(
//         <div>
//             <h3>{name}</h3>
//             <span>🟢 Online</span>
//             <p>Available for chat</p>
//             <button>Send Message</button>
//         </div>
//     );
//    }

//    return (
//         <div>
//             <h3>{name}</h3>
//             <span>Offline</span>
//             <p>Not available</p>
//             <small>Check back later</small>
//         </div>
//    )

}
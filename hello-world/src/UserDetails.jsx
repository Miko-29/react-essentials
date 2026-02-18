export const UserDetails = ({ name, isOnline, hideOffline, isPremium, isNewUser, role}) => {
    if(hideOffline && !isOnline){
        return null;
    }

    let roleBadge = null;
    if( role == "admin") {
        roleBadge = <span>🔑 Admin</span>
    } else if (role === "moderator") {
        roleBadge = <span>👮‍♂️ Moderator</span>;
    } else if (role === "vip") {
        roleBadge = <span>💎 VIP</span>
    }
   
    // ternary operators

    return (
        <div>
            <h3>
                {name}
                {isPremium && <span> ⭐</span>} 
                {/* read as ifPremium then render star or else render nothing */}
                {isNewUser && <span> 🎉</span>}
                {roleBadge}
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
import { UserInfo } from "./UserInfo"

// export const UserCard = ({ name, age, city, email })=>{
// export const UserCard = ({ props })=>{
export const UserCard = ({ id, ...rest })=>{ //Use this when we do not want to forward all props 
    return (
        <div>
            <h2>User {id} Details</h2>
            {/* <UserInfo name={name} age={age} city={city} email={email} /> */}
           
            {/* <UserInfo {...props} />  */}
            {/* this forwards all of UserCards props to UserInfo without listing them individually */}
        
            <UserInfo {...rest}/> 
            {/* Forwarding rest of the props without destructuring them individually */}
        </div>
    )
}
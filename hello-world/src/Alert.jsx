import styles from "./Alert.module.css";

export const Alert = ({children, type = "success"}) =>{
    // return <div className={`alert ${type}`}>{children}</div>

    return <div className={`${styles.alert} ${styles[type]}`}>{children}</div> 
    // we use template literals to combine the base alert class and type specific class
    // we use bracket[] for type because it is a dynamic value
}
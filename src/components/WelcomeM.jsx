// import styles from "./WelcomeM.module.css";
function WelcomeM({todoItems})
{
// return <p className={styles.welcome}>Enjoy Your Day</p>
return(  todoItems.length === 0 && <p >Enjoy Your Day</p>);


}
export default WelcomeM;
import styles from './Notification.module.css'

const Notification = ({message}) => {
    
    const showMessage = message.error || ""
    return (
      message &&
        <div className={styles.Notification}>

        {message.status === 201 &&  <div className={styles.successContainer}>
            you successfully signed up <br></br> <span> Now log in Please  </span> 
        </div>}
         
        {message.error  && <div className={styles.failContainer}>
           {showMessage}
        </div>}

        {!message.error && message.status !==201 && 
        <div className={styles.successContainer}>
          Welcome back 👋
        </div>}
        

        </div>
      
    );
};

export default Notification;
import { useEffect } from "react";

const Notification = ({message, setMessage}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage("")
        }, 5000);
        return () => clearTimeout(timer);
      }, [message]);

    return(


        <div>
            <p>{message}</p>
        </div>
    )
}

export default Notification;
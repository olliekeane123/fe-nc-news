import { Link } from "react-router-dom"
import deleteIcon from "../assets/deleteicon.svg"
export const YouNeedToBeLoggedIn = ({ setAlertActive }) => {
    return (
        <div className="error-alert">
            <p>You need to be logged in to do that...</p>
            <div id="close-error-icon-container" onClick={()=>setAlertActive(false)}>
                <img src={deleteIcon} alt="close error window" id="close-error-icon"/>
            </div>
            <Link to="/login" id="navigate-to-login-button">
                Click here to Log in!
            </Link>
        </div>
    )
}

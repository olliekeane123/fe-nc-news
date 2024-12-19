import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";


export function Header () {

    const { user } = useContext(UserContext)

    return (<>
        <nav className="navbar">
        <h1>northcoders <span>news</span></h1>
            <ul>
                <Link to="/">
                    <li className="white-underline-transition">home</li>
                </Link>
                <Link to="/explore">
                    <li className="white-underline-transition">explore</li>
                </Link>
                <Link to="/post">
                    <li className="white-underline-transition">post</li>
                </Link>
                {user.isLoggedIn ?
                <Link id="account-header-container" to={`/account/${user.userInfo.username}`}>
                    <li className="white-underline-transition">account</li>
                    <img id="header-profile-image" src={user.userInfo.avatar_url} alt="user profile avatar image" />
                </Link>
                :
                <Link to="/login">
                    <li id="login-link">login/signup</li>
                </Link>
                }
            </ul>
        </nav>
            <div id="nav-underline"></div>
    </>)
}

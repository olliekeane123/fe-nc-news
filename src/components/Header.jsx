import { Link } from "react-router-dom";


export function Header () {
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
                <Link to="/login">
                    <li id="login-link">login/signup</li>
                </Link>
            </ul>
        </nav>
            <div id="nav-underline"></div>
    </>)
}

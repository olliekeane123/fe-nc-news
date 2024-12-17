import { Link } from "react-router-dom";


export function Header () {
    return (<>
        <nav className="navbar">
        <h1>northcoders <span>news</span></h1>
            <ul>
                <Link to="/">
                    <li>home</li>
                </Link>
                <Link to="/explore">
                    <li>explore</li>
                </Link>
                <Link to="/post">
                    <li>post</li>
                </Link>
                <Link to="/login">
                    <li>login/signup</li>
                </Link>
            </ul>
        </nav>
    </>)
}

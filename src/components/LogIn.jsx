import { useContext, useEffect, useState } from "react"
import { getUser } from "../api"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

export function LogIn () {

    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        getUser(username).then((response) => {
            login(response)
            navigate(`/account/${response.username}`)
        })
        .catch((err)=>{
            console.log(err)
        })
        setUsername('')
        setPassword('')
    }
    
    return (
        <>
        <form id="login-form" onSubmit={handleLoginSubmit}>
            <p>Log In</p>
            <div className="login-input-container">
                <input className="login-input" type="text" name="username" placeholder="username" onChange={(e)=>setUsername(e.target.value)} value={username}/>
            </div>
            <div className="login-input-container">
                <input className="login-input" type="text" name="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </div>
            <button type="submit">Log In</button>
        </form>
        </>
    )
}

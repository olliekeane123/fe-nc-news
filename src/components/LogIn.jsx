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
        <h1>Log In Page</h1>

        <form onSubmit={handleLoginSubmit}>
            <label>username
                <input type="text" name="username" id="input-username" onChange={(e)=>setUsername(e.target.value)} value={username}/>
            </label>
            <label>password
                <input type="text" name="password" id="input-password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </label>
            <button type="submit">Log In</button>
        </form>
        </>


    )
}

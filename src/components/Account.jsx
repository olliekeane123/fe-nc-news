import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"

export function Account () {
    const { user, logout } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <div>
          <h2>Welcome, {user.userInfo.username}!</h2>
          <p>Email: {user.userInfo.name}@gmail.com</p>
          <img src={user.userInfo.avatar_url} alt="user profile avatar image"/>
          <button onClick={handleLogout}>log out</button>
        </div>
      )
}
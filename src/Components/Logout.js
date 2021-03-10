import './Logout.css'

const Logout = ({ setUser }) => {

    const logOut = () => {
        localStorage.removeItem('token')
        const user = {}
        setUser({ user })
    }

    
    return (
        <button className="logout" onClick={ logOut }>LOG OUT</button>
    )
}

export default Logout
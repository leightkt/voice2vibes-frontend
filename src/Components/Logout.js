import './Logout.css'

const Logout = ({ setUser, setDevice, resetCommands }) => {

    const logOut = async() => {
        localStorage.removeItem('token')
        const user = {}
        setUser(user)
        const cleared = ""
        setDevice(cleared)
        resetCommands()
    }


    return (
        <button className="logout" onClick={ logOut }>LOG OUT</button>
    )
}

export default Logout
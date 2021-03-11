import './DeleteUser.css'

const DeleteUser = ({ deleteUser }) => {

    
    return (
        <button className="delete-user" onClick={ deleteUser }>DELETE PROFILE</button>
    )
}

export default DeleteUser
import React, { useState } from 'react'
import "./crud.css";
import PopUp from './PopUp';
const UserCard = ({ user, handleDelete, handleEdit }) => {
    const [popup, setPopup] = useState(false);
    const handlePopup = () => {
        setPopup(!popup);
    }

    return (
        <div className='usercard-div'>
            <h3>{user.user.name}</h3>
            <h3> {user.user.email}</h3>
            <h3>{user.user.address}</h3>
            <button className='btn' onClick={() => handleEdit(user.id)}>Edit</button>
            <button className='btn' onClick={() => handlePopup()} >Delete</button>
            {popup ? (<PopUp onConfirm={() => handleDelete(user.id)} onCancel={() => handlePopup()} />) : (null)

            }
        </div>
    )
}

export default UserCard
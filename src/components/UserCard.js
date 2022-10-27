import React, { useState } from 'react'
import "./crud.css";
import PopUp from './PopUp';
const UserCard=()=> {
  const [popup, setPopup]=useState(false);
  const handlePopup=()=>{
    setPopup(!popup);
  }
  return (
    <div className='usercard-div'>
           {/* <h3>{user.user.name}</h3>
           <h3> {user.user.email}</h3>
           <h3>{user.user.address}</h3> */}
           {/* <button className='btn' onClick={()=>handleEdit(index)}>Edit</button>
        <button className='btn' onClick={()=>setPopup(!popup)}>Delete</button> */}
        { popup ? (<PopUp   onCancel={()=>handlePopup()}/>):( null)
        
    }
    </div>
  )
}

export default UserCard
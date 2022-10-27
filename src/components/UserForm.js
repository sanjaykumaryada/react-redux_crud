import React from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/UserCrud_APP/action';
import "./crud.css"
const UserForm =({user,setUser, edit, handleUpdate})=> {
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
           e.preventDefault();
           let userOBj={
             id:Date.now(),
             user:{
                name:user.name,
                email:user.email,
                address:user.address,
             }
           }
           dispatch(createUser(userOBj));
           setUser({name:"", email:"", address:""});
           
    }
  return (
    <div className='form-content'>
    <form className='crud-form'>
    <h1>User Form</h1>
     <div className='name-form'>
         <label htmlFor='name'>Name:</label>
       <input 
       type="text" 
       placeholder='Enter your name' 
       required
       value={user.name}
       onChange={(e)=>setUser({...user, name:e.target.value})}
       />
     </div>
     <div className='email-form'>
         <label htmlFor='email'>Email:</label>
       <input
        type="email"
         placeholder="Enter your email"
          required
          value={user.email}
       onChange={(e)=>setUser({...user, email:e.target.value})}
          />
     </div>
     <div className='address-form'>
         <label htmlFor='address'>Address:</label>
       <textarea placeholder='type your address here'
          value={user.address}
          onChange={(e)=>setUser({...user, address:e.target.value})}
       />
     </div>
       {
        edit ? (<button className='btn'onClick={handleUpdate} >Update User</button>):( <button className='btn' onClick={handleSubmit}>Create User</button>)
       }
    
      
    </form>
    </div>
  )
}

export default UserForm
import React from 'react'
import { useSelector } from 'react-redux';
import "./crud.css"
const UserForm = ({user,handleUser,handlesetUser }) => {
    const { edit } = useSelector((state) => state.operationReducer);
    return (
        <div className='form-content' onSubmit={(e)=>handleUser(e, user)}>
            <form className='crud-form' >
                <h1>User Form</h1>
                <div className='name-form'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type="text"
                        placeholder='Enter your name'
                        name='name'
                        required
                        value={user.name}
                        onChange={handlesetUser}
                    />
                </div>
                <div className='email-form'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name='email'
                        required
                        value={user.email}
                        onChange={handlesetUser}
                    />
                </div>
                <div className='address-form'>
                    <label htmlFor='address'>Address:</label>
                    <textarea placeholder='type your address here'
                    name='address'
                        value={user.address}
                        onChange={handlesetUser}
                    />
                </div>
                {
                    edit ? (<button className='btn'>Update User</button>) : (<button className='btn'>Create User</button>)
                }


            </form>
        </div>
    )
}

export default UserForm
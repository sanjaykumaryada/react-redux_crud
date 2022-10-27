import React from 'react'
import "./crud.css"
import UserCard from './UserCard';
const UserList = ({usersList,handleDelete, handleEdit}) => {
    return (
        <div className='userslist-div'>
            <h1>List of Users</h1>
            {
                usersList.length < 1 ? (
                    <h1>List of Users will appear here!</h1>
                ) : (
                    usersList.map((user) => <UserCard user={user} key={user.id} handleDelete={handleDelete} handleEdit={handleEdit} />)
                )
            }
        </div>
    )
}

export default UserList
import React from 'react'
import { useSelector } from 'react-redux';
import "./crud.css"
import UserCard from './UserCard';
const UserList=()=> {
    const usersList=useSelector((state)=> state.operationsReducers);
    console.log(usersList);
  return (
    <div className='userslist-div'>
        <h1>List of Users</h1>
        {
            usersList.length < 1? (
                <h1>List of Users will appear here!</h1>
            ):(
               usersList.map((user) =>  <UserCard  user={user} key={user.id} index={user.id} />) 
            )
        }
    </div>
  )
}

export default UserList
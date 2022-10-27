import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/UserCrud_APP/action';
import "./crud.css"
import UserCard from './UserCard';
const UserList = () => {
    const usersList = useSelector((state) => state.operationReducer);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUser(id));

    }
    return (
        <div className='userslist-div'>
            <h1>List of Users</h1>
            {
                usersList.length < 1 ? (
                    <h1>List of Users will appear here!</h1>
                ) : (
                    usersList.map((user) => <UserCard user={user} key={user.id} handleDelete={handleDelete} />)
                )
            }
        </div>
    )
}

export default UserList
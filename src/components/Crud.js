import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUser, editUser, createUser } from '../redux/UserCrud_APP/action';
import UserForm from './UserForm';
import UserList from './UsersList';

const Crud = () => {
    const [user, setUser] = useState({ name: "", email: "", address: "" });
    const { edituser } = useSelector((state) => state.operationReducer);

    const dispatch = useDispatch();

    const handleCreateUser = (user) => {
        let userOBj = {
            id: Date.now(),
            user: {
                name: user.name,
                email: user.email,
                address: user.address,
            }
        }
        dispatch(createUser(userOBj));
        setUser({ name: "", email: "", address: "" });

    }
    const handleDelete = (id) => {
        dispatch(deleteUser(id));
        setUser({ name: "", email: "", address: "" });
    }
    const handleEdit = (id) => {
        if (edituser !== undefined) {
            setUser(edituser[0].user);
        }
        dispatch(editUser(id))
    }

    const handleUpdate = (id, user) => {
        const updateObj = {
            id: id,
            user: {
                name: user.name,
                email: user.email,
                address: user.address
            }
        }

        dispatch(updateUser(updateObj));
        setUser({ name: "", email: "", address: "" });
    }
    const handleUser = (e, user) => {
        e.preventDefault();
        if (edituser === undefined) {
            handleCreateUser(user);
        } else {
            handleUpdate(edituser[0].id, user)
        }
    }
    const handlesetUser = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value })
    }
    return (
        <div className='main-crud-div'>
            <h1>CRUD APP</h1>
            <UserForm user={user} handleUser={handleUser} handlesetUser={handlesetUser} />
            <UserList handleDelete={handleDelete} handleEdit={handleEdit} />

        </div>
    )
}

export default Crud
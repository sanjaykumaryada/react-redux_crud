import React, { createContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUser, editUser, createUser } from '../redux/UserCrud_APP/action';
import UserForm from './UserForm';
import UserList from './UsersList';
export const UserContext = createContext({});
const Crud = () => {
    const [user, setUser] = useState({ name: "", email: "", address: "" });
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState();
    const { edituser } = useSelector((state) => state.operationReducer);

    const dispatch = useDispatch();

    const handleCreateUser = (e) => {
        e.preventDefault();
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
        setEdit(true);
        setId(id);

    }

    const handleUpdate = () => {
        const updateObj = {
            id: id,
            user: {
                name: user.name,
                email: user.email,
                address: user.address
            }
        }

        dispatch(updateUser(updateObj));
        setEdit(false);
        setUser({ name: "", email: "", address: "" });
    }
    return (
        <div className='main-crud-div'>
            <h1>CRUD APP</h1>
            <UserContext.Provider value={{ user, setUser, edit }}>
                <UserForm handleUpdate={handleUpdate} handleCreateUser={handleCreateUser} />
                <UserList handleDelete={handleDelete} handleEdit={handleEdit} />
            </UserContext.Provider>
        </div>
    )
}

export default Crud
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser,  updateUser, editUser } from '../redux/UserCrud_APP/action';
import UserForm from './UserForm';
import UserList from './UsersList';
const Crud = () => {
    const [user, setUser] = useState({ name: "", email: "", address: "" });
    const [edit, setEdit]=useState(false);
    const [id, setid]=useState();
    const usersList = useSelector((state) => state.operationReducer);
    console.log(usersList);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUser(id));

    }
    const handleEdit = (id) => {
        const user=usersList.filter(user=>user.id===id)
        setEdit(true);
        setUser(user[0].user);
        setid(id);
    //  dispatch(editUser(id))
    
    }

    const handleUpdate=()=>{
        // const updateObj={
        //        id:Date.now(),
        //        user:{
        //         name:user.name,
        //         email:user.email,
        //         address:user.address
        //        }
        // }

        // dispatch(updateUser(updateObj));
        usersList.map((users=>users.id===id  ?(users.user=user):(null)));
        setEdit(false);
        setUser({ name:"", email:"",address:""});
    }
    return (
        <div className='main-crud-div'>
            <h1>CRUD APP</h1>
            <UserForm user={user} setUser={setUser} edit={edit}  handleUpdate={handleUpdate} />
            <UserList usersList={usersList} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </div>
    )
}

export default Crud
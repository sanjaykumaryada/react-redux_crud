import React from 'react'
import UserForm from './UserForm';
import UserList from './UsersList';
const Crud=()=>{
 
  return (
    <div className='main-crud-div'>
         <h1>CRUD APP</h1>
         <UserForm />
        <UserList  />
    </div>
  )
}

export default Crud
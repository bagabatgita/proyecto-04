import React from "react";
import UserCard from "./UserCard";
import "./styles/UserList.css"

const UserList = ({ users,pagination, deleteUsers,setDeleteMessage, setUpdatingUser, handleClickShowModal, handleClickShowModalDelete }) => {
  return (
    <section className="userList">
      
      {pagination().map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUsers={deleteUsers}
          setUpdatingUser={setUpdatingUser}
          setDeleteMessage = {setDeleteMessage}
          handleClickShowModal= {handleClickShowModal}
          handleClickShowModalDelete = {handleClickShowModalDelete}
          
        />
        
        
      ))}
    </section>
  );
};

export default UserList;

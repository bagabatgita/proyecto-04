import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ModalDelete from "./components/ModalDelete";
import ModalForm from "./components/ModalForm";
import ModalMessage from "./components/ModalMessage";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import UserList from "./components/UserList";
import { numbersPage } from './utils/handlePagination'


const BASE_URL = "https://users-crud.academlo.tech/"
const USERS_PERPAGE =8;

function App() {

  const [users, setUsers] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowModalDelete, setIsShowModalDelete] = useState(false)
  const [isShowModalMessage, setIsShowModalMessage] = useState(false)
  const [updatingUser, setUpdatingUser] = useState()
  const [deleteMessage, setDeleteMessage] = useState()
  const [message, setMessage] = useState()
  const [page, setPage] = useState(1)
 

  const handleClickShowModal = () => {
    setIsShowModal((isShowModal)=> !isShowModal )
  }

  const handleClickShowModalDelete = () => {
    setIsShowModalDelete((isShowModalDelete)=> !isShowModalDelete)
  }

  const handleClickShowModalMessage = () => {
    setIsShowModalMessage((isShowModalMessage)=> !isShowModalMessage)
  }

  const pagination= () => {
   
    const maxLimit = page * USERS_PERPAGE;
    const minLimit = maxLimit - USERS_PERPAGE;
  
    const newResident= users.slice(minLimit,maxLimit);
    return newResident

  }

  

  const createUser = (data) => {
    axios.post(`${BASE_URL}users/`, data)
     .then (()=> {
      getAllUsers()
      handleClickShowModal()
      
    })
     .catch ((err)=>console.log(err))

  }

  const getAllUsers = () => {
    axios.get(`${BASE_URL}users/`)
     .then ((res)=> setUsers(res.data))
     .catch ((err)=>console.log(err))

  }

  const deleteUsers = (id) => {
    axios.delete(`${BASE_URL}users/${id}/`)
    .then (()=> {
      getAllUsers()
      handleClickShowModalDelete()
      handleClickShowModalMessage()
      setMessage('User Delete Complete!!')
      
    })
    .catch ((err)=>console.log(err))
  }

  const updateUser = (data, id) => {
    axios.patch(`${BASE_URL}users/${id}/` , data)
    .then (()=> {
      getAllUsers()
      handleClickShowModal()
      handleClickShowModalMessage()
      setMessage('User Update Complete!!')

    })
    .catch ((err)=>console.log(err)) 
  }

  useEffect(()=>{
    getAllUsers()

  },[])

  return (
    <div className="App" >
      <Navbar handleClickShowModal={handleClickShowModal}/>

      <ModalForm 
       handleClickShowModal={handleClickShowModal}
       isShowModal={isShowModal}
       createUser = {createUser}
       updatingUser = {updatingUser}
       updateUser= {updateUser}
       setUpdatingUser= {setUpdatingUser}
       />
       <ModalDelete 
       deleteUsers={deleteUsers} 
       isShowModalDelete={isShowModalDelete} 
       handleClickShowModalDelete= {handleClickShowModalDelete} 
       setDeleteMessage= {setDeleteMessage}
       deleteMessage = {deleteMessage}
       />
       <ModalMessage 
       handleClickShowModalMessage={handleClickShowModalMessage}
       message={message}
       isShowModalMessage={isShowModalMessage}
       />
      <Pagination numbersPage={numbersPage} setPage={setPage} users={users} USERS_PERPAGE={USERS_PERPAGE} page={page}/>
      
      <UserList 
      users={users} 
      deleteUsers={deleteUsers} 
      setUpdatingUser={setUpdatingUser} 
      setDeleteMessage={setDeleteMessage}
      handleClickShowModal={handleClickShowModal}
      handleClickShowModalDelete={handleClickShowModalDelete}
      message={message}
      pagination={pagination}
      />
      <Pagination numbersPage={numbersPage} setPage={setPage} users={users} USERS_PERPAGE={USERS_PERPAGE} page={page}/>
    </div>
  );
}

export default App;

import React from 'react'
import "./styles/UseCard.css"

const UserCard = ({user, setUpdatingUser,setDeleteMessage,handleClickShowModal, handleClickShowModalDelete}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user) 
    handleClickShowModal()
  }

  const handleClickDelete = () => {
    setDeleteMessage(user) 
    handleClickShowModalDelete()
  }

  return (
   
        <article className='card'>
          <h3 className='card__title'>{user.first_name} {user.last_name}</h3>
          <hr />
          <ul className='card__list'>
            <li><span>Email:</span></li>
            <li>{user.email}</li>
            <li><span>Birthday:</span></li>
            <li><i className='bx bx-gift'></i>{user.birthday}</li>
          </ul>
          <hr />
          <footer className='card__footer'>
            <button className='card__btnt' onClick={handleClickDelete}><i className='bx bx-trash color=white'></i></button>
            <button className='card__btne'onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>
          </footer>
        </article>
     
  )
}

export default UserCard
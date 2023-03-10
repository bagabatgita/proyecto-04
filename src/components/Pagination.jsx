import React from 'react'
import './styles/Pagination.css'

const Pagination = ({numbersPage,setPage,users,USERS_PERPAGE,page}) => {
  return (
    <ul className='pagination'>
      
    {
      numbersPage(users,USERS_PERPAGE).map(numbersPage => <li onClick={()=> setPage(numbersPage)} key={numbersPage} 
      className={page === numbersPage ? `page-active` : `page-number`}>{numbersPage}</li>)
     
    }
    
    
  </ul>
  )
}

export default Pagination
import React from 'react'
import "./styles/ModalMessage.css"

const ModalMessage = ({message,isShowModalMessage,handleClickShowModalMessage}) => {

    const handleClickClose = () =>{
        handleClickShowModalMessage()
        
      }

  return (
    <section className={`modalMessage ${isShowModalMessage ? "activeFormMessage" : ""}`}>
     <form  className='modalMessage__form' action="">
    
      <i onClick={handleClickClose} className="modalForm__x bx bx-x"></i>
      <div className="modalMessage__div">
        <label className="modalMessage__label" htmlFor="">
        {message}
        </label>
        
      </div>
      <button onClick={handleClickClose}> OK</button>
    </form>
      
  
  </section>
  )
}

export default ModalMessage
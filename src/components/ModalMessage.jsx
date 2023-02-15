import React from 'react'
import "./styles/ModalMessage.css"

const ModalMessage = ({message,isShowModalMessage,handleClickShowModalMessage}) => {

    const handleClickClose = () =>{
        handleClickShowModalMessage()
        
      }

  return (
    <section className={`modalMessage ${isShowModalMessage ? "activeFormMessage" : ""}`}>
     <div  className='modalMessage__form'>
    
      <i onClick={handleClickClose} className="modalForm__x bx bx-x"></i>
      <div className="modalMessage__div">
        <label className="modalMessage__label" htmlFor="">
        {message}
        </label>
        
      </div>
      <button type="submit" onClick={handleClickClose}> OK</button>
    </div>
      
  
  </section>
  )
}

export default ModalMessage

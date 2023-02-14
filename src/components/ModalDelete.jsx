import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/ModalDelete.css";

const ModalDelete = ({
  isShowModalDelete,
  handleClickShowModalDelete, deleteUsers,deleteMessage
  
}) => {

   

 const { handleSubmit} = useForm()

    
  const submit = () => {
      deleteUsers(deleteMessage.id)
  };

  const handleClickClose = () => {
    handleClickShowModalDelete();
   
  };

  useEffect(()=>{
   
  }, [deleteMessage]);


  return (
    <section className={`modalDelete ${isShowModalDelete ? "activeForm" : ""}`}>
      <form onSubmit={handleSubmit(submit)}  className="modaldelete__form">
        <h3 className="modalDelete__title">Message Confirmation</h3>
        <i onClick={handleClickClose} className="modalForm__x bx bx-x"></i>
        <div className="modalDelete__div">
          <label className="modalDelete__label" htmlFor="">
            Are You Sure Delete?
          </label>
          
        </div>
        <button>Si</button>
        
      </form>
    </section>
  );
};

export default ModalDelete;

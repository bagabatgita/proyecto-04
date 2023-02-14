import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Alert = () => {
  return (
    <div className='custom-ui'>
        <h1>Are you sure?</h1>
        <p>You want to delete this file?</p>
        <button onClick={onClose}>No</button>
        <button
          onClick={() => {
            this.handleClickDelete();
            onClose();
          }}
        >
          Yes, Delete it!
        </button>
      </div>
  )
}

export default Alert
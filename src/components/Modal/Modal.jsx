import './Modal.style.css'

export default function Modal({ children, handleModal }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <span className='close-modal' onClick={handleModal} >&times;</span>
        {children}
      </div>
    </div>
  )
}

import './Modal.style.css'

export default function Modal({ children, handleModal }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2 className='no-cards'>No like Cards</h2>
        <span className='close-modal' onClick={handleModal} >&times;</span>
        {children}
      </div>
    </div>
  )
}

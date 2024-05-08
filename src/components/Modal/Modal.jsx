import './Modal.scss';

export default function Modal({isOpen, onClick}) {
    if (!isOpen) return null;
  return (
    <div className="modal">
        <div className="modal-content">
            <h2 className="modal-title">Дякую!</h2>
            <div>
                <p className="modal-text">Найближчим часом ми звяжемося з вами</p>
            </div>
            <button className="modal-close" onClick={onClick}>Закрити</button>
        </div>
    </div>
  )
}

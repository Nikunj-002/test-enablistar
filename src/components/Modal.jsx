import { createPortal } from "react-dom";
function Modal({ children, onClose }) {
  return createPortal(
    <>
      <div className="Overlay" onClick={onClose} />
      <div className="Modal">
        <div>{children}</div>
      </div>
    </>,
    document.body
  );
}

export default Modal;

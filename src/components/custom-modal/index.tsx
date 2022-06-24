import React, { useEffect, useRef } from "react";
import "./index.css";

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }: any) => {
  const modalRef: any = useRef(null);

  useEffect(() => {
    if (show) {
      modalRef.current.classList.add("visible");
    } else {
      modalRef.current.classList.remove("visible");
    }
  }, [show]);

  return (
    <>
      <div ref={modalRef} className={`modal__wrap`}>
        <div style={modalStyle} className={"modal"}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;

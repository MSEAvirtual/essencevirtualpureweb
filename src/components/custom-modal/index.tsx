import React, { useEffect, useRef } from 'react';
import { Button } from 'semantic-ui-react';
// import Button from '../button/Button';
// import CloseIcon from '../CloseIcon';
import './index.css';

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }:any) => {
    const modalRef:any = useRef(null);
    useEffect(
        () => {
            if (show) {
                modalRef.current.classList.add("visible");
            }
            else {
                modalRef.current.classList.remove("visible");
            }
        },
        [
            show
        ]
    );
    return (
        <React.Fragment>
            <div ref={modalRef} className={`modal__wrap`}>
                <div style={modalStyle} className={"modal"}>
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Modal;
import React from 'react'
import "./index.css";
import { Modal } from 'semantic-ui-react'

const ModalLayout = ({ Component, show, setOpen, allowClose=true, width="1000px" }:any) => {
    console.log(show)
    return (
      <Modal
        closeIcon={allowClose}
        onClose={() => allowClose ? setOpen(false) : null }
        onOpen={() => setOpen(true)}
        open={show}
        className="custom-modal"
        style={{ width }}
      >{Component}</Modal>
    )
}

export default ModalLayout;
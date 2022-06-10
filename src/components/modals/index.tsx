import React from 'react'
import "./index.css";
import { Modal } from 'semantic-ui-react'

// const ModalLayout = ({ Component, show, setOpen, allowClose=true }:any) => {
//     console.log(show)
//     return (
//       <Modal
//         closeIcon={allowClose}
//         onClose={() => allowClose ? setOpen(false) : null }
//         onOpen={() => setOpen(true)}
//         open={show}
//         className="custom-modal"
//       >{Component}</Modal>
//     )
// }
const getClassName = (name: string) => {
  let className= "custom-modal";
  return name ? name + "-" +className : className;
}

const ModalLayout = ({ Component, allowClose, setOpen, show, modalName }:any) => {
  return(
    <Modal
      closeIcon={allowClose}
      onClose={() => allowClose ? setOpen(false) : null }
      onOpen={() => setOpen(true)}
      open={show}
      className={getClassName(modalName)}
    >{Component}</Modal>
  )
}

export default ModalLayout;
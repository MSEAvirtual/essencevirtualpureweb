import React from 'react'
import { Modal } from 'semantic-ui-react'

const ModalLayout = ({ Component, show, setOpen }:any) => {
    console.log(show)
    return (
      <Modal
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={show}
      >{Component}</Modal>
    )
}

export default ModalLayout;
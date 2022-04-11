import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ModalLayout = ({ Component, show, }:any) => {
    const [open, setOpen] = React.useState(show)
  
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
      >
          <Component />
      </Modal>
    )
}

export default ModalLayout;
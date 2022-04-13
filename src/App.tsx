import React from "react";
import ModalLayout from "./components/modals";
import ARModalPopUp from "./components/modals/ARmodalPopUp";
import { Button } from 'semantic-ui-react'
import EStore from "./components/e-store";
// import PureWeb from "./pureweb";

const App = () => {
    const [component, setComponent] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);

    const setModalView = (component:any) => {
        setComponent(component);
        setShowModal(true);
    }
    return (
        <>
            <Button onClick={()=>setModalView(<ARModalPopUp />)}>Show AR Link</Button>
            <Button onClick={()=>setModalView(<EStore />)}>Shop CTA</Button>
            {/* <PureWeb /> */}
            <ModalLayout Component={component} show={showModal} setOpen={setShowModal}/>
        </>
    )
}

export default App;
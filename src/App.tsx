import React from "react";
import ModalLayout from "./components/modals";
import ARModalPopUp from "./components/modals/ARmodalPopUp";

const App = () => {
    return (
        <>
            <ModalLayout Component={<ARModalPopUp />} show={false} />
        </>
    )
}

export default App;
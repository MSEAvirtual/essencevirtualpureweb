// @ts-nocheck
import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import StreamApp from "./stream";
import EStore from "./components/storeView";
import FordPopUp from "./components/fordpopup";
import AuthModal from "./components/modals/AuthModal";
import RotateScreen from "./components/modals/rotate";
import Modal from "./components/custom-modal";
import stores from "./bobs.json";
import sponsorData from "./others.json";
import EnterModalView from "./components/enterModal";
import ARModalPopUp from "./components/modals/ARmodalPopUp";
import { isMobile } from 'react-device-detect';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [component, setComponent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    const AuthFuc = () => {
        setLoggedIn(true);
        closeModal();
    };

    const closeModal = () => {
        setComponent(null);
        setShowModal(false);
    };

    const AuthInitate = () => {
        if (!loggedIn) {
            setModalView(<AuthModal setAuth={AuthFuc} />, "auth")
        }
    };

    // useEffect(() => {
    //     AuthInitate();
    // }, []);

    const setModalView = (component: any, name: string, close = false) => {
        setComponent(component);
        setShowModal(true);
    };

    const openBUrl = (url) => {
        if (!url.includes("https://") && !url.includes("http://")) {
            url = "https://" + s?.business_url;
        }
        let a = document.createElement("a");
        if (isMobile) {
            a.target = "_parent";
        } else {
            a.target = "_blank";
        }
        a.href = url;
        a.click();
    };

    const HandleBoBPopUps = (id: any, type: string, data: any, resumFuc: func) => {
        const cAD = id - 1;
        const s = stores[cAD];
        const url = s?.business_url;
        // console.log(id, type, data, s)
        if (s && s.type === "direct") {
            openBUrl(url);
            closeModal();
            resumFuc && resumFuc();
        } else {
            pointerUnlockHack();
            const comp = <EStore storeData={s} data={id} closeModal={() => {
                closeModal();
                resumFuc();
            }} />
            setModalView(comp, "estore");
        }
    }

    const HandleFordPopUps = (id: any, type: string, data: any, resumFuc: func) => {
        const cAD = type;
        const fData = data.companyname ? sponsorData[data.companyname] : {};
        // find by cta id
        const rData = fData ? fData.filter((f) => f["cta_id"] === cAD) : [];
        const s = rData.length > 0 ? rData[0] : {};
        let url = s?.url;
        if (s && s.type === "direct") {
            openBUrl(url);
            closeModal();
            resumFuc && resumFuc();
        } else {
            pointerUnlockHack();
            const comp = <FordPopUp storeData={s} data={type} company={data.companyname} closeModal={() => {
                closeModal();
                resumFuc();
            }} />
            setModalView(comp, "ford");
        }
    }

    const HandleEnterModal = (id: any, type: string, data: any, resumFuc: func) => {
        const comp = <EnterModalView data={type} company={data.companyname} closeModal={() => {
            closeModal();
            resumFuc();
        }} />
        setModalView(comp, "enter-modal");
    }

    const HandleARModal = (id: any, type: string, data: any, resumFuc: func) => {
        const comp = <ARModalPopUp data={type} company={data.companyname} closeModal={() => {
            closeModal();
            resumFuc(); 
        }} />
        setModalView(comp, "enter-modal");
    }

    const HandlePosterModal = (id: any, type: string, data: any, resumFuc: func) => {
        const url = "https://www.essence.com/efoc22appdownload/";
        openBUrl(url);
        closeModal();
        resumFuc && resumFuc();
    }

    const pointerUnlockHack = () => {
        if (!isMobile) {
            var myWindow = window.open("", "MsgWindow", "width=1,height=1");
            myWindow.document.write("<script>window.close()</script>");
        }
    }
    
    const setEcomModalView = (id: any, type: string, data: any, resumFuc: any) => {

        if (type === "bob") {
            console.log("BOB")
            return HandleBoBPopUps(id, type, data, resumFuc);
        } else if (type === "enter-modal") {
            return HandleEnterModal(id, type, data, resumFuc);
        } else if (type === "ar"){
            pointerUnlockHack();
            return HandleARModal(id, type, data, resumFuc);
        }  else if (type === "poster"){
            return HandlePosterModal(id, type, data, resumFuc);
        } else if (type !== "bob") {
            console.log("NOT BOB")
            return HandleFordPopUps(id, type, data, resumFuc);
        }
        
    };

    return (
        <>
            <RotateScreen />
            <div id="view">
                <div className="nav-bar">
                    <img src="/site-logo.png" className="siteLogo" alt="site-logo" />
                </div>
                <StreamApp
                    ShowEModal={setEcomModalView}
                    onLaunch={() => { /* TODO: Pointer lock here */ }}
                    onResumePlay={() => { /* TODO: Pointer lock here */ }}
                />
                {/* <Button onClick={() => setEcomModalView(0, "poster", {"companyid":"0","content":"poster","style":"0","companyname":"essence"})}>Open CTA</Button> */}
            </div>
            <Modal show={showModal} >{component}</Modal>
        </>
    )
}

export default App;
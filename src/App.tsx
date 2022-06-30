import React, { useState } from "react";
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
    const [component, setComponent] = useState<JSX.Element | null>(null);
    const [showModal, setShowModal] = useState(false);
    
    const AuthFuc = () => {
        setLoggedIn(true);
        closeModal();
    };

    const closeModal = () => {
        setComponent(null);
        setShowModal(false);
    };

    const setModalView = (component: JSX.Element) => {
        setComponent(component);
        setShowModal(true);
    };

    const AuthInitate = () => {
        if (!loggedIn) {
            setModalView(<AuthModal setAuth={AuthFuc} />)
        }
    };

    // useEffect(() => {
    //     AuthInitate();
    // }, []);

    const openBUrl = (url: string) => {
        if (!url.includes("https://") && !url.includes("http://")) {
            url = "https://" + url;
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

    const HandleBoBPopUps = (id: any, resumFuc: () => void) => {
        const cAD = id - 1;
        const s = stores[cAD];
        const url = s?.business_url;
        // console.log(id, type, data, s)
        if (s && s.type === "direct") {
            openBUrl(url);
            closeModal();
            resumFuc();
        } else {
            pointerUnlockHack()
            const comp = <EStore storeData={s} data={id} closeModal={() => {
                closeModal();
                resumFuc();
            }} />
            setModalView(comp);
        }
    }

    interface MessageData {
        companyid: number,
        content: string,
        style: number,
        companyname: string
    }

    const HandleFordPopUps = (type: string, data: MessageData, resumFuc: () => void) => {
        const cAD = type;
        let companyName: 'ford' | 'att' | 'target' | 'coke'
        switch (data.companyname) {
            case 'ford':
            case 'att':
            case 'target':
            case 'coke':
                companyName = data.companyname
                break
            default:
                return
        }

        const fData: any = sponsorData[companyName];
        // find by cta id
        const rData = fData.filter((f: any) => f["cta_id"] === cAD);
        const s = rData.length > 0 ? rData[0] : {};
        let url = s?.url;
        if (s && s.type === "direct") {
            openBUrl(url);
            closeModal();
            resumFuc();
        } else {
            pointerUnlockHack()
            const comp = <FordPopUp storeData={s} data={type} company={data.companyname} closeModal={() => {
                closeModal();
                resumFuc();
            }} />
            setModalView(comp);
        }
    }

    const HandleEnterModal = (type: string, data: any, resumFuc: () => void) => {
        const comp = <EnterModalView data={type} company={data.companyname} closeModal={() => {
            closeModal();
            resumFuc();
        }} />
        setModalView(comp);
    }
    
    const HandleARModal = (type: string, data: any, resumFuc: () => void) => {
        pointerUnlockHack()
        const comp = <ARModalPopUp data={type} company={data.companyname} closeModal={() => {
            closeModal();
            resumFuc(); 
        }} />
        setModalView(comp);
    }

    const HandlePosterModal = (resumFuc: () => void) => {
        const url = "https://www.essence.com/efoc22appdownload/";
        openBUrl(url);
        closeModal();
        resumFuc();
    }

    // does not work in browsers that block pop-ups
    const pointerUnlockHack = () => {
        if (!isMobile) {
            var myWindow = window.open("", "MsgWindow", "width=1,height=1");
            if (myWindow) {
                myWindow.document.write("<script>window.close()</script>");
            }
        }
    }

    const setEcomModalView = (id: any, type: string, data: any, resumFuc: any) => {
        if (type === "bob") {
            return HandleBoBPopUps(id, resumFuc);
        } else if (type === "enter-modal") {
            return HandleEnterModal(type, data, resumFuc);
        } else if (type === "ar"){
            return HandleARModal(type, data, resumFuc);
        }  else if (type === "poster"){
            return HandlePosterModal(resumFuc);
        } else if (type !== "bob") {
            return HandleFordPopUps(type, data, resumFuc);
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
                />
            </div>
            <Modal
                show={showModal}
                modalStyle={component && component.type.name === 'ARModalPopUp' && isMobile ? {
                    transform: 'scale(1)'
                } : {}}>
                    {component!}
            </Modal>
        </>
    )
}

export default App;
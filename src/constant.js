

export const checkMobile = () => {
    const isMobile= /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.location.assign("https://metamask.app.link/dapp/"+window.location.host)
        return { success: false, data:null, kyc:false, msg:'Open Dappy in MetaMask App' };
    }else{
        return { success: false, data:null, kyc:false, msg:'Metamask is not installed in browser' };
    }
}
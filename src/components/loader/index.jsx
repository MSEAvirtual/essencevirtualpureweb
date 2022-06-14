import React from "react";
import "./index.css";

const LoaderChartView = ({ msg, loading=true}) => {
  return (
    <div
    style={{
      display: 'flex',
      height: '100%',
      flexDirection: "column",
      overflow: 'none',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="loadingLogo">
        <img src="/loadinglogo.png" className="loadingLogo" alt="site-logo" />  
      </div>
      {loading && <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>}
      <div className="loadingMsg">{msg}</div>
    </div>
  );
};

export default LoaderChartView;

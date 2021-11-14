import React from 'react'
import "./css/Popup.css";

function Popup(props) {

    return (props.trigger) ? (    
        <div className="popup">
        <div className="popup-inner">
            <button onClick={() => props.setTrigger(false)}  className="close-button">X</button>
            { props.children}
        </div>
    </div>
    ) :"";
}

export default Popup;
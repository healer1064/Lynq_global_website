import React, { useState } from 'react'
import { useNavigate  } from "react-router-dom";

const MyProject = () => {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/project/payment");
    }

    return (<div className="myproject">
        <div className="left-pane">
            <img alt="" src="/assets/svg/back-myproject.svg" />
        </div>
        <div className="right-pane">
            <p className="description">Reinventing the Flipbook - A Fun Coloring Flipbook</p>
            <p className="price">$785 pledged of $1,000</p>
            <div><img alt="" src="/assets/svg/clock.svg"/><span><b>2 days</b> to go</span></div>
            <button onClick={handleClick}>Back It</button>
        </div>
    </div>);
}

export default MyProject
import React, { useState } from 'react'

const MyProject = () => {
    return (<div className="myproject">
        <div className="left-pane">
            <img alt="" src="back-myproject.svg" />
        </div>
        <div className="right-pane">
            <p className="description">Reinventing the Flipbook - A Fun Coloring Flipbook</p>
            <p className="price">$785 pledged of $1,000</p>
            <div><img alt="" src="clock.svg"/><span><b>2 days</b> to go</span></div>
            <button>Back It</button>
        </div>
    </div>);
}

export default MyProject
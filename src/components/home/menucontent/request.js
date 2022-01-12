import React, { useState } from 'react'

const Request = () => {
    return (
        <div className="request">
            <div>
                <img src="assets/img/request-avatar.png"></img>
            </div>
            <div className="left-pane">
                <p> Get your personal video messages. See details by clicking on the button belows </p>
                <button> Request Video Answer </button>
            </div>
        </div>
    );
}

export default Request
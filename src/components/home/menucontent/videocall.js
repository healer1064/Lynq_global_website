import React, { useState } from 'react'
import { Link } from "react-router-dom";

const VideoCall = () => {
    return (
        <div className="call-pane">
            <div>
                <p className="description">Select the length and book a 1:1 video call with me</p>
                <div className='btn-group-min'>
                    <div className='btn-min'>15 min</div>
                    <div className='btn-min'>30 min</div>
                    <div className='btn-min'>60 min</div>                
                </div>
                <Link to="/call/book" className='btn-book'>Book Now</Link>
            </div>
        </div>
    );
}

export default VideoCall
import React, { useState } from 'react'

const VideoCall = () => {
    return (
        <div className="call-pane">
            <div>
                <p className="description">Select the length and book a 1:1 video call with me</p>
                <div className='btn-group-min'>
                    <button className='btn-min'>15 min</button>
                    <button className='btn-min'>30 min</button>
                    <button className='btn-min'>60 min</button>                
                </div>
                <button className='btn-book'>Book Now</button>
            </div>
        </div>
    );
}

export default VideoCall